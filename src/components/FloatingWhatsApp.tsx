"use client";
import React from 'react';

const WHATSAPP_NUMBER = '9507589503'; // Official primary WhatsApp number

export default function FloatingWhatsApp() {
  const message = encodeURIComponent('Hi! I would like to enquire about admissions at Ursuline Study Centre for the 2026-27 session.');
  return (
    <div className="fab-container" style={{ zIndex: 50 }}>
      {/* Play Store FAB */}
      <a
        href="https://play.google.com/store/apps/details?id=com.vefytech.academicorigin"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-playstore"
        aria-label="Academic Origin Learning App"
        title="Official learning app by Academic Origin"
        style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 1.5L13.5 12.5L2.5 23.5V1.5Z" fill="#00A0FF" />
          <path d="M13.5 12.5L18 8L2.5 1.5L13.5 12.5Z" fill="#00F076" />
          <path d="M13.5 12.5L2.5 23.5L18 17L13.5 12.5Z" fill="#FF3A44" />
          <path d="M13.5 12.5L18 17L22 14.5L18 8L13.5 12.5Z" fill="#FFC900" />
        </svg>
      </a>

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
        style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(37,211,102,0.3)', transition: 'transform 0.3s ease' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Sticky Mobile Bottom CTA */}
      <div className="mobile-sticky-cta">
        <div style={{ display: 'flex', gap: '8px', padding: '10px 16px', background: 'var(--white)', borderTop: '1px solid var(--gray-border)', boxShadow: '0 -4px 15px rgba(0,0,0,0.08)' }}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} target="_blank" rel="noopener noreferrer" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            background: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '8px',
            fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600, padding: '12px 8px'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            WhatsApp
          </a>
          <a href="/#contact" style={{
            flex: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            background: 'var(--maroon)', color: 'white', textDecoration: 'none', borderRadius: '8px',
            fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 700, padding: '12px 8px',
            border: '1px solid var(--gold-dark)'
          }}>
            Book Counselling
          </a>
        </div>
      </div>

      <style>{`
        .mobile-sticky-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
        }
        @media (max-width: 768px) {
          .mobile-sticky-cta {
            display: block;
          }
          /* Adjust body padding so content isn't hidden behind the sticky bar */
          body {
            padding-bottom: 60px;
          }
          /* Hide the floating FABs on mobile since we have the sticky bar */
          .fab-container {
            bottom: 80px;
          }
        }
      `}</style>
    </div>
  );
}
