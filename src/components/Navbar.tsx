"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, MapPin, PlayCircle } from 'lucide-react';

const desktopMainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'Results', href: '/#results' },
  { label: 'Admission', href: '/#admission' },
];

const desktopMoreLinks = [
  { label: 'Director\'s Message', href: '/#founder' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'YouTube Learning', href: '/#youtube' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Director\'s Message', href: '/#founder' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Results', href: '/#results' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'YouTube Learning', href: '/#youtube' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Admission', href: '/#admission' },
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
      
      // Update active hash based on scroll position (simple version)
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
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Top Premium Trust Bar ── */}
      <div style={{ 
        background: 'var(--maroon)', 
        color: 'white', 
        padding: '8px 0', 
        display: 'none', 
        borderBottom: '1px solid rgba(201,168,76,0.3)' 
      }} className="desktop-top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)' }}>
              <MapPin size={14} style={{ color: 'var(--gold)' }} />
              Near Ursuline Convent School, Ranchi
            </div>
            <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)' }}>
              <span style={{ color: 'var(--gold)' }}>100%</span> Girls-Only Premium Coaching
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="tel:+919507589503" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--gold-light)', textDecoration: 'none' }}>
              <Phone size={14} />
              +91 95075 89503
            </a>
            <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>
              Powered By
              <div style={{ background: 'white', padding: '2px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={60} height={14} style={{ objectFit: 'contain', width: 'auto', height: '12px' }} />
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
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.03)'}`,
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.04)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '70px' : '80px', transition: 'height 0.3s ease' }}>
          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
            {/* Brand Logo */}
            <div style={{
              position: 'relative', 
              width: scrolled ? '54px' : '64px', 
              aspectRatio: '1/1',
              borderRadius: '50%',
              overflow: 'hidden', 
              border: '2px solid var(--gold)',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(201,168,76,0.2)',
              transition: 'all 0.3s ease'
            }}>
              <Image src="/logo.jpeg" alt="USC Logo" fill style={{ objectFit: 'cover' }} priority />
            </div>

            {/* Brand Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'var(--black)', lineHeight: 1.1, letterSpacing: '0.01em' }}>
                Ursuline Study Centre
              </div>
              <div className="nav-subtitle" style={{ 
                fontFamily: 'var(--sans)', 
                fontSize: '0.65rem', 
                color: 'var(--gold-dark)', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                lineHeight: 1.2,
                opacity: 0.9
              }}>
                Under the visionary guidance of Sr. Dr. Mary Grace
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="desktop-nav">
            {desktopMainLinks.map(({ label, href }) => {
              const isActive = activeHash === href;
              return (
                <a key={label} href={href} style={{
                  fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
                  color: isActive ? 'var(--maroon)' : 'var(--gray-text)', 
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  position: 'relative', padding: '6px 0',
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--maroon)'; }}
                  onMouseLeave={e => { if(!isActive) (e.target as HTMLElement).style.color = 'var(--gray-text)'; }}
                >
                  {label}
                  {isActive && (
                    <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--maroon)', borderRadius: '2px' }} />
                  )}
                </a>
              )
            })}

            {/* Dropdown for More */}
            <div 
              style={{ position: 'relative' }} 
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <div style={{
                fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600,
                color: 'var(--gray-text)', display: 'flex', alignItems: 'center', gap: '4px',
                cursor: 'pointer', padding: '6px 0', transition: 'color 0.2s ease'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--maroon)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gray-text)'; }}
              >
                More <ChevronDown size={14} style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
              </div>
              
              {/* Dropdown Menu */}
              <div style={{
                position: 'absolute', top: '100%', right: 0, paddingTop: '10px',
                opacity: moreOpen ? 1 : 0, visibility: moreOpen ? 'visible' : 'hidden',
                transform: moreOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.2s ease', zIndex: 100
              }}>
                <div style={{
                  background: 'white', border: '1px solid var(--gray-border)',
                  borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  padding: '8px 0', width: '220px', display: 'flex', flexDirection: 'column'
                }}>
                  {desktopMoreLinks.map(({ label, href }) => (
                    <a key={label} href={href} style={{
                      fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 500,
                      color: 'var(--black)', textDecoration: 'none', padding: '10px 20px',
                      transition: 'background 0.2s ease, color 0.2s ease'
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

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="desktop-actions" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
              <a 
                href="https://wa.me/919507589503?text=Hi! I would like to enquire about admissions at Ursuline Study Centre." 
                target="_blank" rel="noopener noreferrer"
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(37,211,102,0.1)', 
                  color: '#25D366', transition: 'all 0.2s ease' 
                }}
                title="Chat on WhatsApp"
                onMouseEnter={e => { 
                  (e.currentTarget as HTMLElement).style.background = '#25D366';
                  (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={e => { 
                  (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)';
                  (e.currentTarget as HTMLElement).style.color = '#25D366';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
              <a href="/#contact" className="btn-gold" style={{ 
                padding: '12px 24px', 
                fontSize: '0.9rem', 
                boxShadow: '0 6px 15px rgba(201,168,76,0.2)' 
              }}>
                Book Free Counselling
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', border: '1px solid var(--gray-border)',
                borderRadius: '8px', background: 'white', cursor: 'pointer',
                color: 'var(--black)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
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
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--gray-border)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          maxHeight: open ? '85vh' : '0',
          overflowY: 'auto',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {mobileLinks.map(({ label, href }) => {
                const isActive = activeHash === href;
                return (
                  <a key={label} href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 20px', borderRadius: '12px',
                      background: isActive ? 'var(--maroon-pale)' : 'transparent',
                      fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--maroon)' : 'var(--black)', textDecoration: 'none',
                      transition: 'background 0.2s ease',
                    }}
                  >
                    {label}
                  </a>
                )
              })}
            </div>
            
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="/#contact" className="btn-gold" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '16px' }} onClick={() => setOpen(false)}>
                Book Free Counselling
              </a>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px', borderRadius: '12px', background: 'var(--gray-soft)', border: '1px solid var(--gray-border)' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-text)' }}>Powered By</span>
                <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={80} height={18} style={{ objectFit: 'contain', width: 'auto', height: '16px' }} />
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
