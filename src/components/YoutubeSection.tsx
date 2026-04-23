export default function YoutubeSection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-10 reveal">
        <span className="text-[#ef233c] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-3 block">
          See It In Action
        </span>
        <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-3xl md:text-4xl gradient-text-hero tracking-tight">
          A Day at Ursuline
        </h2>
        <p className="text-white/40 mt-3 text-sm font-[family-name:var(--font-inter)]">
          Get a feel for our teaching approach and campus culture.
        </p>
      </div>

      <div
        className="reveal relative rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 0 40px rgba(239,35,60,0.15), 0 0 80px rgba(239,35,60,0.06)",
          border: "1px solid rgba(239,35,60,0.2)",
        }}
      >
        {/* Glow edge */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(239,35,60,0.05) 0%, transparent 50%, rgba(212,168,67,0.03) 100%)",
          }}
        />
        <div className="aspect-video w-full">
          <iframe
            id="youtube-intro-video"
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="Ursuline Study Centre Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
