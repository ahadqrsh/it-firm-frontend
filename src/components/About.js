"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap, Award, Globe, Clock, Heart } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const values = [
    { icon: Code2, title: "Technical Excellence", desc: "Modern stacks, clean code, best practices" },
    { icon: Rocket, title: "Innovation First", desc: "Cutting-edge solutions tailored to you" },
    { icon: Users, title: "Client‑Centric", desc: "Your goals become our roadmap" },
    { icon: Zap, title: "Fast Delivery", desc: "Agile methodology, on‑time results" },
  ];

  const stats = [
    { value: "5+", label: "Years", icon: Clock },
    { value: "50+", label: "Projects", icon: Code2 },
    { value: "100%", label: "Satisfaction", icon: Heart },
    { value: "24/7", label: "Support", icon: Globe },
  ];

  return (
    <section id="about" ref={ref} className="relative px-6 py-20 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/50 to-white" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            <Award className="w-3.5 h-3.5" />
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-3">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              DevAgency
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We craft digital experiences that drive real business growth.
          </p>
        </motion.div>

        {/* Main description with two columns */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 mb-16"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Founded in 2020, DevAgency has grown from a small development team into a full‑service digital agency
              trusted by businesses worldwide. We blend technical expertise with creative thinking to build solutions
              that truly make a difference.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our philosophy is simple: deeply understand your business, design with purpose, and build with precision.
              We don't just write code — we solve problems and create lasting value.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900">Our mission</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower businesses with innovative, scalable, and human‑centered digital solutions that elevate their
              brand and accelerate growth — without compromising on quality or creativity.
            </p>
          </motion.div>
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats row with icons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-100"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="text-center min-w-[100px]"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}