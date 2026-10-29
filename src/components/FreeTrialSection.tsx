"use client";

import React, { useState } from "react";
import { Dumbbell, Users, ShieldCheck, MapPin } from "lucide-react";

export default function FreeTrialSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? e.target.checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Terms and Data Privacy policy.");
      return;
    }
    console.log("Free trial form submitted:", formData);
    alert("Thank you! We'll get in touch within 48 hours.");
  };

  return (
    <section
      id="try-free"
      className="relative w-full bg-white py-16 md:py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* === LEFT COLUMN: INFO & BENEFITS (Centered on mobile, Left on desktop) === */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-[#FFC400] text-neutral-950 text-[11px] font-extrabold tracking-widest uppercase rounded mb-4">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-neutral-900 mb-4">
              Elevate Your{" "}
              <span className="text-[#FFC400]">Fitness Journey</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg font-medium max-w-[600px]">
              Start with a free workout at your club of choice and experience
              world-class training sessions.
            </p>
          </div>

          <div className="space-y-5 w-full max-w-[550px] lg:max-w-none text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 text-neutral-900">
                <Dumbbell className="w-5 h-5 text-neutral-900" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-base">
                  Premium Equipment & Quality Programs
                </h4>
                <p className="text-neutral-600 text-sm">
                  Access top-tier facilities and thousands of group fitness
                  programs every month.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 text-neutral-900">
                <ShieldCheck className="w-5 h-5 text-neutral-900" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-base">
                  Certified Fitness Coaches
                </h4>
                <p className="text-neutral-600 text-sm">
                  Guided directly by professionals ready to support your workout
                  progress.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 text-neutral-900">
                <Users className="w-5 h-5 text-neutral-900" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-base">
                  Positive & Supportive Community
                </h4>
                <p className="text-neutral-600 text-sm">
                  Join a motivating environment that helps you stay consistent
                  every day.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 text-neutral-900">
                <MapPin className="w-5 h-5 text-neutral-900" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-base">
                  Strategic Locations
                </h4>
                <p className="text-neutral-600 text-sm">
                  Premium clubs situated in accessible prime areas for your
                  convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN: SIGN UP FORM CARD === */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-neutral-200 w-full max-w-[500px]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-900 mb-2">
                Sign Up For Your{" "}
                <span className="text-[#FFC400]">Free Trial</span>
              </h3>
              <p className="text-neutral-500 text-sm">
                We'll get in touch within 48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#FFC400] text-sm text-neutral-900"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#FFC400] text-sm text-neutral-900"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#FFC400] text-sm text-neutral-900"
              />

              <div className="flex rounded-xl border border-neutral-300 overflow-hidden focus-within:ring-2 focus-within:ring-[#FFC400]">
                <span className="bg-neutral-100 px-4 py-3 text-sm text-neutral-600 font-semibold border-r border-neutral-300 flex items-center">
                  +62
                </span>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 focus:outline-none text-sm text-neutral-900"
                />
              </div>

              <div className="flex items-start gap-3 pt-2 text-left">
                <input
                  type="checkbox"
                  name="agreed"
                  id="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-[#FFC400]"
                />
                <label
                  htmlFor="agreed"
                  className="text-xs text-neutral-600 leading-relaxed"
                >
                  I've read and agree to the{" "}
                  <a
                    href="#terms"
                    className="text-neutral-900 font-bold underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#privacy"
                    className="text-neutral-900 font-bold underline"
                  >
                    Data Privacy
                  </a>{" "}
                  policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#FFC400] hover:bg-yellow-300 text-neutral-950 font-extrabold rounded-full transition-all shadow-md text-base mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
