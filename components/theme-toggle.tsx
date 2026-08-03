"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.25)] transition hover:border-cyan-400/30 hover:text-cyan-300"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
