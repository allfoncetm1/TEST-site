import { NextResponse } from "next/server";

type LeadPayload = {
  roomType?: string;
  area?: number;
  levelType?: string;
  material?: string;
  name?: string;
  phone?: string;
  city?: string;
  contactTime?: string;
  estimate?: { low: number; high: number } | null;
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { error: "name-and-phone-required" },
      { status: 400 }
    );
  }

  // TODO: forward the lead to CRM / Telegram bot / email.
  console.log("[lead]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
