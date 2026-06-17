import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import {
  GOOGLE_TAG_MANAGER_ID_KEY,
  isValidGoogleTagManagerId,
  loadGoogleTagManagerSettings,
  loadRuntimeSettings,
  normalizeGoogleTagManagerId,
  saveRuntimeSettings,
  type RuntimeSetting,
} from "@/lib/admin-runtime-settings.server";

const SaveSchema = z.object({
  action: z.literal("save").optional().default("save"),
  googleTagManagerId: z.string().max(100).optional().default(""),
});

function jsonError(message: string, status: number, details?: unknown) {
  return Response.json({ error: message, details }, { status });
}

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

async function requireAdmin(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { response: jsonError("Unauthorized: missing Bearer token", 401) };
  }

  const token = authHeader.substring(7);
  const {
    data: { user },
    error,
  } = await supabaseAdmin.auth.getUser(token);
  const email = user?.email?.toLowerCase();
  const adminEmails = getAdminEmails();

  if (error || !email) {
    return { response: jsonError("Unauthorized: invalid session", 401) };
  }

  if (!adminEmails.includes(email)) {
    return { response: jsonError("Forbidden: this user is not an admin", 403) };
  }

  return { email };
}

async function trackingSettingsPayload() {
  const runtimeSettings = await loadRuntimeSettings([GOOGLE_TAG_MANAGER_ID_KEY]);
  const mergedSettings = await loadGoogleTagManagerSettings();
  const runtimeId = normalizeGoogleTagManagerId(
    runtimeSettings.get(GOOGLE_TAG_MANAGER_ID_KEY)?.value ?? "",
  );
  const envId = normalizeGoogleTagManagerId(
    process.env.GOOGLE_TAG_MANAGER_ID ?? process.env.GTM_ID ?? "",
  );
  const googleTagManagerId = runtimeId || envId;

  return {
    ok: true,
    source: mergedSettings.source,
    configured: Boolean(googleTagManagerId),
    googleTagManagerId,
    idSource: runtimeId ? "runtime" : envId ? "env" : "missing",
  };
}

export const Route = createFileRoute("/api/admin/tracking-settings")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const admin = await requireAdmin(request);
        if ("response" in admin) return admin.response;

        return Response.json(await trackingSettingsPayload());
      },
      POST: async ({ request }) => {
        const admin = await requireAdmin(request);
        if ("response" in admin) return admin.response;

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return jsonError("Invalid JSON body", 400);
        }

        const parsed = SaveSchema.safeParse(body);
        if (!parsed.success) {
          return jsonError("Invalid tracking settings payload", 400, parsed.error.flatten());
        }

        const nextId = normalizeGoogleTagManagerId(parsed.data.googleTagManagerId);
        if (nextId && !isValidGoogleTagManagerId(nextId)) {
          return jsonError("GTM ID must use the format GTM-XXXX.", 400);
        }

        const rows: RuntimeSetting[] = [
          {
            key: GOOGLE_TAG_MANAGER_ID_KEY,
            value: nextId,
            is_secret: false,
          },
        ];

        try {
          await saveRuntimeSettings(rows);
        } catch (error) {
          return jsonError("Failed to save tracking settings.", 500, error);
        }

        return Response.json(await trackingSettingsPayload());
      },
    },
  },
});
