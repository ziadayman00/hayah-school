import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-alexandria" dir="rtl">
      <Navbar />

      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden pt-18">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('/images/school-1.jpeg')] bg-cover bg-center"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#1e3a5f]/80 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A7E3C3] text-sm font-medium mb-4">
            عن المدرسة
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            من نحن
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            مسيرة تعليمية متميزة تبني أجيالاً واعدة
          </p>
        </div>
      </div>

      <About />
      <Footer />
    </main>
  );
}