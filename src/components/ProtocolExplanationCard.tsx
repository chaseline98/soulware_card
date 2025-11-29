"use client";

import { SoulCard } from "@/components/SoulCard";

export default function ProtocolExplanationCard() {
  return (
    <SoulCard>
      {/* HEADER */}
      <p className="text-xs uppercase tracking-widest text-[#2C2C25]/60 mb-6">
        BREAKGLASS PROTOCOL // Fear Response Scan v1.0
      </p>
      {/* TITLE */}
      <h2 className="text-[28px] md:text-[36px] font-spaceGrotesk font-semibold text-[#2C2C25] leading-[1.15] mb-1 tracking-tight">
        Fear flashes fast.
      </h2>
      <h3 className="text-lg md:text-xl font-inter text-[#2C2C25]/70 mb-10">
        Then it hides behind your habits.
      </h3>
      {/* SECTION 1 */}
      <p className="text-[#2C2C25]/80 mb-4 leading-relaxed">
        You rarely notice the flash — it’s too quick, too quiet, too familiar.
      </p>
      <p className="text-[#2C2C25]/80 mb-4 leading-relaxed">
        You notice what it leaves behind: the hesitation that feels mature, the delay that feels
        disciplined, the overthinking that feels intelligent, the collaboration that feels
        responsible, the timing that feels strategic.
      </p>
      <p className="font-semibold text-[#2C2C25] italic mb-6">
        Fear doesn’t freeze you — it derails you, then <span className="not-italic italic">compliments your good
        judgment</span>.
      </p>
      <p className="text-[#2C2C25]/80 mb-12 leading-relaxed">
        It blends into your habits so cleanly you never think to question it. It hides inside what
        looks like your best thinking.
      </p>
      {/* PHASE DIVIDER */}
      <div className="my-10 border-t border-[#2C2C25]/10" />
      {/* SECTION 2 HEADER */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-[3px] bg-[#CC1A1A]/70 rounded-full mt-1" />
        <h4 className="font-oswald uppercase tracking-widest text-[#CC1A1A] text-sm md:text-base">
          01 // WHAT THIS SCAN ACTUALLY DOES
        </h4>
      </div>
      <p className="text-[#2C2C25]/80 mb-4 leading-relaxed">
        The Fear Response Scan tracks how your system quietly derails you when risk and possibility
        collide. <span className="font-semibold">This is the reflex this protocol was built to reveal.</span>
      </p>
      <ul className="list-disc ml-6 mb-12 text-[#2C2C25]/80 leading-relaxed">
        <li>Your primary fear reflex — the first move your system makes under pressure</li>
        <li>The disguise it usually wears — logic, timing, or “being responsible”</li>
        <li>Where it hits hardest — the decisions it keeps editing for you</li>
      </ul>
      {/* PHASE DIVIDER */}
      <div className="my-10 border-t border-[#2C2C25]/10" />
      {/* SECTION 3 HEADER */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-[3px] bg-[#CC1A1A]/70 rounded-full mt-1" />
        <h4 className="font-oswald uppercase tracking-widest text-[#CC1A1A] text-sm md:text-base">
          02 // HOW TO ANSWER
        </h4>
      </div>
      <p className="font-semibold text-[#2C2C25] mb-3">
        You’re not here to give the right answers — you’re here to catch your first impulse.
      </p>
      <p className="text-[#2C2C25]/80 mb-12 leading-relaxed">
        Answer quickly. Don’t polish. The scan is listening for the reflex, not the performance.
        You’ll move through a short sequence of prompts. Your nervous system responds before your
        logic does. That’s exactly what we want.
      </p>
      {/* SECTION 4 — THRESHOLD */}
      <p className="font-semibold text-[#2C2C25] italic tracking-wide mb-3">
        What you see next cannot be unseen.
      </p>
      <p className="text-[#2C2C25]/80 mb-12 leading-relaxed">
        After this, it’s not that fear is gone — it’s that you’ll know exactly how it’s been working
        on you.
      </p>
      {/* CTA */}
      <div className="w-full flex justify-center">
        <button
          className="
            bg-[#FF6B35]
            hover:bg-[#CC1A1A]
            text-white
            font-semibold
            px-10 py-4
            rounded-xl
            shadow-md
            hover:shadow-lg
            transition-all
            hover:scale-105
            relative
            after:absolute
            after:left-0
            after:bottom-0
            after:w-full
            after:h-[2px]
            after:bg-[#CC1A1A]/0
            hover:after:bg-[#CC1A1A]/70
            after:transition-all
            after:duration-200
          "
        >
          BEGIN SCAN
        </button>
      </div>
      <p className="text-center text-xs text-[#2C2C25]/50 mt-3 italic">
        The system will show you. You won’t forget.
      </p>
    </SoulCard>
  );
}
