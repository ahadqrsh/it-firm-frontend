"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Eye, Briefcase, Sparkles } from "lucide-react";
import Tilt from "react-parallax-tilt";
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <Tilt
  tiltMaxAngleX={5}
  tiltMaxAngleY={5}
  perspective={1000}
  transitionSpeed={1500}
  scale={1.01}
>


    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#09090B] px-4 pt-8 pb-10 sm:py-16"
    >
      {/* Background Glow */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />

  <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />

  <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />

</div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Small badge */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border-white/10 backdrop-blur-xl mb-5 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">
              Creative Software Solutions
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
        >
          From Vision to Reality,{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent"
          >
            With Integrity.
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          From strategy to launch, we build custom web apps and platforms that
          are fast, reliable, and built to scale. Your vision, delivered with
          excellence.
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
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-slate-700 rounded-full text-sm sm:text-base font-medium border border-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1.5"
          >
            <Eye className="w-4 h-4" />
            View Services
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-slate-700 rounded-full text-sm sm:text-base font-medium border border-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" />
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-1.5"
          >
            Let's Make It Real
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-14 flex justify-center"
        >
          <div className="backdrop-blur-xl bg-cyan-100 border border-white/30 shadow-xl rounded-3xl px-8 py-5 max-w-xl">
            <p className="text-zinc-900 text-sm sm:text-base">
              Trusted by startups and businesses to build scalable, modern
              digital experiences.
            </p>
          </div>
        </motion.div>
        
      </div>
      
    </section>
    </Tilt>
  );
}
