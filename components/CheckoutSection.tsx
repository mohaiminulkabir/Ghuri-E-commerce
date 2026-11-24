"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  PRODUCT_TIERS,
  ProductTier,
  formatBengaliCurrency,
  toBengaliNum,
} from "@/lib/data";
import OrderSuccessModal, { OrderDetails } from "./OrderSuccessModal";
import {
  Check,
  Truck,
  ShieldCheck,
  Plus,
  Minus,
  Sparkles,
  CreditCard,
  Banknote,
} from "lucide-react";

interface CheckoutSectionProps {
  selectedTier: ProductTier;
  onSelectTier: (tier: ProductTier) => void;
}

const DIVISIONS = [
  "ঢাকা",
  "চট্টগ্রাম",
  "রাজশাহী",
  "খুলনা",
  "সিলেট",
  "বরিশাল",
  "রংপুর",
  "ময়মনসিংহ",
];

export default function CheckoutSection({
  selectedTier,
  onSelectTier,
}: CheckoutSectionProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [division, setDivision] = useState("ঢাকা");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bkash">("cod");
  const [submitting, setSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);
  const [phoneError, setPhoneError] = useState("");

  const itemTotal = selectedTier.price * quantity;
  // Delivery rule: Free for 5L and 10L, 80 for 1L-3L
  const deliveryFee = selectedTier.deliveryFee;
  const grandTotal = itemTotal + deliveryFee;

  const handlePhoneChange = (val: string) => {
    // English digits filter
    const cleaned = val.replace(/[^0-9]/g, "");
    setPhone(cleaned);
    if (cleaned.length > 0 && cleaned.length !== 11) {
      setPhoneError("১১ ডিজিটের মোবাইল নম্বর লিখুন (যেমন: 01700000000)");
    } else {
      setPhoneError("");
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(20, prev + delta)));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (phone.length !== 11 || !phone.startsWith("01")) {
      setPhoneError("সঠিক ১১ ডিজিটের মোবাইল নম্বর লিখুন (01XXXXXXXXX)");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#185C38", "#D9A526", "#2F814B", "#F5E8C7"],
        });
      } catch (err) {
        console.error(err);
      }

      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const newOrder: OrderDetails = {
        orderId: `GHURI-${randomNum}`,
        name: name.trim(),
        phone: phone.trim(),
        division,
        district: district.trim(),
        address: address.trim(),
        productName: selectedTier.name,
        quantity,
        itemPrice: selectedTier.price,
        deliveryFee,
        totalPrice: grandTotal,
        paymentMethod: paymentMethod === "cod" ? "ক্যাশ অন ডেলিভারি" : "বিকাশ / নগদ",
      };

      setCompletedOrder(newOrder);
      setSubmitting(false);

      // Reset form
      setName("");
      setPhone("");
      setDistrict("");
      setAddress("");
      setQuantity(1);
    }, 600);
  };

  return (
    <section className="py-16 lg:py-20 bg-editorial-bg scroll-mt-20" id="order-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full text-xs font-bangla font-bold text-primary mb-2">
            <span className="material-symbols-outlined text-[16px]">touch_app</span>
            সহজ দুই-ধাপের অর্ডার ফরম
          </div>
          <h2 className="font-bangla text-2xl sm:text-4xl font-extrabold text-charcoal">
            অর্ডার করুন ও ঘরে বসেই খাঁটি স্বাদ গ্রহণ করুন
          </h2>
          <p className="font-bangla text-sm sm:text-base text-text-secondary mt-1">
            প্যাকেজ নির্বাচন করে আপনার তথ্য দিন। পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধ করুন।
          </p>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Quantity Tier Selector */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-card-surface rounded-2xl border border-border-subtle p-6 sm:p-7 shadow-editorial">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white font-bangla font-bold text-xs flex items-center justify-center">
                    ১
                  </span>
                  <h3 className="font-bangla text-lg font-bold text-charcoal">
                    পরিমাণ বেছে নিন
                  </h3>
                </div>
                <span className="font-bangla text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                  ৫ ও ১০ লিটারে ডেলিভারি সম্পূর্ণ ফ্রি
                </span>
              </div>

              {/* Options List */}
              <div className="flex flex-col gap-3 mt-4" id="tier-selector-container">
                {PRODUCT_TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => onSelectTier(tier)}
                      className={`tier-card relative flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? "border-2 border-primary bg-mustard-light/40 shadow-sm"
                          : "border border-border-subtle bg-white hover:border-primary/40 hover:bg-stone-50/50"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <input
                          type="radio"
                          name="selected_tier"
                          checked={isSelected}
                          onChange={() => onSelectTier(tier)}
                          className="w-4 h-4 text-primary focus:ring-primary border-stone-300"
                        />
                        <div
                          className={`w-10 h-10 rounded-lg font-bangla font-extrabold flex items-center justify-center text-sm shrink-0 border ${
                            isSelected
                              ? "bg-primary text-white border-primary shadow-xs"
                              : "bg-stone-100 text-charcoal border-stone-200"
                          }`}
                        >
                          {tier.id}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bangla font-bold text-sm sm:text-base text-charcoal">
                              {toBengaliNum(tier.liters)} লিটার ঘানি ভাঙানো তেল
                            </span>
                            {tier.popular && (
                              <span className="font-bangla text-[10px] font-bold bg-mustard-gold text-white px-2 py-0.5 rounded-full">
                                সর্বাধিক বিক্রিত • ফ্রি ডেলিভারি
                              </span>
                            )}
                            {tier.id === "10L" && (
                              <span className="font-bangla text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                                ফ্রি ডেলিভারি
                              </span>
                            )}
                          </div>
                          <p className="font-bangla text-xs text-text-secondary">
                            {tier.containerType}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bangla font-extrabold text-base sm:text-lg text-primary">
                          {formatBengaliCurrency(tier.price)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quantity Counter */}
              <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-border-subtle flex items-center justify-between">
                <div>
                  <span className="font-bangla text-xs font-bold text-charcoal block">
                    কত প্যাক নিতে চান?
                  </span>
                  <span className="font-bangla text-[11px] text-text-secondary">
                    একই অর্ডারে একাধিক প্যাক নিতে যোগ করুন
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-border-subtle shadow-xs">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-charcoal hover:bg-stone-100 disabled:opacity-40 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bangla font-bold text-base text-primary w-6 text-center">
                    {toBengaliNum(quantity)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 20}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-charcoal hover:bg-stone-100 disabled:opacity-40 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Delivery info banner */}
              <div className="mt-4 p-3.5 rounded-xl bg-stone-50 border border-border-subtle flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary shrink-0" />
                <p className="font-bangla text-xs text-charcoal leading-snug">
                  <strong className="text-primary font-bold">ডেলিভারি চার্জ:</strong>{" "}
                  সারা বাংলাদেশে মাত্র ৮০৳।{" "}
                  <strong className="text-primary">
                    ৫ লিটার ও ১০ লিটারে সম্পূর্ণ ফ্রি ডেলিভারি!
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Customer Details & Summary */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-card-surface rounded-2xl border border-border-subtle p-6 sm:p-7 shadow-editorial">
              <div className="pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white font-bangla font-bold text-xs flex items-center justify-center">
                    ২
                  </span>
                  <h3 className="font-bangla text-lg font-bold text-charcoal">
                    ডেলিভারি ঠিকানা ও অর্ডার তথ্য
                  </h3>
                </div>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmitOrder}>
                <div>
                  <label
                    className="block font-bangla text-xs font-bold text-charcoal mb-1"
                    htmlFor="custName"
                  >
                    আপনার পূর্ণ নাম *
                  </label>
                  <input
                    id="custName"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="উদা: মো: সাইফুল ইসলাম"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-border-subtle text-charcoal font-bangla text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label
                    className="block font-bangla text-xs font-bold text-charcoal mb-1"
                    htmlFor="custPhone"
                  >
                    মোবাইল নম্বর (১১ ডিজিট) *
                  </label>
                  <input
                    id="custPhone"
                    type="tel"
                    required
                    maxLength={11}
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-border-subtle text-charcoal font-bangla text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  {phoneError && (
                    <p className="text-red-600 font-bangla text-xs mt-1">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block font-bangla text-xs font-bold text-charcoal mb-1"
                      htmlFor="custDivision"
                    >
                      বিভাগ / অঞ্চল *
                    </label>
                    <select
                      id="custDivision"
                      required
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-border-subtle text-charcoal font-bangla text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      {DIVISIONS.map((div) => (
                        <option key={div} value={div}>
                          {div}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block font-bangla text-xs font-bold text-charcoal mb-1"
                      htmlFor="custDistrict"
                    >
                      উপজেলা / থানা ও জেলা *
                    </label>
                    <input
                      id="custDistrict"
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="উদা: ধানমন্ডি / মিরপুর / সদর"
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-border-subtle text-charcoal font-bangla text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-bangla text-xs font-bold text-charcoal mb-1"
                    htmlFor="custAddress"
                  >
                    সম্পূর্ণ ডেলিভারি ঠিকানা *
                  </label>
                  <textarea
                    id="custAddress"
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="বাসার নম্বর, রোড নম্বর, এলাকা বা ল্যান্ডমার্ক বিস্তারিত লিখুন"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-border-subtle text-charcoal font-bangla text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  ></textarea>
                </div>

                {/* Payment Method Selector */}
                <div className="flex flex-col gap-2">
                  <span className="font-bangla text-xs font-bold text-charcoal">
                    পেমেন্ট পদ্ধতি:
                  </span>
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === "cod"
                        ? "bg-mustard-light/50 border-primary"
                        : "bg-stone-50 border-border-subtle"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        id="codPayment"
                        name="payment_mode"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="codPayment"
                        className="font-bangla text-xs sm:text-sm font-bold text-charcoal cursor-pointer flex items-center gap-1.5"
                      >
                        <Banknote className="w-4 h-4 text-primary" />
                        ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা পরিশোধ)
                      </label>
                    </div>
                    <span
                      className="material-symbols-outlined text-secondary-green text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("bkash")}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === "bkash"
                        ? "bg-mustard-light/50 border-primary"
                        : "bg-stone-50 border-border-subtle"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        id="bkashPayment"
                        name="payment_mode"
                        checked={paymentMethod === "bkash"}
                        onChange={() => setPaymentMethod("bkash")}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="bkashPayment"
                        className="font-bangla text-xs sm:text-sm font-semibold text-charcoal cursor-pointer flex items-center gap-1.5"
                      >
                        <CreditCard className="w-4 h-4 text-mustard-amber" />
                        বিকাশ / নগদ পেমেন্ট (অগ্রিম বা ডেলিভারির সময়)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Order Summary Card */}
                <div className="p-4 rounded-xl bg-mustard-light/50 border border-border-gold flex flex-col gap-2 mt-1">
                  <div className="flex justify-between items-center font-bangla text-xs text-charcoal">
                    <span>নির্বাচিত পণ্য:</span>
                    <span className="font-bold text-primary">
                      {selectedTier.shortName} ({toBengaliNum(quantity)} টি)
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-bangla text-xs text-charcoal">
                    <span>পণ্যের মোট মূল্য:</span>
                    <span className="font-bold">{formatBengaliCurrency(itemTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center font-bangla text-xs text-charcoal">
                    <span>ডেলিভারি চার্জ:</span>
                    <span
                      className={
                        deliveryFee === 0
                          ? "font-bold text-secondary-green"
                          : "font-bold text-charcoal"
                      }
                    >
                      {deliveryFee === 0
                        ? "ফ্রি (৳০)"
                        : formatBengaliCurrency(deliveryFee)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-border-gold flex justify-between items-center font-bangla">
                    <span className="text-sm font-bold text-charcoal">
                      মোট প্রদেয় টাকা:
                    </span>
                    <span className="text-xl font-extrabold text-primary">
                      {formatBengaliCurrency(grandTotal)}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-70 text-white font-bangla font-extrabold text-base sm:text-lg flex items-center justify-center gap-2 transition-all shadow-cta-glow transform active:scale-[0.99] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                  <span>
                    {submitting
                      ? "অর্ডার প্রসেস হচ্ছে..."
                      : `অর্ডার নিশ্চিত করুন — ${formatBengaliCurrency(
                          grandTotal
                        )} (${paymentMethod === "cod" ? "ক্যাশ অন ডেলিভারি" : "বিকাশ/নগদ"})`}
                  </span>
                </button>

                <p className="text-center font-bangla text-[11px] text-text-secondary mt-1">
                  🔒 আপনার তথ্য শতভাগ সুরক্ষিত। অর্ডার করার পর আমাদের প্রতিনিধি কল করে নিশ্চিত করবেন।
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />
    </section>
  );
}
