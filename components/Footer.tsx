"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Truck, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-[#FBF8EF] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-mustard-gold">
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  spa
                </span>
              </div>
              <span className="font-bangla text-xl font-extrabold text-white">
                ঘুরি ঘানি খাঁটি তেল
              </span>
            </div>
            <p className="font-bangla text-xs text-stone-300 leading-relaxed">
              ঐতিহ্যবাহী কাঠের ঘানিতে ধীরগতিতে কোল্ড-প্রেসড পদ্ধতিতে নিষ্কাশিত ১০০% নির্ভেজাল সরিষার তেল। বাংলার প্রতিটি পরিবারে পৌঁছে দিচ্ছি ভেজালহীন খাঁটি পুষ্টি ও ঐতিহ্যের স্বাদ।
            </p>
            <div className="flex items-center gap-2 pt-1 text-mustard-gold font-bangla text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-mustard-gold" />
              <span>শতভাগ ক্যাশব্যাক গ্যারান্টি</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-2.5 font-bangla text-xs">
            <h3 className="font-bold text-sm text-mustard-gold mb-2">প্রয়োজনীয় লিংক</h3>
            <Link href="/" className="text-stone-300 hover:text-white transition-colors">
              হোম পেজ
            </Link>
            <a href="#about-section" className="text-stone-300 hover:text-white transition-colors">
              আমাদের ঐতিহ্য ও গল্প
            </a>
            <a href="#process-section" className="text-stone-300 hover:text-white transition-colors">
              উৎপাদন প্রক্রিয়া ও ল্যাব টেস্ট
            </a>
            <a href="#benefits-section" className="text-stone-300 hover:text-white transition-colors">
              খাঁটি তেলের স্বাস্থ্য উপকারিতা
            </a>
            <a href="#reviews-section" className="text-stone-300 hover:text-white transition-colors">
              গ্রাহকদের রিভিউ ও অভিজ্ঞতা
            </a>
          </div>

          {/* Col 3: Policy & Delivery */}
          <div className="flex flex-col gap-2.5 font-bangla text-xs">
            <h3 className="font-bold text-sm text-mustard-gold mb-2">পলিসি ও ডেলিভারি</h3>
            <span className="text-stone-300">ডেলিভারি পলিসি ও চার্জ</span>
            <span className="text-stone-300">রিটার্ন ও রিফান্ড নীতি</span>
            <span className="text-stone-300">প্রাইভেসি পলিসি</span>
            <span className="text-stone-300">শর্তাবলী</span>
            <div className="mt-2 flex items-center gap-1.5 text-stone-300">
              <Truck className="w-4 h-4 text-mustard-gold" />
              <span>সারা দেশে ক্যাশ অন ডেলিভারি</span>
            </div>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="flex flex-col gap-3 font-bangla text-xs">
            <h3 className="font-bold text-sm text-mustard-gold mb-2">যোগাযোগ ও ঠিকানা</h3>
            <div className="flex items-start gap-2 text-stone-300">
              <MapPin className="w-4 h-4 text-mustard-gold shrink-0 mt-0.5" />
              <span>প্রধান কেন্দ্র: বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা - ১২০৫</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Phone className="w-4 h-4 text-mustard-gold" />
              <span>হটলাইন: ০১৭০০-০০০০০০</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Mail className="w-4 h-4 text-mustard-gold" />
              <span>ইমেইল: pureghani@gmail.com</span>
            </div>

            <div className="pt-2">
              <p className="font-semibold text-stone-200 mb-1.5">নিরাপদ পেমেন্ট পার্টনার:</p>
              <div className="flex flex-wrap gap-1.5 font-bangla text-[11px] text-stone-200">
                <span className="px-2 py-1 rounded bg-black/20 border border-white/10">
                  ক্যাশ অন ডেলিভারি
                </span>
                <span className="px-2 py-1 rounded bg-black/20 border border-white/10">
                  বিকাশ
                </span>
                <span className="px-2 py-1 rounded bg-black/20 border border-white/10">
                  নগদ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bangla text-stone-400">
          <p>© ২০২৬ ঘুরি ঘানি খাঁটি সরিষার তেল। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-center sm:text-right">
            ঐতিহ্যবাহী কাঠের ঘানিতে ভাঙানো বিশুদ্ধতার প্রতীক
          </p>
        </div>
      </div>
    </footer>
  );
}
