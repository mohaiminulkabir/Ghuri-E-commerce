"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { ProductTier, formatBengaliCurrency, toBengaliNum } from "@/lib/data";

interface StickyMobileBuyBarProps {
  selectedTier: ProductTier;
}

export default function StickyMobileBuyBar({ selectedTier }: StickyMobileBuyBarProps) {
  const total = selectedTier.price + selectedTier.deliveryFee;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-3 border-t border-border-subtle flex items-center justify-between gap-3 shadow-lg">
      <div className="flex flex-col">
        <span className="font-bangla text-[11px] text-text-secondary leading-none">
          নির্বাচিত:{" "}
          <strong className="text-charcoal">
            {toBengaliNum(selectedTier.liters)} লিটার
          </strong>
        </span>
        <span className="font-bangla text-base font-extrabold text-primary leading-tight">
          {formatBengaliCurrency(total)}
        </span>
      </div>
      <a
        href="#order-section"
        className="flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white font-bangla font-bold text-xs px-5 py-2.5 rounded-xl shadow-cta-glow active:scale-95 transition-transform"
      >
        <ShoppingCart className="w-4 h-4" />
        <span>অর্ডার করুন</span>
      </a>
    </div>
  );
}
