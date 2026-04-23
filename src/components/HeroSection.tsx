export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20"
    >
      {/* Live badge */}
      <div className="fade-in-up fade-in-up-1 mb-8 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
        <span className="text-white/70 text-xs font-[family-name:var(--font-inter)] tracking-wide">
          ✦ Ursuline Study Centre — Now Enrolling
        </span>
        <span className="text-[#ef233c] text-xs">→</span>
      </div>

      {/* Main heading */}
      <h1 className="fade-in-up fade-in-up-2 font-[family-name:var(--font-manrope)] font-extrabold leading-[1.05] tracking-tight mb-6"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
      >
        <span className="gradient-text-hero block">Build Your Future</span>
        <span className="gradient-text-hero">with </span>
        <span
          className="scribble-underline"
          style={{ color: "#ef233c" }}
        >
          Precision
        </span>
        <span className="gradient-text-hero"> Learning</span>
      </h1>

      {/* Subtext */}
      <p className="fade-in-up fade-in-up-3 text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 font-[family-name:var(--font-inter)] leading-relaxed">
        Expert coaching for every student — from concept clarity to exam
        mastery. Small batches, personal attention, and weekly tests to keep
        you always ahead.
      </p>

      {/* CTA Buttons */}
      <div className="fade-in-up fade-in-up-4 flex flex-wrap items-center justify-center gap-4 mb-20">
        {/* Primary spinning-border CTA */}
        <a href="#contact" className="spinning-border-btn" id="hero-cta-primary">
          <span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Enroll Now →
          </span>
        </a>

        {/* Secondary button */}
        <a
          href="#features"
          id="hero-cta-secondary"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/8 border border-white/10 text-white/75 text-sm font-semibold hover:bg-white/12 hover:border-white/20 hover:text-white transition-all duration-300 font-[family-name:var(--font-inter)]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Explore Features
        </a>
      </div>

      {/* Stats strip */}
      <div
        id="stats"
        className="fade-in-up fade-in-up-5 w-full max-w-5xl border-t border-white/8 pt-10 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0"
      >
        {[
          { value: "500+", label: "Students Trained", color: "#ffffff" },
          { value: "95%", label: "Success Rate", color: "#d4a843" },
          { value: "10+", label: "Expert Faculty", color: "#4ade80" },
          { value: "Weekly", label: "Test System", color: "#ef233c" },
          { value: "100%", label: "Concept Clarity", color: "#f59e0b" },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-item flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span
              className="font-[family-name:var(--font-manrope)] font-extrabold text-3xl md:text-4xl leading-none mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
