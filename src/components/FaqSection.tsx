"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is Ursuline Study Centre only for girls?',
    a: 'Yes. Ursuline Study Centre is a 100% girls-only coaching institute. This ensures a safe, focused, and distraction-free academic environment for every student.',
  },
  {
    q: 'Which classes are eligible for admission?',
    a: 'We offer coaching for Classes 9, 10, 11, and 12. We also accept Dropper students preparing for JEE, NEET, or Board exams.',
  },
  {
    q: 'Which boards do you cover — JAC or CBSE?',
    a: 'We prepare students for both JAC (Jharkhand Academic Council) and CBSE boards. Our curriculum is structured to cover both board patterns comprehensively.',
  },
  {
    q: 'What is the annual fee?',
    a: 'The annual fee for academic streams (Science PCM, Science PCB, Commerce, Humanities) is ₹15,000/- per year for the 2026-27 session. Vocational course fees are separate — please contact us directly for details.',
  },
  {
    q: 'What subjects and streams are available?',
    a: 'We offer Science (PCM & PCB), Commerce, and Humanities for board students. For competitive exams, we have JEE, NEET, and CLAT preparation. Vocational courses include AI, Programming, DCA, Tally, and Social Media Handling.',
  },
  {
    q: 'Do you offer JEE and NEET coaching alongside board preparation?',
    a: 'Yes. Our integrated approach ensures students prepare for both their board exams and competitive entrance exams like JEE (Mains & Advanced) and NEET simultaneously, without compromising either.',
  },
  {
    q: 'What are the batch timings?',
    a: 'Our office hours are Monday to Saturday, 9:00 AM to 6:00 PM. Specific batch timings are shared during the counselling session based on the student\'s class and stream. Please call or WhatsApp us for current batch schedules.',
  },
  {
    q: 'Is the institute located inside Ursuline Convent School?',
    a: 'Ursuline Study Centre is located near the prestigious Ursuline Convent School & Inter College, Purliya Road, Ranchi. The location is well-known, easily accessible, and trusted by local families.',
  },
  {
    q: 'How do I apply or enquire about admission?',
    a: 'You can fill the enquiry form on this website, call us at +91 95075 89503 or +91 62068 74337, or WhatsApp us directly. Our team will respond within 24 hours and schedule a free counselling session.',
  },
  {
    q: 'Is there a free counselling session before admission?',
    a: 'Yes. We offer a free counselling session where our faculty assesses the student\'s current level and recommends the most suitable course path. There is no commitment required.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Common Questions</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>
            Frequently Asked Questions
          </h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '480px', margin: '16px auto 0' }}>
            Everything parents and students ask before joining Ursuline Study Centre.
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  border: `1px solid ${isOpen ? 'var(--gold-light)' : 'var(--gray-border)'}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                  background: isOpen ? 'var(--gold-pale)' : 'var(--white)',
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: isOpen ? 'var(--maroon)' : 'var(--black)',
                    lineHeight: 1.4,
                    transition: 'color 0.2s ease',
                  }}>
                    {q}
                  </span>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    background: isOpen ? 'var(--maroon)' : 'var(--gray-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}>
                    <ChevronDown
                      size={16}
                      style={{
                        color: isOpen ? 'white' : 'var(--gray-text)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}>
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.92rem',
                      color: 'var(--gray-text)',
                      lineHeight: 1.75,
                      margin: 0,
                    }}>
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '48px', padding: '32px',
          background: 'var(--maroon)', borderRadius: '16px',
          textAlign: 'center',
          border: '1px solid rgba(201,168,76,0.2)',
        }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'white', fontWeight: 600, marginBottom: '8px' }}>
            Still have questions?
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
            Our team is available Mon–Sat, 9 AM to 6 PM.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a
              href="https://wa.me/919507589503?text=Hi! I have a question about Ursuline Study Centre."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '8px', background: '#25D366', color: 'white',
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919507589503"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)', color: 'white',
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              📞 Call +91 95075 89503
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
