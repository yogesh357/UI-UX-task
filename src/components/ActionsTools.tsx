"use client";

const tools = [
  {
    name: "AI Homework Helper",
    description: "Instant step-by-step problem solver and concept explanations",
    icon: "🤖",
    badge: "Recommended",
    badgeClass: "bg-indigo-50 text-indigo-600 border border-indigo-100",
  },
  {
    name: "Smart Flashcards",
    description: "Spaced repetition algorithms for long-term memory retention",
    icon: "🃏",
    badge: "Popular",
    badgeClass: "bg-purple-50 text-purple-600 border border-purple-100",
  },
  {
    name: "Essay Grader & Coach",
    description: "Real-time grammar, tone, and structural writing feedback",
    icon: "✍️",
    badge: "New",
    badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
];

const quickTools = [
  { name: "Calculator", icon: "🧮", bg: "bg-slate-50 hover:bg-slate-100 text-slate-700" },
  { name: "Dictionary", icon: "📖", bg: "bg-slate-50 hover:bg-slate-100 text-slate-700" },
  { name: "Mind Map", icon: "🗺️", bg: "bg-slate-50 hover:bg-slate-100 text-slate-700" },
  { name: "Focus Timer", icon: "⏱️", bg: "bg-slate-50 hover:bg-slate-100 text-slate-700" },
  { name: "Quick Notes", icon: "📝", bg: "bg-slate-50 hover:bg-slate-100 text-slate-700" },
  { name: "Formulas", icon: "🔢", bg: "bg-slate-50 hover:bg-slate-100 text-slate-700" },
];

export default function ActionsTools() {
  return (
    <section id="actions-tools" className="mt-12 pt-8 border-t border-slate-200/80">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Actions &amp; Tools
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Smart AI assistants and study utilities to accelerate your learning
          </p>
        </div>
        <span className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer transition-colors">
          View all tools &rarr;
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommended AI Tools */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Recommended Utilities
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center text-xl group-hover:bg-indigo-50 transition-colors">
                      {tool.icon}
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tool.badgeClass}`}>
                      {tool.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <button className="mt-4 w-full py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/60 transition-colors">
                  Open Assistant
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tools & Upgrade */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Quick Tools
            </span>
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4">
              <div className="grid grid-cols-3 gap-2.5">
                {quickTools.map((tool) => (
                  <button
                    key={tool.name}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 transition-all ${tool.bg} cursor-pointer`}
                  >
                    <span className="text-xl mb-1">{tool.icon}</span>
                    <span className="text-[11px] font-medium text-slate-700 text-center truncate w-full">
                      {tool.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist Pro Upgrade Card */}

        </div>  
      </div>
    </section>
  );
}
