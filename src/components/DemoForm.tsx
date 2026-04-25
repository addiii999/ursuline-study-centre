"use client";
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const classes = ['Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper'];
const streams = ['Science (PCM)', 'Science (PCB)', 'Commerce', 'Arts', 'Other'];
const exams = ['JEE Mains', 'JEE Advanced', 'NEET', 'JAC Boards', 'CBSE Boards', 'Foundation'];

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', class: '', stream: '', exam: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000)); // simulate
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="demo" className="py-20 bg-[#2d2d2d] relative overflow-hidden">
      {/* Paper texture on dark */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#fdfbf7 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-block sticky-note px-5 py-2 rotate-2 mb-5">
            <span className="font-kalam text-[15px] text-[#2d2d2d]">Free. No commitment. 🎁</span>
          </div>
          <h2 className="font-kalam text-[40px] sm:text-[52px] text-white leading-tight">
            Book Your <span className="text-[#ff4d4d] squiggle-underline">Free Demo</span>
          </h2>
          <p className="font-patrick text-[17px] text-[#aaa59a] mt-4 max-w-xl mx-auto">
            One session is all it takes to see the difference. Fill in the form below — our team will reach out within 24 hours.
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-[#fdfbf7] border-4 border-[#fdfbf7] p-6 sm:p-8 relative"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '8px 8px 0px 0px rgba(255,77,77,0.6)' }}
          >
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-7 bg-[#fff3b0] border border-[#c9a800] opacity-90" style={{ borderRadius: '3px', transform: 'translateX(-50%) rotate(-1deg)' }} />

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-kalam text-[15px] text-[#2d2d2d]">Full Name ✏️</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Priya Sharma" className="input-hand" />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="font-kalam text-[15px] text-[#2d2d2d]">Phone Number 📱</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 98765 43210" className="input-hand" type="tel" />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-kalam text-[15px] text-[#2d2d2d]">Email (Optional) 📧</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="e.g. priya@gmail.com" className="input-hand" type="email" />
              </div>

              {/* Class */}
              <div className="flex flex-col gap-1.5">
                <label className="font-kalam text-[15px] text-[#2d2d2d]">Studying in 📚</label>
                <select name="class" value={form.class} onChange={handleChange} required className="input-hand">
                  <option value="">Select Class</option>
                  {classes.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              {/* Stream */}
              <div className="flex flex-col gap-1.5">
                <label className="font-kalam text-[15px] text-[#2d2d2d]">Stream 🔬</label>
                <select name="stream" value={form.stream} onChange={handleChange} required className="input-hand">
                  <option value="">Select Stream</option>
                  {streams.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Target Exam */}
              <div className="flex flex-col gap-1.5">
                <label className="font-kalam text-[15px] text-[#2d2d2d]">Target Exam 🎯</label>
                <select name="exam" value={form.exam} onChange={handleChange} required className="input-hand">
                  <option value="">Select Exam</option>
                  {exams.map(ex => <option key={ex}>{ex}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
              <button type="submit" disabled={loading} className="btn-primary flex-1 justify-center">
                {loading ? '⏳ Submitting...' : <><Send size={18} /> Book My Free Demo</>}
              </button>
              <p className="font-patrick text-[13px] text-[#9a9590] text-center">
                🔒 Your details are never shared with anyone.
              </p>
            </div>
          </form>
        ) : (
          <div
            className="text-center bg-[#fdfbf7] p-10"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '8px 8px 0px 0px rgba(45, 93, 161, 0.6)', border: '4px solid #fdfbf7' }}
          >
            <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
            <h3 className="font-kalam text-[32px] text-[#2d2d2d] mb-2">You're All Set! 🎉</h3>
            <p className="font-patrick text-[16px] text-[#5a5550]">
              Our team will call you within 24 hours to schedule your free demo session.
              <br />See you in class soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
