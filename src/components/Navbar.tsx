"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Courses', 'Faculty', 'Results', 'Gallery', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] navbar-hand transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="relative w-10 h-10 overflow-hidden border-2 border-[#2d2d2d] shadow-hard-sm flex-shrink-0"
            style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
          >
            <Image src="/logo.jpeg" alt="USC Logo" fill className="object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-kalam font-bold text-[16px] text-[#2d2d2d] leading-none">Ursuline Study Centre</div>
            <div className="font-patrick text-[10px] text-[#2d5da1]">Powered by Academic Origin</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-patrick text-[15px] text-[#2d2d2d] hover:text-[#ff4d4d] transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff4d4d] group-hover:w-full transition-all duration-200 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a href="#demo" className="btn-primary hidden lg:inline-flex text-[14px] px-5 py-2.5">
          📚 Book Free Demo
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 border-2 border-[#2d2d2d] bg-white shadow-hard-sm"
          style={{ borderRadius: '12px 4px 12px 4px / 4px 12px 4px 12px' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden mx-4 mt-2 bg-[#fdfbf7] border-3 border-[#2d2d2d] shadow-hard p-4 flex flex-col gap-3"
          style={{ borderRadius: '20px 8px 20px 8px / 8px 20px 8px 20px', border: '3px solid #2d2d2d' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-kalam text-[18px] text-[#2d2d2d] hover:text-[#ff4d4d] py-2 border-b border-dashed border-[#e5e0d8] last:border-0 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
          <a href="#demo" className="btn-primary mt-2 text-center justify-center" onClick={() => setOpen(false)}>
            📚 Book Free Demo
          </a>
        </div>
      )}
    </nav>
  );
}
