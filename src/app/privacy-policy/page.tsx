import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ShieldCheck, Mail, MapPin, Phone, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      
      {/* Premium Header Area */}
      <div style={{ background: 'var(--gray-soft)', padding: '60px 0 40px', borderBottom: '1px solid var(--gray-border)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <Link href="/" className="hover:opacity-70" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-dark)', textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.02em', transition: 'opacity 0.2s' }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="heading-lg" style={{ color: 'var(--maroon)', marginBottom: '16px' }}>Privacy Policy</h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 2vw, 1.05rem)', color: 'var(--gray-text)', lineHeight: 1.6, maxWidth: '600px' }}>
            Your privacy and student information security matter to us. This document outlines how we protect and manage your data.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ background: 'var(--white)', padding: '60px 0 100px' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          
          <div style={{ 
            background: 'var(--white)', 
            borderRadius: '12px', 
            border: '1px solid var(--gray-border)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
            padding: 'clamp(30px, 6vw, 50px) clamp(24px, 5vw, 48px)',
          }}>
            
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: '48px' }}>
              At <strong style={{ color: 'var(--black)' }}>Ursuline Study Centre</strong>, we are deeply committed to protecting the privacy of our students and their parents/guardians. As a premium educational institution, maintaining your trust is our highest priority. This Privacy Policy details our secure approach to collecting, using, and safeguarding your personal information.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              
              {/* Section 1 */}
              <section>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--black)', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={22} style={{ color: 'var(--gold)' }} />
                  1. Information We Collect
                </h2>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: '20px' }}>
                  We collect personal information in a secure manner only when you voluntarily provide it during the following interactions:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    "Enquiring about our courses through our website contact form, phone, or email.",
                    "Applying for admission to our institute for any academic session.",
                    "Providing necessary documentation during the formal admission and registration process."
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ padding: '20px', background: 'var(--gray-soft)', borderRadius: '8px', borderLeft: '3px solid var(--gold)' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: 'var(--black)', display: 'block', marginBottom: '4px' }}>Data Collected:</strong> 
                    This may include the student's name, age, educational background, parent/guardian's name, and contact details (phone, email, residential address).
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--black)', fontWeight: 700, marginBottom: '16px' }}>
                  2. How We Use Your Information
                </h2>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: '20px' }}>
                  The data we collect is strictly utilized for educational and administrative purposes, ensuring a seamless experience for you:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    "To accurately respond to your enquiries and provide detailed information about our curriculum.",
                    "To efficiently process, verify, and manage student admissions and academic records.",
                    "To maintain essential communication regarding institute updates, schedules, and important events.",
                    "To continuously improve our educational services, student support, and website experience."
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--black)', fontWeight: 700, marginBottom: '16px' }}>
                  3. Protection & Security of Your Data
                </h2>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.8, margin: 0 }}>
                  We implement robust, industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive physical and digital data is stored securely and is accessible only by authorized administrative personnel who are bound by strict confidentiality obligations.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--black)', fontWeight: 700, marginBottom: '16px' }}>
                  4. Third-Party Services
                </h2>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: 1.8, margin: 0 }}>
                  Ursuline Study Centre deeply respects your privacy. We <strong style={{ color: 'var(--black)' }}>never</strong> sell, trade, or rent your personal information to third parties. We may only share necessary data with trusted educational partners or regulatory bodies when strictly required by law or to fulfill our core educational services. In all such cases, we ensure these entities adhere to equivalent rigorous confidentiality standards.
                </p>
              </section>

              <hr style={{ border: 'none', borderTop: '1px solid var(--gray-border)', margin: '10px 0' }} />

              {/* Contact Block */}
              <section>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--black)', fontWeight: 700, marginBottom: '24px' }}>
                  Contact for Privacy Concerns
                </h2>
                <div style={{ background: 'var(--maroon-pale)', border: '1px solid rgba(128,0,0,0.08)', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(128,0,0,0.06)', flexShrink: 0 }}>
                      <MapPin size={20} style={{ color: 'var(--maroon)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--maroon)', marginBottom: '6px', fontSize: '1.05rem' }}>Ursuline Study Centre</div>
                      <a 
                        href="https://maps.app.goo.gl/cjRX1kb3UhFfGSfx9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--maroon)', opacity: 0.85, lineHeight: 1.6, textDecoration: 'none', display: 'block' }}
                      >
                        Near Ursuline Convent School & Inter College,<br />Purliya Road, Ranchi, Jharkhand
                      </a>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '4px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(128,0,0,0.06)', flexShrink: 0, marginTop: '2px' }}>
                        <Phone size={16} style={{ color: 'var(--maroon)' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <a href="tel:+919507589503" style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--maroon)', fontWeight: 600, textDecoration: 'none' }}>+91 95075 89503</a>
                        <a href="tel:+916206874337" style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--maroon)', fontWeight: 600, textDecoration: 'none' }}>+91 62068 74337</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(128,0,0,0.06)', flexShrink: 0 }}>
                        <Mail size={16} style={{ color: 'var(--maroon)' }} />
                      </div>
                      <a href="mailto:ursulinestudycentre@gmail.com" style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--maroon)', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all' }}>ursulinestudycentre@gmail.com</a>
                    </div>
                  </div>
                </div>
              </section>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--gray-text)', fontStyle: 'italic' }}>
                  This Privacy Policy is effective as of April 27, 2026.<br />We reserve the right to update this policy periodically to reflect operational changes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default PrivacyPolicy;

export const metadata: Metadata = {
    title: 'Privacy Policy | Ursuline Study Centre',
    description: 'Learn how Ursuline Study Centre protects your personal information and privacy. Read our official privacy policy and data security practices.',
};