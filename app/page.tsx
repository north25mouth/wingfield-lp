import React from "react";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import FadeInOnScroll from "./components/FadeInOnScroll";
import HeroSlideshow from "./components/HeroSlideshow";
import TrustNumbers from "./components/TrustNumbers";
import MobileMenu from "./components/MobileMenu";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const PHONE = "0120-836-707";
const PHONE_DIRECT = "090-7265-5699";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="tracking-[0.15em] text-xs md:text-sm font-medium text-neutral-800">
          WING FIELD JAPAN
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-neutral-500">
          <a href="#services" className="hover:text-neutral-800 transition-colors">サービス</a>
          <a href="#works" className="hover:text-neutral-800 transition-colors">施工事例</a>
          <a href="#company" className="hover:text-neutral-800 transition-colors">会社概要</a>
          <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-neutral-800 font-medium">
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="border border-neutral-800 text-neutral-800 px-6 py-2 text-sm tracking-[0.1em] hover:bg-neutral-800 hover:text-white transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function HeroSection() {
  const services = [
    "ハウスクリーニング",
    "別荘管理清掃",
    "引渡し前清掃",
    "エアコン洗浄",
    "特殊清掃",
  ];

  return (
    <section className="pt-14 md:pt-16 bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-10 lg:py-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
          {/* Left: Photo slideshow */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <HeroSlideshow />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 z-10 bg-white/70 backdrop-blur-md rounded-sm p-5 md:p-7 lg:p-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.5] tracking-normal text-neutral-900">
                住まいの「きれい」を
                <br />
                届けて16年。
              </h1>
              <p className="text-neutral-600 text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
                山中湖村を拠点に、富士五湖エリアで
                <br className="hidden md:block" />
                年間多数のクリーニングを手がけています。
              </p>
            </div>
          </div>

          {/* Right: Info sidebar */}
          <div className="bg-white p-6 md:p-8 lg:p-10 flex flex-col">
            <div className="mb-6 md:mb-8">
              <p className="text-xl md:text-2xl font-medium tracking-wide text-neutral-800">
                WING FIELD JAPAN
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                ウイングフィールドジャパン
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8">
              {services.map((s) => (
                <span
                  key={s}
                  className="text-[11px] md:text-xs tracking-wide border border-neutral-200 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="space-y-3 md:space-y-4 text-sm border-t border-neutral-100 pt-6 md:pt-8 mb-6 md:mb-8">
              <div className="flex gap-3">
                <span className="text-[11px] md:text-xs bg-accent/10 text-accent px-2 py-0.5 tracking-wide shrink-0">
                  対応エリア
                </span>
                <span className="text-neutral-600 text-[10px] md:text-sm leading-snug">
                  富士五湖エリア全域（山中湖村 他5市町村）
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-[11px] md:text-xs bg-accent/10 text-accent px-2 py-0.5 tracking-wide shrink-0">
                  営業時間
                </span>
                <span className="text-neutral-600 text-xs md:text-sm">8:00 - 17:00（年中無休）</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[11px] md:text-xs bg-accent/10 text-accent px-2 py-0.5 tracking-wide shrink-0">
                  創業
                </span>
                <span className="text-neutral-600 text-xs md:text-sm">2009年（16年目）</span>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <a
                href={`tel:${PHONE.replace(/-/g, "")}`}
                className="block text-center border border-neutral-200 py-3 md:py-4 text-base md:text-lg font-medium tracking-wide text-neutral-800 hover:border-neutral-400 transition-colors"
              >
                {PHONE}
                <span className="block text-xs text-neutral-400 mt-0.5 font-normal">フリーダイヤル（通話無料）</span>
              </a>
              <Link
                href="/contact"
                className="block text-center bg-accent text-white py-3 md:py-4 text-sm tracking-[0.1em] hover:bg-accent-light transition-colors"
              >
                無料見積もりを依頼する
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function IntroSection() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-4">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-neutral-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                </svg>
                <p className="text-xs text-neutral-300">代表写真</p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mb-1">代表</p>
            <p className="text-lg font-medium text-neutral-800">羽田</p>
          </div>
          <div>
            <p className="text-accent text-sm tracking-[0.3em] mb-3">MESSAGE</p>
            <h2 className="text-2xl md:text-3xl font-medium leading-[1.9] mb-8 text-neutral-800">
              ごあいさつ
            </h2>
            <div className="text-neutral-600 text-base leading-[2.2] space-y-4">
              <p>
                山中湖村で創業して16年、地元の皆さまに支えられながら、一軒一軒丁寧に清掃を続けてまいりました。
              </p>
              <p>
                この地域は別荘やリゾートマンションも多く、オーナー様が遠方にいらっしゃるケースも少なくありません。
                だからこそ「任せて安心」と思っていただける仕事を心がけています。
              </p>
              <p>
                お見積もりは必ず現地で行い、作業内容と費用を事前にご説明します。
                「頼んでよかった」と言っていただけることが、私たちの一番の喜びです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const featured = [
    {
      title: "ご自宅の清掃",
      desc: "キッチン・浴室・トイレなどの水回りから、リビング・寝室の全体清掃まで。汚れの種類に合わせた最適な方法で、住まいの「きれい」を取り戻します。",
      image: `${BASE}/images/hero/cleaning_staff_kitchen.webp`,
      tags: ["全体清掃", "水回り", "部分清掃"],
    },
    {
      title: "別荘・リゾート",
      desc: "山中湖エリアの別荘清掃で豊富な実績。売買時のクリーニング、シーズン前後の定期清掃、管理会社様との連携にも対応しています。",
      image: `${BASE}/images/work/work_scene_03.webp`,
      tags: ["定期清掃", "売買時対応", "管理会社連携"],
    },
  ];

  const others = [
    {
      title: "賃貸アパート",
      desc: "入退去時の原状回復清掃。不動産会社様・オーナー様向け。",
    },
    {
      title: "リゾートマンション",
      desc: "管理組合様向け。日常・定期・特別清掃に対応。",
    },
    {
      title: "新築・改築物件",
      desc: "引渡し前のクリーニング。建築会社様・個人様どちらも。",
    },
    {
      title: "特殊クリーニング",
      desc: "エアコン洗浄・ワックス剥離・高所ガラス・絨毯洗浄。",
    },
  ];

  return (
    <section id="services" className="py-10 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-16">
          <p className="text-accent text-sm tracking-[0.3em] mb-2 md:mb-3">SERVICES</p>
          <h2 className="text-2xl md:text-4xl font-medium text-neutral-900">サービスのご案内</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
          {featured.map((s, i) => (
            <FadeInOnScroll key={s.title} delay={i * 0.15}>
            <div className="bg-white overflow-hidden group">
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 md:p-8">
                <h3 className="text-base md:text-2xl font-medium text-neutral-900 mb-1 md:mb-3">
                  {s.title}
                </h3>
                <p className="hidden md:block text-neutral-500 text-[15px] leading-[2] mb-5">
                  {s.desc}
                </p>
                <div className="hidden md:flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wide border border-accent/20 text-accent px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </FadeInOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-neutral-200">
          {others.map((s, i) => (
            <div key={s.title} className="bg-white p-4 md:p-7">
              <span className="text-xs text-accent/40 tracking-wider">
                {String(i + 3).padStart(2, "0")}
              </span>
              <h3 className="text-sm md:text-base font-medium mt-1.5 md:mt-2 mb-1 md:mb-2 text-neutral-800">
                {s.title}
              </h3>
              <p className="hidden md:block text-neutral-400 text-sm leading-[1.8]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      title: "経験と確かな技術",
      desc: "創業16年。最適な清掃方法を熟知。",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
    },
    {
      title: "地域密着・迅速対応",
      desc: "山中湖村拠点。富士五湖エリアに特化。",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      title: "安心・安全な施工",
      desc: "エコ洗剤使用。お子様やペットも安心。",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
    },
    {
      title: "女性スタッフ在籍",
      desc: "一人暮らしの方でも安心してご利用可能。",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-accent text-sm tracking-[0.3em] mb-2 md:mb-3">WHY US</p>
          <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-5 text-neutral-900">当社が選ばれる理由</h2>
          <p className="text-neutral-500 text-sm md:text-base leading-[2] max-w-xl mx-auto">
            技術だけでなく、人としての信頼を大切に。
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
          {reasons.map((r, i) => (
            <FadeInOnScroll key={r.title} delay={i * 0.1}>
            <div className="bg-white p-4 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-accent/8 text-accent mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-9 md:h-9">{r.icon}</div>
              </div>
              <h3 className="text-sm md:text-lg font-medium mb-1 md:mb-3 text-neutral-800">{r.title}</h3>
              <p className="hidden md:block text-neutral-500 text-sm leading-[1.9]">{r.desc}</p>
            </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const pairs = [
    { before: `${BASE}/images/before-after/bath_entrance_before.webp`, after: `${BASE}/images/before-after/bath_entrance_after.webp`, label: "浴室" },
    { before: `${BASE}/images/before-after/bath_tub_before.webp`, after: `${BASE}/images/before-after/bath_tub_after.webp`, label: "浴槽" },
    { before: `${BASE}/images/before-after/toilet_before.webp`, after: `${BASE}/images/before-after/toilet_after.webp`, label: "トイレ" },
    { before: `${BASE}/images/before-after/washbasin_before.webp`, after: `${BASE}/images/before-after/washbasin_after.webp`, label: "洗面台" },
  ];

  return (
    <section id="works" className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-16 gap-4">
          <div>
            <p className="text-accent text-sm tracking-[0.3em] mb-2 md:mb-3">WORKS</p>
            <h2 className="text-2xl md:text-4xl font-medium text-neutral-900">施工事例</h2>
            <p className="text-neutral-500 text-sm md:text-base mt-2 md:mt-3">プロの技術で、ここまで変わります。</p>
          </div>
          <p className="text-neutral-400 text-xs md:text-sm">ドラッグして比較できます</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {pairs.map((pair, i) => (
            <FadeInOnScroll key={pair.label} delay={i * 0.1}>
              <BeforeAfterSlider
                before={pair.before}
                after={pair.after}
                label={pair.label}
              />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flow() {
  const steps = [
    { title: "お問い合わせ", desc: "電話・フォームで連絡" },
    { title: "無料お見積もり", desc: "現地で内容と費用を提示" },
    { title: "作業実施", desc: "プロが丁寧に清掃" },
    { title: "完了・お支払い", desc: "確認後にお支払い" },
  ];

  const arrow = (
    <div className="hidden md:flex items-center justify-center text-neutral-300">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent text-sm tracking-[0.3em] mb-3">FLOW</p>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900">ご利用の流れ</h2>
        </div>
        {/* Mobile: vertical timeline */}
        <div className="flex flex-col items-start gap-0 md:hidden max-w-xs mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-accent/20 bg-white shrink-0">
                  <span className="text-base font-medium text-accent">{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-10 bg-accent/15" />
                )}
              </div>
              <div className="pt-1.5 pb-6">
                <h3 className="text-base font-medium text-neutral-800">{s.title}</h3>
                <p className="text-neutral-500 text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PC: horizontal with arrows */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-x-2 items-start">
          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <div className="text-center px-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent/20 mb-5">
                  <span className="text-lg font-medium text-accent">{i + 1}</span>
                </div>
                <h3 className="text-base font-medium mb-2 text-neutral-800">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-[1.8]">{s.desc}</p>
              </div>
              {i < steps.length - 1 && arrow}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      text: "別荘の定期清掃をお願いしています。遠方に住んでいるので、安心して任せられるのがありがたいです。",
      author: "山中湖村 別荘オーナー",
      service: "別荘定期清掃",
    },
    {
      text: "引越し前のクリーニングをお願いしました。水回りがピカピカになって、気持ちよく新生活を始められました。",
      author: "富士吉田市 T様",
      service: "入退去清掃",
    },
    {
      text: "エアコン洗浄をお願いしたら、風の匂いが全然違います。毎年お願いしたいです。",
      author: "忍野村 S様",
      service: "エアコン洗浄",
    },
  ];

  const externalLinkIcon = (
    <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );

  return (
    <section className="py-10 md:py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-accent text-sm tracking-[0.3em] mb-2 md:mb-3">VOICE</p>
          <h2 className="text-2xl md:text-4xl font-medium text-neutral-900">お客様の声</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <FadeInOnScroll key={r.author} delay={i * 0.15}>
            <div className="flex flex-col h-full">
              <div className="relative bg-white rounded-lg p-5 md:p-7 shadow-sm flex-1">
                <p className="text-xs text-accent mb-2 tracking-wide font-medium">{r.service}</p>
                <p className="text-sm md:text-[15px] text-neutral-600 leading-[2]">
                  {r.text}
                </p>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45 shadow-sm" />
              </div>
              <div className="flex items-center gap-3 mt-4 pl-4">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-700">{r.author}</p>
                </div>
              </div>
            </div>
            </FadeInOnScroll>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-8 md:mt-12 text-xs text-neutral-400">
          <span>外部サイトでも評価いただいています</span>
          <span className="hidden md:inline">|</span>
          <div className="flex gap-4">
          <a
            href="https://meetsmore.com/p/Yn9tWjNWDwAdUcQL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
          >
            ミツモア{externalLinkIcon}
          </a>
          <a
            href="https://www.google.com/maps/place/%E3%82%A6%E3%82%A4%E3%83%B3%E3%82%B0%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3/@35.4287344,138.8720895,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
          >
            Google{externalLinkIcon}
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const examples = [
    { type: "ワンルーム", price: "25,000円〜" },
    { type: "1LDK〜2DK", price: "35,000円〜" },
    { type: "2LDK〜3DK", price: "55,000円〜" },
    { type: "3LDK〜4DK", price: "75,000円〜" },
    { type: "エアコン洗浄", price: "12,000円〜" },
    { type: "浴室", price: "15,000円〜" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent text-sm tracking-[0.3em] mb-3">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900">料金について</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-neutral-200 mb-10">
          {examples.map((e) => (
            <div key={e.type} className="bg-white p-6 md:p-8 text-center">
              <p className="text-sm text-neutral-500 mb-2">{e.type}</p>
              <p className="text-lg md:text-xl font-medium text-neutral-800">{e.price}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-xs md:text-sm text-center leading-[2] mb-4">
          空室清掃の目安料金です。物件の状況により変動します。
          <br />
          正確な費用は無料お見積もりにてご案内します。
        </p>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center text-base text-accent hover:text-accent-light transition-colors tracking-[0.05em]"
          >
            無料見積もりを依頼する
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CompanyInfo() {
  const rows = [
    ["社名", "ウイングフィールドジャパン\n（Wing Field Japan）"],
    ["代表", "羽田"],
    ["所在地", "〒401-0502\n山梨県南都留郡山中湖村平野3376"],
    ["対応エリア", "山中湖村・富士吉田市\n富士河口湖町・忍野村・鳴沢村"],
    ["電話番号", `${PHONE}（フリーダイヤル）\n${PHONE_DIRECT}（担当直通）`],
    ["営業時間", "8:00〜17:00"],
    ["事業内容", "ハウスクリーニング\nビルメンテナンス・清掃業"],
    ["損害保険", "施工中の万が一に備え、\n損害賠償保険に加入しています"],
  ];

  return (
    <section id="company" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent text-sm tracking-[0.3em] mb-3">COMPANY</p>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900">会社概要</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="divide-y divide-neutral-100">
            {rows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] py-5 gap-3 md:gap-4">
                <dt className="text-xs md:text-sm text-neutral-400">{label}</dt>
                <dd className="text-sm md:text-base text-neutral-700 whitespace-pre-line">{value}</dd>
              </div>
            ))}
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0!2d138.8636!3d35.4153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5bGx5Lit5rmW5p2R5bmz6YeOMzM3Ng!5e0!3m2!1sja!2sjp!4v1700000000000"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full bg-neutral-100"
              title="ウイングフィールドジャパン所在地"
            />
            <p className="text-sm text-neutral-400 mt-3">山中湖村平野 / 富士五湖エリア全域に対応</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-accent text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">
          お気軽にご相談ください
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-12">
          お見積もり無料。お電話・フォームどちらでも。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-accent px-10 py-4 text-sm tracking-[0.1em] hover:bg-white/90 transition-colors font-medium"
          >
            お問い合わせフォーム
          </Link>
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="inline-flex items-center justify-center border border-white/50 text-white px-10 py-4 text-sm tracking-[0.1em] hover:border-white transition-colors"
          >
            {PHONE}
          </a>
        </div>
        <p className="text-white/50 text-sm mt-6">担当直通: {PHONE_DIRECT}（羽田）</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface border-t border-neutral-200 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-neutral-500">
          <p className="tracking-[0.15em] text-neutral-800">WING FIELD JAPAN</p>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <span>山梨県南都留郡山中湖村 平野3376</span>
            <span>{PHONE}</span>
            <span>8:00〜17:00</span>
            <a
              href="https://www.instagram.com/wingfieldjapan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-6 pt-5 text-[10px] md:text-xs text-neutral-400 flex flex-col md:flex-row justify-between gap-2">
          <p>対応エリア: 山中湖村・富士吉田市・富士河口湖町・忍野村・鳴沢村</p>
          <p>&copy; {new Date().getFullYear()} Wing Field Japan</p>
        </div>
      </div>
    </footer>
  );
}

function MobileFixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-neutral-200 px-4 py-3 safe-area-bottom">
      <div className="flex gap-3">
        <a
          href={`tel:${PHONE.replace(/-/g, "")}`}
          className="flex items-center justify-center gap-1.5 border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-800 shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          電話
        </a>
        <Link
          href="/contact"
          className="flex-1 text-center bg-accent text-white py-2.5 text-sm tracking-[0.1em] font-medium"
        >
          無料見積もりを依頼する
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustNumbers />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Pricing />
        <Reviews />
        <Flow />
        <IntroSection />
        <CompanyInfo />
        <CTASection />
      </main>
      <Footer />
      <MobileFixedCTA />
    </>
  );
}
