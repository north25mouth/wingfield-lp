"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const PHONE = "0120-836-707";
const PHONE_DIRECT = "090-7265-5699";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwdgvba", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      const subject = encodeURIComponent("お問い合わせ");
      const body = encodeURIComponent(
        `お名前: ${data.get("name")}\n電話番号: ${data.get("phone")}\nメール: ${data.get("email")}\n物件: ${data.get("property_type")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:info@wingfieldjapan.com?subject=${subject}&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="tracking-[0.15em] text-sm font-medium text-neutral-800">
            WING FIELD JAPAN
          </Link>
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="flex items-center gap-1.5 text-sm text-neutral-800 font-medium tracking-wide"
          >
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </header>

      <main className="pt-14 md:pt-16">
        <section className="bg-surface py-10 md:py-20 border-b border-neutral-100">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <p className="text-accent text-xs md:text-sm tracking-[0.3em] mb-2 md:mb-4">CONTACT</p>
            <h1 className="text-2xl md:text-4xl font-medium text-neutral-900 mb-1 md:mb-3">
              お問い合わせ
            </h1>
            <p className="text-neutral-500 text-sm md:text-base">無料お見積もり・ご相談はこちら</p>
          </div>
        </section>

        <section className="py-8 md:py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-6 grid lg:grid-cols-5 gap-8 lg:gap-16">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h2 className="text-base md:text-lg font-medium mb-5 md:mb-8 text-neutral-800">お問い合わせフォーム</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800 mb-3">送信完了</h3>
                  <p className="text-neutral-500 text-sm leading-[2]">
                    お問い合わせありがとうございます。<br />
                    担当者より折り返しご連絡いたします。
                  </p>
                </div>
              ) : (
              <form className="space-y-5 md:space-y-7" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-500 mb-1.5 md:mb-2">
                    お名前 <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-neutral-200 bg-transparent px-0 py-2.5 md:py-3 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-300"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-neutral-500 mb-1.5 md:mb-2">
                    電話番号 <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full border-b border-neutral-200 bg-transparent px-0 py-2.5 md:py-3 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-300"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-500 mb-1.5 md:mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b border-neutral-200 bg-transparent px-0 py-2.5 md:py-3 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-300"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label htmlFor="property_type" className="block text-sm text-neutral-500 mb-1.5 md:mb-2">
                    物件の種類
                  </label>
                  <select
                    id="property_type"
                    name="property_type"
                    className="w-full border-b border-neutral-200 bg-transparent px-0 py-2.5 md:py-3 text-base focus:outline-none focus:border-accent transition-colors text-neutral-500"
                  >
                    <option value="">選択してください</option>
                    <option value="home">ご自宅</option>
                    <option value="villa">別荘</option>
                    <option value="apartment">賃貸アパート</option>
                    <option value="resort">リゾートマンション</option>
                    <option value="new_build">新築・改築物件</option>
                    <option value="special">特別清掃</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-neutral-500 mb-1.5 md:mb-2">
                    ご相談内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-neutral-200 bg-transparent px-3 md:px-4 py-2.5 md:py-3 text-base focus:outline-none focus:border-accent transition-colors resize-vertical placeholder:text-neutral-300"
                    placeholder="清掃のご希望内容、物件の広さ、ご希望の日程などをご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent text-white py-3.5 md:py-4 text-sm tracking-[0.1em] hover:bg-accent-light transition-colors disabled:opacity-60"
                >
                  {submitting ? "送信中..." : "送信する"}
                </button>
                <p className="text-xs md:text-sm text-neutral-400 text-center">
                  送信後、担当者より折り返しご連絡いたします
                </p>
              </form>
              )}
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2 space-y-4 md:space-y-6">
              <div className="border border-neutral-100 p-5 md:p-8">
                <p className="text-xs md:text-sm text-accent tracking-wide mb-3 md:mb-4">お電話でのお問い合わせ</p>
                <a
                  href={`tel:${PHONE.replace(/-/g, "")}`}
                  className="block text-xl md:text-2xl font-medium text-neutral-900 mb-1 tracking-wide"
                >
                  {PHONE}
                </a>
                <p className="text-xs md:text-sm text-neutral-400 mb-3 md:mb-4">フリーダイヤル（通話無料）</p>
                <div className="border-t border-neutral-100 pt-3 md:pt-4">
                  <a
                    href={`tel:${PHONE_DIRECT.replace(/-/g, "")}`}
                    className="text-base md:text-lg font-medium text-neutral-900 tracking-wide"
                  >
                    {PHONE_DIRECT}
                  </a>
                  <p className="text-xs md:text-sm text-neutral-400 mt-0.5 md:mt-1">担当直通（羽田）</p>
                </div>
                <p className="text-xs md:text-sm text-neutral-400 mt-3 md:mt-4">営業時間: 8:00〜17:00</p>
              </div>

              <div className="border border-neutral-100 p-5 md:p-8">
                <p className="text-xs md:text-sm text-accent tracking-wide mb-3 md:mb-4">会社情報</p>
                <dl className="space-y-2 md:space-y-3 text-sm md:text-base text-neutral-700">
                  <div>
                    <dt className="text-xs md:text-sm text-neutral-400">社名</dt>
                    <dd>ウイングフィールドジャパン</dd>
                  </div>
                  <div>
                    <dt className="text-xs md:text-sm text-neutral-400">所在地</dt>
                    <dd className="text-sm md:text-base">山梨県南都留郡山中湖村 平野3376</dd>
                  </div>
                  <div>
                    <dt className="text-xs md:text-sm text-neutral-400">対応エリア</dt>
                    <dd className="text-sm md:text-base">山中湖村・富士吉田市・富士河口湖町・忍野村・鳴沢村</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-neutral-200 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center text-sm">
          <Link href="/" className="text-accent hover:text-accent-light transition-colors tracking-[0.1em]">
            トップページに戻る
          </Link>
          <p className="mt-3 md:mt-4 text-xs md:text-sm text-neutral-400">&copy; {new Date().getFullYear()} Wing Field Japan</p>
        </div>
      </footer>
    </>
  );
}
