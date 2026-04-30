"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Parallax offsets for background shapes
  const blob1Y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const blob3Y = useTransform(scrollYProgress, [0, 0.5], [0, -70]);

  // Staggered container (same as before)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headlineContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black"
    >
      {/* Parallax ambient background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: blob3Y }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* Main content (unchanged) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span variants={item} className="inline-block mb-6 text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
          Digital Excellence
        </motion.span>

        <motion.h1 variants={headlineContainer} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance">
          <motion.span variants={wordVariant} className="inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
            Build.
          </motion.span>
          <motion.span variants={wordVariant} className="inline-block bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 dark:from-neutral-300 dark:via-neutral-400 dark:to-neutral-300 bg-clip-text text-transparent">
            {" "}Scale.
          </motion.span>
          <motion.span variants={wordVariant} className="inline-block bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 dark:from-neutral-400 dark:via-neutral-500 dark:to-neutral-400 bg-clip-text text-transparent">
            {" "}Grow.
          </motion.span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
          Web Development & Digital Marketing Agency
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="group relative px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-base font-medium shadow-xl">
            <span className="relative z-10">Start a Project</span>
          </motion.a>
          <motion.a href="#portfolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="px-8 py-4 rounded-full text-base font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-colors">
            View Our Work →
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}