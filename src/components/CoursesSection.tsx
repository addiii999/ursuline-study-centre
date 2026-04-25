import React from 'react';
import { ArrowRight, BookOpen, FlaskConical, Calculator, Shapes } from 'lucide-react';

const courses = [
  {
    icon: <FlaskConical size={26} strokeWidth={2.5} />,
    tag: 'Medical',
    name: 'NEET Preparation',
    desc: 'Biology, Physics & Chemistry with deep conceptual clarity and intensive practice papers.',
    highlights: ['PCB Intensive', 'Weekly Mock Tests', 'NCERT Focus', 'Doubt Sessions'],
    color: '#ff4d4d',
    bg: '#fff5f5',
    rotate: '-rotate-1',
  },
  {
    icon: <Calculator size={26} strokeWidth={2.5} />,
    tag: 'Engineering',
    name: 'JEE Mains & Advanced',
    desc: 'Rigorous PCM training aligned with JEE syllabus. From fundamentals to advanced problem-solving.',
    highlights: ['PCM Depth', 'DPP Sheets', 'JEE Pattern', 'IIT Strategy'],
    color: '#2d5da1',
    bg: '#f0f5ff',
    rotate: 'rotate-1',
    featured: true,
  },
  {
    icon: <BookOpen size={26} strokeWidth={2.5} />,
    tag: 'Class 11 & 12',
    name: 'Board Mastery',
    desc: 'Score 90%+ in CBSE/JAC boards with chapter-by-chapter coaching, notes & exam strategies.',
    highlights: ['CBSE / JAC', 'Notes Provided', 'Chapter Tests', 'Score 90%+'],
    color: '#2d2d2d',
    bg: '#fdfbf7',
    rotate: '-rotate-1',
  },
  {
    icon: <Shapes size={26} strokeWidth={2.5} />,
    tag: 'Classes 9 & 10',
    name: 'Foundation Batch',
    desc: 'Build a rock-solid academic foundation from Class 9. Early start = stronger future results.',
    highlights: ['All Subjects', 'Concept Building', 'Regular Revision', 'Mentor Support'],
    color: '#c9a800',
    bg: '#fffbec',
    rotate: 'rotate-1',
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-[#e5e0d8] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(45,45,45,0.15) 28px)',
      }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#2d5da1] text-white border-2 border-[#2d2d2d] px-5 py-2 rotate-2 mb-5 shadow-hard"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
            <span className="font-kalam text-[15px]">Pick your path 🎯</span>
          </div>
          <h2 className="font-kalam text-[40px] sm:text-[52px] text-[#2d2d2d] leading-tight">
            Courses We <span className="squiggle-underline">Offer</span>
          </h2>
          <p className="font-patrick text-[17px] text-[#5a5550] mt-4 max-w-xl mx-auto">
            From foundation to competitive exams — we've got every academic goal covered.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map(({ icon, tag, name, desc, highlights, color, bg, rotate, featured }) => (
            <div
              key={name}
              className={`relative bg-white border-4 border-[#2d2d2d] p-6 ${rotate} hover:rotate-0 transition-all duration-200 ${featured ? 'shadow-hard-lg' : 'shadow-hard'}`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', background: bg }}
            >
              {/* Tape strip */}
              <div className="absolute -top-3.5 left-8 w-14 h-6 bg-[#fff3b0] border border-[#c9a800] opacity-80" style={{ borderRadius: '3px', transform: 'rotate(-1deg)' }} />

              {/* Featured star */}
              {featured && (
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff4d4d] border-3 border-[#2d2d2d] flex items-center justify-center shadow-hard-sm rotate-12"
                  style={{ borderRadius: '50%', border: '3px solid #2d2d2d' }}>
                  <span className="text-white font-kalam text-[10px] font-bold leading-none text-center">TOP PICK</span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#2d2d2d] flex-shrink-0"
                  style={{ color, background: '#fdfbf7', borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px', boxShadow: `2px 2px 0px 0px #2d2d2d` }}
                >
                  {icon}
                </div>
                <div>
                  <div className="font-patrick text-[12px] text-[#9a9590] uppercase tracking-widest">{tag}</div>
                  <h3 className="font-kalam text-[22px] text-[#2d2d2d] leading-tight" style={{ color }}>{name}</h3>
                </div>
              </div>

              <p className="font-patrick text-[15px] text-[#5a5550] mb-4 leading-relaxed">{desc}</p>

              {/* Highlights as post-it tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {highlights.map(h => (
                  <span
                    key={h}
                    className="font-patrick text-[12px] border-[1.5px] border-dashed border-[#2d2d2d] px-2 py-0.5 bg-[#fdfbf7]"
                    style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 font-kalam font-bold text-[15px] border-b-2 border-dashed hover:border-solid transition-all"
                style={{ color }}
              >
                Enroll Now <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
