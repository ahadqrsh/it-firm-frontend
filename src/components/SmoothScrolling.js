"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Module-level handle so other components (Navbar, buttons, footer)
 * can drive the same Lenis instance instead of fighting it.
 *
 *   import { getLenis } from "@/components/SmoothScrolling";
 *   getLenis()?.scrollTo("#contact", { offset: -96 });
 */
let lenisInstance = null;
export const getLenis = () => lenisInstance;

export default function SmoothScrolling() {
  const rafId = useRef(null);
  const reduceMotion = useReducedMotion();

  // Progress bar — spring-smoothed so it glides instead of ticking.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Honour the OS "reduce motion" setting: fall back to native scroll.
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      // Exponential ease-out: fast pickup, long soft landing.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      syncTouch: false,
      autoResize: true,
    });

    lenisInstance = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    // Route in-page anchor clicks through Lenis so they ease
    // instead of jumping. -96px clears the fixed navbar.
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -96, duration: 1.4 });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId.current);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduceMotion]);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: progress }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
    />
  );
}