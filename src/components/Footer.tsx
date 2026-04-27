"use client";
import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Admission', href: '/#admission' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const courses = [
  'Science (PCM / PCB)',
  'Commerce',
  'Humanities',
  'JEE / NEET / CLAT',
  'AI & Programming',
  'DCA / Tally',
  'Social Media Handling',
];

export default function Footer() {
  return (
    <footer style={{ background: '#111111', color: 'white', position: 'relative' }}>
      {/* Premium Gold Top Border */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, transparent, var(--gold), #f9d423, var(--gold), transparent)', opacity: 0.9 }} />

      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '50px', 
          marginBottom: '60px' 
        }}>
          
          {/* 1. Brand Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              {/* Brand Logo */}
              <div style={{
                position: 'relative',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--gold)',
                flexShrink: 0,
                boxShadow: '0 4px 20px rgba(201,168,76,0.15)'
              }}>
                <Image src="/logo.jpeg" alt="USC Logo" fill style={{ objectFit: 'cover' }} />
              </div>

              {/* Brand Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.1, letterSpacing: '0.02em' }}>
                  Ursuline Study Centre
                </h3>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.62rem',
                  color: 'var(--gold-light)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                  opacity: 0.9
                }}>
                  Under the visionary guidance of<br/>Sr. Dr. Mary Grace
                </div>
              </div>
            </div>
            
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
              A premium girls-only coaching institute near Ursuline Convent School, Purliya Road, Ranchi. Fostering academic excellence and discipline.
            </p>
            
            <div style={{ display: 'inline-flex', gap: '10px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)', alignSelf: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px rgba(34,197,94,0.4)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>Admissions Open · 2026-27</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              Quick Links
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{
                    fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={e => { 
                      (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => { 
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={14} style={{ color: 'var(--gold)', opacity: 0.8 }} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Courses */}
          <div>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              Our Courses
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {courses.map(c => (
                <li key={c} style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.8 }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact & CTA */}
          <div>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              Contact Us
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <MapPin size={18} strokeWidth={2} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                <a 
                  href="https://maps.app.goo.gl/cjRX1kb3UhFfGSfx9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--white)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  Near Ursuline Convent School, Purliya Road, Ranchi, Jharkhand
                </a>
              </div>
              
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <Phone size={18} strokeWidth={2} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a href="tel:+919507589503" style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 600, color: 'white', textDecoration: 'none', letterSpacing: '0.02em' }}>
                    +91 95075 89503
                  </a>
                  <a href="tel:+916206874337" style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                    +91 62068 74337
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <Mail size={18} strokeWidth={2} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href="mailto:ursulinestudycentre@gmail.com" style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--white)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  ursulinestudycentre@gmail.com
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="/#contact" className="btn-gold" style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', 
                padding: '14px 24px', fontSize: '0.95rem', letterSpacing: '0.02em', borderRadius: '8px'
              }}>
                Book Free Counselling
              </a>
              <a 
                href="https://wa.me/919507589503?text=Hi! I would like to enquire about admissions at Ursuline Study Centre." 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '12px 24px', borderRadius: '8px', background: 'rgba(37,211,102,0.05)', color: '#25D366',
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  border: '1px solid rgba(37,211,102,0.3)', transition: 'all 0.3s ease', width: '100%'
                }}
                onMouseEnter={e => { 
                  (e.currentTarget as HTMLElement).style.background = '#25D366';
                  (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={e => { 
                  (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.05)';
                  (e.currentTarget as HTMLElement).style.color = '#25D366';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Branding Section */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          paddingTop: '30px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px' 
        }}>
          {/* Main Footer Footer items */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px'
          }}>
            {/* Copyright */}
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0, order: 1 }}>
              © {new Date().getFullYear()} Ursuline Study Centre. All Rights Reserved.
            </p>

            {/* Premium Motto Signature */}
            <div style={{ order: 3, display: 'flex', justifyContent: 'center', width: '100%' }} className="footer-motto-wrapper">
              <span style={{ 
                fontFamily: 'var(--serif)', 
                fontSize: '1rem', 
                color: 'var(--gold-light)', 
                letterSpacing: '0.15em',
                fontWeight: 600,
                opacity: 0.9,
                position: 'relative',
                display: 'inline-block',
                padding: '0 20px'
              }}>
                <span style={{ position: 'absolute', left: 0, top: '50%', width: '10px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
                ज्ञान · अनुशासन · सफलता
                <span style={{ position: 'absolute', right: 0, top: '50%', width: '10px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
              </span>
            </div>

            {/* Powered By & Credit */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', order: 2 }} className="footer-credits-wrapper">
              {/* Powered By */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Powered By
                </span>
                <div style={{ background: 'white', padding: '6px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                  <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={100} height={24} style={{ objectFit: 'contain', width: 'auto', height: '22px' }} />
                </div>
              </div>

              {/* Developer Credit - Minimal */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                margin: 0,
                marginTop: '4px'
              }}>
                Designed by <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Aayush</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Styles for mobile ordering/adjustments */}
      <style>{`
        @media (min-width: 992px) {
          .footer-motto-wrapper {
            order: 2 !important;
            width: auto !important;
          }
          .footer-credits-wrapper {
            order: 3 !important;
          }
        }
        @media (max-width: 991px) {
          .footer-motto-wrapper {
            margin-top: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
