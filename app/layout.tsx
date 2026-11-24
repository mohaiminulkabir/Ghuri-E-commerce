import type { Metadata } from "next";
import { Anek_Bangla, Inter, Cinzel } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ঘুরি - খাঁটি কাঠের ঘানি সরিষার তেল | কোল্ড-প্রেসড ও নির্ভেজাল",
  description:
    "শতবর্ষ প্রাচীন কাঠের ঘানিতে দেশীয় বলদের ধীর পদচারণায় নিষ্কাশিত ১০০% নির্ভেজাল খাঁটি কোল্ড-প্রেসড সরিষার তেল। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি।",
  keywords: [
    "সরিষার তেল",
    "কাঠের ঘানি সরিষার তেল",
    "ঘানি ভাঙা তেল",
    "কোল্ড প্রেসড সরিষার তেল",
    "Mustard Oil",
    "Cold Pressed Mustard Oil",
    "Ghuri E-commerce",
  ],
  openGraph: {
    title: "ঘুরি - খাঁটি কাঠের ঘানি সরিষার তেল | কোল্ড-প্রেসড ও নির্ভেজাল",
    description:
      "শতবর্ষ প্রাচীন কাঠের ঘানিতে নিষ্কাশিত ১০০% নির্ভেজাল খাঁটি কোল্ড-প্রেসড সরিষার তেল।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${anekBangla.variable} ${inter.variable} ${cinzel.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-editorial-bg text-charcoal antialiased selection:bg-mustard-gold/25 selection:text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
