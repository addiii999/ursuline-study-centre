"use client";
import React from 'react';
import { ShieldCheck, Clock, MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const trustPoints = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'Safe, Monitored Campus',
    desc: 'Fully CCTV-monitored premises inside Ursuline Convent School. Zero compromise on student safety.',
    accent: 'var(--maroon)'
  },
  {
    icon: <Clock size={26} />,
    title: 'Fixed Batch Timings',
    desc: 'Regular schedules and punctual reporting. Parents always know when their child is in class.',
    accent: 'var(--gold-dark)'
  },
  {
    icon: <MapPin size={26} />,
    title: 'Known, Verified Location',
    desc: 'Located inside Ranchi\'s most respected school campus. A permanent and trusted address.',
    accent: 'var(--maroon)'
  },
  {
    icon: <MessageSquare size={26} />,
    title: 'Regular Progress Updates',
    desc: 'Dedicated communication channel for parents to track academic performance and attendance.',
    accent: 'var(--gold-dark)'
  },
];

export default function ParentTrustSection() {
  return (
    <section id="trust" className="section-py" style={{ background: 'var(--gray-soft)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle decorative background */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(circle at 70% 30%, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Guardian's Confidence</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>A Foundation Built on <span style={{ color: 'var(--maroon)' }}>Trust</span></h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
            We understand that a daughter's education is a family's highest priority. Every aspect of USC is designed to provide safety, transparency, and excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          {/* Left Side: Trust Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ 
              background: 'var(--white)', 
              borderRadius: '24px', 
              padding: '40px', 
              border: '1px solid rgba(201,168,76,0.2)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute', top: '-15px', left: '30px', 
                background: 'var(--maroon)', color: 'white', 
                padding: '4px 16px', borderRadius: '50px', 
                fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--sans)',
                letterSpacing: '0.05em', textTransform: 'uppercase'
              }}>
                Institutional Security
              </div>
              
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--black)', marginBottom: '24px' }}>
                Why Parents Choose Ursuline Study Centre
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(128,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--maroon)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--maroon)', textTransform: 'uppercase', marginBottom: '2px' }}>Verified Location</div>
                    <a href="https://maps.app.goo.gl/cjRX1kb3UhFfGSfx9" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--gray-text)', textDecoration: 'none', lineHeight: 1.5 }}>
                      Inside Ursuline Convent School & Inter College, Ranchi
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-dark)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '2px' }}>Parent Helpline</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <a href="tel:+919507589503" style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--black)', fontWeight: 600, textDecoration: 'none' }}>+91 95075 89503</a>
                      <a href="tel:+916206874337" style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--black)', fontWeight: 600, textDecoration: 'none' }}>+91 62068 74337</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '32px', display: 'flex', gap: '10px', alignItems: 'center', padding: '12px 16px', background: 'rgba(34,197,94,0.05)', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.1)' }}>
                <CheckCircle2 size={18} style={{ color: '#16a34a' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#166534', fontWeight: 600 }}>CCTV Monitored Safe Environment</span>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {trustPoints.map((point, i) => (
              <div key={i} style={{ 
                background: 'var(--white)', 
                padding: '28px', 
                borderRadius: '20px', 
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '12px', 
                  background: point.accent === 'var(--maroon)' ? 'rgba(128,0,0,0.05)' : 'rgba(201,168,76,0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  color: point.accent, 
                  marginBottom: '20px'
                }}>
                  {point.icon}
                </div>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--black)', marginBottom: '10px' }}>
                  {point.title}
                </h4>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: 1.6 }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

