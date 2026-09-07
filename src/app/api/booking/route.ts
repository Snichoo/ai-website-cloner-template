import { NextResponse } from "next/server";
import { Resend } from "resend";

interface BookingPayload {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  address?: string;
  message?: string;
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

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid enquiry." }, { status: 400 });
  }

  const fields = ["name", "phone", "email", "company", "address", "message"] as const;
  const values = payload as Record<string, unknown>;
  if (fields.some((field) => values[field] !== undefined && typeof values[field] !== "string")) {
    return NextResponse.json({ error: "Enquiry fields must be text." }, { status: 400 });
  }
  const body = values as BookingPayload;

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const address = (body.address ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone and email are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if ([name, phone, email, company, address].some((value) => value.length > 500) || message.length > 10000) {
    return NextResponse.json({ error: "Please shorten your enquiry and try again." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Company", company || "-"],
    ["Address", address || "-"],
    ["Message", message || "-"],
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
            <td style="padding: 6px 0; white-space: pre-wrap;">${escapeHtml(v)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New enquiry: ${name}${company ? ` - ${company}` : ""}`,
      replyTo: email,
      html,
      text,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send. Please call us or try again." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
