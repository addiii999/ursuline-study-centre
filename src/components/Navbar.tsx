"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#contact", label: "Enroll" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-900/40">
            <span className="text-white font-bold text-sm font-[family-name:var(--font-manrope)]">U</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-sm font-[family-name:var(--font-manrope)] tracking-tight">
              Ursuline
            </span>
            <span className="text-[#d4a843] text-[10px] tracking-widest uppercase font-[family-name:var(--font-inter)]">
              Study Centre
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link font-[family-name:var(--font-inter)]">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-white/60 text-sm font-[family-name:var(--font-inter)] hover:text-white transition-colors"
          >
            Log In
          </a>
          <a
            href="#contact"
            className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors font-[family-name:var(--font-manrope)]"
          >
            ENROLL →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 w-4" : "w-4"}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white py-2 font-[family-name:var(--font-inter)] text-sm transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#ef233c] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center hover:bg-red-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Enroll Now →
          </a>
        </div>
      )}
    </nav>
  );
}
