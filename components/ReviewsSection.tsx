"use client";

import React from "react";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-border-subtle" id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bangla font-bold tracking-widest text-mustard-amber uppercase mb-2">
            সন্তুষ্ট গ্রাহকদের অভিজ্ঞতা
          </span>
          <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold text-charcoal">
            ভোজনরসিক পরিবারের বিশ্বস্ত সঙ্গী
          </h2>
          <p className="font-bangla text-sm text-text-secondary mt-1">
            ঢাকা, চট্টগ্রাম ও সিলেটসহ সারা দেশের সচেতন মানুষের সতস্ফূর্ত মতামত।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-editorial-bg p-6 rounded-2xl border border-border-subtle flex flex-col justify-between gap-5 shadow-editorial hover:shadow-editorial-hover transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex text-mustard-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-mustard-gold text-mustard-gold"
                    />
                  ))}
                </div>
                <p className="font-bangla text-xs sm:text-sm text-charcoal leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-border-subtle">
                <div
                  className={`w-9 h-9 rounded-full ${rev.avatarBg} ${rev.avatarText} font-bangla font-bold flex items-center justify-center text-xs shrink-0`}
                >
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-bangla font-bold text-xs text-charcoal">
                    {rev.name}
                  </h4>
                  <p className="font-bangla text-[11px] text-text-secondary">
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
