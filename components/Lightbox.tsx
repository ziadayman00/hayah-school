"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (src) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setMounted(false), 300);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [src]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!src && !mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 ${
        src ? "bg-black/90 backdrop-blur-md opacity-100" : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300 z-10 ${
          src ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        aria-label="إغلاق"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image Container */}
      <div
        className={`relative w-full h-full max-w-6xl max-h-[85vh] transition-all duration-500 ease-out ${
          src ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {src && (
          src.endsWith('.mp4') ? (
            <video
              src={src}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
              muted
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          )
        )}
      </div>
    </div>
  );
}
