import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const LINE_CHANNEL_ACCESS_TOKEN_KEY = "LINE_CHANNEL_ACCESS_TOKEN";
export const LINE_GROUP_ID_KEY = "LINE_GROUP_ID";
export const GOOGLE_TAG_MANAGER_ID_KEY = "GOOGLE_TAG_MANAGER_ID";

const ADMIN_RUNTIME_SETTINGS_TABLE = "admin_runtime_settings";

export type RuntimeSettingKey =
  | typeof LINE_CHANNEL_ACCESS_TOKEN_KEY
  | typeof LINE_GROUP_ID_KEY
  | typeof GOOGLE_TAG_MANAGER_ID_KEY
  | (string & {});

export type RuntimeSetting = {
  key: string;
  value: string | null;
  is_secret: boolean;
};

export type LineSettings = {
  lineChannelAccessToken: string;
  lineGroupId: string;
  source: "runtime" | "env" | "mixed" | "missing";
};

export type GoogleTagManagerSettings = {
  googleTagManagerId: string;
  source: "runtime" | "env" | "missing";
};

export function normalizeGoogleTagManagerId(value: string) {
  return value.trim().toUpperCase();
}

export function isValidGoogleTagManagerId(value: string) {
  return /^GTM-[A-Z0-9]+$/.test(normalizeGoogleTagManagerId(value));
}

export function maskSecret(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const tail = trimmed.slice(-4);
  return `••••${tail}`;
}

export async function loadRuntimeSettings(keys: RuntimeSettingKey[]) {
  try {
    const { data, error } = await supabaseAdmin
      .from(ADMIN_RUNTIME_SETTINGS_TABLE)
      .select("key,value,is_secret")
      .in("key", keys);

    if (error) throw error;

    return new Map(
      (data ?? []).map((row) => [
        String(row.key),
        {
          key: String(row.key),
          value: typeof row.value === "string" ? row.value : null,
          is_secret: row.is_secret === true,
        },
      ]),
    );
  } catch (error) {
    console.warn("[settings] Failed to load runtime settings; falling back to env.", error);
    return new Map<string, RuntimeSetting>();
  }
}

export async function saveRuntimeSettings(settings: RuntimeSetting[]) {
  const rows = settings.map((setting) => ({
    key: setting.key,
    value: setting.value,
    is_secret: setting.is_secret,
  }));

  const { error } = await supabaseAdmin
    .from(ADMIN_RUNTIME_SETTINGS_TABLE)
    .upsert(rows, { onConflict: "key" });

  if (error) throw error;
}

export async function loadLineSettings(): Promise<LineSettings> {
  const settings = await loadRuntimeSettings([LINE_CHANNEL_ACCESS_TOKEN_KEY, LINE_GROUP_ID_KEY]);

  const runtimeToken = settings.get(LINE_CHANNEL_ACCESS_TOKEN_KEY)?.value?.trim() ?? "";
  const runtimeGroupId = settings.get(LINE_GROUP_ID_KEY)?.value?.trim() ?? "";
  const envToken = process.env.LINE_CHANNEL_ACCESS_TOKEN?.trim() ?? "";
  const envGroupId = process.env.LINE_GROUP_ID?.trim() ?? "";

  const lineChannelAccessToken = runtimeToken || envToken;
  const lineGroupId = runtimeGroupId || envGroupId;

  let source: LineSettings["source"] = "missing";
  if (runtimeToken && runtimeGroupId) source = "runtime";
  else if (!runtimeToken && !runtimeGroupId && envToken && envGroupId) source = "env";
  else if (lineChannelAccessToken || lineGroupId) source = "mixed";

  return {
    lineChannelAccessToken,
    lineGroupId,
    source,
  };
}

export async function loadGoogleTagManagerSettings(): Promise<GoogleTagManagerSettings> {
  const settings = await loadRuntimeSettings([GOOGLE_TAG_MANAGER_ID_KEY]);

  const runtimeId = normalizeGoogleTagManagerId(
    settings.get(GOOGLE_TAG_MANAGER_ID_KEY)?.value ?? "",
  );
  const envId = normalizeGoogleTagManagerId(
    process.env.GOOGLE_TAG_MANAGER_ID ?? process.env.GTM_ID ?? "",
  );

  const googleTagManagerId = runtimeId || envId;

  return {
    googleTagManagerId,
    source: runtimeId ? "runtime" : envId ? "env" : "missing",
  };
}
