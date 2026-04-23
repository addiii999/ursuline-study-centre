export default function Background() {
  return (
    <>
      {/* Starfield layers */}
      <div className="stars-small" aria-hidden="true" />
      <div className="stars-big" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Radial glows */}
      <div className="radial-glow-red" aria-hidden="true" />
      <div className="radial-glow-amber" aria-hidden="true" />

      {/* Dark red subtle gradient bg */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 50% 0%, #1a0a0588 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
