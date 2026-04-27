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
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setForm(f => ({ ...f, [name]: numericValue }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
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
    if (form.phone.length !== 10) { setError('Please enter a valid 10-digit mobile number.'); return; }
    if (!form.className) { setError('Please select your class.'); return; }
    if (!form.stream) { setError('Please select your stream.'); return; }

    setStatus('loading');
    try {
      // 1. Real Email Notification to Institute (FormSubmit.co API)
      await fetch("https://formsubmit.co/ajax/ursulinestudycentre@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New Admission Enquiry from ${form.name}`,
            Name: form.name,
            Phone: `+91 ${form.phone}`,
            Class: form.className,
            Stream: form.stream,
            Message: form.message || 'No message provided'
        })
      });

      // 2. Admin-Ready Lead Storage (Frontend CRM Prep)
      const leads = JSON.parse(localStorage.getItem('usc_leads') || '[]');
      leads.push({ ...form, phone: `+91 ${form.phone}`, submittedAt: new Date().toISOString(), id: Date.now(), status: 'new' });
      localStorage.setItem('usc_leads', JSON.stringify(leads));
      
      setLastSubmit();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const waMessage = encodeURIComponent(`*New Admission Enquiry*\n\n*Name:* ${form.name}\n*Phone:* +91 ${form.phone}\n*Class:* ${form.className}\n*Stream:* ${form.stream}\n*Message:* ${form.message || 'N/A'}\n\n_Hi, I have submitted my enquiry online. Please confirm._`);

  return (
    <section id="contact" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-badge">Reach Out</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Secure Your Daughter’s Seat Today</h2>
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
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Campus Location</div>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--gray-border)', marginBottom: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.668700689953!2d85.3283177749069!3d23.364024803504825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1f7f50a1df9%3A0xc3ab353381a1a7c3!2sUrsuline%20Convent%20Girls&#39;%20High%20School!5e0!3m2!1sen!2sin!4v1709476239121!5m2!1sen!2sin" 
                        width="100%" 
                        height="200" 
                        style={{ border: 0, display: 'block' }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/cjRX1kb3UhFfGSfx9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-premium"
                      style={{ 
                        display: 'inline-flex', 
                        padding: '8px 16px', 
                        fontSize: '0.8rem', 
                        background: 'var(--white)', 
                        color: 'var(--maroon)', 
                        border: '1px solid var(--maroon)', 
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        gap: '6px'
                      }}
                    >
                      <MapPin size={14} /> Open in Google Maps
                    </a>
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
                border: '1px solid #d4edda', borderRadius: '16px',
                background: '#f0fff4', boxShadow: '0 10px 30px rgba(34,197,94,0.08)'
              }}>
                <div style={{ width: '64px', height: '64px', background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 4px 15px rgba(34,197,94,0.3)' }}>
                  <CheckCircle size={32} style={{ color: 'white' }} />
                </div>
                <h3 className="heading-md" style={{ marginBottom: '12px', color: '#166534' }}>Enquiry Successfully Sent!</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: '#166534', lineHeight: 1.7, marginBottom: '32px' }}>
                  Thank you, <strong>{form.name}</strong>. Your details have been delivered to our administration team.
                </p>
                
                <div style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--black)', marginBottom: '16px', fontWeight: 700 }}>
                    Fast-Track Your Admission:
                  </p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      padding: '16px 32px', borderRadius: '50px', background: '#25D366', color: 'white',
                      fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none',
                      boxShadow: '0 6px 20px rgba(37,211,102,0.3)', transition: 'all 0.3s ease', width: '100%'
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(37,211,102,0.4)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(37,211,102,0.3)'; }}
                  >
                    <MessageCircle size={22} /> Confirm on WhatsApp
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
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      position: 'absolute',
                      left: '16px',
                      fontFamily: 'var(--sans)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--black)',
                      pointerEvents: 'none',
                      borderRight: '1px solid var(--gray-border)',
                      paddingRight: '10px'
                    }}>
                      +91
                    </div>
                    <input name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="Enter 10 digits" type="tel" inputMode="numeric" maxLength={10}
                      className="input-premium" style={{ paddingLeft: '65px' }} />
                  </div>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '8px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: 'var(--gray-border)' }} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--gray-text)', fontWeight: 600 }}>OR</span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--gray-border)' }} />
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I am interested in admission details for Ursuline Study Centre.`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '14px', borderRadius: '8px', background: '#25D366', color: 'white',
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
                    transition: 'all 0.2s ease', width: '100%'
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  <MessageCircle size={20} /> Chat Directly on WhatsApp
                </a>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'var(--gray-text)', textAlign: 'center', marginTop: '4px' }}>
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
