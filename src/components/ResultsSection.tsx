"use client";
import React from 'react';
import { Trophy, Award, TrendingUp, Star, Users, GraduationCap } from 'lucide-react';

const stats = [
  { num: '95%', label: 'Board Exam Success', icon: <TrendingUp size={24} />, accent: 'var(--maroon)' },
  { num: '2500+', label: 'Mentored to Date', icon: <Users size={24} />, accent: 'var(--gold-dark)' },
  { num: '50+', label: 'Competitive Ranks', icon: <Star size={24} />, accent: 'var(--maroon)' },
  { num: '10+', label: 'Years of Legacy', icon: <GraduationCap size={24} />, accent: 'var(--gold-dark)' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-py" style={{ background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gradients */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle at 0% 0%, rgba(201,168,76,0.03) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(128,0,0,0.02) 0%, transparent 40%)' }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Academic Excellence</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>A Legacy of <span style={{ color: 'var(--maroon)' }}>Proven</span> Success</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
        </div>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
          gap: '24px', 
          marginBottom: '60px' 
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ 
              background: 'var(--white)', 
              padding: '32px 24px', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '1px solid rgba(201,168,76,0.15)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ 
                width: '56px', height: '56px', 
                borderRadius: '50%', 
                background: stat.accent === 'var(--maroon)' ? 'rgba(128,0,0,0.05)' : 'rgba(201,168,76,0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                color: stat.accent, 
                margin: '0 auto 20px'
              }}>
                {stat.icon}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--black)', lineHeight: 1, marginBottom: '8px' }}>
                {stat.num}
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Legacy Branding Block */}
        <div style={{ 
          background: 'var(--black)', 
          borderRadius: '30px', 
          padding: 'clamp(40px, 6vw, 80px)', 
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid var(--gold)',
          boxShadow: '0 30px 70px rgba(128,0,0,0.15)'
        }}>
          {/* Internal Glow */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, transparent 100%)', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '10px', 
              padding: '8px 20px', borderRadius: '50px', 
              background: 'rgba(201,168,76,0.15)', 
              border: '1px solid rgba(201,168,76,0.3)',
              marginBottom: '32px'
            }}>
              <Award size={18} style={{ color: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Academic Origin Legacy
              </span>
            </div>

            <h3 style={{ 
              fontFamily: 'var(--serif)', 
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
              fontWeight: 800, 
              color: 'white', 
              lineHeight: 1.2, 
              marginBottom: '28px' 
            }}>
              Built on the Proven Success of <span style={{ color: 'var(--gold)' }}>Academic Origin</span>
            </h3>

            <p style={{ 
              fontFamily: 'var(--sans)', 
              fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', 
              color: 'rgba(255,255,255,0.7)', 
              lineHeight: 1.8, 
              marginBottom: '40px' 
            }}>
              Ursuline Study Centre is the premium new branch of <strong>Academic Origin</strong>, a long-standing institution known for its commitment to academic rigour. We bring over a decade of success in JAC & CBSE Boards and competitive exams like JEE and NEET to our dedicated girls-only campus.
            </p>

            <div style={{ 
              padding: '24px', 
              background: 'rgba(128,0,0,0.3)', 
              borderRadius: '16px', 
              border: '1px solid rgba(201,168,76,0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--gold-light)', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>
                "Our mission is to bring the same level of proven mentorship and academic leadership to every girl student at Ursuline Study Centre."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--gray-text)', marginBottom: '24px', fontWeight: 500 }}>
            Join the legacy of high achievers.
          </p>
          <a href="/#contact" className="btn-premium" style={{
            display: 'inline-flex',
            padding: '16px 48px',
            borderRadius: '50px',
            background: 'var(--maroon)',
            color: 'white',
            fontWeight: 700,
            textDecoration: 'none',
            fontFamily: 'var(--serif)',
            fontSize: '1.1rem',
            border: '1px solid var(--gold)',
            boxShadow: '0 10px 25px rgba(128,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}>
            Enquire for Admission →
          </a>
        </div>
      </div>
    </section>
  );
}


