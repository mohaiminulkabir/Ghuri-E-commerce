"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CinematicStory() {
  return (
    <section className="py-10 bg-editorial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-center border border-border-subtle shadow-editorial-hover">
          <Image
            src="/images/ghani-hero.jpg"
            alt="গ্রামবাংলার ঐতিহ্যবাহী কাঠের ঘানি"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/30 pointer-events-none"></div>

          <div className="relative z-10 max-w-xl p-8 sm:p-12 lg:p-16 flex flex-col gap-4 text-white">
            <span className="font-bangla text-xs font-bold uppercase tracking-wider text-mustard-gold">
              আমাদের ঐতিহ্য ও অঙ্গীকার
            </span>
            <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold leading-snug text-white">
              ফিরে চলুন বাংলার খাঁটি স্বাদে — কৃত্রিম কেমিক্যালের ভিড়ে পরিবারের জন্য বেছে নিন কাঠের ঘানির ঐতিহ্য।
            </h2>
            <p className="font-bangla text-xs sm:text-sm text-stone-300 leading-relaxed">
              আমরা কোনো বাণিজ্যিক মিল নই; প্রান্তিক বাংলার শতবর্ষী কারিগরদের ভালোবাসা আর খাঁটি সরিষার আসল নির্যাসই আমাদের পরিচয়।
            </p>
            <div className="pt-2">
              <a
                href="#order-section"
                className="inline-flex items-center gap-2 bg-mustard-gold hover:bg-mustard-amber text-charcoal font-bangla font-extrabold text-sm px-7 py-3 rounded-xl transition-all shadow-gold-glow"
              >
                <span>আজই সংগ্রহ করুন খাঁটি তেল</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
