"use client";

import { useEffect, useState } from "react";

export function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-md">
      <div className="text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}
