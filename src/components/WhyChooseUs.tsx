"use client";
import React from 'react';
import { ShieldCheck, BookOpen, Users, Globe, Layers, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    title: 'Only Girls Institute',
    desc: 'A safe, focused, and distraction-free environment built exclusively for girl students — where every student feels secure and respected.',
  },
  {
    icon: <BookOpen size={22} strokeWidth={1.8} />,
    title: 'Dual Board — JAC & CBSE',
    desc: 'We prepare students for both JAC and CBSE boards, giving them flexibility and comprehensive exam coverage.',
  },
  {
    icon: <Users size={22} strokeWidth={1.8} />,
    title: 'PhD & M.Tech Faculty',
    desc: 'Our teaching team includes Ph.D. holders and M.Tech qualified professionals with 5–12 years of coaching experience.',
  },
  {
    icon: <Globe size={22} strokeWidth={1.8} />,
    title: 'Bilingual Teaching',
    desc: 'We teach in both English and Hindi so every student — regardless of background — grasps concepts with clarity and confidence.',
  },
  {
    icon: <Layers size={22} strokeWidth={1.8} />,
    title: 'Academic + Vocational Combo',
    desc: 'Unique combination of board coaching alongside AI, Programming, DCA, Tally, and Social Media — building career-ready graduates.',
  },
  {
    icon: <MapPin size={22} strokeWidth={1.8} />,
    title: 'Near Ursuline Convent School',
    desc: 'Conveniently located near the prestigious Ursuline Convent campus, Purliya Road — trusted by local families for its safe, accessible location.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py section-maroon" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Gold border top/bottom */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      {/* Subtle bg pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block', padding: '6px 18px', marginBottom: '16px',
            border: '1px solid rgba(201,168,76,0.4)', borderRadius: '100px',
            fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
            color: 'var(--gold-light)', textTransform: 'uppercase', background: 'rgba(201,168,76,0.08)',
          }}>
            Why Parents Choose Us
          </span>
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '12px' }}>
            The Ursuline Difference
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '0 auto' }} />
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0' }}>
            Six strong reasons why students and parents trust Ursuline Study Centre.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {reasons.map(({ icon, title, desc }, i) => (
            <div key={title} style={{
              padding: '28px',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.04)',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.2)';
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '8px', marginBottom: '16px',
                background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
              }}>
                {icon}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '10px' }}>
                {title}
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
