import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import ActionsTools from "@/components/ActionsTools";
import LiveTutoring from "@/components/LiveTutoring";
import ResultsSection from "@/components/ResultsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen" style={{ background: "var(--color-page-bg)" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: "220px" }}>
        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <HeroSection />
            <ExploreSection />
            <ActionsTools />
            <LiveTutoring />
            <ResultsSection />
          </div>
        </main>
      </div>
    </div>
  );
}
