"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ShoppingBag, ArrowRight, Menu, X } from "lucide-react";
import { toBengaliNum } from "@/lib/data";

interface HeaderProps {
  selectedLiters: number;
}

export default function Header({ selectedLiters }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-40 bg-editorial-bg/95 backdrop-blur-md border-b border-border-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-transform group-hover:scale-105">
            <span
              className="material-symbols-outlined text-[24px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bangla font-extrabold text-xl sm:text-2xl text-primary tracking-tight leading-none">
              ঘুরি ঘানি খাঁটি তেল
            </span>
            <span className="text-[11px] font-bangla tracking-wider text-mustard-amber uppercase font-semibold mt-0.5">
              আর্টিসানাল কোল্ড প্রেসড সরিষার তেল
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-bangla text-sm font-medium text-charcoal/85">
          <a
            href="#about-section"
            className="hover:text-primary transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            আমাদের গল্প
          </a>
          <a
            href="#process-section"
            className="hover:text-primary transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            উৎপাদন প্রক্রিয়া
          </a>
          <a
            href="#benefits-section"
            className="hover:text-primary transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            গুণাগুণ ও স্বাস্থ্য
          </a>
          <a
            href="#reviews-section"
            className="hover:text-primary transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            গ্রাহক মতামত
          </a>
          <a
            href="#faq-section"
            className="hover:text-primary transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            জিজ্ঞাসিত প্রশ্ন
          </a>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Hotline */}
          <a
            href="tel:+8801700000000"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-subtle shadow-sm hover:border-primary/40 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bangla text-charcoal font-semibold">
              হটলাইন: ০১৭০০-০০০০০০
            </span>
          </a>

          {/* Cart preview pill */}
          <a
            href="#order-section"
            className="relative p-2.5 rounded-full bg-white border border-border-subtle hover:border-primary/30 text-charcoal transition-all shadow-xs"
            title="অর্ডারে যান"
          >
            <ShoppingBag className="w-5 h-5 text-charcoal" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-mustard-gold text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
              ১
            </span>
          </a>

          {/* Primary Header CTA */}
          <a
            href="#order-section"
            className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bangla font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-cta-glow transform hover:-translate-y-0.5"
          >
            <span>অর্ডার করুন</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-stone-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-editorial-bg border-b border-border-subtle px-4 pt-2 pb-6 flex flex-col gap-3 font-bangla">
          <a
            href="#about-section"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-white text-sm font-medium text-charcoal"
          >
            আমাদের গল্প
          </a>
          <a
            href="#process-section"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-white text-sm font-medium text-charcoal"
          >
            উৎপাদন প্রক্রিয়া
          </a>
          <a
            href="#benefits-section"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-white text-sm font-medium text-charcoal"
          >
            গুণাগুণ ও স্বাস্থ্য
          </a>
          <a
            href="#reviews-section"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-white text-sm font-medium text-charcoal"
          >
            গ্রাহক মতামত
          </a>
          <a
            href="#faq-section"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-white text-sm font-medium text-charcoal"
          >
            জিজ্ঞাসিত প্রশ্ন
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+8801700000000"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-border-subtle text-xs font-bold text-charcoal"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>কল করুন: ০১৭০০-০০০০০০</span>
            </a>
            <a
              href="#order-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-cta-glow"
            >
              <span>এখনই অর্ডার করুন</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
