"use client";

const stats = [
  {
    value: "92%",
    label: "Pass Rate",
    description: "Students achieving first-attempt exam success",
    icon: "🎯",
  },
  {
    value: "4.9/5",
    label: "Average Rating",
    description: "Verified ratings across 50,000+ course reviews",
    icon: "⭐",
  },
  {
    value: "300+",
    label: "Verified Educators",
    description: "Curated tutors from global top institutions",
    icon: "👨‍🏫",
  },
  {
    value: "10,000+",
    label: "Active Learners",
    description: "Students building daily learning consistency",
    icon: "🎓",
  },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    grade: "Class 12 Student",
    text: "LearnHub helped me score 98% in my final board exams. The structured lesson plans and instant AI answers saved me hours every week.",
    avatar: "👦",
    tag: "98% Board Score",
  },
  {
    name: "Sneha Patel",
    grade: "Class 10 Student",
    text: "The adaptive study path pinpointed exact concepts I was confused about. My science scores went from 65% to 89% in under 3 months.",
    avatar: "👧",
    tag: "Science Distinction",
  },
  {
    name: "Rohan Gupta",
    grade: "JEE Aspirant",
    text: "Detailed mock tests and performance analytics gave me full clarity. Cracked JEE Advanced with AIR 847 — couldn't be happier!",
    avatar: "👨‍🎓",
    tag: "JEE AIR 847",
  },
];

export default function ResultsSection() {
  return (
    <section className="mt-12 pt-8 border-t border-slate-200/80 mb-12">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
          Proven Academic Excellence
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Empowering thousands of students with structured tools, personal tutoring, and AI guidance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 text-center shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl mx-auto mb-3">
              {stat.icon}
            </div>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
              {stat.value}
            </p>
            <p className="text-xs font-bold text-slate-800 mb-1">{stat.label}</p>
            <p className="text-[11px] text-slate-400 leading-normal">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
                ★★★★★
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-base">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{t.name}</p>
                  <p className="text-[10px] text-slate-400">{t.grade}</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                {t.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h4 className="text-xl font-bold tracking-tight text-white mb-1">
            Ready to Elevate Your Learning Journey?
          </h4>
          <p className="text-xs text-slate-300">
            Join over 10,000 active students achieving better results every day.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors">
            Get Started Free &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
