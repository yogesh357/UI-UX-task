"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import ActionsTools from "@/components/ActionsTools";
import LiveTutoring from "@/components/LiveTutoring";
import ResultsSection from "@/components/ResultsSection";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans overflow-x-hidden">
      {/* Sidebar Navigation (Fixed desktop + Mobile drawer) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pl-0 lg:pl-[240px] min-w-0">
        {/* Top Navigation Bar */}
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        {/* Dashboard Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
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
