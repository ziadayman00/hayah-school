"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const galleryImages = [
  {
    id: 1,
    src: "/images/school-1.jpeg",
    category: "facilities",
    title: "مبنى المدرسة الرئيسي",
    description: "تصميم عصري يجمع بين الأصالة والحداثة",
  },
  {
    id: 2,
    src: "/images/classroom.jpeg",
    category: "facilities",
    title: "الفصول الدراسية",
    description: "بيئة تعليمية تفاعلية مجهزة بأحدث التقنيات",
  },
  {
    id: 3,
    src: "/images/kindergarten.jpeg",
    category: "activities",
    title: "رياض الأطفال",
    description: "مساحات آمنة وممتعة لأطفالنا الصغار",
  },
  {
    id: 4,
    src: "/images/facilities-gym.jpeg",
    category: "facilities",
    title: "الصالة الرياضية",
    description: "تجهيزات رياضية متكاملة لصحة بدنية أفضل",
  },
  {
    id: 5,
    src: "/images/school-2.jpeg",
    category: "general",
    title: "ساحات المدرسة",
    description: "مساحات خضراء واسعة للاستراحة والأنشطة",
  },
  {
    id: 6,
    src: "/images/school-3.jpeg",
    category: "general",
    title: "الحدائق المدرسية",
    description: "بيئة طبيعية خلابة تعزز الراحة النفسية",
  },
  {
    id: 7,
    src: "/images/theater.mp4",
    thumbnail: "/images/theater.jpeg",
    category: "facilities",
    title: "المسرح المدرسي",
    description: "مسرح مجهز بأحدث التقنيات للفعاليات والأنشطة",
  },
  {
    id: 8,
    src: "/images/theater2.jpeg",
    category: "activities",
    title: "العروض المسرحية",
    description: "تنمية المواهب الفنية والإبداعية لدى الطلاب",
  },
  {
    id: 9,
    src: "/images/cafeteria.jpeg",
    category: "facilities",
    title: "الكافيتريا",
    description: "وجبات صحية وجلسات مريحة للطلاب",
  },
];

const categories = [
  { id: "all", label: "الكل" },
  { id: "facilities", label: "المرافق" },
  { id: "activities", label: "الأنشطة" },
  { id: "general", label: "صور عامة" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">
            معرض <span className="text-[#C5A028]">الصور</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            جولة بصرية في أرجاء مدرستنا، حيث يلتقي التعليم المتميز بالبيئة
            المحفزة للإبداع
          </p>
          <div className="inline-block bg-[#C5A028]/10 px-4 py-2 rounded-lg mt-4">
            <p className="text-sm font-medium text-[#C5A028] flex items-center gap-2">
              <span className="text-lg">🤖</span>
              تنويه: جميع الصور المعروضة تم إنشاؤها بواسطة الذكاء الاصطناعي لأغراض التوضيح
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#C5A028] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer bg-gray-200"
              onClick={() => setLightboxImage(image.src)}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 100}ms backwards`,
              }}
            >
              <Image
                src={image.thumbnail || image.src} // Use thumbnail if available
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.description}
                </p>
              </div>

              {/* Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-0 lg:translate-y-[-10px] lg:group-hover:translate-y-0 transition-all duration-300 delay-100">
                {image.src.endsWith('.mp4') ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">لا توجد صور في هذا القسم حالياً</p>
          </div>
        )}

        <Lightbox
          src={lightboxImage}
          alt="صورة المعرض"
          onClose={() => setLightboxImage(null)}
        />
      </div>
    </section>
  );
}
