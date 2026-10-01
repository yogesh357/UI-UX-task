"use client";

const tools = [
  {
    name: "AI Homework Helper",
    description: "Get step-by-step solutions instantly",
    icon: "🤖",
    color: "#4f6ef7",
    bg: "#eff6ff",
    badge: "Recommended",
    badgeColor: "#4f6ef7",
  },
  {
    name: "Smart Flashcards",
    description: "Spaced repetition for lasting memory",
    icon: "🃏",
    color: "#7c5cbf",
    bg: "#f5f3ff",
    badge: "Popular",
    badgeColor: "#7c5cbf",
  },
  {
    name: "Essay Grader",
    description: "AI-powered writing feedback",
    icon: "✍️",
    color: "#ff9f43",
    bg: "#fff7ed",
    badge: "New",
    badgeColor: "#ff9f43",
  },
];

const quickTools = [
  { name: "Calculator", icon: "🧮", color: "#4f6ef7", bg: "#eff6ff" },
  { name: "Dictionary", icon: "📖", color: "#26de81", bg: "#f0fdf4" },
  { name: "Mind Map", icon: "🗺️", color: "#fd79a8", bg: "#fdf2f8" },
  { name: "Timer", icon: "⏱️", color: "#ff9f43", bg: "#fff7ed" },
  { name: "Notes", icon: "📝", color: "#45aaf2", bg: "#eff9ff" },
  { name: "Formula Sheet", icon: "🔢", color: "#00cec9", bg: "#f0fdfd" },
];

export default function ActionsTools() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title">Actions &amp; Tools</h3>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Recommended Tools */}
        <div className="col-span-2">
          <p
            className="text-xs font-600 uppercase tracking-wider mb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            Recommended for you
          </p>
          <div className="grid grid-cols-3 gap-3">
            {tools.map((tool) => (
              <div key={tool.name} className="card p-4 cursor-pointer group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ background: tool.bg }}
                >
                  {tool.icon}
                </div>
                <span
                  className="tag mb-2"
                  style={{ background: `${tool.badgeColor}18`, color: tool.badgeColor }}
                >
                  {tool.badge}
                </span>
                <p
                  className="text-sm font-700 mt-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {tool.name}
                </p>
                <p
                  className="text-xs mt-1 leading-snug"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {tool.description}
                </p>
                <button
                  className="mt-3 w-full py-1.5 rounded-lg text-xs font-600 transition-all"
                  style={{ background: `${tool.color}15`, color: tool.color }}
                >
                  Open Tool
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tools */}
        <div>
          <p
            className="text-xs font-600 uppercase tracking-wider mb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            Quick Tools
          </p>
          <div className="card p-4">
            <div className="grid grid-cols-3 gap-3">
              {quickTools.map((tool) => (
                <button
                  key={tool.name}
                  className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:scale-105 transition-transform cursor-pointer"
                  style={{ background: tool.bg }}
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span
                    className="text-xs font-600 text-center leading-tight"
                    style={{ color: tool.color, fontSize: "0.65rem" }}
                  >
                    {tool.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Upgrade Banner */}
          <div
            className="mt-3 rounded-xl p-4 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e2d6b, #0d1234)" }}
          >
            <div
              className="absolute top-[-15px] right-[-15px] w-16 h-16 rounded-full opacity-20"
              style={{ background: "#4f6ef7" }}
            />
            <p className="text-white font-700 text-sm mb-1">Go Pro 🚀</p>
            <p className="text-xs mb-3" style={{ color: "#8892b0" }}>
              Unlock all tools, live tutoring & more
            </p>
            <button className="btn-orange text-xs px-3 py-1.5 w-full">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
