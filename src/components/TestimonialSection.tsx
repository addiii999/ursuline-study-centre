import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. Lata Sharma',
    role: 'Parent of Class 12 Student',
    text: 'The faculty here genuinely cares — they treat every student personally. Being inside the Convent campus gives us parents complete peace of mind regarding safety and environment.',
    stars: 5,
    emoji: '👩',
    accent: 'var(--maroon)',
  },
  {
    name: 'Priya Kumari',
    role: 'NEET Aspirant',
    text: 'The biology sessions are incredibly detailed. I used to struggle with complex concepts, but the way teachers explain them with diagrams and personal notes is amazing.',
    stars: 5,
    emoji: '👧',
    accent: 'var(--gold-dark)',
  },
  {
    name: 'Mrs. Sunita Oraon',
    role: 'Parent of Class 10 Student',
    text: 'We chose USC because of its location and reputation for girls\' education. My daughter has shown immense improvement in Mathematics and Science within just 3 months.',
    stars: 5,
    emoji: '👩',
    accent: 'var(--maroon)',
  },
  {
    name: 'Ananya Singh',
    role: 'Class 12 Boards Student',
    text: 'Small batches mean I can ask any doubt without hesitation. The handcrafted notes provided by teachers are far better than any standard textbooks I\'ve used.',
    stars: 5,
    emoji: '👧',
    accent: 'var(--gold-dark)',
  },
  {
    name: 'Aditi Verma',
    role: 'JEE Aspirant',
    text: 'The mock test series and regular doubt sessions helped me build a strong foundation. The focus here is on understanding concepts rather than just memorizing formulas.',
    stars: 5,
    emoji: '👧',
    accent: 'var(--maroon)',
  },
  {
    name: 'Mrs. Rekha Gupta',
    role: 'Parent, Class 11 Batch',
    text: 'As a parent, I appreciate the regular updates we receive about attendance and performance. It\'s a very disciplined and supportive environment for girls.',
    stars: 5,
    emoji: '👩',
    accent: 'var(--gold-dark)',
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="section-py" style={{ background: 'var(--gray-soft)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background accent */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(128,0,0,0.03) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Student & Parent Reviews</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>
            What Families Are Saying
          </h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
            Real words from real students and parents who trust Ursuline Study Centre.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '24px',
        }}>
          {testimonials.map(({ name, role, text, stars, emoji, accent }, i) => (
            <div
              key={name}
              className="card-gold"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Top: Stars + Quote icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array(stars).fill(0).map((_, si) => (
                    <Star key={si} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <Quote size={22} style={{ color: accent, opacity: 0.25, flexShrink: 0 }} />
              </div>

              {/* Text */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.92rem',
                color: 'var(--gray-text)',
                lineHeight: 1.75,
                flex: 1,
                fontStyle: 'italic',
              }}>
                "{text}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid var(--gray-border)',
              }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
                  background: accent === 'var(--maroon)' ? 'rgba(128,0,0,0.06)' : 'rgba(201,168,76,0.1)',
                  border: `1.5px solid ${accent === 'var(--maroon)' ? 'rgba(128,0,0,0.12)' : 'rgba(201,168,76,0.2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem',
                }}>
                  {emoji}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--black)', lineHeight: 1.2 }}>
                    {name}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: accent, fontWeight: 600, marginTop: '2px', letterSpacing: '0.02em' }}>
                    {role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust note */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--gray-text)', letterSpacing: '0.02em' }}>
            🔒 All reviews are from real students and parents of Ursuline Study Centre.
          </p>
        </div>
      </div>
    </section>
  );
}
