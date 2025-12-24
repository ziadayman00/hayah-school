"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSummary() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-[#FDFBF7] to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A028]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#C5A028]/10 px-4 sm:px-6 py-2 rounded-full mb-4 hover:bg-[#C5A028]/20 transition-colors">
              <span className="w-2 h-2 bg-[#C5A028] rounded-full animate-pulse" />
              <span className="text-[#C5A028] font-semibold text-sm sm:text-base">
                من نحن
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              مرحبًا بكم في مدرسة نماء
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بأن التعليم المتميز يبدأ من بيئة صحية ومستدامة
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div
              className={`bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C5A028] to-[#E5C56C] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f]">
                  رؤيتنا
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                نسعى لبناء جيل واعٍ بيئيًا، قادر على المساهمة في مستقبل مستدام
                من خلال تعليم متميز يجمع بين الأصالة والحداثة والابتكار.
              </p>
            </div>

            <div
              className={`bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4d7f] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f]">
                  رسالتنا
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                توفير بيئة تعليمية آمنة ومحفزة تعزز الاستدامة البيئية، وتنمي
                مهارات الطلاب الأكاديمية والاجتماعية والبيئية لبناء مستقبل أفضل.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] text-center mb-8">
              قيمنا الأساسية
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "الاستدامة", 
                  desc: "التزام كامل بالبيئة" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "التميز", 
                  desc: "تعليم عالي الجودة" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "المجتمع", 
                  desc: "شراكة مع الأهالي" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "الابتكار", 
                  desc: "أساليب تعليم حديثة" 
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="text-[#C5A028] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2 text-base sm:text-lg">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Highlight */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-3">
                لماذا مدرسة نماء؟
              </h3>
              <p className="text-gray-600">
                مرافق حديثة وبيئة تعليمية متميزة
              </p>
            </div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {[
    {
      image: "/images/classroom.jpeg",
      title: "فصول دراسية حديثة",
      description: "مجهزة بأحدث التقنيات التعليمية والشاشات التفاعلية",
      color: "from-[#1e3a5f] to-[#2a4d7f]", // أزرق فصول
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      image: "/images/kindergarten.jpeg",
      title: "حضانة متميزة",
      description: "بيئة آمنة ومحفزة مليئة بالألوان والأنشطة التعليمية",
      color: "from-[#8B5E3C] to-[#CFA57A]", // بني دافي حضانة
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      image: "/images/facilities-gym.jpeg",
      title: "مرافق رياضية متكاملة",
      description: "صالات رياضية وملاعب متعددة لتعزيز النشاط البدني",
      color: "from-[#1E7F5C] to-[#5EC4A1]", // أخضر نشط رياضة
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ].map((item, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ transitionDelay: `${1100 + index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30 group-hover:opacity-45 transition-opacity duration-300`} />

        {/* Icon Badge */}
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
            {item.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#C5A028] transition-colors">
          {item.title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Hover Effect Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
    </div>
  ))}
</div>
          </div>

          {/* CTA to Full About Page */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A028] to-[#E5C56C] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <span>اكتشف المزيد عن مدرستنا</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              تعرف على المراحل التعليمية والمرافق بالتفصيل
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
