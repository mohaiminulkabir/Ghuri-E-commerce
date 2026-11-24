"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-20 bg-editorial-bg border-t border-border-subtle" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block text-xs font-bangla font-bold tracking-widest text-mustard-amber uppercase mb-2">
            প্রশ্ন ও উত্তর
          </span>
          <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold text-charcoal">
            সাধারণ জিজ্ঞাসিত প্রশ্নাবলী
          </h2>
          <p className="font-bangla text-sm text-text-secondary mt-1">
            অর্ডার করার পূর্বে আপনার জানা প্রয়োজন এমন প্রয়োজনীয় তথ্য।
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-card-surface rounded-xl border border-border-subtle overflow-hidden shadow-editorial transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center transition-colors hover:bg-stone-50 cursor-pointer"
                >
                  <span className="font-bangla font-bold text-sm sm:text-base text-charcoal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ml-3 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 font-bangla text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
