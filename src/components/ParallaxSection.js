"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="/hero.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-6xl font-bold">
          Build. Scale. Grow.
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          We create premium websites and digital experiences
          that help businesses attract clients.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}