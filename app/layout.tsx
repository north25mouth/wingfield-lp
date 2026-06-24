import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ウイングフィールドジャパン | 山中湖村のハウスクリーニング",
  description:
    "山梨県山中湖村を中心に富士五湖エリアのハウスクリーニングを行っています。自宅・別荘・賃貸アパート・リゾートマンションの清掃はお任せください。創業16年の実績。",
  openGraph: {
    title: "ウイングフィールドジャパン | 山中湖村のハウスクリーニング",
    description:
      "山梨富士五湖エリアのハウスクリーニングなら安心・丁寧なウイングフィールドジャパンにお任せください。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
