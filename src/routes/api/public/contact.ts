import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().max(200).optional().default(""),
  email: z.string().email().max(200),
  phone: z.string().min(1).max(50),
  topic: z.string().max(100).optional().default(""),
  message: z.string().max(5000).optional().default(""),
});

const TO_EMAIL = "matrixintertrade2026@gmail.com";

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "Email service not configured" }, { status: 500 });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = Schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", details: parsed.error.flatten() },
            { status: 400 },
          );
        }
        const d = parsed.data;

        const esc = (s: string) =>
          s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const html = `
          <h2>คำขอใบเสนอราคาใหม่จากเว็บไซต์</h2>
          <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
            <tr><td><b>ชื่อ-นามสกุล</b></td><td>${esc(d.name)}</td></tr>
            <tr><td><b>บริษัท / องค์กร</b></td><td>${esc(d.company || "-")}</td></tr>
            <tr><td><b>อีเมล</b></td><td>${esc(d.email)}</td></tr>
            <tr><td><b>โทรศัพท์</b></td><td>${esc(d.phone)}</td></tr>
            <tr><td><b>หัวข้อที่สนใจ</b></td><td>${esc(d.topic || "-")}</td></tr>
            <tr><td valign="top"><b>รายละเอียด</b></td><td><pre style="white-space:pre-wrap;margin:0;font-family:inherit">${esc(d.message || "-")}</pre></td></tr>
          </table>
        `;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Matrix Intertrade <noreply@matrixintertrade.com>",
            to: [TO_EMAIL],
            reply_to: d.email,
            subject: `[คำขอใบเสนอราคา] ${d.name}${d.topic ? " - " + d.topic : ""}`,
            html,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Resend error:", res.status, errText);
          return Response.json({ error: "Failed to send email" }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
