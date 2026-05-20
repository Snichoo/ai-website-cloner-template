import { NextResponse } from "next/server";
import { Resend } from "resend";

interface BookingPayload {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let body: BookingPayload;
  try {
    body = (await req.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone and email are required." },
      { status: 400 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Company", company || "—"],
  ];

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1C1C1C;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New booking request</h2>
      <table style="border-collapse: collapse; font-size: 14px;">
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #6B6B6B; font-weight: 600;">${escapeHtml(k)}</td>
            <td style="padding: 6px 0;">${escapeHtml(v)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New booking: ${name}${company ? ` — ${company}` : ""}`,
    replyTo: email,
    html,
    text,
  });

  if (error) {
    console.error("Resend send failed", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
