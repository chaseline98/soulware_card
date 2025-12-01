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

    console.log("FearScan API action:", action, "payload:", payload);

    if (action === "createSession") {
      const data = await createScanSession(payload);
      return NextResponse.json({ ok: true, data });
    }

    if (action === "saveResponse") {
      await saveResponse({
        sessionRecordId: payload.sessionRecordId,
        questionIndex: payload.questionIndex,
        dimensionKey: payload.dimensionKey,
        answer: payload.answer,
      });
      return NextResponse.json({ ok: true });
    }

    if (action === "saveInsight") {
      await saveInsight({
        sessionRecordId: payload.sessionRecordId,
        phase: payload.phase,
        title: payload.title,
        readout: payload.readout,
        interpretation: payload.interpretation,
        takeaway: payload.takeaway,
        pull: payload.pull,
      });
      return NextResponse.json({ ok: true });
    }

    if (action === "completeSession") {
      await completeScanSession(payload.sessionRecordId);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: "Unknown action" },
      { status: 400 }
    );
  } catch (err: any) {
    console.error("Fear Scan API error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
