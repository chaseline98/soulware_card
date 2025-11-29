"use client";

import { useRouter } from "next/navigation";
import { SoulCard } from "@/components/SoulCard";
import BreakglassVisual from "@/components/BreakglassVisual";

export default function ModuleIntroCard() {
  const router = useRouter();

  return (
    <SoulCard>
      <BreakglassVisual />
      <div className="w-full flex justify-center mb-4">
        <button
          onClick={() => router.push("/protocol")}
          className="
            bg-[#FF6B35]
            hover:bg-[#CC1A1A]
            text-white
            font-semibold
            px-10
            py-4
            rounded-xl
            shadow-md
            hover:shadow-lg
            transition-all
            hover:scale-105
            text-lg
            tracking-wide
          "
        >
          BREAK THE GLASS
        </button>
      </div>
      <p className="text-center text-xs text-[#2C2C25]/60 mt-3 italic tracking-wide">
        What you see next cannot be unseen.
      </p>
    </SoulCard>
  );
}
