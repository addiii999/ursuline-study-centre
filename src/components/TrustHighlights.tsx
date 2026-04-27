import React from 'react';
import { ShieldCheck, Users, BookOpen, Award } from 'lucide-react';

const highlights = [
  {
    icon: <ShieldCheck size={28} strokeWidth={2.5} className="text-[#2d5da1]" />,
    title: 'Inside Convent Campus',
    desc: 'Secured, CCTV-monitored campus inside Ursuline Convent School for maximum safety.',
    rotate: '-rotate-1',
    shadow: 'shadow-hard-blue',
  },
  {
    icon: <Users size={28} strokeWidth={2.5} className="text-[#ff4d4d]" />,
    title: 'Small Batch Sizes',
    desc: 'Every student gets personal attention. No lost faces in a crowd of 100.',
    rotate: 'rotate-1',
    shadow: 'shadow-hard-red',
  },
  {
    icon: <BookOpen size={28} strokeWidth={2.5} className="text-[#2d5da1]" />,
    title: 'Structured Curriculum',
    desc: 'Topic-by-topic, exam-aligned coaching for boards and competitive exams.',
    rotate: '-rotate-1',
    shadow: 'shadow-hard-blue',
  },
  {
    icon: <Award size={28} strokeWidth={2.5} className="text-[#ff4d4d]" />,
    title: 'Proven Legacy',
    desc: 'Powered by Academic Origin with 10+ years of excellence and 2500+ successful students.',
    rotate: 'rotate-1',
    shadow: 'shadow-hard-red',
  },
];

export default function TrustHighlights() {
  return (
    <section id="about" className="py-20 bg-[#fdfbf7] relative overflow-hidden">
      {/* Section heading */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-14">
        <div className="inline-block sticky-note px-5 py-2 -rotate-2 mb-5">
          <span className="font-kalam text-[15px] text-[#2d2d2d]">Why parents choose us 📌</span>
        </div>
        <h2 className="font-kalam text-[40px] sm:text-[52px] text-[#2d2d2d] leading-tight">
          A Coaching Institute You Can <span className="squiggle-underline">Actually Trust</span>
        </h2>
        <p className="font-patrick text-[17px] text-[#5a5550] mt-4 max-w-2xl mx-auto">
          We don't just teach - we create an environment where students feel safe, focused, and motivated to reach their full potential.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon, title, desc, rotate, shadow }) => (
            <div
              key={title}
              className={`card-hand ${rotate} hover:rotate-0 cursor-default`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center bg-[#fdfbf7] border-2 border-[#2d2d2d] mb-4 ${shadow}`}
                style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
              >
                {icon}
              </div>
              <h3 className="font-kalam text-[19px] text-[#2d2d2d] mb-2">{title}</h3>
              <p className="font-patrick text-[14px] text-[#5a5550] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom doodle decoration */}
      <div className="text-center mt-14">
        <div className="inline-flex items-center gap-3">
          <div className="w-16 border-t-2 border-dashed border-[#2d2d2d] opacity-30" />
          <span className="font-kalam text-[14px] text-[#9a9590]">Academic Origin Legacy · Since 2014</span>
          <div className="w-16 border-t-2 border-dashed border-[#2d2d2d] opacity-30" />
        </div>
      </div>
    </section>
  );
}
