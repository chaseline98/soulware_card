"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import ScanProgressBar from "@/components/ScanProgressBar";
import ScanCard from "@/components/ScanCard";
import PhaseCompleteCard from "@/components/PhaseCompleteCard";

import { ARENA_ATOMS, SCAN_STAGES, buildFullScan } from "@/atoms";
import { generateEarlyInsight } from "@/utils/earlyInsight";
import { generateBlockTwoInsight } from "@/utils/blockTwoEngine";

const QUESTIONS = buildFullScan();
const TOTAL_QUESTIONS = QUESTIONS.length;
const GROUP_COUNT = SCAN_STAGES.length;
const GROUP_SIZE =
  GROUP_COUNT > 0 ? Math.max(1, Math.round(TOTAL_QUESTIONS / GROUP_COUNT)) : 5;

const GROUP_LABELS = SCAN_STAGES.map((stage) => ARENA_ATOMS[stage.arena].label);

// CLIENT → API ROUTE WRAPPER
async function callAPI(action: string, payload: any) {
  const res = await fetch("/api/fear-scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, payload }),
  });

  if (!res.ok) {
    console.error("API error:", await res.text());
    throw new Error("API call failed");
  }

  return res.json();
}

export default function ScanRunPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const arena = (searchParams.get("arena") || "Life") as string;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [responses, setResponses] = React.useState<number[]>([]);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [pendingIndex, setPendingIndex] = React.useState<number | null>(null);
  const [feedbackGroupIndex, setFeedbackGroupIndex] = React.useState<number | null>(null);
  const [phaseInsight, setPhaseInsight] = React.useState<any>(null);
  const [sessionRecordId, setSessionRecordId] = React.useState<string | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];

  // CREATE SESSION WHEN SCAN STARTS
  React.useEffect(() => {
    const start = async () => {
      const result = await callAPI("createSession", { loopZone: arena });
      setSessionRecordId(result.data.sessionRecordId);
    };
    start();
  }, [arena]);

  const handleAnswer = async (value: number) => {
    const updated = [...responses];
    updated[currentIndex] = value;
    setResponses(updated);

    // SAVE RESPONSE
    if (sessionRecordId) {
      await callAPI("saveResponse", {
        sessionRecordId,
        questionIndex: currentIndex + 1,
        dimensionKey:
          currentQuestion.dimension ||
          currentQuestion.dimensionKey ||
          "",
        answer: value,
      });
    }

    const nextIndex = currentIndex + 1;

    // END SCAN
    if (nextIndex >= TOTAL_QUESTIONS) {
      if (sessionRecordId) {
        await callAPI("completeSession", { sessionRecordId });
      }
      const params = new URLSearchParams();
      params.set("arena", arena);
      router.push(`/scan/complete?${params.toString()}`);
      return;
    }

    // PHASE CHANGE POINT
    if (nextIndex % GROUP_SIZE === 0) {
      const groupIdx = Math.floor((nextIndex - 1) / GROUP_SIZE);

      // -----------------------
      // BLOCK 1 INSIGHT (Phase 1)
      // -----------------------
      if (groupIdx === 0) {
        const block1 = updated.slice(0, GROUP_SIZE);
        const insight = generateEarlyInsight(arena, block1);

        setPhaseInsight(insight);

        const body = insight.body || "";
        const lines = body.split("\n").filter(Boolean);
        const readout = lines[0] || "";
        const interpretation = lines.slice(1).join("\n");

        if (sessionRecordId) {
          await callAPI("saveInsight", {
            sessionRecordId,
            phase: 1,
            title: insight.title,
            readout,
            interpretation,
            takeaway:
              "Reflexes run on autopilot. Courage begins the moment you choose a move your wiring didn’t predict.",
            pull: insight.pull,
          });
        }
      }

      // -----------------------
      // BLOCK 2 INSIGHT (Phase 2)
      // -----------------------
      if (groupIdx === 1) {
        const block1 = updated.slice(0, GROUP_SIZE);
        const block2 = updated.slice(GROUP_SIZE, GROUP_SIZE * 2);

        const insight = generateBlockTwoInsight({
          loopZone: arena,
          firstBlockScores: block1,
          secondBlockScores: block2,
        });

        setPhaseInsight(insight);

        if (sessionRecordId) {
          await callAPI("saveInsight", {
            sessionRecordId,
            phase: 2,
            title: insight.title,
            readout: insight.readout,
            interpretation: insight.interpretation,
            takeaway: insight.takeaway,
            pull: insight.pull,
          });
        }
      }

      setFeedbackGroupIndex(groupIdx);
      setPendingIndex(nextIndex);
      setShowFeedback(true);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleFeedbackContinue = () => {
    setShowFeedback(false);
    if (pendingIndex !== null) {
      setCurrentIndex(pendingIndex);
      setPendingIndex(null);
    }
  };

  return (
    <PageBackground>
      <AppHeader />
      <main className="px-4 py-10 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="mb-6 text-xs uppercase tracking-[0.25em] text-[#2C2C25]/60">
            1.0 // Fear Response Scan
          </div>

          <ScanProgressBar currentIndex={currentIndex} />

          {showFeedback && feedbackGroupIndex !== null ? (
            <PhaseCompleteCard
              phaseNumber={feedbackGroupIndex + 1}
              arenaLabel={GROUP_LABELS[feedbackGroupIndex]}
              nextArenaLabel={
                GROUP_LABELS[
                  Math.min(
                    feedbackGroupIndex + 1,
                    GROUP_LABELS.length - 1
                  )
                ]
              }
              insight={phaseInsight}
              onContinue={handleFeedbackContinue}
            />
          ) : (
            <ScanCard
              arenaLabel={arena}
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </main>
    </PageBackground>
  );
}
