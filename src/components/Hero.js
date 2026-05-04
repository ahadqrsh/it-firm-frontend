"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Eye, Briefcase, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white px-4 pt-8 pb-10 sm:py-16">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Small badge */}
        <motion.div variants={stagger} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Creative Software Solutions</span>
          </motion.div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-slate-900"
        >
          From Vision to Reality,{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            With Integrity.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
        >
          From strategy to launch, we build custom web apps and platforms that are fast, reliable, and built to scale.
          Your vision, delivered with excellence.
        </motion.p>

        {/* Three buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-slate-700 rounded-full text-sm sm:text-base font-medium border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-1.5"
          >
            <Eye className="w-4 h-4" />
            View Services
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-slate-700 rounded-full text-sm sm:text-base font-medium border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" />
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-full text-sm sm:text-base font-medium shadow-md flex items-center gap-1.5 hover:shadow-lg"
          >
            Let's Make It Real
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}