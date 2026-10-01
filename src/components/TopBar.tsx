"use client";

export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-6 py-3 bg-white"
      style={{ borderBottom: "1px solid var(--color-border)", boxShadow: "0 1px 0 var(--color-border-light)" }}
    >
      {/* Left: greeting */}
      <div>
        <h1
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: "Plus Jakarta Sans,sans-serif", color: "var(--color-text-1)" }}
        >
          Good evening, <span style={{ color: "var(--color-blue)" }}>Dana</span> 👋
        </h1>
        <p className="text-[11px] mt-0.5" style={{ color: "var(--color-text-3)" }}>
          Wednesday, 1 October 2026 • 3 tasks remaining today
        </p>
      </div>

      {/* Right: pills + avatar */}
      <div className="flex items-center gap-2.5">
        {/* Streak */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-600"
          style={{ background: "rgba(255,159,67,0.1)", color: "var(--color-orange)" }}
        >
          <span>🔥</span> 7-day streak
        </div>

        {/* XP */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-600"
          style={{ background: "rgba(91,114,248,0.1)", color: "var(--color-blue)" }}
        >
          <span>⚡</span> 1,240 XP
        </div>

        {/* Notification */}
        <button
          className="relative w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Notifications"
        >
          <span className="text-base">🔔</span>
          <span
            className="absolute top-1 right-1 w-2 h-2 rounded-full ring-2 ring-white"
            style={{ background: "var(--color-red)" }}
          />
        </button>

        {/* Avatar */}
        <div
          className="avatar w-8 h-8 text-sm text-white cursor-pointer ring-2 ring-[#5b72f8]/40"
          style={{
            background: "linear-gradient(135deg,#5b72f8,#845ef7)",
          }}
        >
          D
        </div>
      </div>
    </header>
  );
}
