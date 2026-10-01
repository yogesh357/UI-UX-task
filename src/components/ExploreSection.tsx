"use client";
import { useState } from "react";

const SUBJECTS = [
  { name: "Mathematics", icon: "📐", n: 48 },
  { name: "Science", icon: "🔬", n: 36 },
  { name: "English", icon: "📖", n: 29 },
  { name: "History", icon: "🏛️", n: 22 },
  { name: "Geography", icon: "🌍", n: 18 },
  { name: "Computer Science", icon: "💻", n: 54 },
  { name: "Physics", icon: "⚛️", n: 31 },
  { name: "Chemistry", icon: "🧪", n: 27 },
  { name: "Biology", icon: "🧬", n: 24 },
  { name: "Economics", icon: "📈", n: 19 },
  { name: "Art & Design", icon: "🎨", n: 15 },
  { name: "Music", icon: "🎵", n: 12 },
];

const COURSES = [
  { id: 1, icon: "📐", title: "Calculus: Limits & Derivatives", sub: "Mathematics", level: "Advanced", dur: "8h 30m", rating: 4.9, rev: 2341, enrolled: "12K", price: "Free trial", badge: "HOT" },
  { id: 2, icon: "📖", title: "English Grammar — A to Z", sub: "English", level: "Beginner", dur: "5h 15m", rating: 4.8, rev: 1892, enrolled: "8.4K", price: "Try Free", badge: "NEW" },
  { id: 3, icon: "⚛️", title: "Physics: Forces & Mechanics", sub: "Science", level: "Intermediate", dur: "6h 45m", rating: 4.7, rev: 1204, enrolled: "6.1K", price: "₹499", badge: null },
  { id: 4, icon: "🏛️", title: "Modern World History 1800–Now", sub: "History", level: "Intermediate", dur: "10h 20m", rating: 4.9, rev: 987, enrolled: "4.2K", price: "₹349", badge: null },
  { id: 5, icon: "💻", title: "Python Programming: Zero to Hero", sub: "Computer Science", level: "Beginner", dur: "12h 00m", rating: 4.95, rev: 5621, enrolled: "24K", price: "Free trial", badge: "HOT" },
  { id: 6, icon: "🧪", title: "Organic Chemistry: Reactions", sub: "Chemistry", level: "Advanced", dur: "9h 10m", rating: 4.6, rev: 743, enrolled: "3.8K", price: "₹599", badge: null },
];

const FILTERS = ["All", "Mathematics", "Science", "English", "Computer Science", "History", "Physics"];

export default function ExploreSection() {
  const [filter, setFilter] = useState("All");

  const list = filter === "All" ? COURSES : COURSES.filter((c) => c.sub === filter);

  return (
    <section className="mt-12 pt-8 border-t border-slate-200/80">
      {/* ── Subject Header & Grid ── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">Explore by Subject</h3>
          <p className="text-xs text-slate-500 mt-0.5">Choose a domain to start learning</p>
        </div>
        <span className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
          All subjects &rarr;
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        {SUBJECTS.map((s) => (
          <button
            key={s.name}
            onClick={() => setFilter(s.name === filter ? "All" : s.name)}
            className={`bg-white rounded-2xl border p-4 flex flex-col items-center text-center cursor-pointer transition-all ${
              filter === s.name
                ? "border-indigo-600 ring-2 ring-indigo-600/10 shadow-xs"
                : "border-slate-200/80 hover:border-slate-300"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl mb-2">
              {s.icon}
            </div>
            <span className="text-xs font-bold text-slate-800 leading-snug line-clamp-1">{s.name}</span>
            <span className="text-[10px] text-slate-400 mt-0.5">{s.n} courses</span>
          </button>
        ))}
      </div>

      {/* ── Popular Courses Header & Filters ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">Popular Courses</h3>
          <p className="text-xs text-slate-500 mt-0.5">Top rated courses crafted by expert educators</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                filter === f
                  ? "bg-slate-900 text-white shadow-xs font-semibold"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-indigo-50 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider block">
                      {c.sub}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {c.title}
                    </h4>
                  </div>
                </div>
                {c.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {c.badge}
                  </span>
                )}
              </div>

              {/* Meta details */}
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 flex-wrap">
                <span className="flex items-center gap-1 font-semibold text-slate-800">
                  <span className="text-amber-500">★</span> {c.rating}
                </span>
                <span>•</span>
                <span>{c.enrolled} students</span>
                <span>•</span>
                <span>{c.dur}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-600">
                  {c.level}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
              <span className="text-sm font-bold text-slate-900">{c.price}</span>
              <button className="px-4 py-1.5 rounded-xl text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                Enroll Now &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
