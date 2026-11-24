"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle, ShoppingCart } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-border-subtle" id="benefits-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bangla font-bold tracking-widest text-mustard-amber uppercase mb-2">
            আর্টিসানাল মান ও নিরাপত্তা
          </span>
          <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold text-charcoal">
            আমাদের একমাত্র পণ্য, আপনার পরিবারের সুস্বাস্থ্যের নিশ্চয়তা
          </h2>
          <p className="font-bangla text-sm sm:text-base text-text-secondary mt-3">
            বহু পণ্যের ভিড় নয়; আমরা এককভাবে সেরা মানের কাঠের ঘানির সরিষার তেল প্রস্তুত ও সরবরাহ করি যাতে প্রতিটি ফোঁটা নিশ্চিত করে শতভাগ বিশুদ্ধতা।
          </p>
        </div>

        <div className="bg-editorial-bg rounded-2xl border border-border-subtle p-6 sm:p-10 lg:p-12 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Bottle Studio Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-white p-3 border border-border-subtle shadow-editorial group">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-stone-50">
                  <Image
                    src="/images/bottle-product.jpg"
                    alt="ঘানি ভাঙানো খাঁটি সরিষার তেল বোতল"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute top-5 left-5 bg-primary text-white text-xs font-bangla font-semibold px-3 py-1 rounded-full shadow-sm">
                  ১০০% কোল্ড প্রেসড
                </div>
                <div className="absolute bottom-5 right-5 bg-mustard-light border border-mustard-gold/40 text-mustard-amber text-xs font-bangla font-bold px-3 py-1 rounded-full shadow-sm">
                  প্রারম্ভিক মূল্য ৳৩৫০
                </div>
              </div>
            </div>

            {/* Product Attributes List */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 text-mustard-gold mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-mustard-gold text-mustard-gold"
                      />
                    ))}
                  </div>
                  <span className="font-bangla text-xs font-bold text-charcoal">
                    ৫.০ (৮৫০+ ভেরিফায়েড পরিবার)
                  </span>
                </div>
                <h3 className="font-bangla text-2xl sm:text-3xl font-extrabold text-charcoal">
                  ঐতিহ্যবাহী কাঠের ঘানিতে ভাঙানো খাঁটি সরিষার তেল
                </h3>
                <p className="font-bangla text-sm text-text-secondary mt-1">
                  প্রকৃতির খাঁটি রূপ — কোনো ফিল্ট্রেশন বা কেমিক্যাল প্রসেসিং ছাড়া বোতলজাত।
                </p>
              </div>

              {/* 4 Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-border-subtle">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bangla text-sm font-bold text-charcoal">১০০% কোল্ড প্রেসড ও আনরিফাইন্ড</h4>
                    <p className="font-bangla text-xs text-text-secondary leading-snug mt-0.5">
                      কোনো বাড়তি উত্তাপ না থাকায় প্রাকৃতিক ভিটামিন ই ও প্রয়োজনীয় এনজাইম অক্ষত থাকে।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-border-subtle">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bangla text-sm font-bold text-charcoal">প্রাকৃতিক ঝাঁঝালো ঘ্রাণ ও খাঁটি আভা</h4>
                    <p className="font-bangla text-xs text-text-secondary leading-snug mt-0.5">
                      দেশি হলুদ ও মাঘী সরিষার প্রাকৃতিক ঝাঁঝ যা ভর্তা ও রান্নায় আনে অপরূপ স্বাদ।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-border-subtle">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bangla text-sm font-bold text-charcoal">ভেজাল ও কেমিক্যালমুক্ত</h4>
                    <p className="font-bangla text-xs text-text-secondary leading-snug mt-0.5">
                      কোনো কৃত্রিম সুবাস, প্রিজারভেটিভ বা পাম অয়েলের সংমিশ্রণ নেই—শতভাগ খাঁটি।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-border-subtle">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bangla text-sm font-bold text-charcoal">হৃদরোগ ও রক্ত সঞ্চালনে সহায়ক</h4>
                    <p className="font-bangla text-xs text-text-secondary leading-snug mt-0.5">
                      স্বাস্থ্যকর ওমেগা-৩ ও মনোআনস্যাচুরেটেড ফ্যাটি অ্যাসিড হার্টের সুস্থতায় ভূমিকা রাখে।
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick action banner */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#order-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bangla font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-cta-glow"
                >
                  <span>প্যাকেজ নির্বাচন করে অর্ডার করুন</span>
                  <ShoppingCart className="w-4 h-4 text-mustard-gold" />
                </a>
                <span className="font-bangla text-xs text-text-secondary flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-secondary-green text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  শতভাগ সন্তুষ্টি ও ক্যাশ অন ডেলিভারি নিশ্চয়তা
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
