"use client";

import { useSearchParams } from "next/navigation";
import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";

export default function ScanCompletePage() {
  const searchParams = useSearchParams();
  const arena = searchParams.get("arena") || "Life";

  return (
    <PageBackground>
      <AppHeader />
      <main className="px-4 py-12 flex justify-center">
        <div className="w-full max-w-2xl rounded-3xl bg-white/95 border border-[#E3DCC4] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#2C2C25]/60 mb-3">
            2.0 // Scan Complete
          </p>
          <h1 className="text-2xl md:text-3xl font-spaceGrotesk font-semibold text-[#2C2C25] mb-4">
            Calibration complete.
          </h1>
          <p className="text-sm md:text-base text-[#2C2C25]/80 mb-4 leading-relaxed">
            We’ve finished mapping how fear behaves in your <span className="font-semibold">{arena}</span> arena across five layers: spotlight, rejection, shame, perfectionism, and conflict avoidance.
          </p>
          <p className="text-sm md:text-base text-[#2C2C25]/80 leading-relaxed">
            The next phase of the Breakglass Protocol will translate this map into a clear summary of your primary fear reflex and its favorite disguise patterns, along with coaching you can actually use in real situations.
          </p>
        </div>
      </main>
    </PageBackground>
  );
}
