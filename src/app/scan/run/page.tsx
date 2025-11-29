"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import { ARENA_ATOMS, SCAN_STAGES, buildFullScan } from "@/atoms";
import ScanProgressBar from "@/components/ScanProgressBar";
import ScanCard from "@/components/ScanCard";

const QUESTIONS = buildFullScan();
const TOTAL_QUESTIONS = QUESTIONS.length;
const GROUP_COUNT = SCAN_STAGES.length;
const GROUP_SIZE = GROUP_COUNT > 0 ? Math.max(1, Math.round(TOTAL_QUESTIONS / GROUP_COUNT)) : 5;
const GROUP_LABELS = SCAN_STAGES.map((stage) => ARENA_ATOMS[stage.arena].label);

export default function ScanRunPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const arena = searchParams.get("arena") || "Life";

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [responses, setResponses] = React.useState<number[]>([]);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [pendingIndex, setPendingIndex] = React.useState<number | null>(null);
  const [feedbackGroupIndex, setFeedbackGroupIndex] = React.useState<number | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];

  const handleAnswer = (value: number) => {
    const newResponses = [...responses];
    newResponses[currentIndex] = value;
    setResponses(newResponses);

    const nextIndex = currentIndex + 1;

    if (nextIndex >= TOTAL_QUESTIONS) {
      const params = new URLSearchParams();
      params.set("arena", arena);
      router.push(`/scan/complete?${params.toString()}`);
      return;
    }

    if (nextIndex % GROUP_SIZE === 0) {
      const groupIdx = Math.floor((nextIndex - 1) / GROUP_SIZE);
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
            <div className="rounded-2xl border border-[#E3DCC4] bg-[#F8F3E8]/90 px-6 py-5">
              <p className="text-xs uppercase tracking-wide text-[#CC1A1A] mb-2">
                Phase {feedbackGroupIndex + 1} complete // {GROUP_LABELS[feedbackGroupIndex]}
              </p>
              <p className="text-sm text-[#2C2C25]/85 mb-4 leading-relaxed">
                We’ve captured how fear behaves in this layer. The pattern won’t be obvious yet, but the scan is
                already mapping your reflex. Next up: the{" "}
                <span className="font-semibold">
                  {GROUP_LABELS[Math.min(feedbackGroupIndex + 1, GROUP_LABELS.length - 1)]}
                </span>{" "}
                layer.
              </p>
              <button
                type="button"
                onClick={handleFeedbackContinue}
                className="
                  bg-[#FF6B35] hover:bg-[#CC1A1A] text-white font-semibold 
                  px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-all
                "
              >
                Continue
              </button>
            </div>
          ) : (
            <ScanCard arenaLabel={arena} question={currentQuestion} onAnswer={handleAnswer} />
          )}
        </div>
      </main>
    </PageBackground>
  );
}

