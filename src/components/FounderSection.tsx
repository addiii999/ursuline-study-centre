"use client";
import React from 'react';
import Image from 'next/image';
import { Award, Target, BookOpen, GraduationCap, ChevronRight, Quote } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="founder" className="section-py" style={{ background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Background accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle at 100% 0%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(128,0,0,0.03) 0%, transparent 50%)' }} />

      <div className="container" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Meet Our Founder</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>The Visionary Force</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center',
          background: 'var(--gray-soft)',
          borderRadius: '24px',
          padding: 'clamp(24px, 5vw, 60px)',
          border: '1px solid rgba(201,168,76,0.2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.04)'
        }}>

          {/* Left Column: Portrait */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 50px rgba(0,0,0,0.15)',
              border: '2px solid var(--gold)',
              background: 'var(--black)'
            }}>
              <Image
                src="/founder.png"
                alt="Abhishek Pathak - Founder & Director"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />

              {/* Bottom Gradient overlay for text */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '80px 24px 32px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  margin: '0 0 8px 0',
                  letterSpacing: '0.02em',
                  color: '#fffaf0',
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}>
                  Abhishek Pathak
                </h3>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '1.05rem',
                  color: '#e6c35c',
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                }}>
                  Founder & Director
                </p>
              </div>
            </div>

            {/* Experience floating badge */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              background: 'var(--white)',
              borderRadius: '50%',
              width: '110px',
              height: '110px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              border: '3px solid var(--gold)',
              zIndex: 10
            }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--maroon)', lineHeight: 1, marginBottom: '2px' }}>10+</span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Years<br />Exp.</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            {/* Top Qualification & Role */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <span style={{ background: 'rgba(128,0,0,0.05)', color: 'var(--maroon)', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--sans)', border: '1px solid rgba(128,0,0,0.1)' }}>
                  M.Sc Mathematics Expert
                </span>
                <span style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-dark)', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--sans)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  JEE Senior Faculty
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--black)', lineHeight: 1.2, marginBottom: '24px' }}>
                Building the Future of Jharkhand Through Premium Education.
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--gray-text)', lineHeight: 1.8 }}>
                Under the visionary leadership of <strong style={{ color: 'var(--black)' }}>Abhishek Pathak</strong>, <em>Academic Origin</em> is proudly guiding Ursuline Study Centre. Our institutional mission is deeply rooted in promoting girls' education and delivering a premium, concept-based, and result-driven academic mentorship.
              </p>
            </div>

            {/* Premium Quote */}
            <div style={{
              position: 'relative',
              padding: '28px 36px',
              background: 'var(--white)',
              borderRadius: '16px',
              borderLeft: '4px solid var(--gold)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
            }}>
              <Quote size={40} style={{ position: 'absolute', top: '-15px', left: '20px', color: 'var(--gold)', opacity: 0.3 }} />
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--maroon)', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
                "Education is not just about clearing exams; it is the strongest foundation for empowering girls and permanently transforming the future of Jharkhand."
              </p>
            </div>

            {/* Achievement Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: 'rgba(201,168,76,0.15)', padding: '12px', borderRadius: '12px', color: 'var(--gold-dark)', flexShrink: 0 }}>
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--black)', marginBottom: '2px' }}>5000+</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: 1.4, fontWeight: 500 }}>Students Mentored</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: 'rgba(128,0,0,0.06)', padding: '12px', borderRadius: '12px', color: 'var(--maroon)', flexShrink: 0 }}>
                  <Target size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--black)', marginBottom: '2px' }}>JAC & CBSE</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: 1.4, fontWeight: 500 }}>Academic Leadership</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: 'rgba(201,168,76,0.15)', padding: '12px', borderRadius: '12px', color: 'var(--gold-dark)', flexShrink: 0 }}>
                  <BookOpen size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--black)', marginBottom: '2px' }}>JEE / NEET</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: 1.4, fontWeight: 500 }}>Foundation Mentorship</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: 'rgba(128,0,0,0.06)', padding: '12px', borderRadius: '12px', color: 'var(--maroon)', flexShrink: 0 }}>
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--black)', marginBottom: '2px' }}>Girls Education</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: 1.4, fontWeight: 500 }}>Mission Leader</div>
                </div>
              </div>
            </div>

            {/* Premium CTA */}
            <div style={{ marginTop: '24px' }}>
              <a href="/#contact" className="btn-premium" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 40px',
                fontSize: '1.15rem',
                fontWeight: 700,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, var(--gold-dark) 0%, var(--maroon) 100%)',
                color: 'white',
                border: '2px solid var(--gold)',
                boxShadow: '0 10px 30px rgba(128,0,0,0.25), 0 4px 15px rgba(201,168,76,0.3)',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--serif)',
                textDecoration: 'none',
                letterSpacing: '0.03em'
              }}>
                Book a Counselling Session <ChevronRight size={22} strokeWidth={2.5} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
