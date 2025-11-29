import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import ProtocolExplanationCard from "@/components/ProtocolExplanationCard";

export default function ProtocolPage() {
  return (
    <PageBackground>
      <AppHeader />
      <main className="px-4 py-12 flex justify-center">
        <ProtocolExplanationCard />
      </main>
    </PageBackground>
  );
}
