"use client";
import { useState } from "react";

const NAV = [
  { icon: "⊞", label: "Dashboard", badge: null },
  { icon: "🎒", label: "My Learning", badge: "3" },
  { icon: "🔍", label: "Explore Courses", badge: null },
  { icon: "✏️", label: "Practice Tests", badge: null },
  { icon: "👥", label: "Community", badge: "9" },
  { icon: "🏆", label: "Achievements", badge: null },
];

const SECONDARY = [
  { icon: "🤖", label: "AI Assistant" },
  { icon: "📝", label: "Notes & Flashcards" },
  { icon: "📅", label: "Schedule" },
];

const BOTTOM = [
  { icon: "⚙️", label: "Settings" },
  { icon: "❓", label: "Help Center" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Backdrop Overlay for mobile/tablet drawer */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 w-[240px] bg-slate-900 text-slate-300 flex flex-col z-50 border-r border-slate-800 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
              L
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white tracking-tight">LearnHub</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                PRO
              </span>
            </div>
          </div>
          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-none">
          {/* Main Navigation */}
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Navigation
            </p>
            <div className="space-y-1">
              {NAV.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActive(item.label);
                    if (onClose) onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    active === item.label
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Learning Tools
            </p>
            <div className="space-y-1">
              {SECONDARY.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActive(item.label);
                    if (onClose) onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    active === item.label
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer / User Profile */}
        <div className="p-3 border-t border-slate-800/80 space-y-2">
          <div className="space-y-0.5">
            {BOTTOM.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
              D
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">Dana Mitchell</p>
              <p className="text-[10px] text-slate-400 truncate">dana@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
