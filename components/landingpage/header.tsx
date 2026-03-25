"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "hi">("en");

  const navItems = {
    en: ["Platforms", "How it Works", "Impact", "Contact Us"],
    hi: ["प्लेटफॉर्म", "कैसे काम करता है", "प्रभाव", "संपर्क करें"],
  };

  return (
    <header className="fixed top-0 w-full z-50 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">

        {/* Glass Container */}
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]">

          {/* Logo */}
          <div className="text-lg font-bold tracking-tight text-black">
            <span className="text-[#c69938]">Job</span>Sarathi
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            {navItems[lang].map((item, i) => (
              <Link
                key={i}
                href="#"
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c69938] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <div className="hidden md:flex items-center bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs rounded-full transition ${
                  lang === "en"
                    ? "bg-[#c69938] text-white"
                    : "text-gray-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1 text-xs rounded-full transition ${
                  lang === "hi"
                    ? "bg-[#c69938] text-white"
                    : "text-gray-700"
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* CTA */}
            <button className="hidden md:block bg-[#c69938] text-white px-5 py-2 rounded-md text-sm font-semibold hover:scale-105 hover:shadow-lg transition">
              {lang === "en" ? "Download App" : "ऐप डाउनलोड करें"}
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 space-y-4 md:hidden">

            {navItems[lang].map((item, i) => (
              <Link key={i} href="#" className="block text-gray-800">
                {item}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setLang("en")}
                className={`flex-1 py-2 rounded-full ${
                  lang === "en"
                    ? "bg-[#c69938] text-white"
                    : "bg-white/20"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`flex-1 py-2 rounded-full ${
                  lang === "hi"
                    ? "bg-[#c69938] text-white"
                    : "bg-white/20"
                }`}
              >
                हिंदी
              </button>
            </div>

            <button className="w-full bg-[#c69938] text-white py-2 rounded-md font-semibold mt-2">
              {lang === "en" ? "Download App" : "ऐप डाउनलोड करें"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}