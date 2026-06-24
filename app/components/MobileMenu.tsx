"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const PHONE = "0120-836-707";

const navItems = [
  { href: "#services", label: "サービス" },
  { href: "#works", label: "施工事例" },
  { href: "#company", label: "会社概要" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <>
      <div
        className={`fixed inset-0 top-14 z-[199] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed inset-0 top-14 z-[200] bg-white transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 pt-8">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-neutral-100 text-base tracking-wide text-neutral-700 transition-all duration-300"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transitionDelay: open ? `${i * 50 + 100}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="py-4 border-b border-neutral-100 text-base tracking-wide text-neutral-700 transition-all duration-300"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(20px)",
              transitionDelay: open ? `${navItems.length * 50 + 100}ms` : "0ms",
            }}
          >
            {PHONE}
          </a>
          <div
            className="mt-8 transition-all duration-300"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(10px)",
              transitionDelay: open ? "350ms" : "0ms",
            }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full bg-accent text-white text-center py-4 text-sm tracking-[0.15em]"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      </div>
    </>
  );

  return (
    <div className="flex md:hidden items-center gap-3">
      <a
        href={`tel:${PHONE.replace(/-/g, "")}`}
        className="flex items-center gap-1.5 text-neutral-600 text-xs"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        電話
      </a>
      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-8 flex items-center justify-center"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
      >
        <span
          className={`absolute block w-5 h-[1.5px] bg-neutral-700 transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute block w-5 h-[1.5px] bg-neutral-700 transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block w-5 h-[1.5px] bg-neutral-700 transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>
      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
