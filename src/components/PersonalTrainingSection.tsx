"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function PersonalTrainingSection() {
  return (
    // Main section with full white background
    <section className="relative w-full bg-white py-8 md:py-12 overflow-hidden">
      {/* Full-Width Container (Spans edge-to-edge) */}
      <div className="relative w-full h-[480px] sm:h-[460px] md:h-[520px] overflow-hidden">
        {/* Background PT Image - Full Width & Height */}
        <img
          src="/images/gym-personal-training.jpg"
          alt="Sip N' Fit Personal Training"
          className="w-full h-full object-cover object-center brightness-90"
        />

        {/* Soft Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content & CTA Button (Centered on mobile, Left-aligned on desktop) */}
        <div className="absolute inset-0 z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-16 max-w-[1400px] mx-auto text-white">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFC400] text-neutral-950 text-[11px] font-extrabold tracking-widest uppercase rounded mb-4">
            EXPERT GUIDANCE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.1] text-white mb-4 max-w-[700px]">
            Progress Gets <span className="text-[#FFC400]">Personal</span>
          </h2>

          <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-[600px] mb-6">
            Your goals are our main focus. Get tailored Personal Training (PT)
            sessions from certified fitness coaches. Track your progress and
            achieve your best results.
          </p>

          <a
            href="#personal-training"
            className="group inline-flex items-center gap-3 bg-[#FFC400] text-neutral-950 font-extrabold pl-6 pr-2 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl"
          >
            <span className="text-sm md:text-base">Personal Training</span>
            <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
