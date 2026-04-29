"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';

const desktopMainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'Admission', href: '/#admission' },
];

const desktopMoreLinks = [
  { label: 'Founder\'s Message', href: '/#founder' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Results', href: '/#results' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'YouTube Learning', href: '/#youtube' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Founder\'s Message', href: '/#founder' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'Admission', href: '/#admission' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Results', href: '/#results' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'YouTube Learning', href: '/#youtube' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['about', 'founder', 'courses', 'faculty', 'why-us', 'results', 'testimonials', 'youtube', 'faq', 'admission'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = '/#' + section;
        }
      }
      if (window.scrollY < 300) current = '/';
      setActiveHash(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Top Institutional Trust Bar ── */}
      <div style={{ 
        background: 'var(--maroon)', 
        color: 'white', 
        padding: '10px 0', 
        display: 'none', 
        borderBottom: '1px solid rgba(201,168,76,0.3)' 
      }} className="desktop-top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.85)' }}>
              <MapPin size={13} style={{ color: 'var(--gold)' }} />
              Purliya Road, Near Ursuline Convent, Ranchi
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--gold-light)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
              100% GIRLS-ONLY PREMIUM COACHING
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="tel:+919507589503" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
              <Phone size={13} style={{ color: 'var(--gold)' }} />
              +91 95075 89503
            </a>
            <div style={{ height: '14px', width: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}>
              Powered By
              <div style={{ background: 'white', padding: '2px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={64} height={14} style={{ objectFit: 'contain', width: 'auto', height: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        style={{
          position: 'sticky', 
          top: 0, 
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.03)'}`,
          boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.03)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '70px' : '84px', transition: 'height 0.3s ease' }}>
          {/* Brand Identity */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <div style={{
              position: 'relative', 
              width: scrolled ? '50px' : '60px', 
              height: scrolled ? '50px' : '60px',
              borderRadius: '50%',
              overflow: 'hidden', 
              border: '1.5px solid var(--gold)',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(201,168,76,0.15)',
              transition: 'all 0.3s ease'
            }}>
              <Image src="/logo.jpeg" alt="USC Logo" fill style={{ objectFit: 'cover' }} priority />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--black)', lineHeight: 1.1, letterSpacing: '0.01em' }}>
                Ursuline Study Centre
              </div>
              <div className="nav-subtitle" style={{ 
                fontFamily: 'var(--sans)', 
                fontSize: '0.62rem', 
                color: 'var(--gold-dark)', 
                fontWeight: 700, 
                letterSpacing: '0.06em', 
                textTransform: 'uppercase', 
                marginTop: '3px',
                opacity: 0.8
              }}>
                Under the visionary guidance of Sr. Dr. Mary Grace
              </div>
            </div>
          </Link>

          {/* Clean Prioritized Desktop Nav */}
          <div style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            {desktopMainLinks.map(({ label, href }) => {
              const isActive = activeHash === href;
              return (
                <a key={label} href={href} style={{
                  fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 600,
                  color: isActive ? 'var(--maroon)' : 'var(--gray-text)', 
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  position: 'relative', padding: '6px 0',
                  whiteSpace: 'nowrap'
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--maroon)'; }}
                  onMouseLeave={e => { if(!isActive) (e.target as HTMLElement).style.color = 'var(--gray-text)'; }}
                >
                  {label}
                  {isActive && (
                    <span style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '2px', background: 'var(--gold)', borderRadius: '2px' }} />
                  )}
                </a>
              )
            })}

            {/* Dropdown for Secondary Links */}
            <div 
              style={{ position: 'relative' }} 
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <div style={{
                fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 600,
                color: 'var(--gray-text)', display: 'flex', alignItems: 'center', gap: '4px',
                cursor: 'pointer', padding: '6px 0', transition: 'color 0.2s ease'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--maroon)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gray-text)'; }}
              >
                More <ChevronDown size={14} style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
              </div>
              
              <div style={{
                position: 'absolute', top: '100%', right: 0, paddingTop: '10px',
                opacity: moreOpen ? 1 : 0, visibility: moreOpen ? 'visible' : 'hidden',
                transform: moreOpen ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.2s ease', zIndex: 100
              }}>
                <div style={{
                  background: 'white', border: '1px solid var(--gray-border)',
                  borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                  padding: '8px 0', width: '210px', display: 'flex', flexDirection: 'column'
                }}>
                  {desktopMoreLinks.map(({ label, href }) => (
                    <a key={label} href={href} style={{
                      fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 500,
                      color: 'var(--black)', textDecoration: 'none', padding: '10px 20px',
                      transition: 'all 0.2s ease'
                    }}
                      onMouseEnter={e => { 
                        (e.currentTarget as HTMLElement).style.background = 'var(--gray-soft)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--maroon)';
                      }}
                      onMouseLeave={e => { 
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = 'var(--black)';
                      }}
                      onClick={() => setMoreOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Balanced Right CTA */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="desktop-actions" style={{ display: 'none' }}>
              <a href="/#contact" className="btn-gold" style={{ 
                padding: '10px 22px', 
                fontSize: '0.88rem', 
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(201,168,76,0.15)',
                borderRadius: '6px'
              }}>
                Book Free Counselling
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '42px', height: '42px', border: '1px solid var(--gray-border)',
                borderRadius: '8px', background: 'white', cursor: 'pointer',
                color: 'var(--black)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                marginLeft: '16px'
              }}
              aria-label="Toggle Menu"
              className="mobile-menu-btn"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu Overlay */}
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--gray-border)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
          maxHeight: open ? '85vh' : '0',
          overflowY: 'auto',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {mobileLinks.map(({ label, href }) => {
                const isActive = activeHash === href;
                return (
                  <a key={label} href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 18px', borderRadius: '10px',
                      background: isActive ? 'var(--maroon-pale)' : 'transparent',
                      fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--maroon)' : 'var(--black)', textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {label}
                  </a>
                )
              })}
            </div>
            
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="/#contact" className="btn-gold" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '15px' }} onClick={() => setOpen(false)}>
                Book Free Counselling
              </a>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '10px', background: 'var(--gray-soft)', border: '1px solid var(--gray-border)' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--gray-text)' }}>Powered By</span>
                <div style={{ background: 'white', padding: '2px 8px', borderRadius: '4px' }}>
                   <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={72} height={16} style={{ objectFit: 'contain', width: 'auto', height: '14px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-subtitle { display: none !important; }
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .desktop-top-bar { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
