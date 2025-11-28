import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import { SoulCard } from "@/components/SoulCard";

export default function Home() {
  return (
    <PageBackground>
      <AppHeader />
      <main className="px-4 py-8 flex justify-center">
        <SoulCard>
          <h2 className="text-xl font-semibold mb-4">This is the real SoulCard</h2>
          <p className="text-[#2C2C25]/80">
            Once this is centered correctly, we'll align the header’s horizontal structure to match.
          </p>
        </SoulCard>
      </main>
    </PageBackground>
  );
}
