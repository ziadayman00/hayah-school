"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Lightbox from "./Lightbox";

interface Facility {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

interface Stage {
  id: string;
  title: string;
  age: string;
  description: string;
  curriculum: string[];
  activities: string[];
  goals: string[];
  image: string;
  color: string;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // If we are on the dedicated about page, show content immediately
    if (pathname === "/about") {
      setIsVisible(true);
      return;
    }

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
  }, [pathname]);

  const facilities: Facility[] = [
    {
      id: "building",
      title: "المبنى الرئيسي",
      description: "تصميم معماري حديث مع التزام كامل بمعايير الاستدامة البيئية والطاقة المتجددة. مبنى متكامل يضم جميع المرافق التعليمية والترفيهية.",
      features: [
        "تصميم صديق للبيئة ومستدام",
        "إضاءة طبيعية في جميع الفصول",
        "نظام تهوية متطور وصحي",
        "مواد بناء صديقة للبيئة",
        "مساحات خضراء واسعة",
        "نظام طاقة شمسية متكامل"
      ],
      image: "/images/school-1.jpeg",
      color: "from-[#4A7C59] to-[#68A578]"
    },
    {
      id: "classroom",
      title: "الفصول الدراسية",
      description: "فصول دراسية حديثة مجهزة بأحدث التقنيات التعليمية، مصممة لتوفير بيئة تعليمية تفاعلية ومحفزة للإبداع والتفكير النقدي.",
      features: [
        "شاشات تفاعلية ذكية في كل فصل",
        "أثاث مريح وقابل للتعديل",
        "مساحات واسعة ومريحة للطلاب",
        "إنترنت عالي السرعة",
        "إضاءة LED موفرة للطاقة",
        "نظام صوتي متطور للعروض التقديمية"
      ],
      image: "/images/classroom.jpeg",
      color: "from-[#1e3a5f] to-[#2a4d7f]"
    },
    {
      id: "kindergarten",
      title: "الحضانة",
      description: "بيئة آمنة ومحفزة مصممة خصيصاً للأطفال الصغار، مليئة بالألوان والأنشطة التعليمية الممتعة التي تنمي مهاراتهم من خلال اللعب.",
      features: [
        "ألعاب تعليمية متنوعة ومبتكرة",
        "مساحات لعب آمنة ومراقبة",
        "أثاث مناسب لأعمار الأطفال",
        "إشراف متخصص من معلمات مؤهلات",
        "أنشطة فنية وإبداعية يومية",
        "حديقة خاصة بالأطفال"
      ],
      image: "/images/kindergarten.jpeg",
      color: "from-[#B8956A] to-[#D4C5B0]"
    },
    {
      id: "sports",
      title: "المرافق الرياضية",
      description: "صالة رياضية مجهزة بالكامل وملاعب متعددة لتعزيز النشاط البدني والصحة العامة للطلاب، مع برامج رياضية متنوعة.",
      features: [
        "صالة رياضية مغطاة بمساحة واسعة",
        "ملاعب كرة قدم وسلة وطائرة",
        "معدات رياضية حديثة وآمنة",
        "مدربون رياضيون مؤهلون",
        "برامج رياضية متنوعة لجميع الأعمار",
        "مسابقات وأنشطة رياضية منتظمة"
      ],
      image: "/images/facilities-gym.jpeg",
      color: "from-[#1e3a5f] to-[#2a4d7f]"
    },
    {
      id: "campus",
      title: "الساحة والحديقة",
      description: "مساحات خضراء واسعة وآمنة للأنشطة الخارجية والتفاعل الاجتماعي، مع نافورة مركزية وأماكن جلوس مريحة تحت الأشجار.",
      features: [
        "حدائق خضراء واسعة ومنسقة",
        "نافورة مركزية جميلة",
        "مناطق لعب آمنة ومظللة",
        "أماكن جلوس مريحة للطلاب",
        "نظام أمان وإشراف متكامل",
        "إضاءة ليلية للفعاليات المسائية"
      ],
      image: "/images/school-2.jpeg",
      color: "from-[#68A578] to-[#4A7C59]"
    },
    {
      id: "environment",
      title: "البيئة المستدامة",
      description: "التزامنا بالاستدامة البيئية يظهر في كل ركن من أركان المدرسة، من المساحات الخضراء إلى أنظمة الطاقة المتجددة.",
      features: [
        "حديقة عضوية يديرها الطلاب",
        "نظام إعادة تدوير شامل",
        "زراعة الأشجار والنباتات المحلية",
        "برامج التوعية البيئية المستمرة",
        "استخدام الطاقة الشمسية المتجددة",
        "نظام حفظ وإعادة استخدام المياه"
      ],
      image: "/images/school-3.jpeg",
      color: "from-[#4A7C59] to-[#68A578]"
    }
  ];

  const stages: Stage[] = [
    {
      id: "kindergarten",
      title: "مرحلة الحضانة",
      age: "3-5 سنوات",
      description: "نوفر بيئة آمنة ومحفزة للأطفال الصغار، حيث يتعلمون من خلال اللعب والاستكشاف. نركز على تنمية المهارات الأساسية والاجتماعية في جو مليء بالمرح والإبداع.",
      curriculum: [
        "تعليم الحروف والأرقام بطرق تفاعلية",
        "تنمية المهارات الحركية الدقيقة والكبيرة",
        "أنشطة فنية وموسيقية متنوعة",
        "قصص وحكايات تربوية هادفة",
        "تعلم القيم والسلوكيات الإيجابية"
      ],
      activities: [
        "اللعب الحر والموجه",
        "الرسم والتلوين",
        "الأنشطة الحركية والرياضية",
        "الغناء والموسيقى",
        "الأنشطة الخارجية في الحديقة"
      ],
      goals: [
        "بناء الثقة بالنفس والاستقلالية",
        "تطوير المهارات الاجتماعية",
        "تحفيز حب الاستطلاع والتعلم",
        "إعداد الطفل للمرحلة الابتدائية"
      ],
      image: "/images/kindergarten.jpeg",
      color: "from-[#B8956A] to-[#D4C5B0]"
    },
    {
      id: "primary",
      title: "المرحلة الابتدائية",
      age: "6-12 سنة",
      description: "نبني الأساسيات الأكاديمية القوية مع تعزيز التفكير النقدي والإبداعي. نستخدم مناهج حديثة ومعتمدة تجمع بين التعليم الأكاديمي والقيم الأخلاقية والبيئية.",
      curriculum: [
        "اللغة العربية والرياضيات والعلوم",
        "اللغة الإنجليزية بمستوى متقدم",
        "الدراسات الاجتماعية والتربية الإسلامية",
        "الحاسوب والتكنولوجيا",
        "التربية الفنية والموسيقية"
      ],
      activities: [
        "المشاريع العلمية والتجارب المعملية",
        "الأنشطة الرياضية المتنوعة",
        "المسابقات الثقافية والعلمية",
        "الرحلات التعليمية الميدانية",
        "برامج القراءة والمكتبة"
      ],
      goals: [
        "إتقان المهارات الأساسية في القراءة والكتابة",
        "تطوير مهارات التفكير النقدي وحل المشكلات",
        "بناء شخصية متوازنة أكاديمياً واجتماعياً",
        "غرس قيم الاستدامة البيئية"
      ],
      image: "/images/classroom.jpeg",
      color: "from-[#1e3a5f] to-[#2a4d7f]"
    },
    {
      id: "middle",
      title: "المرحلة الإعدادية",
      age: "13-15 سنة",
      description: "نعد الطلاب للمرحلة الثانوية مع التركيز على التميز الأكاديمي والقيادة. نوفر برامج متقدمة تنمي مهارات البحث والتفكير المستقل.",
      curriculum: [
        "مناهج أكاديمية متقدمة ومعمقة",
        "العلوم المتقدمة (فيزياء، كيمياء، أحياء)",
        "الرياضيات المتقدمة والجبر",
        "اللغات (عربي، إنجليزي، فرنسي اختياري)",
        "البرمجة وعلوم الحاسوب"
      ],
      activities: [
        "مشاريع البحث العلمي",
        "المسابقات الأكاديمية الوطنية",
        "الأندية الطلابية المتخصصة",
        "برامج القيادة وريادة الأعمال",
        "الأنشطة التطوعية والمجتمعية"
      ],
      goals: [
        "التحضير الأمثل للمرحلة الثانوية",
        "تطوير مهارات البحث والتحليل",
        "بناء مهارات القيادة والعمل الجماعي",
        "تعزيز الوعي البيئي والمسؤولية المجتمعية"
      ],
      image: "/images/facilities-gym.jpeg",
      color: "from-[#4A7C59] to-[#68A578]"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-[#FDFBF7] to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A7C59]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
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
            <div className="inline-flex items-center gap-2 bg-[#4A7C59]/10 px-4 sm:px-6 py-2 rounded-full mb-4 hover:bg-[#4A7C59]/20 transition-colors">
              <span className="w-2 h-2 bg-[#4A7C59] rounded-full animate-pulse" />
              <span className="text-[#4A7C59] font-semibold text-sm sm:text-base">
                من نحن
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              مرحبًا بكم في مدرسة نماء
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بأن التعليم المتميز يبدأ من بيئة صحية ومستدامة
            </p>
            <div className="inline-block bg-[#4A7C59]/10 px-4 py-2 rounded-lg mt-4">
              <p className="text-sm font-medium text-[#4A7C59] flex items-center gap-2">
                <span className="text-lg">🤖</span>
                تنويه: جميع الصور المعروضة تم إنشاؤها بواسطة الذكاء الاصطناعي لأغراض التوضيح
              </p>
            </div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A7C59] to-[#68A578] rounded-2xl flex items-center justify-center shadow-lg">
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
                مهارات الطلاب الأكاديمية والاجتماعية والبيئية لبناء مستقبل
                أفضل.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div
            className={`mb-20 transition-all duration-1000 ${
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
                  <div className="text-[#4A7C59] mb-3 group-hover:scale-110 transition-transform duration-300">
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

          {/* Educational Stages Section */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
                المراحل التعليمية
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                رحلة تعليمية متكاملة من الحضانة حتى الإعدادي
              </p>
            </div>

            <div className="space-y-12">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                    index % 2 === 0 ? "" : ""
                  }`}
                  style={{ transitionDelay: `${1200 + index * 200}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    {/* Image */}
                    <div 
                      className={`relative h-80 lg:h-auto cursor-pointer group/image ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(stage.image);
                      }}
                    >
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-60`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-4">
                          <span className="text-sm font-semibold">{stage.age}</span>
                        </div>
                        <h4 className="text-4xl font-bold mb-2">{stage.title}</h4>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {stage.description}
                      </p>

                      {/* Curriculum */}
                      <div className="mb-6">
                        <h5 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          المنهج الدراسي
                        </h5>
                        <div className="grid gap-2">
                          {stage.curriculum.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedStage(stage)}
                        className={`w-full py-3 px-6 bg-gradient-to-r ${stage.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        <span>اعرف المزيد عن {stage.title}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1800ms" }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
                مرافقنا المتميزة
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                استكشف مرافقنا الحديثة المصممة لتوفير أفضل بيئة تعليمية
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={facility.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  style={{ transitionDelay: `${2000 + index * 100}ms` }}
                  onClick={() => setSelectedFacility(facility)}
                >
                  {/* Image */}
                  <div 
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(facility.image);
                    }}
                  >
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                      <h4 className="text-2xl font-bold text-white">
                        {facility.title}
                      </h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-2">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${facility.color} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-[#1e3a5f] font-semibold transition-colors duration-300 text-sm flex items-center justify-center gap-2">
                      <span>اعرف المزيد</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Facility Details */}
      {selectedFacility && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <Image
                src={selectedFacility.image}
                alt={selectedFacility.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedFacility.color} opacity-70`} />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {selectedFacility.description}
              </p>

              <h4 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                المميزات الرئيسية
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedFacility.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedFacility.color} flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Stage Details */}
      {selectedStage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedStage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <Image
                src={selectedStage.image}
                alt={selectedStage.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedStage.color} opacity-70`} />
              <button
                onClick={() => setSelectedStage(null)}
                className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 inline-block mb-2">
                  <span className="text-white text-sm font-semibold">{selectedStage.age}</span>
                </div>
                <h3 className="text-4xl font-bold text-white">
                  {selectedStage.title}
                </h3>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {selectedStage.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Curriculum */}
                <div>
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    المنهج الدراسي
                  </h4>
                  <div className="space-y-3">
                    {selectedStage.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${selectedStage.color} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    الأنشطة
                  </h4>
                  <div className="space-y-3">
                    {selectedStage.activities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${selectedStage.color} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  أهداف المرحلة
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedStage.goals.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${selectedStage.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10 group"
            aria-label="إغلاق"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={lightboxImage}
                alt="صورة بالحجم الكامل"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
            اضغط في أي مكان للإغلاق
          </div>
        </div>
      )}


      {/* Image Lightbox - Reusable Component */}
      <Lightbox
        src={lightboxImage}
        alt="عرض الصورة"
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
}
