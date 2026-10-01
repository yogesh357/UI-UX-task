"use client";
import { useState } from "react";

const NAV = [
  { icon: "⊞", label: "Dashboard", active: true, badge: null },
  { icon: "🎒", label: "My Learning", active: false, badge: "3" },
  { icon: "🔍", label: "Explore Courses", active: false, badge: null },
  { icon: "✏️", label: "Practice Tests", active: false, badge: null },
  { icon: "👥", label: "Community", active: false, badge: "9" },
  { icon: "🏆", label: "Achievements", active: false, badge: null },
];

const SECONDARY = [
  { icon: "🤖", label: "AI Tutor" },
  { icon: "📝", label: "Notes" },
  { icon: "📅", label: "Schedule" },
];

const BOTTOM = [
  { icon: "⚙️", label: "Settings" },
  { icon: "❓", label: "Help" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside
      className="fixed inset-y-0 left-0 w-[210px] flex flex-col z-50"
      style={{ background: "var(--color-sidebar-bg)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 pt-5 pb-4">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 glow-blue"
          style={{ background: "linear-gradient(135deg, #5b72f8, #845ef7)" }}
        >
          L
        </div>
        <span
          className="text-[15px] font-bold text-white tracking-tight"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Learn<span style={{ color: "var(--color-orange)" }}>Hub</span>
        </span>
        <span
          className="ml-auto text-[10px] font-700 px-1.5 py-0.5 rounded-md"
          style={{ background: "rgba(91,114,248,0.25)", color: "#8fa0ff" }}
        >
          PRO
        </span>
      </div>

      {/* Search pill */}
      <div className="px-3 mb-4">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span className="text-sm" style={{ color: "var(--color-sidebar-text)" }}>🔍</span>
          <span className="text-xs" style={{ color: "var(--color-sidebar-text)" }}>Quick search…</span>
          <span
            className="ml-auto text-[10px] px-1.5 py-0.5 rounded"
            style={{ background: "rgba(255,255,255,0.07)", color: "#6a7290" }}
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-0.5">
        <p className="px-3 mb-1.5 text-[10px] font-700 uppercase tracking-widest" style={{ color: "#404870" }}>
          Main
        </p>
        {NAV.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`nav-link ${active === item.label ? "active" : ""}`}
          >
            <span className="w-[18px] text-center text-sm leading-none">{item.icon}</span>
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span
                className="text-[10px] font-700 min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1"
                style={{ background: "var(--color-orange)", color: "white" }}
              >
                {item.badge}
              </span>
            )}
          </button>
        ))}

        <div className="pt-4 pb-1">
          <p className="px-3 mb-1.5 text-[10px] font-700 uppercase tracking-widest" style={{ color: "#404870" }}>
            Tools
          </p>
          {SECONDARY.map((item) => (
            <button key={item.label} className="nav-link">
              <span className="w-[18px] text-center text-sm leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Upgrade card */}
      <div className="px-3 pb-3">
        <div
          className="rounded-xl p-3.5 relative overflow-hidden mb-2"
          style={{ background: "linear-gradient(135deg, rgba(91,114,248,0.25), rgba(132,94,247,0.15))", border: "1px solid rgba(91,114,248,0.25)" }}
        >
          <p className="text-white font-700 text-xs mb-0.5">Upgrade to Pro ✨</p>
          <p className="text-[10px] mb-2.5" style={{ color: "#7a82a8" }}>
            Unlock all courses &amp; tutors
          </p>
          <button
            className="btn btn-orange btn-sm w-full text-xs"
            style={{ borderRadius: "8px" }}
          >
            Upgrade Now
          </button>
        </div>

        {/* Bottom links */}
        {BOTTOM.map((item) => (
          <button key={item.label} className="nav-link">
            <span className="w-[18px] text-center text-sm leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* User */}
      <div
        className="px-3 py-3 flex items-center gap-2.5 cursor-pointer group"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="avatar w-8 h-8 text-sm text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#5b72f8,#845ef7)" }}
        >
          D
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-600 text-white truncate">Dana Mitchell</p>
          <p className="text-[10px] truncate" style={{ color: "var(--color-sidebar-text)" }}>
            Pro Member
          </p>
        </div>
        <span className="text-xs" style={{ color: "#404870" }}>⋯</span>
      </div>
    </aside>
  );
}
