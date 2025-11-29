"use client";

export function SoulCard({ children }) {
  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        rounded-3xl
        bg-white/90
        backdrop-blur-md
        border border-[#E3DCC4]/40
        relative
        p-10 md:p-14
        shadow-[0_4px_12px_rgba(0,0,0,0.06)]
      "
      style={{
        boxShadow: `
          0 2px 6px rgba(0,0,0,0.04),
          0 8px 20px rgba(0,0,0,0.06),
          0 24px 48px rgba(0,0,0,0.04)
        `,
      }}
    >
      {/* TOP VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent" />
      </div>
      {/* INNER FRAME SHADOW */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
      {children}
    </div>
  );
}
