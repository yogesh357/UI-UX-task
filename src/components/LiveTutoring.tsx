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
    available: true,
    emoji: "👨‍🏫",
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
    available: true,
    emoji: "👩‍🏫",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    subject: "Computer Science",
    rating: 4.8,
    reviews: 2103,
    sessions: "3.1K sessions",
    price: "₹549/hr",
    tags: ["Ex-Google", "Python Lead"],
    available: false,
    emoji: "👨‍💻",
  },
  {
    id: 4,
    name: "Meera Iyer",
    subject: "Chemistry & Biology",
    rating: 4.7,
    reviews: 643,
    sessions: "980 sessions",
    price: "₹449/hr",
    tags: ["AIIMS Med", "NEET Specialist"],
    available: true,
    emoji: "👩‍⚕️",
  },
];

export default function LiveTutoring() {
  return (
    <section className="mt-12 pt-8 border-t border-slate-200/80">
      {/* Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 mb-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            24 Expert Tutors Available Now
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white mb-1">
            Live 1-on-1 Personalized Tutoring
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Get instant help with complex concepts or exam preparation. First 15-min trial session is free.
          </p>
        </div>
        <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex-shrink-0">
          Book Trial Session &rarr;
        </button>
      </div>

      {/* Tutor Cards Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-lg font-bold text-slate-900">Featured Educators</h4>
          <p className="text-xs text-slate-500">Verified tutors with top academic feedback</p>
        </div>
        <span className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
          See all tutors &rarr;
        </span>
      </div>

      {/* Tutor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl">
                  {tutor.emoji}
                </div>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    tutor.available
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tutor.available ? "bg-emerald-500" : "bg-slate-400"}`} />
                  {tutor.available ? "Online" : "Busy"}
                </span>
              </div>

              <h5 className="text-sm font-bold text-slate-900">{tutor.name}</h5>
              <p className="text-xs text-slate-500 mb-2">{tutor.subject}</p>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
                <span className="text-amber-500 font-bold">★ {tutor.rating}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400">({tutor.reviews})</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {tutor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-sm font-bold text-slate-900">{tutor.price}</span>
              <button
                disabled={!tutor.available}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  tutor.available
                    ? "bg-slate-900 hover:bg-slate-800 text-white cursor-pointer"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                {tutor.available ? "Schedule" : "Unavailable"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
