"use client";
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#fdfbf7] paper-texture overflow-hidden flex items-center pt-24 pb-16"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-10 right-0 w-72 h-72 opacity-10 bg-[#2d5da1] -z-0 hidden lg:block"
        style={{ borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-20 left-0 w-64 h-64 opacity-10 bg-[#ff4d4d] -z-0 hidden lg:block"
        style={{ borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%', filter: 'blur(60px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            {/* Admission stamp */}
            <div className="flex items-center gap-3">
              <span className="stamp animate-wiggle">Admissions Open 2025–26</span>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-2 bg-white border-2 border-[#2d2d2d] px-3 py-1.5 shadow-hard-sm"
              style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
            >
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#FFB547" color="#FFB547" />)}
              </div>
              <span className="font-patrick text-[13px] text-[#2d2d2d]">Trusted by 2500+ Students & Parents</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-kalam text-[52px] sm:text-[64px] lg:text-[72px] leading-[1.0] text-[#2d2d2d] mb-3">
                Study Smarter,<br />
                Achieve{' '}
                <span className="squiggle-underline text-[#ff4d4d]">Higher.</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="font-patrick text-[18px] text-[#5a5550] leading-relaxed max-w-[480px]">
              Located inside the trusted campus of{' '}
              <span className="marker-highlight font-bold">Ursuline Convent School & Inter College</span>
              , providing a safe, disciplined, and premium coaching environment for academic excellence.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#demo" className="btn-primary justify-center">
                📚 Book Free Demo <ArrowRight size={18} />
              </a>
              <a href="#courses" className="btn-secondary justify-center">
                Explore Courses
              </a>
            </div>

            {/* Quick trust pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { emoji: '🏫', label: 'Inside Convent Campus' },
                { emoji: '🛡️', label: 'Safe Environment' },
                { emoji: '👩‍🏫', label: 'Expert Faculty' },
              ].map(({ emoji, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white border-2 border-[#2d2d2d] px-3 py-1 text-[13px] font-patrick shadow-hard-sm"
                  style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                >
                  <span>{emoji}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative notebook-style card */}
          <div className="relative flex justify-center items-center">
            {/* Main board card */}
            <div
              className="relative bg-white border-4 border-[#2d2d2d] shadow-hard-lg p-8 w-full max-w-[420px] rotate-1"
              style={{ borderRadius: '20px 255px 20px 255px / 255px 20px 255px 20px' }}
            >
              {/* Tape strip top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#fff3b0] border border-[#c9a800] opacity-80" style={{ borderRadius: '3px' }} />

              <div className="text-center mb-6">
                <div className="font-kalam text-[22px] text-[#2d2d2d] mb-1">🎯 Our Results Speak</div>
                <hr className="border-dashed border-[#2d2d2d] opacity-30 my-3" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '2500+', label: 'Students Guided', color: '#2d5da1' },
                  { num: '95%', label: 'Board Pass Rate', color: '#ff4d4d' },
                  { num: '10+', label: 'Years of Trust', color: '#2d2d2d' },
                  { num: '50+', label: 'JEE / NEET Selections', color: '#2d5da1' },
                ].map(({ num, label, color }, i) => (
                  <div
                    key={label}
                    className={`bg-[#fdfbf7] border-2 border-[#2d2d2d] p-3 text-center ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                    style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
                  >
                    <div className="font-kalam text-[28px] leading-none" style={{ color }}>{num}</div>
                    <div className="font-patrick text-[12px] text-[#5a5550] mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Doodle arrow */}
              <div className="absolute -bottom-10 -right-6 font-kalam text-[13px] text-[#ff4d4d] rotate-12 hidden lg:block">
                ← join us!
              </div>
            </div>

            {/* Floating sticky note */}
            <div className="absolute -top-6 -right-4 sticky-note w-32 text-center rotate-3 shadow-hard-sm animate-float hidden lg:block">
              <div className="font-kalam text-[13px] text-[#2d2d2d]">Limited<br/>Batch Size!</div>
              <div className="text-[18px] mt-1">⚡</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashed bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
