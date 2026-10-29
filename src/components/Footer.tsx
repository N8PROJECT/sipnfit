"use client";

import React from "react";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white border-t border-neutral-800 pt-16 md:pt-20 pb-10 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* === SECTION 1: TOP SECTION (BRAND & CTA) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-800 text-center lg:text-left">
          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-7 space-y-4 flex flex-col items-center lg:items-start">
            <a
              href="#"
              className="inline-block text-2xl md:text-3xl font-black italic tracking-tight text-white"
            >
              SIP N' <span className="text-[#FFC400]">FIT</span>
            </a>
            <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Real You in Every Reps.
            </p>
            <p className="text-neutral-400 text-sm md:text-base max-w-[480px] leading-relaxed">
              Your space to move, grow, and become the best version of yourself.
            </p>
          </div>

          {/* Right Column: CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between items-center lg:items-end space-y-6">
            <div className="space-y-2 lg:text-right">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
                Ready to move?
              </h3>
              <p className="text-neutral-400 text-sm md:text-base font-medium">
                Start your fitness journey with SIP N' FIT today.
              </p>
            </div>

            <a
              href="#try-free"
              className="group inline-flex items-center gap-3 bg-[#FFC400] text-neutral-950 font-extrabold pl-6 pr-2 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              <span className="text-sm md:text-base">Get Started</span>
              <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* === SECTION 2: NAVIGATION LINKS & CONTACT === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-neutral-800 text-center sm:text-left">
          {/* Column 1: Explore */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-extrabold tracking-widest text-neutral-400 uppercase">
              Explore
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#classes"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Studio
              </a>
              <a
                href="#classes"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Facilities
              </a>
              <a
                href="#classes"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Class Programs
              </a>
            </nav>
          </div>

          {/* Column 2: Training */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-extrabold tracking-widest text-neutral-400 uppercase">
              Training
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#personal-training"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Personal Training
              </a>
              <a
                href="#classes"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Class Schedule
              </a>
              <a
                href="#try-free"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Membership
              </a>
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-extrabold tracking-widest text-neutral-400 uppercase">
              Support
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#try-free"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="#try-free"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="#classes"
                className="text-sm font-semibold text-neutral-300 hover:text-[#FFC400] transition-colors duration-200"
              >
                Community
              </a>
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-extrabold tracking-widest text-neutral-400 uppercase">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-neutral-300 font-medium flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC400] shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/sipn.fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-white hover:bg-[#FFC400] hover:text-neutral-950 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-white hover:bg-[#FFC400] hover:text-neutral-950 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 3: BOTTOM BAR === */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs font-medium text-neutral-400">
          <p>© 2026 SIP N' FIT. All rights reserved.</p>
          <p className="font-semibold text-neutral-400">
            Built for your next rep.
          </p>
        </div>
      </div>
    </footer>
  );
}
