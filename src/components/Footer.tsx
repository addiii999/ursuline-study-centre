import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Free Demo', href: '#demo' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-[#fdfbf7] relative overflow-hidden">
      {/* Top wavy divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full" fill="#fdfbf7" preserveAspectRatio="none" style={{ display: 'block', marginBottom: '-2px' }}>
          <path d="M0,40 Q180,0 360,30 Q540,60 720,25 Q900,-5 1080,30 Q1260,60 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="relative w-12 h-12 overflow-hidden border-2 border-[#fdfbf7] flex-shrink-0"
                style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
              >
                <Image src="/logo.jpeg" alt="USC Logo" fill className="object-cover" />
              </div>
              <div>
                <div className="font-kalam text-[18px] text-[#fdfbf7] leading-none">Ursuline Study Centre</div>
                <div className="font-patrick text-[12px] text-[#aaa59a]">Powered by Academic Origin</div>
              </div>
            </div>
            <p className="font-patrick text-[14px] text-[#aaa59a] leading-relaxed mb-5">
              Located inside Ursuline Convent School & Inter College, Ranchi. Providing quality coaching in a safe, disciplined, and caring environment since 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 font-kalam text-[14px] bg-[#ff4d4d] text-white px-4 py-2 border-2 border-[#fdfbf7] shadow-[2px_2px_0px_0px_#fdfbf7]"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              >
                Book Free Demo <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-kalam text-[20px] text-[#fdfbf7] mb-4 pb-2 border-b-2 border-dashed border-[#aaa59a] border-opacity-30">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-patrick text-[14px] text-[#aaa59a] hover:text-[#ff4d4d] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-kalam text-[20px] text-[#fdfbf7] mb-4 pb-2 border-b-2 border-dashed border-[#aaa59a] border-opacity-30">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#ff4d4d] mt-0.5 flex-shrink-0" />
                <span className="font-patrick text-[14px] text-[#aaa59a] leading-relaxed">
                  Inside Ursuline Convent School & Inter College, Ranchi, Jharkhand — 834001
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#2d5da1] flex-shrink-0" />
                <a href="tel:+919798681755" className="font-patrick text-[14px] text-[#aaa59a] hover:text-white transition-colors">
                  +91 97986 81755
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#c9a800] flex-shrink-0" />
                <a href="mailto:ursulinestudycentre@gmail.com" className="font-patrick text-[14px] text-[#aaa59a] hover:text-white transition-colors break-all">
                  ursulinestudycentre@gmail.com
                </a>
              </div>
            </div>

            {/* Admission CTA */}
            <div
              className="mt-6 bg-[#ff4d4d] bg-opacity-10 border-2 border-[#ff4d4d] border-opacity-40 p-4"
              style={{ borderRadius: '20px 8px 20px 8px / 8px 20px 8px 20px', borderStyle: 'dashed' }}
            >
              <div className="stamp inline-block mb-2">Admissions Open</div>
              <p className="font-patrick text-[13px] text-[#fdfbf7] opacity-80">Batch 2025–26. Limited Seats. Book your demo now!</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t-2 border-dashed border-[#aaa59a] border-opacity-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-patrick text-[13px] text-[#aaa59a] text-center sm:text-left">
            © 2025 Ursuline Study Centre. All rights reserved.
          </p>
          <p className="font-patrick text-[13px] text-[#aaa59a] flex items-center gap-1.5">
            Made with <Heart size={12} fill="#ff4d4d" color="#ff4d4d" className="animate-pulse" /> for students of Ranchi
          </p>
        </div>
      </div>
    </footer>
  );
}
