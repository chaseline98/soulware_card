import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import LoopZoneSelectionCard from "@/components/LoopZoneSelectionCard";

export default function ScanPage() {
  return (
    <PageBackground>
      <AppHeader />
      <main className="px-4 py-12 flex justify-center">
        <LoopZoneSelectionCard />
      </main>
    </PageBackground>
  );
}
