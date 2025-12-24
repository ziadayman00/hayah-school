"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (!isHome) {
      setScrolled(true);
    } else {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Determine if navbar should be transparent
  // Only transparent if: on home page AND not scrolled AND mobile menu is closed
  const isTransparent = isHome && !scrolled && !isOpen;

  // Dynamic colors based on state
  const textColor = isTransparent ? "text-white" : "text-[#1e3a5f]";
  const subTextColor = isTransparent ? "text-[#F3E5AB]" : "text-[#C5A028]";
  const navBg = isTransparent ? "bg-transparent" : "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50";

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${navBg}`}
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
                bg-gradient-to-br from-[#AA861E] via-[#C5A028] to-[#E5C56C]
                flex items-center justify-center
                transition-all duration-500
                group-hover:scale-105
                shadow-md group-hover:shadow-[#E5C56C]/40
              ">
                {/* Seed / Growth Icon */}
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7 text-white transition-transform duration-500 group-hover:-rotate-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
              </div>

              {/* Soft Pulse Ring */}
              <span className="
                absolute inset-0 rounded-full
                border border-[#E5C56C]/30
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
                  ${textColor}
                  group-hover:text-[#C5A028]
                `}
              >
                مدرسة نماء
              </span>

              <span
                className={`
                  text-[10px] sm:text-xs font-medium tracking-widest uppercase
                  transition-colors duration-300
                  ${subTextColor}
                `}
              >
                Namaa School
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "الرئيسية", href: "/" },
              { name: "من نحن", href: "/about" },
              { name: "معرض الصور", href: "/gallery" },
              { name: "المراحل الدراسية", href: "/#stages" },
              { name: "تقديم طلب", href: "/#apply" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-all duration-300 relative group overflow-hidden ${textColor} hover:text-[#C5A028]`}
              >
                {item.name}
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#C5A028] to-[#E5C56C] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isTransparent ? "hover:bg-white/10" : "hover:bg-gray-100"
            }`}
            aria-label="القائمة"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isTransparent ? "bg-white" : "bg-[#1e3a5f]"
                } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isTransparent ? "bg-white" : "bg-[#1e3a5f]"
                } ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isTransparent ? "bg-white" : "bg-[#1e3a5f]"
                } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100/20">
            {[
              { name: "الرئيسية", href: "/" },
              { name: "من نحن", href: "/about" },
              { name: "معرض الصور", href: "/gallery" },
              { name: "المراحل الدراسية", href: "/#stages" },
              { name: "تقديم طلب", href: "/#apply" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 py-3 px-4 rounded-lg bg-gray-50/50 hover:bg-white ${
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-[#2C2C2C] hover:text-[#C5A028]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}