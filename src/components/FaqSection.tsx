"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is Ursuline Study Centre only for girls?',
    a: 'Yes, we are a 100% girls-only coaching institute. We provide a highly secure, disciplined, and focused learning environment specifically tailored for female students.'
  },
  {
    q: 'Which boards and exams do you prepare students for?',
    a: 'We comprehensively cover both JAC and CBSE board syllabuses for Classes 9 to 12. Alongside board preparation, we provide integrated coaching for competitive exams like JEE, NEET, and CLAT.'
  },
  {
    q: 'What are the batch timings?',
    a: 'Our batches run strictly between 9:00 AM and 6:00 PM, Monday to Saturday. This ensures students can commute safely during daylight hours. Sunday is a complete holiday.'
  },
  {
    q: 'Do you provide hostel facilities?',
    a: 'While we do not have an in-house hostel, our campus is located inside the Ursuline Convent School premises in a prime, secure area of Ranchi. Many trusted girls\' hostels are available within walking distance.'
  },
  {
    q: 'How does the admission process work?',
    a: 'The admission process is simple. First, fill out the online enquiry form or contact our parent helpline. Next, you and your daughter will attend a brief counselling session with our mentors. Finally, upon submitting the required documents and the ₹15,000 annual fee, the admission is confirmed.'
  },
  {
    q: 'Is online coaching available?',
    a: 'We believe in the power of offline, face-to-face mentorship for discipline and focus. However, students get complimentary access to the Academic Origin Learning App for digital notes, mock tests, and supplementary materials.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-badge">Common Questions</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  border: '1px solid var(--gray-border)', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  background: isOpen ? 'var(--gray-soft)' : 'var(--white)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '20px 24px', 
                    background: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: isOpen ? 'var(--maroon)' : 'var(--black)' }}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      color: isOpen ? 'var(--maroon)' : 'var(--gold)', 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </button>
                <div style={{ 
                  maxHeight: isOpen ? '200px' : '0px', 
                  opacity: isOpen ? 1 : 0, 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease' 
                }}>
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.6, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', marginBottom: '16px' }}>
            Still have questions? We are here to help.
          </p>
          <a href="tel:+919507589503" className="btn-gold" style={{ display: 'inline-flex' }}>
            Call Parent Helpline
          </a>
        </div>
      </div>
    </section>
  );
}
