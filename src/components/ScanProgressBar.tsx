"use client";

export default function ScanProgressBar({ currentIndex }: { currentIndex: number }) {
  const totalItems = 25;
  const batchSize = 5;
  const totalBatches = totalItems / batchSize;

  const currentBatch = Math.floor(currentIndex / batchSize) + 1;
  const microProgress = (currentIndex % batchSize) / (batchSize - 1);

  return (
    <div className="w-full max-w-3xl mx-auto mt-2">
      <div className="flex justify-between text-xs font-inter text-[#2C2C25]/70 mb-1">
        <span>
          Stage {currentBatch} of {totalBatches}
        </span>
      </div>
      <div className="flex gap-2 w-full">
        {Array.from({ length: totalBatches }).map((_, i) => {
          const isCompleted = i + 1 < currentBatch;
          const isActive = i + 1 === currentBatch;
          return (
            <div key={i} className="flex-1 h-2 bg-[#EAE2D3] rounded-full relative overflow-hidden">
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
      <p className="text-center text-xs font-inter text-[#2C2C25]/60 mt-1">
        Item {(currentIndex % batchSize) + 1} of {batchSize} in this stage
      </p>
    </div>
  );
}
