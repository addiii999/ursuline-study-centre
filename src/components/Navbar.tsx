"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-[30px] left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className="glass-navbar px-6 py-3 rounded-[16px] flex items-center gap-8">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
            <Image 
              src="/logo.jpeg" 
              alt="Ursuline Study Centre" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-fustat text-[18px] font-bold tracking-tight text-slate-900">
            Ursuline Study Centre
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-6">
          {['Home', 'About', 'Courses', 'Faculty', 'Results', 'Gallery', 'Contact'].map((link) => (
            <Link 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-inter font-medium text-[14px] text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <button className="bg-white/40 hover:bg-white/60 text-slate-900 border border-slate-200 px-5 py-2 rounded-[12px] font-inter font-semibold text-[14px] flex items-center gap-2 group transition-all">
          Book Free Demo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
}
