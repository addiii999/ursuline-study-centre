"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. Lata Sharma',
    role: 'Parent of Class 12 Student',
    text: 'The faculty here genuinely cares - they treat every student personally. Being inside the Convent campus gives us parents complete peace of mind regarding safety and environment.',
    stars: 5,
  },
  {
    name: 'Priya Kumari',
    role: 'NEET Aspirant',
    text: 'The biology sessions are incredibly detailed. I used to struggle with complex concepts, but the way teachers explain them with diagrams and personal notes is amazing.',
    stars: 5,
  },
  {
    name: 'Mrs. Sunita Oraon',
    role: 'Parent of Class 10 Student',
    text: 'We chose USC because of its location and reputation for girls\' education. My daughter has shown immense improvement in Mathematics and Science within just 3 months.',
    stars: 5,
  },
  {
    name: 'Ananya Singh',
    role: 'Class 12 Boards Student',
    text: 'Small batches mean I can ask any doubt without hesitation. The handcrafted notes provided by teachers are far better than any standard textbooks I\'ve used.',
    stars: 5,
  },
  {
    name: 'Aditi Verma',
    role: 'JEE Aspirant',
    text: 'The mock test series and regular doubt sessions helped me build a strong foundation. The focus here is on understanding concepts rather than just memorizing formulas.',
    stars: 5,
  },
  {
    name: 'Mrs. Rekha Gupta',
    role: 'Parent, Class 11 Batch',
    text: 'As a parent, I appreciate the regular updates we receive about attendance and performance. It\'s a very disciplined and supportive environment for girls.',
    stars: 5,
  }
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="section-py" style={{ background: 'var(--maroon-pale)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge" style={{ background: 'var(--white)', border: '1px solid rgba(128,0,0,0.1)' }}>Real Words. Real Families.</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>What Parents & Students Say</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '560px', margin: '16px auto 0' }}>
            Don't just take our word for it. Hear from the families who trust Ursuline Study Centre for their daughters' academic future.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card-gold" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {Array(t.stars).fill(0).map((_, si) => (
                    <Star key={si} size={16} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <Quote size={28} style={{ color: 'var(--gold-pale)', opacity: 0.5 }} />
              </div>
              
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.7, flexGrow: 1, fontStyle: 'italic', marginBottom: '24px' }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--gray-border)', paddingTop: '20px' }}>
                <div style={{ 
                  width: '44px', height: '44px', borderRadius: '50%', background: 'var(--maroon)', 
                  color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--black)' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: 600 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
