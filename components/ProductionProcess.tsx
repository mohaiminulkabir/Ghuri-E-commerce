"use client";

import React from "react";
import { PRODUCTION_STEPS } from "@/lib/data";

export default function ProductionProcess() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-border-subtle" id="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bangla font-bold tracking-widest text-mustard-amber uppercase mb-2">
            স্বচ্ছ কারিগরি ঐতিহ্য
          </span>
          <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold text-charcoal">
            যেভাবে প্রস্তুত হয় আমাদের খাঁটি সরিষার তেল
          </h2>
          <p className="font-bangla text-sm sm:text-base text-text-secondary mt-2">
            কোনো কৃত্রিম রাসায়নিক বা অতি-উত্তাপ নয়; মাটির ঘ্রাণে দেশীয় ধীর প্রক্রিয়ায় প্রতিটি ফোঁটা তেল সংগ্রহ করা হয়।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTION_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-editorial-bg p-6 rounded-2xl border border-border-subtle relative flex flex-col gap-3 group hover:border-primary/40 transition-all shadow-editorial hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-full bg-primary text-white font-bangla font-bold text-sm flex items-center justify-center">
                  {item.step}
                </span>
                <span className="material-symbols-outlined text-mustard-amber text-[24px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-bangla text-base font-bold text-charcoal mt-1">
                {item.title}
              </h3>
              <p className="font-bangla text-xs text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
