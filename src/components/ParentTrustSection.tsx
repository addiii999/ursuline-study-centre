import React from 'react';
import { ShieldCheck, Clock, MapPin, Phone } from 'lucide-react';

const trustPoints = [
  {
    icon: <ShieldCheck size={24} strokeWidth={2.5} className="text-[#2d5da1]" />,
    title: 'Safe, Monitored Campus',
    desc: 'Fully CCTV-monitored premises inside Ursuline Convent School & Inter College. Zero compromise on student safety.',
  },
  {
    icon: <Clock size={24} strokeWidth={2.5} className="text-[#ff4d4d]" />,
    title: 'Fixed Batch Timings',
    desc: 'Regular schedules. No random changes. Parents always know when their child is in class.',
  },
  {
    icon: <MapPin size={24} strokeWidth={2.5} className="text-[#c9a800]" />,
    title: 'Known, Verified Location',
    desc: 'Inside one of Ranchi\'s most respected school campuses. Parents can visit anytime.',
  },
  {
    icon: <Phone size={24} strokeWidth={2.5} className="text-[#2d2d2d]" />,
    title: 'Parent Helpline',
    desc: 'Dedicated contact for parents to reach out anytime. Regular progress updates provided.',
  },
];

export default function ParentTrustSection() {
  return (
    <section className="py-20 bg-[#fdfbf7] relative overflow-hidden" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-block sticky-note px-4 py-2 -rotate-2 mb-6">
              <span className="font-kalam text-[14px]">For parents 💌</span>
            </div>
            <h2 className="font-kalam text-[38px] sm:text-[48px] text-[#2d2d2d] leading-tight mb-4">
              A Place Parents Can <span className="squiggle-underline">Fully Trust</span>
            </h2>
            <p className="font-patrick text-[17px] text-[#5a5550] leading-relaxed mb-8">
              We know that sending your child to a coaching centre is an act of trust. That's why we've built every part of Ursuline Study Centre with parents in mind - safety, transparency, and communication first.
            </p>

            {/* Contact info */}
            <div
              className="bg-white border-4 border-[#2d2d2d] p-5 shadow-hard rotate-1"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#ff4d4d] flex-shrink-0" />
                  <div>
                    <div className="font-kalam text-[15px] text-[#2d2d2d]">Our Location</div>
                    <a 
                      href="https://maps.app.goo.gl/cjRX1kb3UhFfGSfx9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-patrick text-[13px] text-[#5a5550] hover:text-[#ff4d4d] transition-colors"
                    >
                      Inside Ursuline Convent School & Inter College, Ranchi, Jharkhand
                    </a>
                  </div>
                </div>
                <hr className="border-dashed border-[#e5e0d8]" />
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#2d5da1] flex-shrink-0" />
                  <div>
                    <div className="font-kalam text-[15px] text-[#2d2d2d]">Call / WhatsApp</div>
                    <div className="flex flex-col">
                      <a href="tel:+919507589503" className="font-patrick text-[13px] text-[#5a5550] hover:text-[#2d5da1] transition-colors">+91 95075 89503</a>
                      <a href="tel:+916206874337" className="font-patrick text-[13px] text-[#5a5550] hover:text-[#2d5da1] transition-colors">+91 62068 74337</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {trustPoints.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex gap-4 items-start bg-white border-3 border-[#2d2d2d] p-4 shadow-hard ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all`}
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', border: '3px solid #2d2d2d' }}
              >
                <div
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center border-2 border-[#2d2d2d] bg-[#fdfbf7] shadow-hard-sm"
                  style={{ borderRadius: '60px 5px 60px 5px / 5px 60px 5px 60px' }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-kalam text-[17px] text-[#2d2d2d] mb-1">{title}</h3>
                  <p className="font-patrick text-[13px] text-[#5a5550] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
