"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
  animate,
} from "framer-motion";
import {
  Code2,
  Rocket,
  Users,
  Zap,
  Award,
  Globe,
  Clock,
  Heart,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

// Parent only orchestrates timing — it must not animate opacity itself,
// or it multiplies against the children and causes a visible flash.
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const VIEWPORT = { once: true, amount: 0.2 };

const values = [
  {
    icon: Code2,
    title: "Technical Excellence",
    desc: "Modern stacks, scalable architecture, and clean code.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    desc: "Future-ready solutions designed for growth.",
  },
  {
    icon: Users,
    title: "Client Focused",
    desc: "Your business goals become our strategy.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Agile workflow with efficient execution.",
  },
];

const stats = [
  { value: "5+", label: "Years", icon: Clock },
  { value: "50+", label: "Projects", icon: Code2 },
  { value: "100%", label: "Satisfaction", icon: Heart },
  { value: "24/7", label: "Support", icon: Globe },
];

/* -------------------------------------------------- */
/* Animated stat counter                              */
/* -------------------------------------------------- */
function StatValue({ value, active }) {
  const reduceMotion = useReducedMotion();
  const match = /^(\d+)(.*)$/.exec(value);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!match || !active || reduceMotion) return;
    const controls = animate(count, target, { duration: 1.6, ease: EASE });
    return () => controls.stop();
  }, [match, active, reduceMotion, count, target]);

  if (!match || reduceMotion) {
    return <>{value}</>;
  }

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
}

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, VIEWPORT);

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#09090B] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* -------------------------------------------------- */}
      {/* AMBIENT BACKGROUND                                 */}
      {/* -------------------------------------------------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 30%, #000 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 30%, #000 20%, transparent 100%)",
          }}
        />
        <div className="absolute -left-1/4 -top-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[130px] sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute -bottom-32 -right-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[130px] sm:h-[34rem] sm:w-[34rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* -------------------------------------------------- */}
        {/* HEADER                                             */}
        {/* -------------------------------------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5 backdrop-blur-xl"
          >
            <Award className="h-3.5 w-3.5 text-cyan-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
              Who We Are
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            About{" "}
            {/* pb/-mb pair keeps the 'y' descender from being clipped by bg-clip-text */}
            <span className="-mb-[0.16em] inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text pb-[0.16em] text-transparent">
              DevByBit
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg"
          >
            We create modern digital experiences that help businesses scale,
            grow, and dominate online.
          </motion.p>
        </motion.div>

        {/* -------------------------------------------------- */}
        {/* STORY + MISSION                                    */}
        {/* -------------------------------------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid items-start gap-8 sm:mt-20 md:grid-cols-2 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="space-y-5 sm:space-y-6">
            {/* Accent rule — small anchor so the prose column has a start point */}
            <span className="block h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />

            <p className="text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
              Founded with a passion for innovation, DevByBit combines
              cutting-edge development with powerful digital strategy to create
              scalable online experiences.
            </p>

            <p className="text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
              We don&apos;t just build websites &mdash; we craft digital
              ecosystems that attract, convert, and retain customers.
            </p>
          </motion.div>

          {/* Mission card */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 sm:p-8"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-blue-500/[0.07]"
            />
            {/* Top hairline that lights up on hover */}
            <div
              aria-hidden
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/20 sm:h-14 sm:w-14">
                <Users className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Our Mission
              </h3>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                To empower brands with scalable, human-centered digital
                solutions that blend creativity, strategy, and technology.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* -------------------------------------------------- */}
        {/* VALUES                                             */}
        {/* -------------------------------------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-cyan-400/30 sm:p-7"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/20 transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-pretty text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* -------------------------------------------------- */}
        {/* STATS                                              */}
        {/* -------------------------------------------------- */}
        <motion.div
          ref={statsRef}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] px-4 py-8 backdrop-blur-xl sm:mt-20 sm:px-6 sm:py-10 lg:mt-24"
        >
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 text-cyan-300 sm:h-5 sm:w-5" />
                  </div>

                  <div className="mt-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tabular-nums tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                    <StatValue value={stat.value} active={statsInView} />
                  </div>

                  <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}