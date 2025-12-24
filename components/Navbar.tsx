"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
{/* Logo */}
<Link href="/" className="flex items-center gap-3 group select-none">
  {/* Icon */}
  <div className="relative">
    <div className="
      w-11 h-11 sm:w-14 sm:h-14
      rounded-full
      bg-gradient-to-br from-[#2F6F4E] via-[#3E8B63] to-[#6DBE8A]
      flex items-center justify-center
      transition-all duration-500
      group-hover:scale-105
      shadow-md group-hover:shadow-[#6DBE8A]/40
    ">
      {/* Seed / Growth Icon */}
      <svg
        className="w-5 h-5 sm:w-7 sm:h-7 text-white transition-transform duration-500 group-hover:-rotate-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C9 6 6 9 6 13a6 6 0 0012 0c0-4-3-7-6-11z" />
      </svg>
    </div>

    {/* Soft Pulse Ring */}
    <span className="
      absolute inset-0 rounded-full
      border border-[#6DBE8A]/30
      opacity-0 group-hover:opacity-100
      scale-110
      transition-all duration-500
    "/>
  </div>

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span
      className={`
        text-lg sm:text-xl md:text-2xl font-semibold tracking-wide
        transition-colors duration-300
        ${scrolled ? "text-[#1F3D2B]" : "text-white"}
        group-hover:text-[#2F6F4E]
      `}
    >
      مدرسة حياة
    </span>

    <span
      className={`
        text-[10px] sm:text-xs font-medium tracking-widest uppercase
        transition-colors duration-300
        ${scrolled ? "text-[#6DBE8A]" : "text-[#A7E3C3]"}
      `}
    >
      Hayah School
    </span>
  </div>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-all duration-300 relative group ${
                scrolled ? "text-[#2C2C2C]" : "text-white"
              } hover:text-[#4A7C59]`}
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4A7C59] to-[#68A578] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 relative group ${
                scrolled ? "text-[#2C2C2C]" : "text-white"
              } hover:text-[#4A7C59]`}
            >
              عن المدرسة
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4A7C59] to-[#68A578] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#stages"
              className={`font-medium transition-all duration-300 relative group ${
                scrolled ? "text-[#2C2C2C]" : "text-white"
              } hover:text-[#4A7C59]`}
            >
              المراحل التعليمية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4A7C59] to-[#68A578] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#apply"
              className="bg-gradient-to-r from-[#4A7C59] to-[#68A578] text-white px-6 py-2.5 rounded-full hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-bold relative overflow-hidden group"
            >
              <span className="relative z-10">التقديم</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#68A578] to-[#4A7C59] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label="القائمة"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  scrolled ? "bg-[#1e3a5f]" : "bg-white"
                } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#1e3a5f]" : "bg-white"
                } ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  scrolled ? "bg-[#1e3a5f]" : "bg-white"
                } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/"
              className={`font-medium transition-all duration-300 py-2 px-4 rounded-lg ${
                scrolled
                  ? "text-[#2C2C2C] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              } hover:text-[#4A7C59]`}
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 py-2 px-4 rounded-lg ${
                scrolled
                  ? "text-[#2C2C2C] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              } hover:text-[#4A7C59]`}
              onClick={() => setIsOpen(false)}
            >
              عن المدرسة
            </Link>
            <Link
              href="#stages"
              className={`font-medium transition-all duration-300 py-2 px-4 rounded-lg ${
                scrolled
                  ? "text-[#2C2C2C] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              } hover:text-[#4A7C59]`}
              onClick={() => setIsOpen(false)}
            >
              المراحل التعليمية
            </Link>
            <Link
              href="#apply"
              className="bg-gradient-to-r from-[#4A7C59] to-[#68A578] text-white px-6 py-3 rounded-full text-center hover:shadow-xl transition-all duration-300 font-bold"
              onClick={() => setIsOpen(false)}
            >
              التقديم
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}