"use client";
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden pt-[120px]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#60B1FF] premium-blur opacity-20 z-0"></div>
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-[#319AFF] premium-blur opacity-15 z-0"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 h-full flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left py-20 lg:py-0">
          {/* Social Proof Badge */}
          <div className="glass-navbar px-4 py-2 rounded-full flex items-center gap-2 mb-8 animate-fade-in">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#FFB547" color="#FFB547" />
              ))}
            </div>
            <span className="font-inter font-medium text-[14px] text-slate-600">
              Trusted by 2500+ Students & Parents
            </span>
          </div>

          <h1 className="font-fustat text-[55px] lg:text-[75px] leading-[1.05] tracking-[-2px] font-bold text-slate-900 mb-6">
            Study Smarter, <br />
            Achieve <span className="text-[#0084FF] relative">Higher
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0084FF]/10 -z-10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-inter text-[18px] tracking-[-1px] leading-relaxed text-slate-500 max-w-[540px] mb-10">
            Located inside the trusted campus of Ursuline Convent School & Inter College, we provide a safe, focused, and high-quality learning environment designed for academic excellence and future success.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#0084FF]/80 backdrop-blur-[2px] text-white px-8 py-4 rounded-[16px] font-inter font-semibold text-[16px] flex items-center justify-center gap-3 group transition-all hover:scale-[1.02] cta-shadow active:scale-[0.98]">
              Start Your Journey
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} className="text-[#0084FF]" />
              </div>
            </button>

            <button className="w-full sm:w-auto glass-navbar text-slate-900 px-8 py-4 rounded-[16px] font-inter font-semibold text-[16px] transition-all hover:bg-white/50 active:scale-[0.98]">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Section: Glassy Orb */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] scale-125 lg:scale-150 orb-filter mix-blend-screen opacity-90 lg:-mr-20">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-contain"
            >
              <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>

      {/* Bottom Trust Section */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-20">
          <p className="font-inter text-[14px] text-slate-400 mb-8 tracking-widest uppercase font-semibold opacity-60">
            Trusted by Students, Parents & Academic Mentors
          </p>
          <div className="flex items-center gap-[100px] grayscale opacity-30 invert-[0.2]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-32 bg-slate-200 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
