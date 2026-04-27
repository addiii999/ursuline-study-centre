import React from 'react';
import Image from 'next/image';

const pillBadges = [
  'Only Girls Institute',
  'JAC & CBSE Boards',
  'English + Hindi Medium',
  'Classes 9-12',
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

      <div className="container hero-content" style={{ position: 'relative', zIndex: 2, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow badge */}
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', marginBottom: '24px',
            border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '100px',
            background: 'rgba(201,168,76,0.08)',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--gold-light)', textTransform: 'uppercase' }}>
              Admissions Open · 2026-27 Session
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-shimmer animate-fade-up delay-1 hero-main-title" style={{ 
            fontWeight: 400, 
            lineHeight: 1.1, 
            marginBottom: '14px', 
            fontFamily: '"Haettenschweiler", "Impact", "Arial Narrow Bold", sans-serif',
            textShadow: '0 4px 15px rgba(0,0,0,0.4)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}>
            Ursuline Study Centre
          </h1>

          {/* Visionary Banner */}
          <div className="animate-fade-up delay-1" style={{ marginBottom: '32px' }}>
            <div className="visionary-banner">
              UNDER THE VISIONARY GUIDANCE OF SR. DR. MARY GRACE
            </div>
          </div>
          <p className="animate-fade-up delay-2" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '6px', fontWeight: 400 }}>
            Empowering Girls. Building Futures.
          </p>
          <p className="animate-fade-up delay-2" style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(0.78rem, 1.5vw, 0.9rem)', color: 'rgba(201,168,76,0.65)', letterSpacing: '0.05em', marginBottom: '24px' }}>
            बेटियों का भविष्य, हमारी ज़िम्मेदारी
          </p>

          {/* Gold divider */}
          <div className="animate-fade-up delay-2" style={{ margin: '0 auto 28px', width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

          {/* Sub headline */}
          <p className="animate-fade-up delay-3" style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.72)', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.8 }}>
            A premium, girls-only coaching institute located near Ursuline Convent School, Purliya Road, Ranchi - offering academic, competitive, and vocational excellence.
          </p>

          {/* Powered By Trust Badge */}
          <div className="animate-fade-up delay-3" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.2)', padding: '5px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}>Powered by</span>
              <div style={{ background: 'white', padding: '2px 7px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={75} height={18} style={{ objectFit: 'contain', width: 'auto', height: '14px' }} />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', marginBottom: '10px' }}>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-[280px] sm:max-w-none">
              <a href="#contact" className="btn-gold w-full sm:w-auto" style={{ minWidth: '170px' }}>Apply Now</a>
              <a
                href="https://play.google.com/store/apps/details?id=com.vefytech.academicorigin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  minWidth: '170px',
                  minHeight: '50px',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'white',
                  fontFamily: 'var(--sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.13)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                }}
              >
                {/* Play Store icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M3.18 23.76a1.98 1.98 0 0 1-.63-.48L13.5 12 2.55.72a1.98 1.98 0 0 1 .63-.48C3.6.06 4.12.25 4.6.53l13.2 7.63-3.76 3.84L3.18 23.76z" fill="rgba(255,255,255,0.85)"/>
                  <path d="M20.44 15.1 17.8 13.6l-4.3-4.44 4.3-4.43 2.64-1.5c.9-.52 1.56-.1 1.56.95v9.96c0 1.06-.66 1.47-1.56.96z" fill="rgba(255,255,255,0.85)"/>
                  <path d="M2.55.72 13.5 12 3.18 23.76c-.5-.47-.68-1.2-.68-2V2.72c0-.8.18-1.53.68-2z" fill="rgba(255,255,255,0.6)"/>
                  <path d="M17.8 13.6 4.6 21.23c-.48.28-1 .47-1.42.53L13.5 12l4.3 1.6z" fill="rgba(255,255,255,0.7)"/>
                </svg>
                Get Our App
              </a>
            </div>

            {/* App availability micro-badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#34d399', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
                Official app available on Google Play - Free
              </span>
            </div>
          </div>
          <p className="animate-fade-up delay-4" style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'rgba(201,168,76,0.55)', marginBottom: '44px', letterSpacing: '0.04em' }}>
            आज ही अपना प्रवेश सुनिश्चित करें
          </p>

          {/* Pill badges */}
          <div className="animate-fade-up delay-5 pill-badge-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {pillBadges.map(b => (
              <span key={b} className="whitespace-normal text-center leading-tight" style={{
                fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 500,
                padding: '6px 14px',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '100px',
                color: 'rgba(240,216,152,0.85)',
                background: 'rgba(255,255,255,0.04)',
                letterSpacing: '0.02em'
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
