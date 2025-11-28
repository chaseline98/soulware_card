export function SoulCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        rounded-3xl
        border
        border-[#D4C4A0]/40
        bg-white/90
        backdrop-blur-md
        shadow-[0_20px_60px_rgba(171,181,160,0.25)]
        p-8
        md:p-12
        transition-all
        duration-300
      "
    >
      {children}
    </div>
  );
}
