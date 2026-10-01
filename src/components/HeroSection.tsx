"use client";

const PROGRESS = [
  { title: "Advanced Calculus", subject: "Mathematics", pct: 72, color: "#4f46e5", lessons: "24 / 33 lessons", icon: "📐" },
  { title: "English Grammar Pro", subject: "English", pct: 45, color: "#10b981", lessons: "9 / 20 lessons", icon: "📖" },
  { title: "Physics: Mechanics", subject: "Science", pct: 31, color: "#f59e0b", lessons: "5 / 16 lessons", icon: "⚛️" },
];

const SCHEDULE = [
  { time: "4:00 PM", label: "Calculus Doubt Session", tutor: "Aditya Jha", tag: "Live Soon" },
  { time: "6:30 PM", label: "English Essay Review", tutor: "Priya Singh", tag: "Scheduled" },
  { time: "Tomorrow", label: "Physics Mock Test", tutor: "Self-paced", tag: "Practice" },
];

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* ── Left 2 Columns: Welcome Banner + Progress ── */}
      <div className="lg:col-span-2 space-y-6">

        {/* Hero banner */}
        <div className="relative rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xs overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-md relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              Pick up where you left off
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
              Welcome back, Dana 👋
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              You&apos;re making solid progress today! Complete 2 more lessons to maintain your study streak and achieve your daily goal.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <button className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors">
                Continue Learning &rarr;
              </button>
              <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors">
                View Study Plan
              </button>
            </div>
          </div>

          {/* Minimalist AI Assistant Widget */}
          <div className="w-full sm:w-auto flex-shrink-0 flex sm:flex-col items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/60 gap-3">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-2xl sm:text-3xl">
              🐧
            </div>
            <div className="text-left sm:text-center">
              <span className="text-xs font-bold text-slate-800 block">Dana AI Assistant</span>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center sm:justify-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Ready to help
              </span>
            </div>
          </div>
        </div>

        {/* My Progress Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Current Progress</h3>
              <p className="text-xs text-slate-500 mt-0.5">Your active learning tracks</p>
            </div>
            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              View all courses &rarr;
            </button>
          </div>

          {/* Minimalist Overall Progress Indicator */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
              🎓
            </div>
            <div className="flex-1 w-full min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-900">Overall Course Completion</span>
                <span className="text-xs font-bold text-indigo-600">68%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: "68%" }} />
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500 sm:border-l border-slate-200 sm:pl-4 pt-2 sm:pt-0 border-t sm:border-t-0 w-full sm:w-auto justify-between sm:justify-start">
              <div>
                <span className="block text-[10px] text-slate-400 font-medium">Streak</span>
                <span className="font-bold text-slate-800">🔥 7 Days</span>
              </div>
            </div>
          </div>

          {/* Active Courses */}
          <div className="space-y-4">
            {PROGRESS.map((c) => (
              <div key={c.title} className="flex items-center gap-3 sm:gap-4 group cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-bold text-slate-900 truncate">{c.title}</p>
                    <span className="text-xs font-semibold text-slate-600 ml-2">{c.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${c.pct}%`, backgroundColor: c.color }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">{c.lessons}</p>
                </div>
                <button className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200/80 hover:bg-slate-100 transition-colors opacity-90 group-hover:opacity-100 flex-shrink-0">
                  Resume
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Right Column: Goal + Schedule ── */}
      <div className="space-y-6">

        {/* Daily Goal Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-3">
            Daily Learning Goal
          </span>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                3 <span className="text-sm font-medium text-slate-400">/ 5 tasks</span>
              </p>
              <p className="text-xs text-slate-500">60% completed</p>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-5">
            <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: "60%" }} />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Streak", val: "7 Days", icon: "🔥" },
              { label: "XP Today", val: "240", icon: "⚡" },
              { label: "Rank", val: "#12", icon: "🏆" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-center">
                <span className="text-sm block mb-0.5">{stat.icon}</span>
                <span className="text-xs font-bold text-slate-900 block truncate">{stat.val}</span>
                <span className="text-[10px] text-slate-400 block truncate">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Upcoming Schedule</h3>
            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              + Add
            </button>
          </div>
          <div className="space-y-3">
            {SCHEDULE.map((s) => (
              <div key={s.label} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">{s.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                    {s.time} · {s.tutor}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[10px] font-semibold text-slate-700 flex-shrink-0">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
