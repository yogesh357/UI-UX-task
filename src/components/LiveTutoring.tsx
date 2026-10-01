"use client";

const tutors = [
  {
    id: 1,
    name: "Aditya Jha",
    subject: "Mathematics & Physics",
    rating: 4.9,
    reviews: 1284,
    sessions: "2.4K sessions",
    price: "₹499/hr",
    tags: ["IIT Graduate", "Top Tutor"],
    tagColors: ["#4f6ef7", "#26de81"],
    available: true,
    emoji: "👨‍🏫",
    color: "#4f6ef7",
  },
  {
    id: 2,
    name: "Priya Singh",
    subject: "English & Literature",
    rating: 4.95,
    reviews: 892,
    sessions: "1.8K sessions",
    price: "₹399/hr",
    tags: ["Oxford Grad", "Native Speaker"],
    tagColors: ["#ff9f43", "#fd79a8"],
    available: true,
    emoji: "👩‍🏫",
    color: "#ff9f43",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    subject: "Computer Science",
    rating: 4.8,
    reviews: 2103,
    sessions: "3.1K sessions",
    price: "₹549/hr",
    tags: ["Google Alumnus", "Python Expert"],
    tagColors: ["#7c5cbf", "#45aaf2"],
    available: false,
    emoji: "👨‍💻",
    color: "#7c5cbf",
  },
  {
    id: 4,
    name: "Meera Iyer",
    subject: "Chemistry & Biology",
    rating: 4.7,
    reviews: 643,
    sessions: "980 sessions",
    price: "₹449/hr",
    tags: ["AIIMS Doctor", "NEET Expert"],
    tagColors: ["#00cec9", "#26de81"],
    available: true,
    emoji: "👩‍⚕️",
    color: "#00cec9",
  },
];

export default function LiveTutoring() {
  return (
    <div className="mb-8">
      {/* Banner */}
      <div
        className="rounded-2xl p-6 mb-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1234 0%, #1e2d6b 100%)" }}
      >
        <div
          className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full opacity-10"
          style={{ background: "#4f6ef7" }}
        />
        <div
          className="absolute bottom-[-20px] left-[40%] w-24 h-24 rounded-full opacity-10"
          style={{ background: "#ff9f43" }}
        />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-600 mb-3"
              style={{ background: "rgba(38,222,129,0.2)", color: "#26de81" }}
            >
              🟢 Live Now — 24 tutors available
            </div>
            <h3
              className="text-xl font-800 text-white mb-1"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Live Tutoring
            </h3>
            <p className="text-sm" style={{ color: "#8892b0" }}>
              Book a 1-on-1 session with expert tutors. First session free!
            </p>
          </div>
          <button className="btn-orange px-6 py-2.5">
            Book a Session →
          </button>
        </div>
      </div>

      {/* Tutor Cards */}
      <div className="grid grid-cols-4 gap-4">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="card p-4 cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${tutor.color}15` }}
              >
                {tutor.emoji}
              </div>
              <span
                className="text-xs font-600 px-2 py-0.5 rounded-full"
                style={
                  tutor.available
                    ? { background: "#f0fdf4", color: "#26de81" }
                    : { background: "#f8faff", color: "#94a3b8" }
                }
              >
                {tutor.available ? "🟢 Available" : "🔴 Busy"}
              </span>
            </div>

            <p className="text-sm font-700" style={{ color: "var(--color-text-primary)" }}>
              {tutor.name}
            </p>
            <p className="text-xs mb-2" style={{ color: "var(--color-text-secondary)" }}>
              {tutor.subject}
            </p>

            <div className="flex items-center gap-1.5 mb-2">
              <span className="star-rating">★</span>
              <span className="text-xs font-600" style={{ color: "var(--color-text-primary)" }}>
                {tutor.rating}
              </span>
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                ({tutor.reviews.toLocaleString()})
              </span>
            </div>

            <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>
              {tutor.sessions}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {tutor.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="tag"
                  style={{
                    background: `${tutor.tagColors[i]}18`,
                    color: tutor.tagColors[i],
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-700" style={{ color: tutor.color }}>
                {tutor.price}
              </span>
              <button
                className="text-xs font-600 px-3 py-1.5 rounded-lg transition-all"
                style={{ background: `${tutor.color}15`, color: tutor.color }}
                disabled={!tutor.available}
              >
                {tutor.available ? "Book Now" : "Join Waitlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
