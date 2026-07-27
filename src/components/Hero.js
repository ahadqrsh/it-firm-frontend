"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Eye, Briefcase, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

// Loops seamlessly: the first and last stop are the same colour.
const HEADLINE_GRADIENT =
  "linear-gradient(90deg, #60a5fa 0%, #67e8f9 25%, #a78bfa 50%, #67e8f9 75%, #60a5fa 100%)";

const LINE_ONE = ["From", "Vision", "to", "Reality,"];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  // The headline gets its own stagger so the words land as one gesture.
  const headline = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  };

  const word = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : "0.4em",
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#09090B] px-5 py-24 sm:py-28"
    >
      {/* ---------------------------------- */}
      {/* AMBIENT BACKGROUND                 */}
      {/* ---------------------------------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 38%, #000 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 38%, #000 20%, transparent 100%)",
          }}
        />
        <div className="absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-[80%] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -bottom-52 right-0 h-[32rem] w-[32rem] translate-x-1/4 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#09090B]" />
      </div>

      {/* ---------------------------------- */}
      {/* CONTENT                            */}
      {/* ---------------------------------- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5 backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
            Creative Software Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={headline}
          className="mt-8 text-balance text-[2.75rem] font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          <span className="block">
            {LINE_ONE.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className="mr-[0.22em] inline-block last:mr-0"
              >
                {w}
              </motion.span>
            ))}
          </span>

          <motion.span
            variants={word}
  className="mt-1 block pb-[0.16em] -mb-[0.16em]"
            style={{
              backgroundImage: HEADLINE_GRADIENT,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            animate={
              reduceMotion
                ? undefined
                : { backgroundPosition: ["0% 50%", "-200% 50%"] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 9, repeat: Infinity, ease: "linear" }
            }
          >
            With Integrity.
          </motion.span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          From strategy to launch, we build custom web apps and platforms that
          are fast, reliable, and built to scale. Your vision, delivered with
          excellence.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <motion.a
            href="#contact"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-7 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
          >
            Let&apos;s Make It Real
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-zinc-200 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
          >
            <Eye className="h-4 w-4 text-cyan-300" />
            View Services
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-zinc-200 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
          >
            <Briefcase className="h-4 w-4 text-cyan-300" />
            View Portfolio
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          variants={item}
          className="mt-14 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <p className="text-left text-xs text-zinc-400 sm:text-sm">
            Trusted by startups and businesses to build scalable, modern digital
            experiences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}