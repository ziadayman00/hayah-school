"use client";

import { useEffect, useRef, useState } from "react";

export default function Stages() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
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

  const stages = [
    {
      id: "kg",
      title: "الحضانة",
      age: "3-5 سنوات",
      icon: "🎨",
      color: "from-[#E5C56C] to-[#C5A028]",
      image: "/images/kindergarten.jpeg",
      description:
        "بيئة آمنة ومحفزة لتنمية المهارات الأساسية من خلال اللعب والاستكشاف",
      features: [
        "تنمية المهارات الحركية",
        "تعلم من خلال اللعب",
        "أنشطة فنية وإبداعية",
        "تعزيز المهارات الاجتماعية",
      ],
    },
    {
      id: "primary",
      title: "الابتدائي",
      age: "6-12 سنة",
      icon: "📚",
      color: "from-[#1e3a5f] to-[#2a4d7f]",
      image: "/images/classroom.jpeg",
      description:
        "بناء الأساسيات الأكاديمية القوية مع تعزيز التفكير النقدي والإبداعي",
      features: [
        "مناهج متطورة ومعتمدة",
        "أنشطة علمية وعملية",
        "تنمية مهارات القراءة",
        "برامج الوعي البيئي",
      ],
    },
    {
      id: "middle",
      title: "الإعدادي",
      age: "13-15 سنة",
      icon: "🎓",
      color: "from-[#1E7F5C] to-[#5EC4A1]",
      image: "/images/theater2.jpeg",
      description:
        "إعداد الطلاب للمرحلة الثانوية مع التركيز على التميز الأكاديمي والقيادة",
      features: [
        "برامج أكاديمية متقدمة",
        "تطوير مهارات البحث",
        "أنشطة قيادية",
        "إعداد للمرحلة الثانوية",
      ],
    },
  ];

  return (
    <section
      id="stages"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#C5A028]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#1e3a5f]/5 rounded-full blur-3xl"></div>

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
                المراحل التعليمية
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              رحلة تعليمية متكاملة
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر تعليمًا شاملاً في جميع المراحل لبناء أساس قوي لمستقبل أطفالكم
            </p>
          </div>

          {/* Stage Tabs - Mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeStage === index
                      ? `bg-gradient-to-r ${stage.color} text-white shadow-xl scale-105`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-xl ml-2">{stage.icon}</span>
                  {stage.title}
                </button>
              ))}
            </div>

            {/* Mobile Stage Content */}
            <div
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={stages[activeStage].image}
                    alt={stages[activeStage].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${stages[activeStage].color} opacity-70`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <div className="text-6xl mb-3 animate-float">{stages[activeStage].icon}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      {stages[activeStage].title}
                    </h3>
                    <p className="text-lg opacity-90">{stages[activeStage].age}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {stages[activeStage].description}
                  </p>

                  <div className="space-y-3">
                    {stages[activeStage].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${stages[activeStage].color} flex items-center justify-center flex-shrink-0 shadow-md`}
                        >
                          <span className="text-white text-lg">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${stage.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                      <div className="text-6xl mb-3 group-hover:scale-125 transition-transform duration-500">
                        {stage.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{stage.title}</h3>
                      <p className="text-lg opacity-90">{stage.age}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="space-y-3 mt-auto">
                      {stage.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:translate-x-1"
                        >
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                          >
                            <span className="text-white text-lg">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}