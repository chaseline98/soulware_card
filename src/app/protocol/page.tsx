import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import ProtocolExplanationCard from "@/components/ProtocolExplanationCard";

export default function ProtocolPage() {
  return (
    <PageBackground>
      <AppHeader />
      <main
        className="
          px-4 py-16
          flex justify-center
          rounded-3xl
          overflow-hidden
          relative
        "
      >
        <ProtocolExplanationCard />
      </main>
    </PageBackground>
  );
}
