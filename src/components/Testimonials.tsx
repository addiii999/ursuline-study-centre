import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. Lata Sharma',
    role: 'Parent of Class 12 Student',
    text: 'The faculty here genuinely cares - they treat every student personally. Being inside the Convent campus gives us parents complete peace of mind regarding safety and environment.',
    stars: 5,
    emoji: '👩',
    rotate: '-rotate-1',
    color: '#2d5da1',
  },
  {
    name: 'Priya Kumari',
    role: 'NEET Aspirant',
    text: 'The biology sessions are incredibly detailed. I used to struggle with complex concepts, but the way teachers explain them with diagrams and personal notes is amazing.',
    stars: 5,
    emoji: '👧',
    rotate: 'rotate-1',
    color: '#ff4d4d',
  },
  {
    name: 'Mrs. Sunita Oraon',
    role: 'Parent of Class 10 Student',
    text: 'We chose USC because of its location and reputation for girls\' education. My daughter has shown immense improvement in Mathematics and Science within just 3 months.',
    stars: 5,
    emoji: '👩',
    rotate: '-rotate-1',
    color: '#2d2d2d',
  },
  {
    name: 'Ananya Singh',
    role: 'Class 12 Boards Student',
    text: 'Small batches mean I can ask any doubt without hesitation. The handcrafted notes provided by teachers are far better than any standard textbooks I\'ve used.',
    stars: 5,
    emoji: '👧',
    rotate: 'rotate-2',
    color: '#2d5da1',
  },
  {
    name: 'Aditi Verma',
    role: 'JEE Aspirant',
    text: 'The mock test series and regular doubt sessions helped me build a strong foundation. The focus here is on understanding concepts rather than just memorizing formulas.',
    stars: 5,
    emoji: '👧',
    rotate: '-rotate-2',
    color: '#ff4d4d',
  },
  {
    name: 'Mrs. Rekha Gupta',
    role: 'Parent, Class 11 Batch',
    text: 'As a parent, I appreciate the regular updates we receive about attendance and performance. It\'s a very disciplined and supportive environment for girls.',
    stars: 5,
    emoji: '👩',
    rotate: 'rotate-1',
    color: '#2d2d2d',
  },
];

export default function Testimonials() {
  return (
    <section id="gallery" className="py-20 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div
            className="inline-block bg-[#2d2d2d] text-[#fff3b0] border-2 border-[#2d2d2d] px-5 py-2 -rotate-1 mb-5 shadow-hard"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
          >
            <span className="font-kalam text-[15px]">Real words. Real families. 🗣️</span>
          </div>
          <h2 className="font-kalam text-[40px] sm:text-[52px] text-[#2d2d2d] leading-tight">
            What Students & Parents <br /><span className="squiggle-underline">Are Saying</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map(({ name, role, text, stars, emoji, rotate, color }, i) => (
            <div
              key={name}
              className={`break-inside-avoid relative bg-white border-3 border-[#2d2d2d] p-5 shadow-hard ${rotate} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 mb-5`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', border: '3px solid #2d2d2d' }}
            >
              {/* Tape */}
              <div className="absolute -top-3 left-6 w-12 h-5 bg-[#fff3b0] border border-[#c9a800] opacity-70" style={{ borderRadius: '3px', transform: `rotate(${i % 2 === 0 ? '-2' : '2'}deg)` }} />

              {/* Quote icon */}
              <Quote size={20} className="mb-3 opacity-30" style={{ color }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array(stars).fill(0).map((_, si) => (
                  <Star key={si} size={13} fill="#FFB547" color="#FFB547" />
                ))}
              </div>

              <p className="font-patrick text-[15px] text-[#5a5550] leading-relaxed mb-4">"{text}"</p>

              <div className="flex items-center gap-2 pt-3 border-t-2 border-dashed border-[#e5e0d8]">
                <div
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#2d2d2d] text-[18px] flex-shrink-0"
                  style={{ borderRadius: '50%', background: '#fdfbf7' }}
                >
                  {emoji}
                </div>
                <div>
                  <div className="font-kalam text-[15px] text-[#2d2d2d] leading-none">{name}</div>
                  <div className="font-patrick text-[12px] text-[#9a9590]">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
