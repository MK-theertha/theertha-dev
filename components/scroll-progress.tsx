"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 shadow-[0_0_18px_rgba(56,189,248,0.8)]"
      style={{ scaleX }}
    />
  );
}
