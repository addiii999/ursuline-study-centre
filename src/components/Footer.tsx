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
    <footer style={{ background: 'var(--black)', color: 'white' }}>
      {/* Gold top border */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)' }} />

      <div className="container" style={{ padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              {/* Brand Logo */}
              <div style={{
                position: 'relative',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--gold)',
                flexShrink: 0,
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}>
                <Image src="/logo.jpeg" alt="USC Logo" fill style={{ objectFit: 'cover' }} />
              </div>

              {/* Brand Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'white', lineHeight: 1.1 }}>Ursuline Study Centre</div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.65rem',
                  color: 'var(--gold)',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}>
                  Under the visionary guidance of Sr. Dr. Mary Grace
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '20px' }}>
              Premium girls-only coaching institute near Ursuline Convent School, Purliya Road, Ranchi. Academic excellence since 2026.
            </p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>Admissions Open · 2026-27</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-light)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{
                    fontFamily: 'var(--sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold-light)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    <ArrowRight size={12} style={{ flexShrink: 0, opacity: 0.5 }} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-light)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              Our Courses
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {courses.map(c => (
                <li key={c} style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, display: 'inline-block' }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-light)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={15} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                  Near Ursuline Convent School, Purliya Road, Ranchi, Jharkhand
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Phone size={15} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+919507589503" style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                    +91 95075 89503
                  </a>
                  <a href="tel:+916206874337" style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                    +91 62068 74337
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href="mailto:ursulinestudycentre@gmail.com" style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', wordBreak: 'break-all' }}>
                  ursulinestudycentre@gmail.com
                </a>
              </div>
            </div>

            <a href="/#contact" className="btn-gold" style={{ marginTop: '24px', display: 'block', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
              Apply Now →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Ursuline Study Centre. All Rights Reserved.
          </p>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '0.06em' }}>
            ज्ञान · अनुशासन · सफलता
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>
                Powered by
              </span>
              <div style={{ background: 'white', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={90} height={24} style={{ objectFit: 'contain', width: 'auto', height: '20px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px', marginTop: '2px' }}>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.02em',
                transition: 'color 0.3s ease'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
              >
                Designed and Developed by <span style={{
                  color: 'var(--gold-light)',
                  fontWeight: 600,
                  opacity: 0.85,
                  transition: 'opacity 0.3s ease'
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                >Aayush</span>
              </p>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.62rem',
                color: 'rgba(255,255,255,0.15)',
                letterSpacing: '0.04em',
                transition: 'color 0.3s ease'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.15)'; }}
              >
                Contact: 9508639773
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
