import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">About Us</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>
            Who We Are
          </h2>
          <span className="gold-divider" style={{ display: 'block' }} />
          <div style={{ marginTop: '24px' }}>
            <div className="visionary-banner" style={{ fontSize: '0.7rem', padding: '8px 20px' }}>
              UNDER THE VISIONARY GUIDANCE OF SR. DR. MARY GRACE
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Left - About USC */}
          <div>
            <h3 className="heading-md" style={{ marginBottom: '16px', color: 'var(--maroon)' }}>
              Ursuline Study Centre
            </h3>
            <p className="body-lg" style={{ marginBottom: '16px' }}>
              Ursuline Study Centre is a premium, girls-only coaching institution established in <strong>2026</strong>, located near the prestigious <strong>Ursuline Convent School & Inter College</strong>, Purliya Road, Ranchi, Jharkhand.
            </p>
            <p className="body-lg" style={{ marginBottom: '16px' }}>
              We offer a unique combination of academic, competitive, and vocational education - all delivered by experienced faculty in a safe, disciplined, and nurturing environment designed specifically for girls.
            </p>
            <p className="body-lg" style={{ marginBottom: '24px' }}>
              Our bilingual teaching methodology (English + Hindi) ensures every student - regardless of background - can grasp concepts clearly and perform confidently.
            </p>

            {/* Info chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                ['📍', 'Purliya Road, Ranchi'],
                ['🏫', 'Estd. 2026'],
                ['👩‍🎓', 'Only Girls'],
                ['📖', 'JAC + CBSE'],
                ['🗣️', 'English + Hindi'],
              ].map(([icon, text]) => (
                <div key={text} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px',
                  border: '1px solid var(--gray-border)',
                  borderRadius: '100px',
                  fontSize: '0.82rem', fontFamily: 'var(--sans)',
                  color: 'var(--black)',
                  background: 'var(--gray-soft)',
                }}>
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Founder + Sister Institute */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Founder card */}
            <div style={{
              padding: '28px 28px',
              border: '1px solid var(--gray-border)',
              borderLeft: '4px solid var(--gold)',
              borderRadius: '8px',
              background: 'var(--gold-pale)',
            }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '10px' }}>
                Founder's Message
              </div>
              <h3 className="heading-sm" style={{ marginBottom: '4px' }}>Abhishek Pathak</h3>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--gold-dark)', marginBottom: '14px' }}>
                Mathematics Expert · JEE Faculty
              </div>
              <p className="body-md">
                "I founded Ursuline Study Centre with one clear purpose - to create a space where every girl student can study without fear, distraction, or compromise. Excellence is not a privilege; it is a right. We are here to make it accessible."
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--gold-dark)', marginTop: '12px', lineHeight: 1.6 }}>
                "शिक्षा केवल पढ़ाई नहीं, भविष्य निर्माण है।"
              </p>
            </div>

            {/* Sister institute card */}
            <div style={{
              padding: '24px 28px',
              border: '1px solid var(--gray-border)',
              borderLeft: '4px solid var(--maroon)',
              borderRadius: '8px',
              background: 'var(--maroon-pale)',
            }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--maroon)', textTransform: 'uppercase', marginBottom: '14px' }}>
                Sister Institute
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--maroon)' }}>Powered by</span>
                <div style={{ background: 'white', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <Image src="/academic-origin-logo.jpg" alt="Academic Origin" width={110} height={28} style={{ objectFit: 'contain', width: 'auto', height: '24px' }} />
                </div>
              </div>
              <p className="body-md">
                Ursuline Study Centre is proudly backed by this successfully operating institute with a proven record of academic excellence. Our systems, curriculum, and pedagogy are built on their expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
