"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [shouldShow, setShouldShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShouldShow(true);
        setTimeout(() => setIsVisible(true), 10);
      } else {
        setIsVisible(false);
        setTimeout(() => setShouldShow(false), 300);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-4 z-50 w-8 h-8 rounded-full bg-[#CCCCFF] hover:bg-[#BBBBFF] text-black shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-2 scale-95 pointer-events-none"
      }`}
      title="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
}

