"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const studioImages = [
  {
    id: 1,
    title: "Free Weights & Equipment",
    img: "/images/gym-1.png",
  },
  {
    id: 2,
    title: "Cardio & Endurance Area",
    img: "/images/gym-2.png",
  },
  {
    id: 3,
    title: "Personal Training Zone",
    img: "/images/gym-3.png",
  },
];

export default function HeroSection() {
  return (
    <div className="relative w-full bg-white text-white overflow-hidden">
      {/* === 1. PHOTOGRAPHIC HERO SECTION (FULL WIDTH CANVAS) === */}
      <section className="relative w-full min-h-[580px] md:h-[640px] flex items-center px-6 md:px-16 pt-20 pb-36 md:py-16">
        {/* Full Viewport Width Gym Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gym-hero.png"
            alt="SIP N' FIT Gym Studio Interior"
            className="w-full h-full object-cover object-center brightness-[0.8] contrast-[1.05]"
          />
          {/* Neutral Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content Grid (Mobile: Centered Column, Desktop: Row Left-Right) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-left">
          {/* Compact Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[550px] flex flex-col items-center md:items-start"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Real You in Every Reps.{" "}
              <span className="text-yellow-400 block sm:inline mt-1 sm:mt-0">
                Your Space.
              </span>
            </h1>
          </motion.div>

          {/* Primary Yellow CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start w-full md:w-auto"
          >
            <a
              href="#try-free"
              className="group inline-flex items-center gap-3 bg-yellow-400 text-black font-bold pl-6 pr-2 py-2.5 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl"
            >
              <a
                href="#try-free"
                className="text-sm md:text-base font-extrabold"
              >
                Free Trial Session
              </a>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* === 2. OVERLAPPING WHITE CONTENT PANEL === */}
      <div className="relative z-20 w-full px-3 sm:px-6 md:px-8 -mt-24 md:-mt-36 pb-16">
        <section className="w-full bg-white text-neutral-900 rounded-t-[1.8rem] md:rounded-t-[2.5rem] px-6 py-10 md:px-14 md:py-14 shadow-md">
          <div className="max-w-[1400px] mx-auto">
            {/* Editorial Introduction Header (Mobile: Centered, Desktop: Two Column) */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6 md:gap-8 border-b border-neutral-200 pb-10 md:pb-12">
              {/* Left Column: Label */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3 flex justify-center md:justify-start"
              >
                <span className="inline-block px-3.5 py-1.5 bg-neutral-200 text-neutral-800 text-[11px] font-extrabold tracking-widest uppercase rounded">
                  OUR STUDIO
                </span>
              </motion.div>

              {/* Right Column: Editorial Description */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full md:w-1/2"
              >
                <p className="text-base sm:text-lg md:text-2xl font-medium leading-relaxed text-neutral-900">
                  Discover what makes{" "}
                  <span className="font-bold">Sip N' Fit</span> special.
                  Experience our state-of-the-art facilities designed for every
                  fitness level. Real you in every reps.
                </p>
              </motion.div>
            </div>

            {/* Studio Facility Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {studioImages.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  className="relative h-60 md:h-72 rounded-2xl overflow-hidden bg-neutral-200 group shadow-sm"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
