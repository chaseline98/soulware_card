"use client";

import { motion } from "framer-motion";
import { FearQuestion } from "@/config/fearScanConfig";

type Props = {
  arenaLabel: string;
  question: FearQuestion;
  onAnswer: (value: number) => void;
};

const SCALE_LABELS = [
  "Not true for me",
  "A little true",
  "Somewhat true",
  "Mostly true",
  "Very true for me",
];

export default function ScanCard({ arenaLabel, question, onAnswer }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.14, ease: "easeOut" }}
      className="relative rounded-3xl bg-white/95 border border-[#E3DCC4]/70 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden p-8 md:p-10"
    >
      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      {/* BREAKGLASS RED PROTOCOL BAR */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#CC1A1A]" />
      {/* ARENA + DIMENSION LABEL */}
      <p className="text-xs uppercase tracking-[0.25em] text-[#2C2C25]/60 mb-1 pl-4">
        ARENA: {arenaLabel}
      </p>
      <p className="text-xs uppercase tracking-[0.25em] text-[#CC1A1A] font-semibold mb-6 pl-4">
        {question.dimension}
      </p>
      {/* QUESTION TEXT */}
      <h2 className="pl-4 text-[22px] md:text-[26px] font-semibold text-[#2C2C25] leading-[1.25] tracking-tight mb-8">
        {question.text}
      </h2>
      {/* SCALE */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 px-2 md:px-4">
        {SCALE_LABELS.map((label, idx) => {
          const value = idx + 1;
          return (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={label}
              type="button"
              onClick={() => onAnswer(value)}
              className="
                w-full rounded-xl border border-[#E3DCC4] bg-white
                px-4 py-4 text-center transition-all
                hover:border-[#CC1A1A] hover:bg-[#CC1A1A]/5
                shadow-sm
              "
            >
              <span className="block font-semibold text-[#2C2C25] text-lg mb-1">{value}</span>
              <span className="block text-xs text-[#2C2C25]/80 leading-snug">{label}</span>
            </motion.button>
          );
        })}
      </div>
      {/* MICROCOPY */}
      <p className="text-xs text-[#2C2C25]/60 text-center mt-6 italic">
        Tap the level that best matches how your fear reflex behaves here.
      </p>
    </motion.div>
  );
}
