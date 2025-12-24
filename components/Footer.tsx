import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1e3a5f] via-[#0f1f3d] to-[#0a1628] text-white relative overflow-hidden">


      {/* Background Decorations */}
       <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C5A028]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E5C56C]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit select-none">
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
                  className="
                    text-lg sm:text-xl md:text-2xl font-semibold tracking-wide
                    text-white
                    transition-colors duration-300
                    group-hover:text-[#E5C56C]
                  "
                >
                  مدرسة نماء
                </span>

                <span
                  className="
                    text-[10px] sm:text-xs font-medium tracking-widest uppercase
                    text-[#F3E5AB]
                    transition-colors duration-300
                  "
                >
                  Namaa School
                </span>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              نبني مستقبلًا أخضر من خلال تعليم متميز يجمع بين الأصالة والحداثة مع
              التزام كامل بالاستدامة البيئية
            </p>
            {/* Architectural Design Credit */}
            <div className="space-y-3 pt-2">
              <p className="text-white/90 text-sm font-medium">
                تم التصميم المعماري بواسطة:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/_salahayman?igsh=MXd3bHcyZ3Zra283OQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#C5A028] transition-all duration-300 group w-fit"
                  dir="ltr"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm font-medium">Arch: Salah Ayman</span>
                </a>
                <a
                  href="https://www.instagram.com/omar_fathyy15?igsh=d2N5M3FsbXQ0YmN5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#68A578] transition-all duration-300 group w-fit"
                  dir="ltr"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm font-medium">Arch: Omar Fathy</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E5C56C]">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-[#E5C56C] transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    ←
                  </span>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#E5C56C] transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    ←
                  </span>
                  عن المدرسة
                </Link>
              </li>
              <li>
                <Link
                  href="#stages"
                  className="text-white/80 hover:text-[#E5C56C] transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    ←
                  </span>
                  المراحل التعليمية
                </Link>
              </li>
              <li>
                <Link
                  href="#apply"
                  className="text-white/80 hover:text-[#E5C56C] transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    ←
                  </span>
                  التقديم
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Stages */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E5C56C]">
              المراحل التعليمية
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-start gap-2 hover:text-white transition-colors duration-300">
                <span className="text-[#E5C56C] mt-1">🎨</span>
                <div>
                  <p className="font-semibold text-white">الحضانة</p>
                  <p className="text-sm text-white/70">3-5 سنوات</p>
                </div>
              </li>
              <li className="text-white/80 flex items-start gap-2 hover:text-white transition-colors duration-300">
                <span className="text-[#E5C56C] mt-1">📚</span>
                <div>
                  <p className="font-semibold text-white">الابتدائي</p>
                  <p className="text-sm text-white/70">6-12 سنة</p>
                </div>
              </li>
              <li className="text-white/80 flex items-start gap-2 hover:text-white transition-colors duration-300">
                <span className="text-[#E5C56C] mt-1">🎓</span>
                <div>
                  <p className="font-semibold text-white">الإعدادي</p>
                  <p className="text-sm text-white/70">13-15 سنة</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E5C56C]">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <span className="text-[#E5C56C] text-xl mt-1 group-hover:scale-110 transition-transform duration-300">📞</span>
                <div>
                <div className="text-white/80 text-sm flex flex-col gap-1" dir="ltr">
                  <a href="tel:+201027976672" className="hover:text-white transition-colors">
                    +20 102 797 6672
                  </a>
                  <a href="tel:+201018543503" className="hover:text-white transition-colors">
                    +20 101 854 3503
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#E5C56C] text-xl mt-1 group-hover:scale-110 transition-transform duration-300">✉️</span>
              <div>
                <p className="text-white/80 text-sm break-all">
                  info@namaaschool.edu.eg
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#E5C56C] text-xl mt-1 group-hover:scale-110 transition-transform duration-300">📍</span>
              <div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=New+Mansoura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  المنصورة الجديدة
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#E5C56C] text-xl mt-1 group-hover:scale-110 transition-transform duration-300">🕐</span>
              <div>
                <p className="text-white/80 text-sm">
                  الأحد - الخميس
                  <br />
                  8:00 ص - 3:00 م
                </p>
              </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          {/* Credits Section */}
          <div className="flex flex-col gap-4 mb-6">
            {/* Copyright */}
            <p className="text-white/70 text-sm text-center">
              © {currentYear} مدرسة نماء. جميع الحقوق محفوظة.
            </p>
            
            {/* Web Development */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-white/70 text-sm">تصميم وتطوير:</span>
              <a
                href="https://www.instagram.com/zeyad_ayman6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E5C56C] hover:text-white transition-all duration-300 group"
                dir="ltr"
              >
                <span className="text-sm font-semibold">Ziad Ayman</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 text-sm pt-6 border-t border-white/10">
            <Link
              href="#"
              className="text-white/70 hover:text-[#E5C56C] transition-colors duration-300"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-[#E5C56C] transition-colors duration-300"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}