export default function BentoGrid() {
  return (
    <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="text-center mb-14 reveal">
        <span className="text-[#ef233c] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-3 block">
          What We Offer
        </span>
        <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-4xl md:text-5xl gradient-text-hero tracking-tight">
          Everything You Need to Excel
        </h2>
        <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm font-[family-name:var(--font-inter)]">
          Our system is built around the student — from progress tracking to personal mentoring.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

        {/* Big card — spans 2 cols, 2 rows on md */}
        <div className="bento-card md:col-span-2 md:row-span-2 p-8 reveal floating" style={{ minHeight: "380px" }}>
          {/* Gradient accent top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ef233c] to-transparent opacity-50" />

          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ef233c] animate-pulse" />
            <span className="text-[#ef233c] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)]">
              Live Tracking
            </span>
          </div>

          <h3 className="font-[family-name:var(--font-manrope)] font-bold text-2xl text-white mb-2">
            Student Progress System
          </h3>
          <p className="text-white/40 text-sm mb-8 font-[family-name:var(--font-inter)]">
            Real-time performance tracking with test scores, attendance, and subject-wise analytics.
          </p>

          {/* Fake UI: progress bars */}
          <div className="glass rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60 text-xs font-[family-name:var(--font-inter)]">Student Performance Overview</span>
              <span className="text-[#4ade80] text-xs font-semibold">↑ +12% this month</span>
            </div>
            {[
              { name: "Arjun S.", subject: "Mathematics", score: 88, color: "#ef233c" },
              { name: "Priya M.", subject: "Science", score: 92, color: "#4ade80" },
              { name: "Rohan K.", subject: "English", score: 75, color: "#d4a843" },
              { name: "Sneha P.", subject: "Social Studies", score: 95, color: "#f59e0b" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `${s.color}33`, border: `1px solid ${s.color}55` }}>
                  {s.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-white/70 text-xs font-[family-name:var(--font-inter)] truncate">{s.name}</span>
                    <span className="text-white/50 text-xs">{s.score}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${s.score}%`, background: s.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Batches */}
        <div className="bento-card p-6 reveal">
          <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: "rgba(239,35,60,0.15)", border: "1px solid rgba(239,35,60,0.25)" }}>
            <svg className="w-5 h-5 text-[#ef233c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-manrope)] font-bold text-lg text-white mb-2">Small Batches</h3>
          <p className="text-white/40 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
            Max 15 students per batch ensures every student gets focused attention.
          </p>
          <div className="mt-4 flex gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[8px] text-white/40">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="w-6 h-6 rounded-full bg-[#ef233c]/20 border border-[#ef233c]/30 flex items-center justify-center text-[8px] text-[#ef233c]">
              +7
            </div>
          </div>
        </div>

        {/* Doubt Solving */}
        <div className="bento-card p-6 reveal">
          <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.25)" }}>
            <svg className="w-5 h-5 text-[#d4a843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-manrope)] font-bold text-lg text-white mb-2">Doubt Solving</h3>
          <p className="text-white/40 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
            Daily dedicated doubt sessions — no question goes unanswered.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="pill-green">Daily Sessions</span>
            <span className="text-white/30 text-xs">∞ Queries</span>
          </div>
        </div>

        {/* Regular Tests */}
        <div className="bento-card p-6 reveal">
          <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.25)" }}>
            <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-manrope)] font-bold text-lg text-white mb-2">Regular Tests</h3>
          <p className="text-white/40 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
            Weekly chapter tests and monthly full-syllabus mock exams.
          </p>
          <div className="mt-4 grid grid-cols-4 gap-1">
            {["W1","W2","W3","W4"].map((w,i) => (
              <div key={i} className="text-center py-1.5 rounded-lg text-xs font-semibold"
                style={{ background: i < 3 ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.05)", color: i < 3 ? "#f59e0b" : "#ffffff40" }}>
                {w}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Attention */}
        <div className="bento-card p-6 reveal">
          <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.25)" }}>
            <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-manrope)] font-bold text-lg text-white mb-2">Personal Attention</h3>
          <p className="text-white/40 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
            Each student gets individual feedback and personalised study plans.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-4/5 bg-[#4ade80] rounded-full" />
            </div>
            <span className="text-[#4ade80] text-xs font-semibold">100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
