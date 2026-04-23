export default function Testimonials() {
  const reviews = [
    {
      name: "Meera Krishnan",
      role: "Class X Student",
      text: "Ursuline's concept-first approach changed how I study. I went from 65% to 91% in Maths in just 3 months!",
      stars: 5,
    },
    {
      name: "Vikram Shetty",
      role: "Parent of Class IX Student",
      text: "The personal attention my son receives is unmatched. The faculty truly cares. Best investment for his education.",
      stars: 5,
    },
    {
      name: "Anjali Nair",
      role: "Class XII — PCM",
      text: "Weekly tests kept me exam-ready all year. I cleared my board exams with 94%! Couldn't have done it without USC.",
      stars: 5,
    },
  ];

  return (
    <section className="relative z-10 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(239,35,60,0.08) 0%, rgba(212,168,67,0.06) 50%, rgba(239,35,60,0.04) 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef233c]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-[#d4a843] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] block mb-3">Student Reviews</span>
          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-4xl md:text-5xl text-white tracking-tight">Trusted by 500+ Students</h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm font-[family-name:var(--font-inter)]">Real results from real students. Our 95% success rate speaks for itself.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bento-card p-6 reveal">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-[family-name:var(--font-inter)] mb-5 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #ef233c, #d4a843)" }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm font-[family-name:var(--font-manrope)]">{r.name}</p>
                  <p className="text-white/40 text-xs font-[family-name:var(--font-inter)]">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
