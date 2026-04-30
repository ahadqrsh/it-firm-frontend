"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();

  // Parallax for the right column visual
  const imageY = useTransform(scrollYProgress, [0.1, 0.4], [0, -40]);
  // Two floating dots
  const dotBlueY = useTransform(scrollYProgress, [0.2, 0.5], [0, -60]);
  const dotPurpleY = useTransform(scrollYProgress, [0.2, 0.5], [0, -30]);

  // Staggered entrance animations (same as before)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeOnly = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative px-6 pt-12 pb-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/30" />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={child} className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            Who We Are
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left column unchanged */}
          <div className="space-y-6">
            <motion.h2 variants={child} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
                About Us
              </span>
            </motion.h2>
            <motion.p variants={child} className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              We are a team of developers and marketers helping businesses build strong digital presence.
            </motion.p>
            <motion.div variants={fadeOnly} className="pt-8 flex flex-wrap gap-8">
              <div>
                <motion.div className="text-3xl font-semibold text-neutral-900 dark:text-white" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  5+
                </motion.div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Years Experience</div>
              </div>
              <div>
                <motion.div className="text-3xl font-semibold text-neutral-900 dark:text-white" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  50+
                </motion.div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Projects Delivered</div>
              </div>
            </motion.div>
          </div>

          {/* Right column with parallax visual */}
          <motion.div variants={fadeOnly} style={{ y: imageY }} className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-8 shadow-xl shadow-neutral-900/5 dark:shadow-black/20">
              <div className="h-full w-full rounded-2xl bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/20 dark:border-neutral-800 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <motion.div
                    className="text-5xl"
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    ✨
                  </motion.div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    Building digital<br />excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Parallax floating accent dots */}
            <motion.div
              style={{ y: dotBlueY }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-2xl -z-10"
            />
            <motion.div
              style={{ y: dotPurpleY }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}