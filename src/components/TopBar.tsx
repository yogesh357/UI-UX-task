"use client";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      {/* Left: Greeting & Date */}
      <div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900">
          Good afternoon, <span className="text-indigo-600">Dana</span> 👋
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Thursday, 1 October 2026 • 3 tasks remaining for today
        </p>
      </div>

      {/* Right: Quick Search + Streak/XP Badges + Notifications + Avatar */}
      <div className="flex items-center gap-4">
        {/* Quick Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/80 border border-slate-200/60 text-xs text-slate-500 w-52">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search courses, tutors..."
            className="bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-xs w-full"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] text-slate-400 border border-slate-200">
            ⌘K
          </kbd>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
          <span>🔥</span> 7-day streak
        </div>

        {/* XP */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
          <span>⚡</span> 1,240 XP
        </div>

        {/* Notification Button */}
        <button
          className="relative w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600"
          aria-label="Notifications"
        >
          <span className="text-base">🔔</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center cursor-pointer shadow-xs border border-indigo-500">
          D
        </div>
      </div>
    </header>
  );
}
