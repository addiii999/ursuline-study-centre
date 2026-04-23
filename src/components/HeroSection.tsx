export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Faint Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
        <img src="/logo.jpeg" alt="Watermark" className="w-[80vw] max-w-[800px] object-contain rounded-full blur-[2px]" />
      </div>

      {/* Live badge */}
      <div className="relative z-10 fade-in-up fade-in-up-1 mb-6 sm:mb-8 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
        <span className="text-white/70 text-[10px] sm:text-xs font-[family-name:var(--font-inter)] tracking-wide">
          ✦ Ursuline Study Centre — Now Enrolling
        </span>
        <span className="text-[#ef233c] text-xs">→</span>
      </div>

      {/* Main heading */}
      <h1 className="relative z-10 fade-in-up fade-in-up-2 font-[family-name:var(--font-manrope)] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight mb-6"
        style={{ fontSize: "clamp(2.25rem, 8vw, 6rem)" }}
      >
        <span className="gradient-text-hero block">A Safe & Focused</span>
        <span className="gradient-text-hero">Environment for </span>
        <span
          className="scribble-underline"
          style={{ color: "#ef233c" }}
        >
          Achievers
        </span>
      </h1>

      {/* Subtext */}
      <p className="fade-in-up fade-in-up-3 text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 font-[family-name:var(--font-inter)] leading-relaxed">
        Located within the trusted campus of <span className="text-white/80 font-semibold">Ursuline Convent School & Inter College</span>, we provide a safe, disciplined, and high-quality learning environment designed for excellence.
      </p>

      {/* CTA Buttons */}
      <div className="fade-in-up fade-in-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20 w-full sm:w-auto px-4 sm:px-0">
        {/* Primary spinning-border CTA */}
        <a href="#contact" className="spinning-border-btn w-full sm:w-auto" id="hero-cta-primary">
          <span className="justify-center">
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
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/8 border border-white/10 text-white/75 text-sm font-semibold hover:bg-white/12 hover:border-white/20 hover:text-white transition-all duration-300 font-[family-name:var(--font-inter)] w-full sm:w-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Explore Features
        </a>
      </div>

      {/* Trust Highlights */}
      <div className="fade-in-up fade-in-up-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 sm:mb-20 w-full max-w-5xl px-4">
        {[
          { label: "Secure Campus", icon: "🛡️", desc: "Located inside Ursuline Convent" },
          { label: "Girls Institution", icon: "👩‍🎓", desc: "Safe & Ideal Environment" },
          { label: "Disciplined System", icon: "📋", desc: "Monitored Study Flow" },
          { label: "Limited Batches", icon: "👥", desc: "Personal Attention Only" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl grayscale-[0.5]">
              {item.icon}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-xs font-[family-name:var(--font-manrope)]">{item.label}</p>
              <p className="text-white/40 text-[10px] font-[family-name:var(--font-inter)]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats strip */}
      <div
        id="stats"
        className="fade-in-up fade-in-up-5 w-full max-w-5xl border-t border-white/8 pt-8 sm:pt-10 grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-0"
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
              className="font-[family-name:var(--font-manrope)] font-extrabold text-2xl sm:text-3xl md:text-4xl leading-none mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </span>
            <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-[family-name:var(--font-inter)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
