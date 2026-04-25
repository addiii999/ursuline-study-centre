"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-[20px] lg:top-[30px] left-1/2 -translate-x-1/2 z-[100] w-[90%] lg:w-fit max-w-[1200px]">
      <div className="glass-navbar px-4 lg:px-6 py-2 lg:py-3 rounded-[16px] flex items-center justify-between lg:gap-12 shadow-lg">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 group shrink-0">
          <div className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border border-slate-200">
            <Image 
              src="/logo.jpeg" 
              alt="Ursuline Study Centre" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-fustat text-[15px] lg:text-[18px] font-bold tracking-tight text-slate-900 whitespace-nowrap">
            Ursuline Study Centre
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'About', 'Courses', 'Faculty', 'Results'].map((link) => (
            <Link 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-inter font-medium text-[14px] text-slate-600 hover:text-primary transition-colors whitespace-nowrap"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <button className="bg-white/40 hover:bg-white/60 text-slate-900 border border-slate-200 px-3 lg:px-5 py-1.5 lg:py-2 rounded-[12px] font-inter font-semibold text-[13px] lg:text-[14px] flex items-center gap-2 group transition-all shrink-0">
          <span className="hidden sm:inline">Book Free Demo</span>
          <span className="sm:hidden">Demo</span>
          <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
}
