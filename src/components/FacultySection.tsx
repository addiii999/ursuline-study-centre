import React from 'react';

const faculty = [
  {
    name: 'Vikram Sir',
    subject: 'Chemistry',
    exp: '10 Years',
    qual: 'M.Sc. Chemistry',
    color: '#2d5da1',
    initial: 'V',
  },
  {
    name: 'Vivek Sir',
    subject: 'Physics',
    exp: '10 Years',
    qual: 'M.Tech',
    color: '#1a7a5e',
    initial: 'V',
  },
  {
    name: 'Radhika Madam',
    subject: 'Biology',
    exp: '8 Years',
    qual: 'M.Sc. + Ph.D.',
    color: '#7a1a5e',
    initial: 'R',
  },
  {
    name: 'Diwasis Sir',
    subject: 'Mathematics',
    exp: '5 Years',
    qual: 'M.Sc. Mathematics',
    color: '#800000',
    initial: 'D',
  },
  {
    name: 'Warish Sir',
    subject: 'Accountancy & Business Mathematics',
    exp: '12 Years',
    qual: 'Ph.D.',
    color: '#5a5a1a',
    initial: 'W',
  },
  {
    name: 'Gaurav Sir',
    subject: 'Business Studies & Economics',
    exp: '12 Years',
    qual: 'Ph.D.',
    color: '#1a4a7a',
    initial: 'G',
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Meet the Experts</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Our Faculty</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
            Highly qualified educators dedicated to nurturing each student's full potential.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {faculty.map(({ name, subject, exp, qual, color, initial }) => (
            <div
              key={name}
              className="card-gold"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '0' }}
            >
              {/* Top accent bar */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${color}, var(--gold))`, borderRadius: '3px 3px 0 0', margin: '-28px -28px 24px' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                {/* Avatar */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${color}, var(--gold-dark))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 700, color: 'white',
                  border: '2px solid var(--gold-light)',
                }}>
                  {initial}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--black)', marginBottom: '2px' }}>
                    {name}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, color, letterSpacing: '0.02em' }}>
                    {subject}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--gray-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'var(--gray-text)', fontWeight: 500 }}>Qualification</span>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--black)' }}>{qual}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'var(--gray-text)', fontWeight: 500 }}>Experience</span>
                  <span style={{
                    fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 700,
                    color: 'var(--gold-dark)', background: 'var(--gold-pale)',
                    padding: '2px 10px', borderRadius: '100px',
                    border: '1px solid var(--gold-light)',
                  }}>{exp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
