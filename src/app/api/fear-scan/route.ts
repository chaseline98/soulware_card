import { NextResponse } from "next/server";
import {
  createScanSession,
  saveResponse,
  saveInsight,
  completeScanSession,
} from "@/utils/fearScanAirtable";

export async function POST(req: Request) {
  try {
    const { action, payload } = await req.json();

    if (action === "createSession") {
      const result = await createScanSession(payload);
      return NextResponse.json({ ok: true, data: result });
    }

    if (action === "saveResponse") {
      await saveResponse(payload);
      return NextResponse.json({ ok: true });
    }

    if (action === "saveInsight") {
      await saveInsight(payload);
      return NextResponse.json({ ok: true });
    }

    if (action === "completeSession") {
      await completeScanSession(payload.sessionRecordId);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, error: "Unknown action" }, { status: 400 });
  } catch (err: any) {
    console.error("Fear Scan API error:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
