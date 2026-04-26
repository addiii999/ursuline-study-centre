import React from 'react';
import { BookOpen, FlaskConical, Calculator, Scale, Code2, Monitor, Calculator as Calc, BarChart3, Landmark } from 'lucide-react';

const groups = [
  {
    category: 'Academic Streams',
    badge: '📘 Academic',
    courses: [
      { icon: <FlaskConical size={20} strokeWidth={2} />, name: 'Science — PCM', desc: 'Physics, Chemistry, Mathematics for Class 11 & 12.' },
      { icon: <FlaskConical size={20} strokeWidth={2} />, name: 'Science — PCB', desc: 'Physics, Chemistry, Biology for medical aspirants.' },
      { icon: <BarChart3 size={20} strokeWidth={2} />, name: 'Commerce', desc: 'Accountancy, Business Studies, Economics, Maths.' },
      { icon: <BookOpen size={20} strokeWidth={2} />, name: 'Humanities', desc: 'History, Geography, Political Science, Economics.' },
    ],
  },
  {
    category: 'Competitive Exam Prep',
    badge: '🎯 Competitive',
    courses: [
      { icon: <Calculator size={20} strokeWidth={2} />, name: 'JEE (Mains & Advanced)', desc: 'Engineering entrance with deep PCM coaching and mock tests.' },
      { icon: <FlaskConical size={20} strokeWidth={2} />, name: 'NEET', desc: 'Medical entrance with comprehensive PCB preparation.' },
      { icon: <Scale size={20} strokeWidth={2} />, name: 'CLAT', desc: 'Law entrance exam prep: Legal Aptitude, GK, English, Reasoning.' },
    ],
  },
  {
    category: 'Vocational & Skill Courses',
    badge: '💻 Vocational',
    courses: [
      { icon: <Code2 size={20} strokeWidth={2} />, name: 'Artificial Intelligence (AI)', desc: 'Fundamentals of AI, ML concepts, and practical applications.' },
      { icon: <Code2 size={20} strokeWidth={2} />, name: 'Programming', desc: 'Python, C++ fundamentals for beginners and intermediate learners.' },
      { icon: <Monitor size={20} strokeWidth={2} />, name: 'DCA — Diploma in Computer Applications', desc: 'Complete computer applications diploma program.' },
      { icon: <Calc size={20} strokeWidth={2} />, name: 'Tally', desc: 'Accounting software mastery for commerce and business.' },
      { icon: <Landmark size={20} strokeWidth={2} />, name: 'Social Media Handling', desc: 'Digital marketing, content strategy, and social media management.' },
    ],
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="section-py" style={{ background: 'var(--gray-soft)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">What We Teach</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>
            Courses We Offer
          </h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '520px', margin: '16px auto 0' }}>
            Academic excellence meets career readiness — all under one roof.
          </p>
        </div>

        {/* Course groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {groups.map(({ category, badge, courses }) => (
            <div key={category}>
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '6px 16px',
                  background: 'var(--maroon)', color: 'var(--gold-light)',
                  borderRadius: '4px',
                }}>
                  {badge}
                </span>
                <h3 className="heading-sm" style={{ color: 'var(--black)' }}>{category}</h3>
              </div>

              {/* Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {courses.map(({ icon, name, desc }) => (
                  <div key={name} className="card-gold" style={{ padding: '24px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'var(--gold-pale)', border: '1px solid var(--gold-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold-dark)', marginBottom: '16px',
                    }}>
                      {icon}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--black)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {name}
                    </div>
                    <p className="body-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <a href="#contact" className="btn-gold">Enquire About Admission →</a>
        </div>
      </div>
    </section>
  );
}
