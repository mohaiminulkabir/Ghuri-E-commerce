"use client";

import React from "react";
import { CheckCircle2, MessageSquare, Copy, X, Package, MapPin, Phone, User } from "lucide-react";
import { formatBengaliCurrency, toBengaliNum } from "@/lib/data";

export interface OrderDetails {
  orderId: string;
  name: string;
  phone: string;
  division: string;
  district: string;
  address: string;
  productName: string;
  quantity: number;
  itemPrice: number;
  deliveryFee: number;
  totalPrice: number;
  paymentMethod: string;
}

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export default function OrderSuccessModal({ order, onClose }: OrderSuccessModalProps) {
  if (!order) return null;

  const [copied, setCopied] = React.useState(false);

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ঘুরি ওয়েবসাইট থেকে একটি অর্ডার করেছি।\nঅর্ডার আইডি: #${order.orderId}\nপণ্য: ${order.productName} (পরিমাণ: ${order.quantity})\nমোট টাকা: ৳${order.totalPrice}\nনাম: ${order.name}\nফোন: ${order.phone}\nঠিকানা: ${order.address}, ${order.district}, ${order.division}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-border-subtle shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-charcoal hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-primary flex items-center justify-center mb-3">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>

          <span className="font-bangla text-xs font-bold text-mustard-amber uppercase tracking-wider">
            অর্ডার নিশ্চিতকরণ
          </span>
          <h3 className="font-bangla text-2xl font-extrabold text-charcoal mt-1">
            ধন্যবাদ {order.name}!
          </h3>
          <p className="font-bangla text-xs sm:text-sm text-text-secondary mt-1">
            আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। আমাদের প্রতিনিধি খুব শীঘ্রই আপনার নম্বরে যোগাযোগ করবেন।
          </p>

          {/* Order ID Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-charcoal">
            <span>অর্ডার আইডি:</span>
            <strong className="text-primary font-bold">{order.orderId}</strong>
            <button
              onClick={handleCopyOrderId}
              className="text-stone-500 hover:text-primary transition-colors ml-1"
              title="কপি করুন"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            {copied && <span className="text-[10px] text-emerald-600 font-sans">কপি হয়েছে!</span>}
          </div>
        </div>

        {/* Order Summary Receipt Box */}
        <div className="mt-6 p-4 rounded-2xl bg-editorial-bg border border-border-subtle flex flex-col gap-3 font-bangla text-xs">
          <div className="flex justify-between items-start pb-2 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-primary" />
              <span className="font-bold text-charcoal">{order.productName}</span>
            </div>
            <span className="font-bold text-charcoal">
              {toBengaliNum(order.quantity)} টি প্যাক
            </span>
          </div>

          <div className="flex justify-between items-center text-text-secondary">
            <span>পণ্যের মূল্য:</span>
            <span className="font-semibold text-charcoal">
              {formatBengaliCurrency(order.itemPrice * order.quantity)}
            </span>
          </div>

          <div className="flex justify-between items-center text-text-secondary">
            <span>ডেলিভারি চার্জ:</span>
            <span className={order.deliveryFee === 0 ? "font-bold text-secondary-green" : "font-semibold text-charcoal"}>
              {order.deliveryFee === 0 ? "ফ্রি (৳০)" : formatBengaliCurrency(order.deliveryFee)}
            </span>
          </div>

          <div className="pt-2 border-t border-border-subtle flex justify-between items-center text-sm font-bold text-charcoal">
            <span>সর্বমোট প্রদেয়:</span>
            <span className="text-lg font-extrabold text-primary">
              {formatBengaliCurrency(order.totalPrice)}
            </span>
          </div>

          <div className="text-[11px] text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            পদ্ধতি: <strong>ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে মূল্য পরিশোধ)</strong>
          </div>
        </div>

        {/* Shipping details */}
        <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 font-bangla text-xs flex flex-col gap-2">
          <h4 className="font-bold text-charcoal text-[13px] border-b border-stone-200 pb-1 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            ডেলিভারি ঠিকানা
          </h4>
          <div className="flex items-center gap-2 text-text-secondary">
            <User className="w-3.5 h-3.5" />
            <span>প্রাপক: <strong className="text-charcoal">{order.name}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <Phone className="w-3.5 h-3.5" />
            <span>ফোন: <strong className="text-charcoal font-sans">{order.phone}</strong></span>
          </div>
          <div className="text-text-secondary">
            <span>ঠিকানা: </span>
            <span className="text-charcoal">{order.address}, {order.district}, {order.division}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-2.5 font-bangla">
          <a
            href={`https://wa.me/8801700000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>হোয়াটসঅ্যাপে অর্ডার কনফার্ম করুন</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-charcoal font-semibold text-xs transition-colors"
          >
            ঠিক আছে, বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
