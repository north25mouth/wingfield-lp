"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

type Props = {
  before: string;
  after: string;
  label: string;
};

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasInteracted) {
          observer.unobserve(el);
          setTimeout(() => {
            setShowHint(true);
            let start: number | null = null;
            const duration = 2000;
            const animate = (ts: number) => {
              if (!start) start = ts;
              const elapsed = ts - start;
              const t = Math.min(elapsed / duration, 1);
              let value: number;
              if (t < 0.33) {
                const p = t / 0.33;
                value = 50 - 35 * easeInOut(p);
              } else if (t < 0.66) {
                const p = (t - 0.33) / 0.33;
                value = 15 + 70 * easeInOut(p);
              } else {
                const p = (t - 0.66) / 0.34;
                value = 85 - 35 * easeInOut(p);
              }
              setPosition(value);
              if (t < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }, 400);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasInteracted]);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      setHasInteracted(true);
      setShowHint(false);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm tracking-[0.1em] text-neutral-500">{label}</p>
      </div>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden cursor-col-resize select-none touch-none rounded-sm"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <Image
          src={after}
          alt={`${label} 清掃後`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${label} 清掃前`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
            boxShadow: "0 0 8px rgba(0,0,0,0.3)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-11 md:h-11 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="text-neutral-500"
            >
              <path d="M8 5L3 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 5L21 10L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <span
          className="absolute top-2 left-2 md:top-4 md:left-4 text-[9px] md:text-xs tracking-[0.15em] bg-white/90 backdrop-blur-sm px-1.5 py-0.5 md:px-3 md:py-1.5 text-neutral-500 z-20 transition-opacity duration-300"
          style={{ opacity: position > 15 ? 1 : 0 }}
        >
          BEFORE
        </span>
        <span
          className="absolute top-2 right-2 md:top-4 md:right-4 text-[9px] md:text-xs tracking-[0.15em] bg-neutral-900 px-1.5 py-0.5 md:px-3 md:py-1.5 text-white z-20 transition-opacity duration-300"
          style={{ opacity: position < 85 ? 1 : 0 }}
        >
          AFTER
        </span>

        {showHint && !hasInteracted && (
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 backdrop-blur-sm text-white text-[9px] md:text-xs tracking-[0.1em] px-2.5 py-1 md:px-4 md:py-2 rounded-full animate-pulse">
              ドラッグして比較
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
