"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Globe, Layout, BarChart3, Pencil, Smartphone, Database, ShoppingCart, Code2 } from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const services = [
    { title: "Web Development", icon: Globe, description: "Custom websites and web apps built with modern technology.", color: "from-blue-500 to-cyan-500" },
    { title: "UI/UX Design", icon: Layout, description: "Designing immersive experiences that captivate users.", color: "from-purple-500 to-pink-500" },
    { title: "SEO & Digital Marketing", icon: BarChart3, description: "Boosting brand awareness with targeted SEO.", color: "from-green-500 to-emerald-500" },
    { title: "Graphics Design", icon: Pencil, description: "Empowering businesses through visually striking graphics.", color: "from-orange-500 to-red-500" },
    { title: "App Development", icon: Smartphone, description: "Dynamic app development and reliable support.", color: "from-indigo-500 to-blue-500" },
    { title: "Software Development", icon: Database, description: "Innovative software solutions driving business success.", color: "from-yellow-500 to-amber-500" },
    { title: "E-commerce Solutions", icon: ShoppingCart, description: "Powerful online stores that convert visitors.", color: "from-teal-500 to-green-500" },
    { title: "Cloud Solutions", icon: Code2, description: "Scalable cloud infrastructure for modern applications.", color: "from-slate-500 to-gray-500" },
  ];

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };
  const yOffsets = services.map((_, i) => useTransform(scrollYProgress, [0, 1], [0, -(20 + i * 3)]));

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative px-6 py-24 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={child} className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-slate-300" />
          <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">What We Offer</span>
        </motion.div>
        <motion.h2 variants={child} className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Comprehensive digital solutions for your business growth
          </span>
        </motion.h2>
        <motion.p variants={child} className="text-lg text-slate-600 mb-16 max-w-2xl">
          From web development to digital marketing, we offer a full suite of services to help your business thrive online.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={child}
                style={{ y: yOffsets[index] }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`mb-5 w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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