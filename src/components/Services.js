"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Globe, Search, Share2, Palette } from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      title: "Web Development",
      icon: Globe,
      description: "Custom websites and web apps built with modern technology.",
    },
    {
      title: "SEO Optimization",
      icon: Search,
      description: "Data-driven strategies to improve your search visibility.",
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      description: "Engaging campaigns that connect with your audience.",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "User-centered interfaces that look and feel intuitive.",
    },
  ];

  // Container for staggered entrance
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

  // Parallax offsets: each card moves at a slightly different speed
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const cardYs = [y1, y2, y3, y4]; // distribute across cards

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="relative px-6 py-24 overflow-hidden"
    >
      {/* Ambient background (no parallax needed here) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50/50 via-transparent to-transparent dark:from-neutral-900/30" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div variants={child} className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            What We Offer
          </span>
        </motion.div>

        {/* Section headline */}
        <motion.h2 variants={child} className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
          <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Services tailored to your growth
          </span>
        </motion.h2>

        {/* Service cards with parallax */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={child}
                style={{ y: cardYs[index] }} // parallax scroll
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }} // lift on hover overrides scroll y
                className="group relative p-8 rounded-2xl bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-xl transition-colors duration-500"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Icon */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-sm font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Learn more</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}