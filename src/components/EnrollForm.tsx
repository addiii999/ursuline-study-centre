"use client";

import { useState } from "react";

export default function EnrollForm() {
  const [captchaA] = useState(() => Math.ceil(Math.random() * 9));
  const [captchaB] = useState(() => Math.ceil(Math.random() * 9));
  const [captchaInput, setCaptchaInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    confirmMobile: "",
    studentClass: "",
    subject: "",
    date: "",
    time: "",
  });

  const classes = ["Class VI","Class VII","Class VIII","Class IX","Class X","Class XI","Class XII"];
  const subjects = ["Mathematics","Science","English","Social Studies","Commerce","All Subjects"];
  const timeSlots = ["7:00 AM – 8:00 AM","8:00 AM – 9:00 AM","3:00 PM – 4:00 PM","4:00 PM – 5:00 PM","5:00 PM – 6:00 PM","6:00 PM – 7:00 PM"];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.mobile.match(/^[6-9]\d{9}$/)) e.mobile = "Valid 10-digit mobile required";
    if (form.confirmMobile !== form.mobile) e.confirmMobile = "Mobile numbers do not match";
    if (!form.studentClass) e.studentClass = "Select a class";
    if (!form.subject) e.subject = "Select a subject";
    if (!form.date) e.date = "Select a date";
    if (!form.time) e.time = "Select a time";
    if (parseInt(captchaInput) !== captchaA + captchaB) e.captcha = "Incorrect answer";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="glass rounded-2xl p-12 border border-green-500/20">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-manrope)] font-bold text-2xl text-white mb-3">
            Enrollment Request Received!
          </h3>
          <p className="text-white/50 text-sm font-[family-name:var(--font-inter)]">
            We'll contact you within 24 hours to confirm your demo class. Thank you for choosing Ursuline Study Centre!
          </p>
        </div>
      </section>
    );
  }

  const inputClass = (field: string) =>
    `w-full bg-white rounded-lg border px-4 py-3 text-gray-800 text-sm placeholder:text-gray-400 outline-none focus:ring-2 transition-all duration-200 font-[family-name:var(--font-inter)] ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:border-[#ef233c] focus:ring-[#ef233c]/20"
    }`;

  const selectClass = (field: string) =>
    `w-full bg-white rounded-lg border px-4 py-3 text-gray-800 text-sm outline-none focus:ring-2 transition-all duration-200 appearance-none cursor-pointer font-[family-name:var(--font-inter)] ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:border-[#ef233c] focus:ring-[#ef233c]/20"
    }`;

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12 reveal">
        <span className="text-[#ef233c] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-3 block">
          Get Started
        </span>
        <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-3xl sm:text-4xl md:text-5xl gradient-text-hero tracking-tight">
          Book Your Free Demo Class
        </h2>
        <p className="text-white/40 mt-4 max-w-lg mx-auto text-xs sm:text-sm font-[family-name:var(--font-inter)]">
          Fill in your details and we'll schedule a free trial class. <span className="text-[#d4a843]/60">Safe and secure environment within the reputed Ursuline girls campus.</span>
        </p>
      </div>

      <div className="max-w-2xl mx-auto reveal">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#ffffff",
            boxShadow: "0 0 60px rgba(239,35,60,0.12), 0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Form header bar */}
          <div className="px-6 sm:px-8 py-4 sm:py-5 border-b border-gray-100 flex items-center gap-3"
            style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a0a05 100%)" }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ef233c] to-[#d4a843] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">U</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm font-[family-name:var(--font-manrope)]">Ursuline Study Centre</p>
              <p className="text-white/40 text-[10px] sm:text-xs font-[family-name:var(--font-inter)]">Enrollment Form</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-5 sm:px-8 py-6 sm:py-8 space-y-4 sm:space-y-5" noValidate>
            {/* Name */}
            <div>
              <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                Full Name *
              </label>
              <input id="form-name" type="text" placeholder="E.g. Arjun Sharma"
                className={inputClass("name")}
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                Email Address *
              </label>
              <input id="form-email" type="email" placeholder="you@example.com"
                className={inputClass("email")}
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
            </div>

            {/* Mobile + Confirm Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                  Mobile Number *
                </label>
                <input id="form-mobile" type="tel" placeholder="10-digit number"
                  maxLength={10}
                  className={inputClass("mobile")}
                  value={form.mobile}
                  onChange={e => setForm(f => ({ ...f, mobile: e.target.value.replace(/\D/g, "") }))} />
                {errors.mobile && <p className="text-red-500 text-[10px] mt-1">{errors.mobile}</p>}
              </div>
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                  Confirm Mobile *
                </label>
                <input id="form-confirm-mobile" type="tel" placeholder="Repeat mobile"
                  maxLength={10}
                  className={inputClass("confirmMobile")}
                  value={form.confirmMobile}
                  onChange={e => setForm(f => ({ ...f, confirmMobile: e.target.value.replace(/\D/g, "") }))} />
                {errors.confirmMobile && <p className="text-red-500 text-[10px] mt-1">{errors.confirmMobile}</p>}
              </div>
            </div>

            {/* Class + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                  Class *
                </label>
                <div className="relative">
                  <select id="form-class" className={selectClass("studentClass")}
                    value={form.studentClass}
                    onChange={e => setForm(f => ({ ...f, studentClass: e.target.value }))}>
                    <option value="">Select Class</option>
                    {classes.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</div>
                </div>
                {errors.studentClass && <p className="text-red-500 text-[10px] mt-1">{errors.studentClass}</p>}
              </div>
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                  Subject *
                </label>
                <div className="relative">
                  <select id="form-subject" className={selectClass("subject")}
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                    <option value="">Select Subject</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</div>
                </div>
                {errors.subject && <p className="text-red-500 text-[10px] mt-1">{errors.subject}</p>}
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                  Preferred Date *
                </label>
                <input id="form-date" type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass("date")}
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                {errors.date && <p className="text-red-500 text-[10px] mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                  Preferred Time *
                </label>
                <div className="relative">
                  <select id="form-time" className={selectClass("time")}
                    value={form.time}
                    onChange={e => setForm(f => ({ ...f, time: e.target.value }))}>
                    <option value="">Select Time Slot</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</div>
                </div>
                {errors.time && <p className="text-red-500 text-[10px] mt-1">{errors.time}</p>}
              </div>
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-gray-600 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 font-[family-name:var(--font-inter)] uppercase tracking-wide">
                Security Check *
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-full sm:w-auto bg-gray-100 rounded-lg px-4 py-2 sm:py-3 text-gray-800 font-semibold text-sm select-none border border-gray-200 min-w-[100px] text-center font-[family-name:var(--font-manrope)]">
                  {captchaA} + {captchaB} = ?
                </div>
                <input
                  id="form-captcha"
                  type="number"
                  placeholder="Answer"
                  className={`${inputClass("captcha")} w-full sm:max-w-[100px]`}
                  value={captchaInput}
                  onChange={e => setCaptchaInput(e.target.value)}
                />
              </div>
              {errors.captcha && <p className="text-red-500 text-[10px] mt-1">{errors.captcha}</p>}
            </div>

            {/* Submit */}
            <button
              id="form-submit-btn"
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:opacity-90 active:scale-[0.99] font-[family-name:var(--font-manrope)]"
              style={{
                background: "linear-gradient(135deg, #ef233c 0%, #d4a843 100%)",
                boxShadow: "0 4px 20px rgba(239,35,60,0.35)",
              }}
            >
              Book Free Demo Class →
            </button>

            <p className="text-gray-400 text-[10px] sm:text-xs text-center font-[family-name:var(--font-inter)]">
              No payment required. We'll call you to confirm.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
