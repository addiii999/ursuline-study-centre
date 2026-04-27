import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';

const stats = [
  { num: '95%', label: 'Board Exam Pass Rate', color: '#2d5da1' },
  { num: '50+', label: 'JEE/NEET Selections', color: '#ff4d4d' },
  { num: '2500+', label: 'Students Mentored', color: '#2d2d2d' },
  { num: '10+', label: 'Years of Excellence', color: '#c9a800' },
];

const toppers = [
  { name: 'Priya Sharma', score: 'AIR 4820', exam: 'JEE Mains 2024', emoji: '🥇' },
  { name: 'Ankita Singh', score: '98.6%', exam: 'CBSE Boards 2024', emoji: '🥈' },
  { name: 'Riya Kumari', score: 'NEET 620/720', exam: 'NEET 2024', emoji: '🥉' },
  { name: 'Aanya Gupta', score: '96.4%', exam: 'JAC Boards 2024', emoji: '⭐' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy size={22} className="text-[#ff4d4d]" />
            <span className="font-kalam text-[15px] text-[#ff4d4d]">- Proven Track Record -</span>
            <Trophy size={22} className="text-[#ff4d4d]" />
          </div>
          <h2 className="font-kalam text-[40px] sm:text-[52px] text-[#2d2d2d] leading-tight">
            Our Students'<br /><span className="squiggle-underline">Results</span> Say It All
          </h2>
          <p className="font-patrick text-[17px] text-[#5a5550] mt-4 max-w-xl mx-auto">
            Real students. Real results. Year after year.
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

        {/* Toppers Cards */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={20} className="text-[#2d5da1]" />
            <h3 className="font-kalam text-[26px] text-[#2d2d2d]">Recent Toppers</h3>
            <div className="flex-1 border-t-2 border-dashed border-[#2d2d2d] opacity-20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toppers.map(({ name, score, exam, emoji }, i) => (
              <div
                key={name}
                className={`relative bg-white border-3 border-[#2d2d2d] p-4 shadow-hard ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 hover:scale-105 transition-all duration-200`}
                style={{ borderRadius: '20px 255px 20px 255px / 255px 20px 255px 20px', border: '3px solid #2d2d2d' }}
              >
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-[#fff3b0] border border-[#c9a800] opacity-80" style={{ borderRadius: '3px' }} />
                <div className="text-center pt-2">
                  <div className="text-[30px] mb-2">{emoji}</div>
                  <div className="font-kalam text-[17px] text-[#2d2d2d] mb-1">{name}</div>
                  <div className="font-kalam text-[22px] text-[#ff4d4d] mb-1">{score}</div>
                  <div className="font-patrick text-[12px] text-[#9a9590]">{exam}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-patrick text-[16px] text-[#5a5550] mb-4">Your name could be on this list next year. 🎯</p>
          <a href="#demo" className="btn-primary inline-flex">
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
