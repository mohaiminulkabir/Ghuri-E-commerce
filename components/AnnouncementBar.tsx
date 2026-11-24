"use client";

import React from "react";

export default function AnnouncementBar() {
  return (
    <aside className="bg-primary text-[#F9F7F1] py-2.5 px-4 relative z-50 border-b border-white/10 text-xs md:text-sm tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-bangla font-medium">
        <span
          className="material-symbols-outlined text-[16px] text-mustard-gold"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          eco
        </span>
        <span>১০০% ঐতিহ্যবাহী কাঠের ঘানিতে ভাঙানো সরিষার তেল</span>
        <span className="hidden sm:inline text-mustard-gold">•</span>
        <span className="hidden sm:inline">৫ ও ১০ লিটারে সম্পূর্ণ ফ্রি হোম ডেলিভারি</span>
        <span className="text-mustard-gold">•</span>
        <span className="text-white font-semibold">সারা বাংলাদেশে ক্যাশ অন ডেলিভারি (COD)</span>
      </div>
    </aside>
  );
}
