"use client";

import { useState, useEffect, useRef } from "react";

interface FormData {
  parentName: string;
  phone: string;
  email: string;
  studentName: string;
  stage: string;
  message: string;
}

export default function ApplicationForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    phone: "",
    email: "",
    studentName: "",
    stage: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        parentName: "",
        phone: "",
        email: "",
        studentName: "",
        stage: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="apply"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#FDFBF7] to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C5A028]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#C5A028]/10 px-4 sm:px-6 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#C5A028] rounded-full animate-pulse" />
              <span className="text-[#C5A028] font-semibold text-sm sm:text-base">
                انضم إلينا
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              قدّم الآن
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              املأ النموذج وسنتواصل معك في أقرب وقت لاستكمال إجراءات التسجيل
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 space-y-6"
              >
                {/* Parent Name */}
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    اسم ولي الأمر <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C5A028] focus:outline-none transition-colors text-gray-900"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C5A028] focus:outline-none transition-colors text-gray-900"
                      placeholder="01xxxxxxxxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C5A028] focus:outline-none transition-colors text-gray-900"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Student Name */}
                <div>
                  <label
                    htmlFor="studentName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    اسم الطالب/ة <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C5A028] focus:outline-none transition-colors text-gray-900"
                    placeholder="أدخل اسم الطالب/ة"
                  />
                </div>

                {/* Stage */}
                <div>
                  <label
                    htmlFor="stage"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    المرحلة التعليمية <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C5A028] focus:outline-none transition-colors bg-white text-gray-900"
                  >
                    <option value="">اختر المرحلة</option>
                    <option value="kg">الحضانة (3-5 سنوات)</option>
                    <option value="primary">الابتدائي (6-12 سنة)</option>
                    <option value="middle">الإعدادي (13-15 سنة)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    رسالة (اختياري)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C5A028] focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="أي ملاحظات أو استفسارات"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C5A028] to-[#E5C56C] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    "إرسال الطلب"
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-green-700 text-center animate-fade-in">
                    <div className="text-2xl mb-2">✓</div>
                    <p className="font-semibold">تم إرسال الطلب بنجاح!</p>
                    <p className="text-sm mt-1">سنتواصل معك قريبًا</p>
                  </div>
                )}
              </form>
            </div>

            {/* Info Cards */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-[#C5A028] to-[#E5C56C] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">الهاتف</p>
                      <p className="text-white/90 text-sm sm:text-base" dir="ltr">
                        +20 123 456 7890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">البريد الإلكتروني</p>
                      <p className="text-white/90 text-sm sm:text-base break-all">
                        info@namaaschool.edu.eg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">العنوان</p>
                      <p className="text-white/90 text-sm sm:text-base">
                        القاهرة، مصر
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                  لماذا مدرسة نماء؟
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      بيئة تعليمية صحية ومستدامة بيئيًا
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      مناهج حديثة تواكب متطلبات العصر
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      كادر تعليمي متميز وذو خبرة
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      مرافق حديثة ومجهزة بأحدث التقنيات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}