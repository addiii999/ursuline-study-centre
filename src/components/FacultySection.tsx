import React from 'react';
import { GraduationCap } from 'lucide-react';

const faculty = [
  {
    name: 'Sr. M. Alphonsa',
    subject: 'Physics & JEE',
    exp: '15 Years',
    badge: 'IIT Mentor',
    color: '#2d5da1',
    desc: 'Specialized in mechanics and electrostatics. Known for making complex JEE concepts crystal clear.',
    emoji: '🔬',
  },
  {
    name: 'Anita Devi',
    subject: 'Biology & NEET',
    exp: '12 Years',
    badge: 'NEET Expert',
    color: '#ff4d4d',
    desc: 'Ex-medical educator. Her biology revision sessions are legendary among past batches.',
    emoji: '🧬',
  },
  {
    name: 'Rakesh Kumar',
    subject: 'Mathematics',
    exp: '10 Years',
    badge: 'Maths Wizard',
    color: '#c9a800',
    desc: 'M.Sc Mathematics. Makes calculus and algebra feel like storytelling.',
    emoji: '📐',
  },
  {
    name: 'Sunita Oraon',
    subject: 'Chemistry & NEET',
    exp: '8 Years',
    badge: 'Organic Chem',
    color: '#2d5da1',
    desc: 'Brilliant educator for organic chemistry. Her notes are legendary shortcut guides.',
    emoji: '⚗️',
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 bg-[#e5e0d8] relative">
      <div
        className="absolute inset-0 opacity-15"
        style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-block sticky-note px-5 py-2 rotate-1 mb-5">
            <span className="font-kalam text-[15px] text-[#2d2d2d]">Meet the mentors 👩‍🏫</span>
          </div>
          <h2 className="font-kalam text-[40px] sm:text-[52px] text-[#2d2d2d] leading-tight">
            Expert Faculty. <span className="squiggle-underline">Real Mentors.</span>
          </h2>
          <p className="font-patrick text-[17px] text-[#5a5550] mt-4 max-w-xl mx-auto">
            Every teacher here has one goal: making your success feel inevitable.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map(({ name, subject, exp, badge, color, desc, emoji }, i) => (
            <div
              key={name}
              className={`bg-white border-4 border-[#2d2d2d] p-5 shadow-hard relative ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 hover:-translate-y-1 transition-all duration-200`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              {/* Badge */}
              <div
                className="absolute -top-4 left-4 font-kalam text-[11px] text-white px-3 py-1 border-2 border-[#2d2d2d] shadow-hard-sm rotate-2"
                style={{ background: color, borderRadius: '255px 5px 255px 5px / 5px 255px 5px 255px', letterSpacing: '0.5px' }}
              >
                {badge}
              </div>

              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 mx-auto mb-4 mt-2 bg-[#fdfbf7] border-3 border-[#2d2d2d] flex items-center justify-center text-[30px] shadow-hard-sm"
                style={{ borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%', border: '3px solid #2d2d2d' }}
              >
                {emoji}
              </div>

              <div className="text-center">
                <h3 className="font-kalam text-[18px] text-[#2d2d2d] mb-0.5">{name}</h3>
                <div className="font-patrick text-[13px] font-bold mb-1" style={{ color }}>{subject}</div>
                <div
                  className="inline-block font-patrick text-[12px] text-[#5a5550] border border-dashed border-[#2d2d2d] px-2 py-0.5 mb-3"
                  style={{ borderRadius: '20px' }}
                >
                  {exp} Experience
                </div>
                <p className="font-patrick text-[13px] text-[#5a5550] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <div
            className="inline-flex items-center gap-2 bg-white border-2 border-[#2d2d2d] px-5 py-3 shadow-hard"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
          >
            <GraduationCap size={20} className="text-[#2d5da1]" />
            <span className="font-patrick text-[15px] text-[#2d2d2d]">All faculty are verified, experienced, and mentor-trained.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
