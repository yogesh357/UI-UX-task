"use client";

interface TopBarProps {
  onMenuClick?: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      {/* Left: Mobile Hamburger Toggle + Greeting */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer flex-shrink-0"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="min-w-0">
          <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 truncate">
            Good afternoon, <span className="text-indigo-600">Dana</span> 👋
          </h1>
          <p className="text-[11px] text-slate-500 hidden md:block mt-0.5 truncate">
            Thursday, 1 October 2026 • 3 tasks remaining for today
          </p>
        </div>
      </div>

      {/* Right: Search Bar + Badges + Profile */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {/* Quick Search Input (desktop/tablet) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/80 border border-slate-200/60 text-xs text-slate-500 w-44 xl:w-56">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-xs w-full"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] text-slate-400 border border-slate-200">
            ⌘K
          </kbd>
        </div>

        {/* Streak Pill */}
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
          <span>🔥</span> <span className="hidden sm:inline">7-day streak</span><span className="sm:hidden">7d</span>
        </div>

        {/* XP Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
          <span>⚡</span> 1,240 XP
        </div>

        {/* Notification Icon */}
        <button
          className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-xl border border-slate-200/80 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600"
          aria-label="Notifications"
        >
          <span className="text-sm sm:text-base">🔔</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        {/* User Avatar */}
        <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center cursor-pointer shadow-xs border border-indigo-500">
          D
        </div>
      </div>
    </header>
  );
}
