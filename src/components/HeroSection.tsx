import React from 'react';

const pillBadges = [
  'Only Girls Institute',
  'JAC & CBSE Boards',
  'English + Hindi Medium',
  'Classes 9–12',
];

export default function HeroSection() {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '92vh',
      background: 'linear-gradient(135deg, var(--maroon) 0%, #5a0000 40%, #3a0000 100%)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Gold mesh texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.12) 0%, transparent 60%),
                          radial-gradient(ellipse 40% 80% at 10% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)`,
      }} />
      {/* Top gold border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)',
      }} />
      {/* Bottom gold border */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '60px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow badge */}
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 18px', marginBottom: '28px',
            border: '1px solid rgba(201,168,76,0.5)',
            borderRadius: '100px',
            background: 'rgba(201,168,76,0.1)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--gold-light)', textTransform: 'uppercase' }}>
              Admissions Open · 2026–27 Session
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-shimmer animate-fade-up delay-1" style={{ 
            fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', 
            fontWeight: 400, 
            lineHeight: 1, 
            marginBottom: '16px', 
            fontFamily: '"Haettenschweiler", "Impact", "Arial Narrow Bold", sans-serif',
            letterSpacing: '0.04em',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
            textTransform: 'uppercase'
          }}>
            Ursuline Study Centre
          </h1>
          <p className="animate-fade-up delay-2" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.75)', marginBottom: '8px', fontWeight: 400 }}>
            Empowering Girls. Building Futures.
          </p>
          <p className="animate-fade-up delay-2" style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.06em', marginBottom: '24px' }}>
            बेटियों का भविष्य, हमारी ज़िम्मेदारी
          </p>

          {/* Gold divider */}
          <div className="animate-fade-up delay-2" style={{ margin: '0 auto 28px', width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

          {/* Sub headline */}
          <p className="animate-fade-up delay-3" style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.72)', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            A premium, girls-only coaching institute located near Ursuline Convent School, Purliya Road, Ranchi — offering academic, competitive, and vocational excellence.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '12px' }}>
            <a href="#contact" className="btn-gold" style={{ minWidth: '160px' }}>Apply Now</a>
            <a href="#courses" className="btn-outline" style={{ minWidth: '160px' }}>Know More</a>
          </div>
          <p className="animate-fade-up delay-4" style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'rgba(201,168,76,0.55)', marginBottom: '44px', letterSpacing: '0.04em' }}>
            आज ही अपना प्रवेश सुनिश्चित करें
          </p>

          {/* Pill badges */}
          <div className="animate-fade-up delay-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {pillBadges.map(b => (
              <span key={b} style={{
                fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 500,
                padding: '6px 14px',
                border: '1px solid rgba(201,168,76,0.35)',
                borderRadius: '100px',
                color: 'var(--gold-light)',
                background: 'rgba(255,255,255,0.05)',
              }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="white" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}
