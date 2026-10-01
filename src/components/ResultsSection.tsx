"use client";

const stats = [
  {
    value: "92%",
    label: "Pass Rate",
    description: "Of our students pass their exams on the first attempt",
    icon: "🎯",
    color: "#4f6ef7",
    bg: "#eff6ff",
  },
  {
    value: "4.9/5",
    label: "Avg. Rating",
    description: "Based on 50,000+ student reviews across all courses",
    icon: "⭐",
    color: "#fed330",
    bg: "#fffbeb",
  },
  {
    value: "300+",
    label: "Expert Tutors",
    description: "Verified educators from top universities worldwide",
    icon: "👨‍🏫",
    color: "#26de81",
    bg: "#f0fdf4",
  },
  {
    value: "10,000+",
    label: "Students",
    description: "Active learners achieving their academic goals daily",
    icon: "🎓",
    color: "#7c5cbf",
    bg: "#f5f3ff",
  },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    grade: "Class 12 Student",
    text: "LearnHub helped me score 98% in my board exams! The AI-powered study plans and live tutoring sessions made all the difference.",
    rating: 5,
    avatar: "👦",
    tag: "Mathematics Topper",
    color: "#4f6ef7",
  },
  {
    name: "Sneha Patel",
    grade: "Class 10 Student",
    text: "The personalized learning path understood exactly where I was struggling. My grades improved from 65% to 89% in just 3 months!",
    rating: 5,
    avatar: "👧",
    tag: "Science Excellence",
    color: "#26de81",
  },
  {
    name: "Rohan Gupta",
    grade: "JEE Aspirant",
    text: "The practice tests and detailed analytics helped me identify weak areas. Cracked JEE Advanced with AIR 847 — couldn't have done it without LearnHub!",
    rating: 5,
    avatar: "👨‍🎓",
    tag: "JEE Advanced AIR 847",
    color: "#ff9f43",
  },
];

export default function ResultsSection() {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3
          className="section-title text-2xl mb-2"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Results that speak for themselves
        </h3>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
          Thousands of students are achieving their academic dreams with LearnHub
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="card p-5 text-center"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3"
              style={{ background: stat.bg }}
            >
              {stat.icon}
            </div>
            <p
              className="text-3xl font-800 mb-0.5"
              style={{
                color: stat.color,
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </p>
            <p className="text-sm font-700 mb-1" style={{ color: "var(--color-text-primary)" }}>
              {stat.label}
            </p>
            <p className="text-xs leading-snug" style={{ color: "var(--color-text-secondary)" }}>
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div key={t.name} className="card p-5">
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="star-rating text-base">
                  ★
                </span>
              ))}
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: `${t.color}15` }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-700" style={{ color: "var(--color-text-primary)" }}>
                  {t.name}
                </p>
                <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  {t.grade}
                </p>
              </div>
              <span
                className="tag ml-auto"
                style={{ background: `${t.color}18`, color: t.color }}
              >
                {t.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer Banner */}
      <div
        className="mt-6 rounded-2xl p-6 flex items-center justify-between relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e2d6b 0%, #0d1234 100%)" }}
      >
        <div
          className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full opacity-10"
          style={{ background: "#ff9f43" }}
        />
        <div>
          <h4
            className="text-xl font-800 text-white mb-1"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready to transform your learning? 🚀
          </h4>
          <p style={{ color: "#8892b0", fontSize: "0.875rem" }}>
            Join 10,000+ students already achieving their goals. Start free today.
          </p>
        </div>
        <div className="flex gap-3 relative z-10">
          <button className="btn-primary px-6 py-2.5">
            Get Started Free
          </button>
          <button
            className="px-6 py-2.5 rounded-xl font-600 text-sm transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
          >
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}
