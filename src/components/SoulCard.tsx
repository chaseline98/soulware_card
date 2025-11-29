"use client";

export function SoulCard({ children }) {
  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        rounded-3xl
        overflow-hidden
        bg-white/95
        backdrop-blur-xl
        border border-[#E3DCC4]/50
        relative
        p-10 md:p-14
        shadow-[0_8px_20px_rgba(0,0,0,0.06)]
      "
      style={{
        boxShadow: `
          0 4px 10px rgba(0,0,0,0.05),
          0 12px 32px rgba(0,0,0,0.06),
          0 24px 60px rgba(0,0,0,0.04)
        `,
      }}
    >
      {/* TOP VIGNETTE */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/10 to-transparent rounded-t-3xl pointer-events-none" />
      {/* BOTTOM VIGNETTE */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/5 to-transparent rounded-b-3xl pointer-events-none" />
      {/* INNER SHADOW FRAME */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_18px_rgba(0,0,0,0.06)] pointer-events-none" />
      {children}
    </div>
  );
}
