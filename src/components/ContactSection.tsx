"use client";
import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const classes = ['Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper'];
const streams = ['Science (PCM)', 'Science (PCB)', 'Commerce', 'Humanities', 'Vocational Course'];

type Status = 'idle' | 'loading' | 'success' | 'error' | 'cooldown';

const WHATSAPP_NUMBER = '9507589503'; // Official primary WhatsApp number

function getLastSubmit(): number {
  try { return parseInt(localStorage.getItem('usc_last_submit') || '0', 10); } catch { return 0; }
}
function setLastSubmit() {
  try { localStorage.setItem('usc_last_submit', Date.now().toString()); } catch { }
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', className: '', stream: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Spam prevention: 5-minute cooldown
    const last = getLastSubmit();
    if (last && Date.now() - last < 5 * 60 * 1000) {
      setStatus('cooldown');
      return;
    }

    // Validation
    if (!form.name.trim() || form.name.trim().length < 2) { setError('Please enter a valid name.'); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) { setError('Please enter a valid 10-digit Indian mobile number.'); return; }
    if (!form.className) { setError('Please select your class.'); return; }
    if (!form.stream) { setError('Please select your stream.'); return; }

    setStatus('loading');
    try {
      // Store in localStorage for admin review (frontend-only CRM)
      const leads = JSON.parse(localStorage.getItem('usc_leads') || '[]');
      leads.push({ ...form, submittedAt: new Date().toISOString(), id: Date.now() });
      localStorage.setItem('usc_leads', JSON.stringify(leads));
      setLastSubmit();
      await new Promise(r => setTimeout(r, 900)); // UX delay
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const waMessage = encodeURIComponent(`Hi, I would like to enquire about admission to Ursuline Study Centre.\n\nName: ${form.name || '(not filled)'}\nClass: ${form.className || '(not filled)'}\nStream: ${form.stream || '(not filled)'}`);

  return (
    <section id="contact" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Reach Out</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Contact & Enquiry</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '460px', margin: '16px auto 0' }}>
            Fill in the form below and our team will reach out within 24 hours.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--gold-dark)', marginTop: '10px', letterSpacing: '0.04em' }}>
            आपकी सफलता हमारी प्राथमिकता है
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ padding: '24px', borderRadius: '10px', border: '1px solid var(--gray-border)', background: 'var(--gray-soft)' }}>
              <h3 className="heading-sm" style={{ marginBottom: '20px' }}>Get In Touch</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--maroon-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--maroon)', flexShrink: 0 }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Address</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--black)', lineHeight: 1.6 }}>Near Ursuline Convent School & Inter College,<br />Purliya Road, Ranchi, Jharkhand</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-dark)', flexShrink: 0 }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Phone / WhatsApp</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href="https://wa.me/919507589503" style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--black)', textDecoration: 'none', fontWeight: 600 }}>
                        +91 95075 89503 (WhatsApp)
                      </a>
                      <a href="tel:+916206874337" style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--black)', textDecoration: 'none', fontWeight: 600 }}>
                        +91 62068 74337
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(128,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--maroon)', flexShrink: 0 }}>
                    <Mail size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Email Address</div>
                    <a href="mailto:ursulinestudycentre@gmail.com" style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--black)', textDecoration: 'none', fontWeight: 600, wordBreak: 'break-all' }}>
                      ursulinestudycentre@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '16px', borderRadius: '8px', background: '#25D366', color: 'white',
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1ebe5b'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#25D366'; }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <div style={{ fontSize: '0.78rem', color: 'var(--gray-text)', fontFamily: 'var(--sans)', textAlign: 'center', lineHeight: 1.6 }}>
              🕐 Office Hours: Mon-Sat, 9:00 AM - 6:00 PM<br />
              📍 Sunday: Closed
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <div style={{
                padding: '48px 32px', textAlign: 'center',
                border: '1px solid #d4edda', borderRadius: '10px',
                background: '#f0fff4',
              }}>
                <CheckCircle size={52} style={{ color: '#22c55e', margin: '0 auto 16px' }} />
                <h3 className="heading-md" style={{ marginBottom: '10px', color: '#166534' }}>Enquiry Received!</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: '#166534', lineHeight: 1.7 }}>
                  Thank you, <strong>{form.name}</strong>! Our team will contact you on <strong>{form.phone}</strong> within 24 hours.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I just submitted an enquiry for ${form.name} for ${form.stream} class ${form.className}.`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 20px', borderRadius: '6px', background: '#25D366', color: 'white',
                      fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
                    }}>
                    <MessageCircle size={16} /> Connect on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '6px', color: 'var(--black)' }}>
                    Student Name / छात्रा का नाम *
                  </label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    placeholder="Enter full name"
                    className="input-premium" />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '6px', color: 'var(--black)' }}>
                    Phone Number / फ़ोन नंबर *
                  </label>
                  <input name="phone" value={form.phone} onChange={handleChange} required
                    placeholder="10-digit mobile number" type="tel" maxLength={10}
                    className="input-premium" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '6px', color: 'var(--black)' }}>
                      Class / कक्षा *
                    </label>
                    <select name="className" value={form.className} onChange={handleChange} required className="input-premium">
                      <option value="">Select Class</option>
                      {classes.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '6px', color: 'var(--black)' }}>
                      Stream / विषय *
                    </label>
                    <select name="stream" value={form.stream} onChange={handleChange} required className="input-premium">
                      <option value="">Select Stream</option>
                      {streams.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '6px', color: 'var(--black)' }}>
                    Message (Optional)
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Any specific questions or requirements..."
                    rows={3} className="input-premium" style={{ resize: 'vertical', minHeight: '80px' }} />
                </div>

                {/* Error */}
                {error && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '10px 14px', background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: '6px' }}>
                    <AlertCircle size={15} style={{ color: '#dc2626', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#dc2626' }}>{error}</span>
                  </div>
                )}
                {status === 'cooldown' && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '10px 14px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px' }}>
                    <AlertCircle size={15} style={{ color: '#d97706', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#d97706' }}>You recently submitted a form. Please wait 5 minutes before submitting again.</span>
                  </div>
                )}

                <button type="submit" className="btn-gold" disabled={status === 'loading' || status === 'cooldown'}
                  style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.8 : 1 }}>
                  {status === 'loading' ? (
                    <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Submitting…</>
                  ) : 'Submit Enquiry'}
                </button>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'var(--gray-text)', textAlign: 'center' }}>
                  🔒 Your details are safe and will not be shared with anyone.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
