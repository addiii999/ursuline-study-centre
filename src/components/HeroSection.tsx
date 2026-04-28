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
              Limited Seats Available · 2026-27 Session
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-shimmer animate-fade-up delay-1 hero-main-title" style={{ 
            fontWeight: 400, 
            lineHeight: 1.1, 
            marginBottom: '14px', 
            fontFamily: '"Haettenschweiler", "Impact", "Arial Narrow Bold", sans-serif',
            textShadow: '0 4px 15px rgba(0,0,0,0.4)',
            textTransform: 'uppercase'
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

          <p className="animate-fade-up delay-3" style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.72)', maxWidth: '650px', margin: '0 auto 24px', lineHeight: 1.8 }}>
            <strong style={{ color: 'var(--gold-light)', fontWeight: 600 }}>Secure Your Daughter’s Future with Trusted Academic Mentorship.</strong><br/>
            Ranchi’s premium girls-only coaching institute offering top-tier guidance for Classes 9-12 (JAC & CBSE), specialized in JEE, NEET, and Board preparation.
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
              <a href="#contact" className="btn-gold w-full sm:w-auto" style={{ minWidth: '170px' }}>Book Free Counselling</a>
              <a
                href="https://play.google.com/store/apps/details?id=com.vefytech.academicorigin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-app-playstore"
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

              >
                {/* Play Store icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M2.5 1.5L13.5 12.5L2.5 23.5V1.5Z" fill="#00A0FF"/>
                  <path d="M13.5 12.5L18 8L2.5 1.5L13.5 12.5Z" fill="#00F076"/>
                  <path d="M13.5 12.5L2.5 23.5L18 17L13.5 12.5Z" fill="#FF3A44"/>
                  <path d="M13.5 12.5L18 17L22 14.5L18 8L13.5 12.5Z" fill="#FFC900"/>
                </svg>
                Academic Origin App
              </a>
            </div>

            {/* App availability micro-badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#34d399', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
                Official learning app by Academic Origin - Free
              </span>
            </div>
          </div>
          <p className="animate-fade-up delay-4" style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'rgba(201,168,76,0.8)', marginBottom: '44px', letterSpacing: '0.04em', fontWeight: 600 }}>
            Priority Admission Open • Secure Your Seat Today
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
