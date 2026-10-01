"use client";
import { useState } from "react";

/* ── Data ── */
const SUBJECTS = [
  { name: "Mathematics",      icon: "📐", color: "#5b72f8", bg: "rgba(91,114,248,0.1)",  n: 48 },
  { name: "Science",          icon: "🔬", color: "#20c97a", bg: "rgba(32,201,122,0.1)",  n: 36 },
  { name: "English",          icon: "📖", color: "#ff9f43", bg: "rgba(255,159,67,0.1)",  n: 29 },
  { name: "History",          icon: "🏛️", color: "#f06595", bg: "rgba(240,101,149,0.1)", n: 22 },
  { name: "Geography",        icon: "🌍", color: "#22d3ee", bg: "rgba(34,211,238,0.1)",  n: 18 },
  { name: "Computer Science", icon: "💻", color: "#845ef7", bg: "rgba(132,94,247,0.1)", n: 54 },
  { name: "Physics",          icon: "⚛️", color: "#f55f5f", bg: "rgba(245,95,95,0.1)",   n: 31 },
  { name: "Chemistry",        icon: "🧪", color: "#12b5b5", bg: "rgba(18,181,181,0.1)",  n: 27 },
  { name: "Biology",          icon: "🧬", color: "#a9e34b", bg: "rgba(169,227,75,0.1)",  n: 24 },
  { name: "Economics",        icon: "📈", color: "#ffd43b", bg: "rgba(255,212,59,0.1)",  n: 19 },
  { name: "Art & Design",     icon: "🎨", color: "#f06595", bg: "rgba(240,101,149,0.1)", n: 15 },
  { name: "Music",            icon: "🎵", color: "#22d3ee", bg: "rgba(34,211,238,0.1)",  n: 12 },
];

const COURSES = [
  { id:1,  icon:"📐", title:"Calculus: Limits & Derivatives",    sub:"Mathematics",      level:"Advanced",     dur:"8h 30m", rating:4.9, rev:2341, enrolled:"12K", price:"Free trial", priceColor:"#5b72f8", color:"#5b72f8", tags:["#1 Top Rated","Certificate"], tagPill:["pill-blue","pill-green"],  badge:"HOT"  },
  { id:2,  icon:"📖", title:"English Grammar — A to Z",          sub:"English",          level:"Beginner",     dur:"5h 15m", rating:4.8, rev:1892, enrolled:"8.4K",price:"Try Free",   priceColor:"#20c97a", color:"#20c97a", tags:["Most Popular","Certificate"], tagPill:["pill-orange","pill-purple"],badge:"NEW"  },
  { id:3,  icon:"⚛️", title:"Physics: Forces & Mechanics",       sub:"Science",          level:"Intermediate", dur:"6h 45m", rating:4.7, rev:1204, enrolled:"6.1K",price:"₹499",       priceColor:"#ff9f43", color:"#ff9f43", tags:["AI-Powered","Lab Kit"],     tagPill:["pill-cyan","pill-lime"],   badge:null   },
  { id:4,  icon:"🏛️", title:"Modern World History 1800–Now",     sub:"History",          level:"Intermediate", dur:"10h 20m",rating:4.9, rev:987,  enrolled:"4.2K",price:"₹349",       priceColor:"#f06595", color:"#f06595", tags:["Top Rated"],                tagPill:["pill-pink"],              badge:null   },
  { id:5,  icon:"💻", title:"Python Programming: Zero to Hero",  sub:"Computer Science", level:"Beginner",     dur:"12h 00m",rating:4.95,rev:5621, enrolled:"24K", price:"Free trial", priceColor:"#845ef7", color:"#845ef7", tags:["Bestseller","Projects"],    tagPill:["pill-purple","pill-blue"], badge:"HOT"  },
  { id:6,  icon:"🧪", title:"Organic Chemistry: Reactions",      sub:"Chemistry",        level:"Advanced",     dur:"9h 10m", rating:4.6, rev:743,  enrolled:"3.8K",price:"₹599",       priceColor:"#12b5b5", color:"#12b5b5", tags:["Lab Included"],             tagPill:["pill-teal"],              badge:null   },
  { id:7,  icon:"🧬", title:"Cell Biology & Genetics",           sub:"Biology",          level:"Intermediate", dur:"7h 00m", rating:4.8, rev:1102, enrolled:"5.3K",price:"Try Free",   priceColor:"#a9e34b", color:"#a9e34b", tags:["Visual Learning"],          tagPill:["pill-lime"],              badge:"NEW"  },
  { id:8,  icon:"📈", title:"Microeconomics Fundamentals",       sub:"Economics",        level:"Beginner",     dur:"4h 30m", rating:4.5, rev:612,  enrolled:"2.9K",price:"₹249",       priceColor:"#ffd43b", color:"#ffd43b", tags:["Case Studies"],             tagPill:["pill-yellow"],            badge:null   },
  { id:9,  icon:"🌍", title:"World Geography & Maps",            sub:"Geography",        level:"Beginner",     dur:"3h 45m", rating:4.6, rev:891,  enrolled:"4.1K",price:"Free trial", priceColor:"#22d3ee", color:"#22d3ee", tags:["Interactive Maps"],         tagPill:["pill-cyan"],              badge:null   },
  { id:10, icon:"🎨", title:"Digital Art & Illustration",        sub:"Art & Design",     level:"Beginner",     dur:"6h 20m", rating:4.7, rev:1534, enrolled:"7.2K",price:"₹399",       priceColor:"#f06595", color:"#f06595", tags:["Creative","Tools Included"],tagPill:["pill-pink","pill-purple"], badge:"NEW"  },
  { id:11, icon:"⚛️", title:"Electromagnetism & Waves",          sub:"Physics",          level:"Advanced",     dur:"8h 00m", rating:4.7, rev:908,  enrolled:"3.5K",price:"₹549",       priceColor:"#f55f5f", color:"#f55f5f", tags:["Formula Sheet"],           tagPill:["pill-red"],               badge:null   },
  { id:12, icon:"🎵", title:"Music Theory: Chords & Scales",     sub:"Music",            level:"Beginner",     dur:"5h 00m", rating:4.8, rev:763,  enrolled:"3.1K",price:"Try Free",   priceColor:"#22d3ee", color:"#22d3ee", tags:["Interactive"],              tagPill:["pill-cyan"],              badge:null   },
];

const FILTERS = ["All","Mathematics","Science","English","Computer Science","History","Biology","Physics"];
const LEVEL_COLORS: Record<string,string> = {
  "Beginner":"pill-green","Intermediate":"pill-orange","Advanced":"pill-red",
};

export default function ExploreSection() {
  const [filter, setFilter] = useState("All");

  const list = filter === "All" ? COURSES : COURSES.filter(c => c.sub === filter);

  return (
    <div className="mt-5">

      {/* ── Subject Grid ── */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="sec-head">Explore by Subject</h3>
        <span className="link-more">All subjects →</span>
      </div>

      <div className="grid grid-cols-6 gap-3 mb-6">
        {SUBJECTS.map(s => (
          <button
            key={s.name}
            onClick={() => setFilter(s.name === filter ? "All" : s.name)}
            className="card p-3 flex flex-col items-center gap-1.5 text-center cursor-pointer hover:scale-[1.04] transition-transform active:scale-100"
            style={filter === s.name ? { borderColor: s.color, boxShadow: `0 0 0 2px ${s.color}33` } : {}}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: s.bg }}>
              {s.icon}
            </div>
            <p className="text-[11px] font-600 leading-tight" style={{ color: "var(--color-text-1)" }}>{s.name}</p>
            <p className="text-[9px]" style={{ color: "var(--color-text-3)" }}>{s.n} courses</p>
          </button>
        ))}
      </div>

      {/* ── Course Catalog ── */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="sec-head">Popular Courses</h3>
        <span className="link-more">See all →</span>
      </div>

      {/* Filter pills */}
      <div className="scroll-x flex gap-2 mb-4 pb-1">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-600 transition-all"
            style={
              filter === f
                ? { background: "var(--color-blue)", color: "white", boxShadow: "var(--shadow-blue)" }
                : { background: "white", color: "var(--color-text-2)", border: "1px solid var(--color-border)" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Course grid — 2 columns, compact list cards */}
      <div className="grid grid-cols-2 gap-3">
        {list.map(c => (
          <div key={c.id} className="card p-4 cursor-pointer group hover:scale-[1.01] transition-transform">
            <div className="flex gap-3">
              {/* Coloured left accent */}
              <div
                className="w-[4px] rounded-full flex-shrink-0 self-stretch"
                style={{ background: c.color }}
              />

              {/* Subject icon */}
              <div
                className="subj-icon w-11 h-11 text-2xl flex-shrink-0"
                style={{ background: `${c.color}14`, borderRadius: 12 }}
              >
                {c.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                      <p className="text-[13px] font-700 leading-tight" style={{ color: "var(--color-text-1)" }}>
                        {c.title}
                      </p>
                      {c.badge && (
                        <span className={c.badge === "HOT" ? "badge-hot" : "badge-new"}>{c.badge}</span>
                      )}
                    </div>
                    <p className="text-[11px]" style={{ color: "var(--color-text-3)" }}>{c.sub}</p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <span className="star-rating text-xs">★</span>
                  <span className="text-[11px] font-600" style={{ color: "var(--color-text-1)" }}>{c.rating}</span>
                  <span className="text-[11px]" style={{ color: "var(--color-text-3)" }}>({c.rev.toLocaleString()})</span>
                  <span className="text-[11px]" style={{ color: "var(--color-text-3)" }}>· {c.enrolled} enrolled</span>
                  <span className="text-[11px]" style={{ color: "var(--color-text-3)" }}>· {c.dur}</span>
                </div>

                {/* Tags + action */}
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  <span className={`pill ${LEVEL_COLORS[c.level]}`}>{c.level}</span>
                  {c.tags.slice(0,1).map((t,i) => (
                    <span key={t} className={`pill ${c.tagPill[i]}`}>{t}</span>
                  ))}
                  <button
                    className="btn btn-sm ml-auto"
                    style={{
                      background: c.price.startsWith("₹") ? `${c.color}14` : `linear-gradient(135deg,${c.color},${c.color}cc)`,
                      color: c.price.startsWith("₹") ? c.color : "white",
                      borderRadius: 8,
                      fontSize: "0.7rem",
                      padding: "4px 12px",
                      boxShadow: c.price.startsWith("₹") ? "none" : `0 3px 10px ${c.color}44`,
                    }}
                  >
                    {c.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
