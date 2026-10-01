"use client";

const PROGRESS = [
  { title: "Advanced Calculus", subject: "Mathematics", pct: 72, color: "#5b72f8", lessons: "24 / 33", icon: "📐" },
  { title: "English Grammar Pro", subject: "English", pct: 45, color: "#20c97a", lessons: "9 / 20", icon: "📖" },
  { title: "Physics: Mechanics", subject: "Science", pct: 31, color: "#ff9f43", lessons: "5 / 16", icon: "⚛️" },
];

const SCHEDULE = [
  { time: "4:00 PM", label: "Calculus Doubt Session", tutor: "Aditya Jha", color: "#5b72f8" },
  { time: "6:30 PM", label: "English Essay Review", tutor: "Priya Singh", color: "#20c97a" },
  { time: "Tomorrow", label: "Physics Mock Test", tutor: "Self-paced", color: "#ff9f43" },
];

export default function HeroSection() {
  return (
    <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 280px" }}>

      {/* ── Left column ── */}
      <div className="flex flex-col gap-4">

        {/* Hero banner */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(125deg, #1b2870 0%, #0e1538 55%, #1a1060 100%)",
            minHeight: 168,
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-[-40px] left-[-40px] w-48 h-48 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #5b72f8, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[-30px] right-[200px] w-36 h-36 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #845ef7, transparent 70%)" }}
          />

          <div className="relative z-10 flex items-center justify-between p-6 h-full">
            {/* Text */}
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-1.5 pill pill-blue mb-3"
                style={{ background: "rgba(91,114,248,0.22)", color: "#8fa0ff" }}
              >
                🎯 Pick up where you left off
              </div>
              <h2
                className="text-2xl font-extrabold text-white mb-1 leading-tight"
                style={{ fontFamily: "Plus Jakarta Sans,sans-serif", letterSpacing: "-0.025em" }}
              >
                Jump back in, Dana
              </h2>
              <p className="text-sm mb-4" style={{ color: "#8892b5", maxWidth: 320 }}>
                You&apos;re on a roll! Finish 2 more tasks today to hit your daily goal.
              </p>
              <div className="flex gap-2">
                <button className="btn btn-blue btn-md" style={{ fontSize: "0.8125rem" }}>
                  Continue Learning →
                </button>
                <button className="btn btn-ghost btn-md" style={{ fontSize: "0.8125rem" }}>
                  View My Plan
                </button>
              </div>
            </div>

            {/* Mascot */}
            <div className="flex flex-col items-center gap-1 mr-2">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl relative"
                style={{
                  background: "linear-gradient(135deg, rgba(91,114,248,0.22), rgba(132,94,247,0.1))",
                  border: "1px solid rgba(91,114,248,0.3)",
                }}
              >
                🐧
                <span
                  className="absolute -top-1.5 -right-1.5 text-[10px] font-700 px-1.5 py-0.5 rounded-full"
                  style={{ background: "var(--color-green)", color: "white" }}
                >
                  AI
                </span>
              </div>
              <span
                className="text-[10px] font-600 px-2 py-0.5 rounded-full"
                style={{ background: "rgba(32,201,122,0.18)", color: "#20c97a" }}
              >
                AI Tutor Ready
              </span>
            </div>
          </div>
        </div>

        {/* My Progress */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="sec-head">My Progress</h3>
              <p className="sec-sub mt-0.5">Your active courses</p>
            </div>
            <span className="link-more">View all →</span>
          </div>

          {/* NPF badge row */}
          <div
            className="flex items-center gap-3 p-3 rounded-xl mb-4"
            style={{ background: "linear-gradient(90deg,rgba(91,114,248,0.07),rgba(132,94,247,0.04))", border: "1px solid rgba(91,114,248,0.12)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#5b72f8,#845ef7)" }}
            >
              🎓
            </div>
            <div className="flex-1">
              <p className="text-xs font-700" style={{ color: "var(--color-text-1)" }}>NPF Learner</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="progress-track flex-1"><div className="progress-fill" style={{ width: "68%" }} /></div>
                <span className="text-[11px] font-600" style={{ color: "var(--color-blue)" }}>68%</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--color-text-3)" }}>
              <span>🔥</span> <span style={{ color: "var(--color-orange)", fontWeight: 700 }}>7</span>
              <span>⭐ 4.8</span>
              <span className="pill pill-green" style={{ fontSize: "0.65rem" }}>Top 5%</span>
            </div>
          </div>

          <div className="space-y-3">
            {PROGRESS.map((c) => (
              <div key={c.title} className="flex items-center gap-3 group cursor-pointer">
                <div
                  className="subj-icon w-9 h-9 text-lg flex-shrink-0"
                  style={{ background: `${c.color}14`, borderRadius: 10 }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-600 truncate" style={{ color: "var(--color-text-1)" }}>{c.title}</p>
                    <span className="text-xs font-700 ml-2 flex-shrink-0" style={{ color: c.color }}>{c.pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${c.pct}%`, background: `linear-gradient(90deg,${c.color},${c.color}99)` }} />
                  </div>
                  <p className="text-[10px] mt-1" style={{ color: "var(--color-text-3)" }}>{c.lessons} lessons</p>
                </div>
                <button
                  className="btn btn-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  style={{ background: `${c.color}14`, color: c.color, borderRadius: 8, fontSize: "0.65rem" }}
                >
                  Resume
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right column: Today's goal + schedule ── */}
      <div className="flex flex-col gap-4">

        {/* Daily goal card */}
        <div className="card p-5">
          <p className="text-[10px] font-700 uppercase tracking-wider mb-3" style={{ color: "var(--color-text-3)" }}>
            Today&apos;s Goal
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: "rgba(91,114,248,0.1)" }}
            >
              🎯
            </div>
            <div>
              <p
                className="text-2xl font-800 leading-tight"
                style={{ color: "var(--color-text-1)", fontFamily: "Plus Jakarta Sans,sans-serif" }}
              >
                3 <span className="text-sm font-500" style={{ color: "var(--color-text-3)" }}>/ 5</span>
              </p>
              <p className="text-[11px]" style={{ color: "var(--color-text-2)" }}>tasks done</p>
            </div>
          </div>
          <div className="progress-track mb-2">
            <div className="progress-fill" style={{ width: "60%" }} />
          </div>
          <p className="text-[11px] mb-4" style={{ color: "var(--color-text-3)" }}>60% of daily goal achieved</p>
          <div className="grid grid-cols-3 gap-2">
            {[["🔥","7d","Streak"],["⚡","240","XP Today"],["🏆","#12","Rank"]].map(([icon,val,lbl]) => (
              <div key={lbl} className="card-inset p-2 text-center">
                <div className="text-base mb-0.5">{icon}</div>
                <div className="text-xs font-700" style={{ color: "var(--color-text-1)" }}>{val}</div>
                <div className="text-[9px]" style={{ color: "var(--color-text-3)" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="card p-5 flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="sec-head text-sm">Your Schedule</h3>
            <span className="link-more">+ Add</span>
          </div>
          <div className="space-y-3">
            {SCHEDULE.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <div
                  className="w-1 rounded-full self-stretch flex-shrink-0 mt-0.5"
                  style={{ background: s.color, minHeight: 32 }}
                />
                <div className="flex-1">
                  <p className="text-xs font-600" style={{ color: "var(--color-text-1)" }}>{s.label}</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-3)" }}>
                    {s.time} · {s.tutor}
                  </p>
                </div>
                <button
                  className="btn btn-sm"
                  style={{ background: `${s.color}12`, color: s.color, borderRadius: 7, fontSize: "0.65rem", padding: "4px 10px" }}
                >
                  Join
                </button>
              </div>
            ))}
          </div>

          {/* Weekly heatmap placeholder */}
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
            <p className="text-[10px] font-600 mb-2" style={{ color: "var(--color-text-3)" }}>This week</p>
            <div className="flex gap-1">
              {["M","T","W","T","F","S","S"].map((d,i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full aspect-square rounded"
                    style={{
                      background: i < 3 ? "var(--color-blue)" : i === 3 ? "rgba(91,114,248,0.4)" : "var(--color-border)",
                      opacity: i < 3 ? 1 : 1,
                    }}
                  />
                  <span className="text-[9px]" style={{ color: "var(--color-text-4)" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
