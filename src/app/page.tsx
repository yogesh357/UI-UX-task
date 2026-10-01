import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import ActionsTools from "@/components/ActionsTools";
import LiveTutoring from "@/components/LiveTutoring";
import ResultsSection from "@/components/ResultsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col pl-[230px]">
        {/* Top Header */}
        <TopBar />

        {/* Dashboard Content Area */}
        <main className="flex-1 px-8 py-8">
          <div className="max-w-7xl mx-auto space-y-12">
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
