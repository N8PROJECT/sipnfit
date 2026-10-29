"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Studio", href: "#studio" },
    { name: "Classes", href: "#classes" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "max-w-[1200px] mx-auto mt-4 px-6 py-3 bg-neutral-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "w-full px-6 py-5 md:px-16 bg-black/40 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* SIP N' FIT Brand Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-black tracking-wider text-white italic"
        >
          SIP N' <span className="text-yellow-400">FIT</span>
        </Link>

        {/* Nav Items + Contact Us CTA at the right end */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden md:flex items-center gap-2 text-sm text-neutral-200 font-medium">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-neutral-400 text-xs mx-1">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Us CTA (Brand Yellow Pill Button) */}
          <Link
            href="#contact"
            className="bg-yellow-400 text-neutral-900 text-xs md:text-sm font-extrabold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
