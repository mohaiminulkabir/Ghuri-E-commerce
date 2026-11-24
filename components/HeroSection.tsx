"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, PlayCircle, ShieldCheck, Truck, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 lg:py-20 overflow-hidden bg-editorial-bg" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Micro badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-border-subtle px-4 py-1.5 rounded-full w-fit shadow-editorial">
              <span
                className="material-symbols-outlined text-[18px] text-mustard-gold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                workspace_premium
              </span>
              <span className="font-bangla text-xs sm:text-sm font-semibold text-primary tracking-wide">
                প্রকৃতির দান • শতভাগ প্রাকৃতিক কোল্ড-প্রেসড
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-bangla text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-charcoal leading-[1.18] tracking-tight">
              প্রকৃতির ছোঁয়ায় ঐতিহ্যের <br />
              <span className="text-primary underline decoration-mustard-gold/40 decoration-wavy decoration-2 underline-offset-8">
                খাঁটি সরিষার তেল
              </span>
            </h1>

            {/* Editorial Subtext */}
            <p className="font-bangla text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              শতবর্ষ প্রাচীন কাঠের ঘানিতে দেশীয় বলদের ধীর পদচারণায় নিষ্কাশিত প্রথম চাপের সরিষার তেল। লোহার কোনো উত্তাপ ছাড়া কোল্ড-প্রেসড পদ্ধতিতে প্রস্তুত হওয়ায় ওমেগা-৩, স্বাভাবিক ভিটামিন ও খাঁটি ঝাঁঝ থাকে শতভাগ অক্ষত।
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#order-section"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bangla font-bold text-base px-8 py-4 rounded-xl transition-all shadow-cta-glow transform hover:-translate-y-0.5"
              >
                <span>এখনই অর্ডার করুন</span>
                <ArrowRight className="w-5 h-5 text-mustard-gold" />
              </a>

              <a
                href="#process-section"
                className="inline-flex items-center gap-2 bg-white hover:bg-mustard-light border border-border-subtle text-primary font-bangla font-semibold text-base px-7 py-4 rounded-xl transition-all shadow-editorial"
              >
                <PlayCircle className="w-5 h-5 text-mustard-amber" />
                <span>উৎপাদন পদ্ধতি দেখুন</span>
              </a>
            </div>

            {/* 3 Luxury Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-border-subtle">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-subtle shadow-editorial">
                <div className="w-10 h-10 rounded-lg bg-mustard-light text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">agriculture</span>
                </div>
                <div>
                  <h4 className="font-bangla font-bold text-xs text-charcoal">কাঠের ঘানির ধীর নিষ্কাশন</h4>
                  <p className="font-bangla text-[11px] text-text-secondary">প্রাকৃতিক তাপমাত্রা</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-subtle shadow-editorial">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-secondary-green flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="font-bangla font-bold text-xs text-charcoal">রাসায়নিক ও ভেজালমুক্ত</h4>
                  <p className="font-bangla text-[11px] text-text-secondary">১০০% প্রাকৃতিক উপাদান</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-subtle shadow-editorial">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-mustard-amber flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                </div>
                <div>
                  <h4 className="font-bangla font-bold text-xs text-charcoal">সারা দেশে ক্যাশ অন ডেলিভারি</h4>
                  <p className="font-bangla text-[11px] text-text-secondary">হাতে পেয়ে মূল্য পরিশোধ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Image in Archival Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-2 bg-white border border-border-subtle shadow-editorial-hover">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[5/4] bg-stone-100">
                <Image
                  src="/images/ghani-hero.jpg"
                  alt="ঐতিহ্যবাহী কাঠের ঘানিতে তেল ভাঙানো"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border-subtle shadow-md flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-mustard-amber text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    oil_barrel
                  </span>
                  <span className="font-bangla text-xs font-bold text-primary">ঐতিহ্যবাহী কাঠের ঘানি</span>
                </div>

                {/* Bottom Caption inside photo */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-bangla text-xs sm:text-sm font-medium drop-shadow-md text-amber-50/95">
                    গ্রামবাংলার আসল মাটির ঘ্রাণে ধীরগতির কোল্ড প্রেসড এক্সট্রাকশন—যেখানে প্রতিটি ফোঁটা তেল ধারণ করে খাঁটি ঐতিহ্য।
                  </p>
                </div>
              </div>
            </div>

            {/* Soft decorative accent */}
            <div className="absolute -bottom-6 -left-6 -z-10 w-44 h-44 rounded-full bg-mustard-gold/10 blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
