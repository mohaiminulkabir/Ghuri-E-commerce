"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import CheckoutSection from "@/components/CheckoutSection";
import ProductionProcess from "@/components/ProductionProcess";
import CinematicStory from "@/components/CinematicStory";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import StickyMobileBuyBar from "@/components/StickyMobileBuyBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PRODUCT_TIERS, ProductTier } from "@/lib/data";

export default function Home() {
  // Default to 5L (index 1 in PRODUCT_TIERS) as specified in Stitch design
  const defaultTier = PRODUCT_TIERS.find((t) => t.id === "5L") || PRODUCT_TIERS[0];
  const [selectedTier, setSelectedTier] = useState<ProductTier>(defaultTier);

  return (
    <div className="min-h-screen flex flex-col bg-editorial-bg text-charcoal font-bangla pb-16 sm:pb-0">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Luxury Header */}
      <Header selectedLiters={selectedTier.liters} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Interactive Checkout Section */}
        <CheckoutSection
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
        />

        {/* 4-Step Production Process */}
        <ProductionProcess />

        {/* Full-width Cinematic Storytelling Banner */}
        <CinematicStory />

        {/* Customer Social Proof & Testimonials */}
        <ReviewsSection />

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Editorial Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Refined Luxury Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Checkout Bar */}
      <StickyMobileBuyBar selectedTier={selectedTier} />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
