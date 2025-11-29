"use client";

import { useEffect, useState } from "react";

export default function ScanProgressBar({ currentIndex }: { currentIndex: number }) {
  const totalItems = 25;
  const batchSize = 5;
  const totalBatches = totalItems / batchSize;

  const currentBatch = Math.floor(currentIndex / batchSize) + 1;
  const microProgress = (currentIndex % batchSize) / (batchSize - 1);

  const [fadeKey, setFadeKey] = useState(0);
  useEffect(() => {
    setFadeKey((k) => k + 1);
  }, [currentBatch]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <div className="w-full h-px bg-[#2C2C25]/10 mb-3" />
      <div
        key={fadeKey}
        className="flex justify-center mb-3 transition-opacity duration-300 opacity-0 animate-[fadeIn_0.3s_forwards]"
      >
        <span className="flex items-center gap-2 text-base md:text-lg font-inter font-semibold tracking-tight text-[#2C2C25]/85">
          <span className="text-[#FF6B35] text-lg">▣</span>
          Stage {currentBatch} of {totalBatches}
        </span>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      <div className="flex gap-2 w-full mb-2">
        {Array.from({ length: totalBatches }).map((_, i) => {
          const isCompleted = i + 1 < currentBatch;
          const isActive = i + 1 === currentBatch;
          return (
            <div
              key={i}
              className="flex-1 h-2 bg-[#EAE2D3] rounded-full relative overflow-hidden shadow-sm"
            >
              {isCompleted && <div className="absolute inset-0 bg-[#FF6B35]" />}
              {isActive && (
                <div
                  className="absolute inset-y-0 left-0 bg-[#FF6B35] transition-all duration-300"
                  style={{ width: `${microProgress * 100}%` }}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="text-center text-xs font-inter text-[#2C2C25]/60">
        Item {(currentIndex % batchSize) + 1} of {batchSize} in this stage
      </p>
    </div>
  );
}
