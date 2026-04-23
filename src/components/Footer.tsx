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
          className="font-[family-name:var(--font-manrope)] font-extrabold text-[clamp(4rem,18vw,14rem)] text-white/[0.025] tracking-tighter leading-none"
        >
          URSULINE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-900/40">
                <span className="text-white font-bold font-[family-name:var(--font-manrope)]">U</span>
              </div>
              <div>
                <p className="text-white font-bold font-[family-name:var(--font-manrope)]">Ursuline Study Centre</p>
                <p className="text-[#d4a843] text-[10px] tracking-widest uppercase font-[family-name:var(--font-inter)]">Precision Learning</p>
              </div>
            </div>
            <p className="text-white/30 text-sm font-[family-name:var(--font-inter)] leading-relaxed max-w-xs">
              Building confident learners through expert coaching, small batches, and personal attention since 2010.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-5">Navigation</p>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/40 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-5">Contact</p>
            <ul className="space-y-3 text-sm font-[family-name:var(--font-inter)] text-white/40">
              <li className="flex items-center gap-2">
                <span className="text-[#ef233c]">📍</span>
                Ursuline Study Centre, Bangalore
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#d4a843]">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f59e0b]">✉️</span>
                info@ursulinestudy.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-[family-name:var(--font-inter)]">
            © 2025 Ursuline Study Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-xs font-[family-name:var(--font-inter)]">Made with</span>
            <span className="text-[#ef233c] text-xs">♥</span>
            <span className="text-white/20 text-xs font-[family-name:var(--font-inter)]">for every student</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
