"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-16 bg-editorial-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-border-subtle p-8 sm:p-12 text-center flex flex-col items-center gap-5 shadow-editorial">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[28px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_florist
            </span>
          </div>

          <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold text-charcoal max-w-2xl leading-tight">
            আপনার পরিবারের সুস্বাস্থ্য ও ঐতিহ্যের খাঁটি স্বাদে কোনো আপস নয়
          </h2>

          <p className="font-bangla text-xs sm:text-base text-text-secondary max-w-xl">
            কাঠের ঘানিতে তৈরি আসল সরিষার তেলের প্রাকৃতিক পুষ্টি নিয়ে আসুন প্রতিদিনের রান্নায়। আজই অর্ডার করুন এবং উপভোগ করুন খাঁটি কোল্ড-প্রেসড তেলের ঝাঁঝ।
          </p>

          <div className="pt-2">
            <a
              href="#order-section"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bangla font-bold text-base px-9 py-4 rounded-xl transition-all shadow-cta-glow transform hover:-translate-y-0.5"
            >
              <span>অর্ডার ফর্ম পূরণ করুন</span>
              <ShoppingCart className="w-5 h-5 text-mustard-gold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
