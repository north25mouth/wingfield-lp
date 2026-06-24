"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const slides = [
  {
    src: `${BASE}/images/hero/cleaning_staff_kitchen.webp`,
    alt: "清潔なキッチンで作業するスタッフ",
  },
  {
    src: `${BASE}/images/work/work_scene_02.webp`,
    alt: "新築物件の引渡し前清掃",
  },
  {
    src: `${BASE}/images/work/work_scene_03.webp`,
    alt: "山中湖の別荘 清掃後の美しい室内",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);

  const advance = useCallback(() => {
    const nextIndex = (current + 1) % slides.length;
    setNext(nextIndex);
    setTimeout(() => {
      setCurrent(nextIndex);
      setNext(null);
    }, 1000);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <>
      {slides.map((slide, i) => {
        const isCurrent = i === current;
        const isNext = i === next;
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className={`object-cover object-[center_60%] transition-opacity duration-1000 ease-in-out ${
              isCurrent ? "opacity-100 z-[1]" : isNext ? "opacity-100 z-[2]" : "opacity-0 z-0"
            }`}
          />
        );
      })}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === current) return;
              setNext(i);
              setTimeout(() => {
                setCurrent(i);
                setNext(null);
              }, 500);
            }}
            className={`w-8 h-[2px] transition-all duration-500 ${
              i === current || i === next ? "bg-neutral-800 w-12" : "bg-neutral-400/50"
            }`}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
