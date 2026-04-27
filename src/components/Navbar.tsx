"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Admission', href: '#admission' },
  { label: 'Contact', href: '#contact' },
];

const marqueeText = [
  '📚 Admissions Open 2026–27 · प्रवेश प्रारंभ | Only Girls Institute',
  '✨ Classes 9th to 12th | JAC & CBSE Boards',
  '🎯 JEE · NEET · CLAT · AI · Programming · DCA · Tally',
  '📍 Near Ursuline Convent School, Purliya Road, Ranchi',
  '💛 Powered by Academic Origin · श्रेष्ठ शिक्षा, उज्ज्वल भविष्य',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const marqueeItems = [...marqueeText, ...marqueeText];

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar">
        <div className="marquee-track">
          {marqueeItems.map((t, i) => (
            <span key={i} style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.92)', flexShrink: 0 }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'var(--gray-border)' : 'transparent'}`,
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
            {/* Typographic Logo Mark */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{
                fontFamily: 'var(--logo-font)',
                fontSize: '2.5rem',
                color: '#B91C1C', /* Strong red typography matching image */
                lineHeight: 0.9,
                letterSpacing: '0.04em',
                transform: 'scaleY(1.05)',
                textShadow: '0.5px 0.5px 0 rgba(0,0,0,0.05)',
                marginBottom: '2px'
              }}>
                USC
              </div>
              <div style={{
                backgroundColor: '#0EA5E9', /* Light blue pill */
                color: 'var(--white)',
                fontFamily: 'var(--sans)',
                fontSize: '0.35rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '3px 6px',
                borderRadius: '100px',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 4px rgba(14,165,233,0.15)'
              }}>
                Under the visionary guidance of Sr. Dr. Mary Grace
              </div>
            </div>

            {/* Brand Text */}
            <div style={{ paddingLeft: '16px', borderLeft: '1.5px solid var(--gray-border)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1rem', color: 'var(--black)', lineHeight: 1.1 }}>
                Ursuline Study Centre
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', color: 'var(--gold-dark)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1, marginTop: '4px' }}>
                Powered by Academic Origin
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'none', gap: '28px' }} className="desktop-nav">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 500,
                color: 'var(--black)', textDecoration: 'none', transition: 'color 0.2s',
                position: 'relative', paddingBottom: '2px',
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--maroon)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--black)'; }}
              >
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#contact" className="btn-gold" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              Apply Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', border: '1.5px solid var(--gray-border)',
                borderRadius: '6px', background: 'white', cursor: 'pointer',
                color: 'var(--black)',
              }}
              aria-label="Menu"
              className="mobile-menu-btn"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: 'white', borderTop: '1px solid var(--gray-border)',
            padding: '16px 24px 24px',
          }}>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', padding: '13px 0',
                  fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 500,
                  color: 'var(--black)', textDecoration: 'none',
                  borderBottom: '1px solid var(--gray-border)',
                }}
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }} onClick={() => setOpen(false)}>
              Apply Now — 2026–27
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
