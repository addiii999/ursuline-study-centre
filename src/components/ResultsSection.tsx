import React from 'react';
import { Trophy, Award } from 'lucide-react';

const stats = [
  { num: '95%', label: 'Board Exam Pass Rate', color: '#2d5da1' },
  { num: '50+', label: 'Competitive Selections', color: '#ff4d4d' },
  { num: '2500+', label: 'Students Mentored', color: '#2d2d2d' },
  { num: '10+', label: 'Years of Excellence', color: '#c9a800' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy size={22} className="text-[#ff4d4d]" />
            <span className="font-kalam text-[15px] text-[#ff4d4d]">- Legacy of Excellence -</span>
            <Trophy size={22} className="text-[#ff4d4d]" />
          </div>
          <h2 className="font-kalam text-[36px] sm:text-[48px] text-[#2d2d2d] leading-tight">
            Built on the Proven Legacy of <br /><span className="squiggle-underline">Academic Origin</span>
          </h2>
          <p className="font-patrick text-[18px] text-[#5a5550] mt-6 max-w-2xl mx-auto leading-relaxed">
            Ursuline Study Centre is the premium new branch of <strong>Academic Origin</strong>, a long-standing institution known for its commitment to academic rigour. Now, we bring that same legacy of success to our dedicated girls-only campus.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map(({ num, label, color }, i) => (
            <div
              key={label}
              className={`bg-white border-4 border-[#2d2d2d] p-5 text-center shadow-hard ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              <div className="font-kalam text-[42px] leading-none mb-1" style={{ color }}>{num}</div>
              <div className="font-patrick text-[13px] text-[#5a5550]">{label}</div>
            </div>
          ))}
        </div>

        {/* USC Positioning */}
        <div className="bg-white border-3 border-[#2d2d2d] p-8 shadow-hard relative mb-12" style={{ borderRadius: '15px' }}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2d2d2d] text-white px-4 py-1 text-[12px] font-kalam rounded-full">
            Institutional Mission
          </div>
          <p className="font-patrick text-[19px] text-[#2d2d2d] text-center italic leading-relaxed">
            "Academic Origin has successfully mentored thousands of students over the last decade. Today, we are proud to bring this same academic excellence to <strong>Ursuline Study Centre</strong> with a focused mission to empower girls through premium education."
          </p>
        </div>

        {/* Competitive Success Info */}
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-[#f0f7ff] rounded-xl border border-[#2d5da1]/20">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-[#2d5da1] shadow-sm flex-shrink-0">
             <Award size={32} className="text-[#2d5da1]" />
          </div>
          <div>
            <h3 className="font-kalam text-[22px] text-[#2d2d2d] mb-2">Consistent Academic Success</h3>
            <p className="font-patrick text-[15px] text-[#5a5550] leading-relaxed">
              Our legacy is built on year-after-year performance in <strong>JAC & CBSE Boards</strong> along with consistent selections in competitive exams like <strong>JEE and NEET</strong>. We believe in building a strong foundation that leads to lifelong success.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-patrick text-[16px] text-[#5a5550] mb-4">Be a part of our next success story. 🎯</p>
          <a href="#contact" className="btn-primary inline-flex">
            Enquire for Admission →
          </a>
        </div>
      </div>
    </section>
  );
}

