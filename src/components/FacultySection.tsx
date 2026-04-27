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

const expertiseBadges = [
  'Former Board Examiners',
  'JEE / NEET Specialists',
  'Subject Matter Experts',
];

export default function FacultySection() {
  return (
    <section id="faculty" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Premium Academic Mentorship</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Our Elite Faculty</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '560px', margin: '16px auto 0' }}>
            Learn from Ranchi’s top subject matter experts and highly qualified educators with proven track records in Board, JEE, and NEET preparation.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '24px' }}>
            {expertiseBadges.map(badge => (
              <span key={badge} style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', background: 'var(--maroon-pale)', color: 'var(--maroon)', border: '1px solid rgba(128,0,0,0.1)', letterSpacing: '0.04em' }}>
                ✓ {badge}
              </span>
            ))}
          </div>
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
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--black)', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {name}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, color, letterSpacing: '0.02em' }}>
                    {subject} Expert
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
