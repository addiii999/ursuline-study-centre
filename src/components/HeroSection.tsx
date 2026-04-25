"use client";
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden pt-[140px] lg:pt-[180px]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-primary-glow premium-blur opacity-20 z-0"></div>
      <div className="absolute top-[5%] left-[10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-primary-deep premium-blur opacity-15 z-0"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            {/* Social Proof Badge */}
            <div className="glass-navbar px-4 py-2 rounded-full flex items-center gap-2 mb-8 shadow-sm">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} fill="#FFB547" color="#FFB547" />
                ))}
              </div>
              <span className="font-inter font-medium text-[13px] lg:text-[14px] text-slate-600">
                Trusted by 2500+ Students & Parents
              </span>
            </div>

            <h1 className="font-fustat text-[48px] lg:text-[75px] leading-[1.05] tracking-[-2px] font-bold text-slate-900 mb-6">
              Study Smarter, <br />
              Achieve <span className="text-primary inline-block relative">
                Higher
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="font-inter text-[16px] lg:text-[18px] tracking-[-0.5px] lg:tracking-[-1px] leading-relaxed text-slate-500 max-w-[540px] mb-10">
              Located inside the trusted campus of Ursuline Convent School & Inter College, we provide a safe, focused, and high-quality learning environment designed for academic excellence and future success.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-primary/80 backdrop-blur-[2px] text-white px-8 py-4 rounded-[16px] font-inter font-semibold text-[16px] flex items-center justify-center gap-3 group transition-all hover:scale-[1.02] cta-shadow active:scale-[0.98]">
                Start Your Journey
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} className="text-primary" />
                </div>
              </button>

              <button className="w-full sm:w-auto glass-navbar text-slate-900 px-8 py-4 rounded-[16px] font-inter font-semibold text-[16px] transition-all hover:bg-white/50 active:scale-[0.98]">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Section: Glassy Orb */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end overflow-visible">
            <div className="relative w-[320px] h-[320px] lg:w-[550px] lg:h-[550px] orb-filter mix-blend-screen opacity-90 lg:-mr-10">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain scale-110 lg:scale-125"
              >
                <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-20 lg:mt-32 pb-10 hidden lg:block">
          <p className="font-inter text-[12px] text-slate-400 mb-8 tracking-[0.2em] uppercase font-bold opacity-60">
            Trusted by Students, Parents & Academic Mentors
          </p>
          <div className="flex items-center gap-[80px] lg:gap-[100px] grayscale opacity-20">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-6 lg:h-8 w-24 lg:w-32 bg-slate-300 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
