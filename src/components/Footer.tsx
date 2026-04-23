import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Enroll", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 overflow-hidden">
      {/* Big faded background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-[family-name:var(--font-manrope)] font-extrabold text-[clamp(2.5rem,15vw,14rem)] text-white/[0.025] tracking-tighter leading-none"
        >
          URSULINE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12 text-center sm:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex flex-col items-center sm:items-start gap-4 mb-6">
              <img src="/logo.jpeg" alt="USC Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full shadow-lg shadow-red-900/20 border border-white/10" />
              <div>
                <p className="text-white font-bold text-lg font-[family-name:var(--font-manrope)]">Ursuline Study Centre</p>
                <p className="text-[#d4a843] text-[10px] tracking-widest uppercase font-[family-name:var(--font-inter)]">Precision Learning</p>
              </div>
            </div>
            <p className="text-white/30 text-xs sm:text-sm font-[family-name:var(--font-inter)] leading-relaxed max-w-xs mx-auto sm:mx-0">
              Building confident learners through expert coaching, small batches, and personal attention since 2010.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-4 sm:mb-5">Navigation</p>
            <ul className="space-y-2 sm:space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors font-[family-name:var(--font-inter)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start sm:col-span-2 md:col-span-1">
            <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-4 sm:mb-5">Contact</p>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-[family-name:var(--font-inter)] text-white/40">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[#ef233c]">📍</span>
                Ursuline Study Centre, Ranchi
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[#d4a843]">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[#f59e0b]">✉️</span>
                info@ursulinestudy.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/20 text-[10px] sm:text-xs font-[family-name:var(--font-inter)]">
            © 2026 Ursuline Study Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-[10px] sm:text-xs font-[family-name:var(--font-inter)]">Made with</span>
            <span className="text-[#ef233c] text-xs">♥</span>
            <span className="text-white/20 text-[10px] sm:text-xs font-[family-name:var(--font-inter)]">for every student</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
