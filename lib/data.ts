// Bengali numbers & currency utilities

export const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function toBengaliNum(num: number | string): string {
  return num
    .toString()
    .replace(/\d/g, (digit) => BENGALI_DIGITS[parseInt(digit, 10)]);
}

export function formatBengaliCurrency(amount: number): string {
  const formatted = amount.toLocaleString('en-US');
  return `৳${toBengaliNum(formatted)}`;
}

export interface ProductTier {
  id: string;
  liters: number;
  name: string;
  shortName: string;
  containerType: string;
  price: number;
  deliveryFee: number;
  popular?: boolean;
  freeDelivery?: boolean;
  savingsText?: string;
  image?: string;
}

export const PRODUCT_TIERS: ProductTier[] = [
  {
    id: "10L",
    liters: 10,
    name: "১০ লিটার ঘানি ভাঙানো তেল (১০L ফুড-গ্রেড ক্যান)",
    shortName: "১০ লিটার",
    containerType: "১০ লিটার ফুড-গ্রেড বিশেষ ক্যান",
    price: 3500,
    deliveryFee: 0,
    freeDelivery: true,
    savingsText: "সর্বাধিক সাশ্রয়ী • ফ্রি ডেলিভারি",
  },
  {
    id: "5L",
    liters: 5,
    name: "৫ লিটার ঘানি ভাঙানো তেল (সর্বাধিক বিক্রিত)",
    shortName: "৫ লিটার",
    containerType: "৫ লিটার ফুড-গ্রেড বোতল / ফ্যামিলি প্যাক",
    price: 1750,
    deliveryFee: 0,
    popular: true,
    freeDelivery: true,
    savingsText: "সর্বাধিক বিক্রিত • ফ্রি ডেলিভারি",
  },
  {
    id: "3L",
    liters: 3,
    name: "৩ লিটার ঘানি ভাঙানো তেল",
    shortName: "৩ লিটার",
    containerType: "৩টি ১ লিটার প্রিমিয়াম বোতল (+ ৮০৳ ডেলিভারি)",
    price: 1050,
    deliveryFee: 80,
    freeDelivery: false,
  },
  {
    id: "2L",
    liters: 2,
    name: "২ লিটার ঘানি ভাঙানো তেল",
    shortName: "২ লিটার",
    containerType: "২টি ১ লিটার বোতল (+ ৮০৳ ডেলিভারি)",
    price: 700,
    deliveryFee: 80,
    freeDelivery: false,
  },
  {
    id: "1L",
    liters: 1,
    name: "১ লিটার ঘানি ভাঙানো তেল",
    shortName: "১ লিটার",
    containerType: "১টি ১ লিটার প্রিমিয়াম কাচের বোতল (+ ৮০৳ ডেলিভারি)",
    price: 350,
    deliveryFee: 80,
    freeDelivery: false,
  },
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "১. এই সরিষার তেল ও বাজারের সাধারণ তেলের মধ্যে পার্থক্য কী?",
    answer:
      "বাজারের সাধারণ মিলে অতি-উত্তাপে তেল নিষ্কাশন ও কেমিক্যাল দিয়ে রিফাইন করা হয়, যাতে তেলের প্রয়োজনীয় পুষ্টি ও ফ্যাটি অ্যাসিড নষ্ট হয়ে যায়। আমাদের তেল ঐতিহ্যবাহী কাঠের ঘানিতে কোনো উত্তাপ ছাড়া ধীরগতিতে কোল্ড-প্রেসড প্রক্রিয়ায় বের করা হয়, ফলে প্রাকৃতিক ঝাঁঝ, ওমেগা-৩ ও খাদ্যগুণ শতভাগ অক্ষুণ্ণ থাকে।",
  },
  {
    id: 2,
    question: "২. এই তেলের সেলফ লাইফ বা কতদিন ভালো থাকে?",
    answer:
      "সম্পূর্ণ রাসায়নিক ও প্রিজারভেটিভমুক্ত হলেও প্রাকৃতিকভাবে কাঠের ঘানির খাঁটি সরিষার তেল কাচের বোতলে বা ফুড-গ্রেড জারে ১২ মাস পর্যন্ত সম্পূর্ণ সতেজ ও ঝাঁঝালো থাকে। বোতলের মুখ ভালোভাবে বন্ধ রেখে শুষ্ক ও স্বাভাবিক তাপমাত্রায় সংরক্ষণ করুন।",
  },
  {
    id: 3,
    question: "৩. কোন কোন সাইজে পাওয়া যায় এবং ডেলিভারি চার্জ কত?",
    answer:
      "আমরা ১ লিটার, ২ লিটার, ৩ লিটার, ৫ লিটার ও ১০ লিটার পরিমাণে সরবরাহ করে থাকি। ৫ লিটার ও ১০ লিটার অর্ডারে সারা বাংলাদেশে সম্পূর্ণ ফ্রি ডেলিভারি! ১, ২ ও ৩ লিটার অর্ডারে ডেলিভারি চার্জ মাত্র ৮০ টাকা।",
  },
  {
    id: 4,
    question: "৪. কতদিনের মধ্যে ডেলিভারি পাওয়া যাবে?",
    answer:
      "ঢাকা সিটির ভেতর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে যেকোনো জেলা ও উপজেলায় ২ থেকে ৪ কার্যদিবসের মধ্যে আপনার দোরগোড়ায় ডেলিভারি পৌঁছে দেওয়া হয়।",
  },
  {
    id: 5,
    question: "৫. পণ্য হাতে পেয়ে মূল্য পরিশোধ (COD) করা যাবে কি?",
    answer:
      "হ্যাঁ, শতভাগ নিশ্চিত ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। কোনো ধরনের অগ্রিম টাকা দিতে হয় না। ডেলিভারিম্যান থেকে পার্সেল বুঝে পেয়ে মূল্য পরিশোধ করতে পারবেন।",
  },
  {
    id: 6,
    question: "৬. তেল শতভাগ খাঁটি কিনা কীভাবে নিশ্চিত হব?",
    answer:
      "বোতলের মুখ খুললেই আপনি দেশি সরিষার তীব্র প্রাকৃতিক ঝাঁঝ ও মিষ্টি ঘ্রাণ পাবেন। রান্নায় সামান্য পরিমাণ দিলেই অপূর্ব স্বাদ ও রঙের বিস্তার ঘটে। কোনো প্রকার ভেজাল বা কৃত্রিম রঙ প্রমাণ করতে পারলে ১০০% মানিব্যাক গ্যারান্টি প্রদান করি।",
  },
];

export interface ReviewItem {
  id: number;
  name: string;
  initial: string;
  avatarBg: string;
  avatarText: string;
  location: string;
  rating: number;
  comment: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: "তৌহিদুর রহমান",
    initial: "তৌ",
    avatarBg: "bg-primary/10",
    avatarText: "text-primary",
    location: "ধানমন্ডি, ঢাকা • ভেরিফায়েড ক্রেতা",
    rating: 5,
    comment:
      "সত্যি বলতে বাজারে এখন খাঁটি সরিষার তেল পাওয়াই দুষ্কর। এই তেলের যে ঝাঁঝ আর আলুর ভর্তায় যে স্বাদ পেলাম, ছোটবেলার গ্রামের বাড়ির কথা মনে করিয়ে দিল। ৫ লিটারের জার নিয়েছিলাম, ডেলিভারিও দ্রুত পেয়েছি।",
  },
  {
    id: 2,
    name: "নাজনীন আক্তার",
    initial: "না",
    avatarBg: "bg-secondary-green/10",
    avatarText: "text-secondary-green",
    location: "পাঁচলাইশ, চট্টগ্রাম • ভেরিফায়েড ক্রেতা",
    rating: 5,
    comment:
      "ইলিশ মাছ ভাজা ও আচার তৈরিতে এই তেল ব্যবহার করেছি। কোনো কৃত্রিম গন্ধ নেই, খাঁটি সরিষার সোনালী রং ও খাঁটি প্রাকৃতিক ঘ্রাণ। আমার পুরো পরিবার এখন এই তেলেই অভ্যস্ত হয়ে গেছে।",
  },
  {
    id: 3,
    name: "প্রকৌশলী আরিফুল হক",
    initial: "আ",
    avatarBg: "bg-mustard-amber/10",
    avatarText: "text-mustard-amber",
    location: "উপশহর, সিলেট • ভেরিফায়েড ক্রেতা",
    rating: 5,
    comment:
      "প্যাকেজিং খুবই প্রফেশনাল এবং ইনট্যাক্ট ছিল। কাচের বোতল কোনো স্ক্র্যাচ ছাড়াই নিরাপদে এসেছে। যারা বাচ্চাদের সুস্বাস্থ্য ও ভালো রান্নার জন্য নির্ভেজাল তেল খুঁজছেন তাদের জন্য এটি সেরা পছন্দ।",
  },
];

export const PRODUCTION_STEPS = [
  {
    step: "০১",
    title: "স্থানীয় সেরা হলুদ ও মাঘী সরিষা সংগ্রহ",
    description:
      "উত্তরবঙ্গের চরাঞ্চলের কৃষকদের কাছ থেকে খাঁটি দেশি হলুদ ও মাঘী সরিষা নির্বাচন করে ধুলোবালি মুক্ত ও রোদে শুকিয়ে প্রস্তুত করা হয়।",
    icon: "grain",
  },
  {
    step: "০২",
    title: "দেশি বলদ গরু দ্বারা কাঠের ঘানিতে পেষণ",
    description:
      "সুস্থ দেশীয় বলদ গরুর ধীর পদচারণায় কাঠের ঘানির পিস্টন ঘুরে। এতে কোনো অতিরিক্ত তাপ উৎপন্ন হয় না, যা তেলের আসল পুষ্টি ও ঝাঁঝ রক্ষা করে।",
    icon: "autorenew",
  },
  {
    step: "০৩",
    title: "মাটির পাত্রে ফোঁটায় ফোঁটায় নিষ্কাশন",
    description:
      "ঘানি থেকে নিংড়ে আসা খাঁটি তেল সরাসরি রাখা হয় ঐতিহ্যবাহী মাটির পাত্রে। কোনো কৃত্রিম ফিল্টারিং ছাড়াই প্রাকৃতিক নিয়মে থিতিয়ে স্বচ্ছ করা হয়।",
    icon: "water_drop",
  },
  {
    step: "০৪",
    title: "ফুড গ্রেড বোতলজাতকরণ ও সিল প্যাক",
    description:
      "স্বচ্ছ ও স্বাস্থ্যসম্মত ফুড-গ্রেড বোতলে সিলগালা করে সরাসরি আপনার বাসার ঠিকানায় ক্যাশ অন ডেলিভারিতে পৌঁছে দেওয়া হয়।",
    icon: "inventory_2",
  },
];
