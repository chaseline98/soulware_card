"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SoulCard } from "@/components/SoulCard";

type Arena = "Work" | "Relationship" | "Life" | "Visibility" | "School";

type ArenaDef = {
  id: Arena;
  label: string;
  description: string;
  insight: string;
  accentBar: string;
  accentSelectedBg: string;
  accentSelectedBorder: string;
  accentPill: string;
};

const ARENAS: ArenaDef[] = [
  {
    id: "Work",
    label: "Work",
    description: "Where performance, pressure, and responsibility collide.",
    insight:
      "In the Work arena, fear often disguises itself as preparation, over-responsibility, or 'not yet ready.'",
    accentBar: "bg-[#D29B34]",
    accentSelectedBg: "bg-[#FFF7E9]",
    accentSelectedBorder: "border-[#D29B34]",
    accentPill: "text-[#D29B34]",
  },
  {
    id: "Relationship",
    label: "Relationship",
    description: "Where belonging, closeness, and communication get tested.",
    insight:
      "In the Relationship arena, fear shows up as people-pleasing, silence, overthinking, and emotional caution.",
    accentBar: "bg-[#D9666F]",
    accentSelectedBg: "bg-[#FDF0F2]",
    accentSelectedBorder: "border-[#D9666F]",
    accentPill: "text-[#D9666F]",
  },
  {
    id: "Life",
    label: "Life",
    description: "Where identity, transition, and self-direction live.",
    insight:
      "In the Life arena, fear tends to run quietly in the background — like a soft filter shaping every choice.",
    accentBar: "bg-[#6B8F55]",
    accentSelectedBg: "bg-[#F2F7ED]",
    accentSelectedBorder: "border-[#6B8F55]",
    accentPill: "text-[#6B8F55]",
  },
  {
    id: "Visibility",
    label: "Visibility",
    description: "Where being seen feels like risk.",
    insight:
      "In the Visibility arena, fear loves to impersonate strategy — staying in 'refinement mode' instead of stepping out.",
    accentBar: "bg-[#CC1A1A]",
    accentSelectedBg: "bg-[#FDEDEC]",
    accentSelectedBorder: "border-[#CC1A1A]",
    accentPill: "text-[#CC1A1A]",
  },
  {
    id: "School",
    label: "School",
    description: "Where evaluation and expectation meet.",
    insight:
      "In the School arena, fear often shows up as pressure to perform, avoid mistakes, and look impressive.",
    accentBar: "bg-[#2C7FA8]",
    accentSelectedBg: "bg-[#E8F3FA]",
    accentSelectedBorder: "border-[#2C7FA8]",
    accentPill: "text-[#2C7FA8]",
  },
];

export default function LoopZoneSelectionCard() {
  const router = useRouter();
  const [selectedArena, setSelectedArena] = useState<Arena | null>(null);

  const handleContinue = () => {
    if (!selectedArena) return;
    const params = new URLSearchParams();
    params.set("arena", selectedArena);
    router.push(`/scan/run?${params.toString()}`);
  };

  const currentArena = ARENAS.find((a) => a.id === selectedArena) || null;

  return (
    <SoulCard>
      {/* PHASE HEADER */}
      <p className="text-xs uppercase tracking-[0.25em] text-[#2C2C25]/60 mb-3">
        0.1 // Choose Your Arena
      </p>
      {/* TITLE + SUBHEAD + DIVIDER */}
      <h2 className="text-center text-[32px] md:text-[40px] font-spaceGrotesk font-bold text-[#2C2C25] leading-[1.1] mb-4 tracking-tight">
        Where does fear do its real work?
      </h2>
      <p className="text-center text-sm md:text-base text-[#2C2C25]/70 mb-8 leading-relaxed max-w-2xl mx-auto">
        This scan adapts to the arena you select. Same questions. Different arena. Different map of your system.
      </p>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2C2C25]/10 to-transparent mb-8" />
      {/* ARENA OPTIONS — VERTICAL STACK */}
      <div className="flex flex-col gap-4 mb-8">
        {ARENAS.map((arena) => {
          const isSelected = arena.id === selectedArena;
          return (
            <button
              key={arena.id}
              type="button"
              onClick={() => setSelectedArena(arena.id)}
              className={[
                "w-full rounded-2xl border px-4 py-4 md:px-5 md:py-5 transition-all text-left flex gap-4 items-start",
                "hover:shadow-md hover:-translate-y-[1px]",
                isSelected ? `${arena.accentSelectedBorder} ${arena.accentSelectedBg}` : "border-[#E3DCC4] bg-white/80",
              ].join(" ")}
            >
              {/* Left protocol bar */}
              <div
                className={[
                  "w-[4px] rounded-full h-full mt-[2px]",
                  arena.accentBar,
                ].join(" ")}
              />
              <div className="flex-1">
                <p className="font-spaceGrotesk text-base md:text-lg uppercase tracking-wide mb-2 font-semibold text-[#2C2C25]">
                  {arena.label}
                </p>
                <p className="text-xs md:text-sm text-[#2C2C25]/80 leading-relaxed">{arena.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      {/* INSIGHT BOX */}
      {currentArena && (
        <div className="mb-10 rounded-xl px-5 py-4 border border-[#E3DCC4] bg-[#F8F3E8]/90 flex gap-3 items-start mx-auto">
          <div
            className={[
              "w-[4px] rounded-full h-full mt-[2px]",
              currentArena.accentBar,
            ].join(" ")}
          />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#2C2C25]/70 mb-1 font-oswald">
              Arena locked: {currentArena.label}
            </p>
            <p className="text-sm text-[#2C2C25]/85 leading-relaxed">{currentArena.insight}</p>
          </div>
        </div>
      )}
      {/* CTA */}
      <div className="w-full flex justify-center">
        <button
          onClick={handleContinue}
          disabled={!selectedArena}
          className={[
            "font-semibold px-10 py-4 rounded-xl shadow-md transition-all text-white text-base tracking-wide",
            "relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#CC1A1A]/0 after:transition-all after:duration-200",
            selectedArena
              ? "bg-[#FF6B35] hover:bg-[#CC1A1A] hover:shadow-lg hover:scale-105 hover:after:bg-[#CC1A1A]/70"
              : "bg-[#E0DED5] text-[#A3A093] cursor-not-allowed",
          ].join(" ")}
        >
          Begin Scan
        </button>
      </div>
      <p className="text-center text-xs text-[#2C2C25]/50 mt-3 italic">
        Locking your Arena tells the system where to look first.
      </p>
    </SoulCard>
  );
}
