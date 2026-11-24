"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/8801700000000?text=" +
    encodeURIComponent(
      "আসসালামু আলাইকুম, আমি ঘুরি ঘানি খাঁটি সরিষার তেল সম্পর্কে বিস্তারিত জানতে চাচ্ছি।"
    );

  return (
    <aside className="fixed bottom-16 sm:bottom-6 right-5 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:brightness-105 transition-all transform hover:scale-105 active:scale-95"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 fill-white" />
        <span className="font-bangla text-xs font-bold hidden sm:inline">
          হোয়াটসঅ্যাপ সাপোর্ট
        </span>
      </a>
    </aside>
  );
}
