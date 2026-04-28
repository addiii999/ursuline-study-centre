import React from 'react';
import { CheckCircle } from 'lucide-react';

const feeRows = [
  { stream: 'Science - PCM', fee: '₹15,000/-', duration: 'Per Year', session: '2026-27' },
  { stream: 'Science - PCB', fee: '₹15,000/-', duration: 'Per Year', session: '2026-27' },
  { stream: 'Commerce', fee: '₹15,000/-', duration: 'Per Year', session: '2026-27' },
  { stream: 'Humanities', fee: '₹15,000/-', duration: 'Per Year', session: '2026-27' },
];

const steps = [
  { no: '01', title: 'Enquire Online / Call', desc: <span className="body-sm">Fill the enquiry form or call us at <a href="tel:+919507589503" style={{ color: 'var(--maroon)', fontWeight: 600 }}>+91 95075 89503</a> / <a href="tel:+916206874337" style={{ color: 'var(--maroon)', fontWeight: 600 }}>+91 62068 74337</a></span> },
  { no: '02', title: 'Counselling Session', desc: 'Our faculty will assess your current level and recommend the right course path.' },
  { no: '03', title: 'Document Submission', desc: 'Submit school marksheets, Aadhar card, and passport-size photographs.' },
  { no: '04', title: 'Fee Payment & Enrollment', desc: 'Pay the annual fee of ₹15,000/- and receive your admission confirmation.' },
];

export default function AdmissionSection() {
  return (
    <section id="admission" className="section-py" style={{ background: 'var(--gray-soft)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Admissions 2026-27</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Admission & Fee Structure</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '480px', margin: '16px auto 0' }}>
            Simple, transparent, and accessible. No hidden charges.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '32px', alignItems: 'start' }}>
          {/* Fee Table */}
          <div>
            <h3 className="heading-md" style={{ marginBottom: '20px' }}>Fee Structure</h3>
            <div style={{ border: '1px solid var(--gray-border)', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
              <table className="table-premium">
                <thead>
                  <tr>
                    <th>Stream</th>
                    <th>Annual Fee</th>
                    <th>Session</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map(({ stream, fee, session }) => (
                    <tr key={stream}>
                      <td style={{ fontWeight: 600 }}>{stream}</td>
                      <td style={{ color: 'var(--maroon)', fontWeight: 700, fontFamily: 'var(--serif)' }}>{fee}</td>
                      <td>{session}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div style={{
              marginTop: '16px', padding: '14px 18px',
              background: 'var(--gold-pale)', border: '1px solid var(--gold-light)', borderRadius: '8px',
            }}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gold-dark)', lineHeight: 1.6 }}>
                <strong>Note:</strong> This is an only-girls institute. Admissions are open for Classes 9th to 12th for the 2026-27 session. Vocational course fees are separate - please enquire directly.
              </p>
            </div>

            {/* Value Justification */}
            <div style={{ marginTop: '24px', padding: '20px', background: 'var(--white)', border: '1px solid var(--gray-border)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--black)', fontWeight: 700, marginBottom: '12px' }}>Why This is Valuable</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Premium Experienced Faculty',
                  'JAC + CBSE Board Specialization',
                  'Integrated JEE / NEET / CLAT Prep',
                  'Safe, Girls-Only Environment'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={14} style={{ color: 'var(--gold)' }} />
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gray-text)', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Admission Process */}
          <div>
            <h3 className="heading-md" style={{ marginBottom: '20px' }}>Admission Process</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map(({ no, title, desc }, i) => (
                <div key={no} style={{ display: 'flex', gap: '20px', paddingBottom: i < steps.length - 1 ? '28px' : '0', position: 'relative' }}>
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: 'absolute', left: '20px', top: '44px', bottom: 0, width: '1.5px',
                      background: 'linear-gradient(180deg, var(--gold), transparent)',
                    }} />
                  )}
                  {/* Step number circle */}
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                    background: 'var(--maroon)', color: 'var(--gold-light)',
                    fontFamily: 'var(--serif)', fontSize: '0.85rem', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '2px solid var(--gold)',
                    zIndex: 1, position: 'relative',
                  }}>
                    {no}
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>
                      {title}
                    </div>
                    <div className="body-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Start Admission Process →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
