"use client";

import { useRef, useState, useEffect } from "react";

const items = [
  { value: 16, suffix: "年", label: "地域密着" },
  { value: 5, suffix: "市町村", label: "対応エリア" },
  { value: 300, suffix: "件超", label: "年間実績" },
  { value: 0, suffix: "", label: "お見積もり", display: "無料" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target === 0) return;
    let raf: number;
    let startTime: number | null = null;

    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

export default function TrustNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-neutral-100 py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-4 divide-x divide-neutral-200">
          {items.map((item, i) => {
            const started = visible;
            return (
              <NumberItem
                key={item.label}
                item={item}
                visible={visible}
                delay={i * 150}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NumberItem({
  item,
  visible,
  delay,
}: {
  item: (typeof items)[number];
  visible: boolean;
  delay: number;
}) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(item.value, 1400, started);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [visible, delay]);

  const displayValue = item.display ?? String(count);
  const show = started || item.display !== undefined;

  return (
    <div
      className="text-center py-2 md:py-4 transition-all duration-700"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-2xl md:text-5xl lg:text-6xl font-bold text-accent tracking-tight leading-none">
          {displayValue}
        </span>
        {item.suffix && (
          <span className="text-[10px] md:text-sm font-medium text-neutral-500 ml-0.5">
            {item.suffix}
          </span>
        )}
      </div>
      <p className="text-[10px] md:text-sm text-neutral-400 tracking-wide mt-1 md:mt-3">
        {item.label}
      </p>
    </div>
  );
}
