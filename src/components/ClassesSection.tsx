"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { classPrograms } from "@/data/classesData";

export default function ClassesSection() {
  return (
    <section
      id="classes"
      className="relative w-full bg-white text-neutral-900 py-16 md:py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* === SECTION HEADER === */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between text-center md:text-left gap-6 mb-12 md:mb-16 border-b border-neutral-200 pb-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="inline-block px-3.5 py-1.5 bg-neutral-100 text-neutral-800 text-[11px] font-extrabold tracking-widest uppercase rounded mb-4">
              FIND YOUR CLASS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-neutral-900">
              Class <span className="text-[#FFC400]">Programs</span>
            </h2>
          </div>
          <p className="text-neutral-600 text-base md:text-lg max-w-[420px] font-medium leading-relaxed">
            Choose the right class for your goals and discover new energy in
            every training session with professional instructors.
          </p>
        </div>

        {/* === CLASS CAROUSEL / GRID SECTION === */}
        <div className="relative mb-12 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {classPrograms.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-3xl overflow-hidden bg-neutral-900 group shadow-lg transition-all duration-500 h-[380px] sm:h-[420px] flex flex-col justify-end p-6 md:p-8"
                >
                  {/* Background Image & Gradient Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                  </div>

                  {/* Content inside card */}
                  <div className="relative z-10 text-white text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between pt-4 border-t border-white/15 mt-2">
                      <span className="text-xs font-bold text-[#FFC400] tracking-wide">
                        {item.schedule}
                      </span>
                      <a
                        href="#try-free"
                        aria-label={`Join ${item.title}`}
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FFC400] group-hover:text-neutral-950 transition-colors duration-300"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
