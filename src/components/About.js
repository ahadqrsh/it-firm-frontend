"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

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
    {
      value: "5+",
      label: "Years",
      icon: Clock,
    },

    {
      value: "50+",
      label: "Projects",
      icon: Code2,
    },

    {
      value: "100%",
      label: "Satisfaction",
      icon: Heart,
    },

    {
      value: "24/7",
      label: "Support",
      icon: Globe,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#09090B] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-20"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">

            <Award className="w-4 h-4 text-cyan-400" />

            <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">
              Who We Are
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">

            About{" "}

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              DevAgency
            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We create modern digital experiences that help
            businesses scale, grow, and dominate online.
          </p>

        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >

          {/* Left Text */}
          <motion.div
            variants={fadeUp}
            className="space-y-6"
          >

            <p className="text-zinc-400 leading-relaxed text-lg">
              Founded with a passion for innovation,
              DevAgency combines cutting-edge development
              with powerful digital strategy to create
              scalable online experiences.
            </p>

            <p className="text-zinc-400 leading-relaxed text-lg">
              We don't just build websites —
              we craft digital ecosystems that attract,
              convert, and retain customers.
            </p>

          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -5,
            }}
            className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg">

                <Users className="w-6 h-6 text-white" />

              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                To empower brands with scalable,
                human-centered digital solutions that
                blend creativity, strategy, and technology.
              </p>

            </div>

          </motion.div>

        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >

          {values.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden transition-all duration-500"
              >

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg">

                    <Icon className="w-6 h-6 text-white" />

                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >

          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                }}
                className="text-center"
              >

                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-4">

                  <Icon className="w-5 h-5 text-cyan-400" />

                </div>

                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>

                <div className="text-zinc-500 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}