import React from "react";

interface InsightData {
  title: string;
  body: string;
  pull: string;
}

interface Props {
  phaseNumber: number;
  arenaLabel: string;
  nextArenaLabel: string;
  insight?: InsightData | null;
  onContinue: () => void;
}

export default function PhaseCompleteCard({
  phaseNumber,
  arenaLabel,
  nextArenaLabel,
  insight,
  onContinue,
}: Props) {
  const body = insight?.body || "";
  const lines = body.split("\n").filter(Boolean);
  const readout = lines[0] || "";
  const interpretation = lines.slice(1).join("\n");

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-[0_26px_70px_rgba(0,0,0,0.25)] bg-[#FEF6EC] animate-panelFade">
      <div className="absolute inset-0 bg-white/82 backdrop-blur-[14px]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/grid.svg')] bg-repeat pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent animate-scanline opacity-80" />
      <div className="absolute left-0 top-0 h-full w-[12px] bg-gradient-to-b from-[#FF6B35] to-[#E85E2C] shadow-[inset_0_0_18px_rgba(0,0,0,0.35)]" />
      <div className="relative px-10 py-14">
        <div className="text-[11px] uppercase tracking-[0.26em] text-[#FF6B35] mb-6">
          Phase {phaseNumber} Complete // {arenaLabel}
        </div>
        <h3 className="text-[28px] font-semibold text-[#262420] leading-tight tracking-tight mb-8">
          {insight?.title}
        </h3>
        <div className="mb-6 rounded-2xl border border-[#E0CEB2] bg-[#E0CEB2]/20 px-6 py-6 shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#857761] mb-2">
            Phase {phaseNumber} Readout
          </div>
          <p className="text-[15px] leading-relaxed text-[#262420]">{readout}</p>
        </div>
        <div className="mb-10 rounded-2xl border border-[#ABAE98] bg-[#ABAE98]/15 px-6 py-6 shadow-[0_8px_22px_rgba(0,0,0,0.04)]">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#5E6457] mb-2">
            Phase {phaseNumber} Interpretation
          </div>
          <p className="text-[15px] leading-relaxed text-[#262420]/90 whitespace-pre-line">
            {interpretation}
          </p>
        </div>
        <div className="mb-12 rounded-2xl border border-[#FF6B35] bg-[#FFD9C6]/40 px-7 py-6 shadow-[0_14px_34px_rgba(0,0,0,0.10)]">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#FF6B35] mb-3">
            System Takeaway
          </div>
          <p className="text-[18px] font-semibold leading-snug text-[#262420]">
            Reflexes run on autopilot. Courage begins the moment you choose a move your wiring didn’t predict.
          </p>
        </div>
        <div className="text-[14px] text-[#3E3A35] italic tracking-wide mb-10">{insight?.pull}</div>
        <button
          onClick={onContinue}
          className="px-9 py-3.5 bg-[#FF6B35] hover:bg-[#E85E2C] text-[#FEF6EC] text-[15px] font-semibold rounded-xl shadow-md hover:shadow-xl transition-transform active:scale-[0.97] mb-5"
        >
          Continue Scan →
        </button>
        <div className="text-[12px] uppercase tracking-[0.22em] text-[#3E3A35]/65">
          Next Layer Initializing: {nextArenaLabel}
        </div>
      </div>
      <style jsx>{`
        @keyframes scanline {
          0% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100%);
            opacity: 0.2;
          }
        }
        .animate-scanline {
          animation: scanline 3.2s linear infinite;
        }

        @keyframes panelFade {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-panelFade {
          animation: panelFade 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
