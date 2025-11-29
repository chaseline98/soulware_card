"use client";

type Props = {
  currentIndex: number;
  total: number;
  groupCount: number;
};

export default function ScanProgressBar({ currentIndex, total, groupCount }: Props) {
  const completedCount = currentIndex + 1;
  const percent = (completedCount / total) * 100;
  const segmentSize = total / groupCount;
  const activeGroup = Math.min(Math.floor(currentIndex / segmentSize), groupCount - 1);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2 text-xs text-[#2C2C25]/60">
        <span>
          Item {completedCount} of {total}
        </span>
        <span>{Math.round(percent)}% complete</span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: groupCount }).map((_, idx) => {
          const groupStart = idx * segmentSize;
          const groupEnd = groupStart + segmentSize;
          const isComplete = completedCount >= groupEnd;
          const isActive = !isComplete && completedCount > groupStart;

          return (
            <div
              key={idx}
              className={[
                "flex-1 h-2 rounded-full transition-all",
                isComplete
                  ? "bg-[#FF6B35]"
                  : isActive
                  ? "bg-[#FF6B35]/40"
                  : "bg-[#E3DCC4]",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}
