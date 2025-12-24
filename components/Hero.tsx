"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    "/images/school-1.jpeg",
    "/images/school-2.jpeg",
    "/images/school-3.jpeg",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`مدرسة نماء ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              quality={90}
            />
          </div>
        ))}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 to-[#C5A028]/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#C5A028]/10 rounded-full blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#E5C56C]/10 rounded-full blur-3xl animate-float animation-delay-2000 hidden md:block" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 mb-6 sm:mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-[#E5C56C] rounded-full animate-pulse" />
            <span className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide">
              الاستدامة البيئية • التعليم المتميز
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            مدرسة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C56C] to-[#C5A028] drop-shadow-lg">
              نماء
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/95 mb-6 sm:mb-8 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            نبني مستقبلًا أخضر
          </p>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            تعليم متميز يجمع بين الأصالة والحداثة، مع التزام كامل بالاستدامة
            البيئية لبناء جيل واعٍ ومسؤول
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 transition-all duration-1000 delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#apply"
              className="group w-full sm:w-auto bg-gradient-to-r from-[#C5A028] to-[#E5C56C] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#C5A028]/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                قدّم الآن
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#E5C56C] to-[#C5A028] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/about"
              className="group w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                اكتشف المزيد
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats Cards */}
          <div
            className={`grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { number: "3", label: "مراحل تعليمية", icon: "🎓" },
              { number: "100%", label: "استدامة بيئية", icon: "🌱" },
              { number: "⭐", label: "تعليم متميز", icon: null }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                {stat.icon && (
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                )}
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#E5C56C] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-white w-8 sm:w-12"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`الصورة ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}