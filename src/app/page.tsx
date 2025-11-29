import PageBackground from "@/components/PageBackground";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import ModuleIntroCard from "@/components/ModuleIntroCard";

export default function Home() {
  return (
    <PageBackground>
      <AppHeader />
      <main className="px-4 py-8 flex justify-center">
        <ModuleIntroCard>
          <h2 className="text-xl font-semibold mb-4">Module Intro Card</h2>
          <p className="text-[#2C2C25]/80">
            We will build this from the top down, section by section.
          </p>
        </ModuleIntroCard>
      </main>
      <AppFooter />
    </PageBackground>
  );
}
