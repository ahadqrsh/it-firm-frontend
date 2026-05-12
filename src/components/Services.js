"use client";

import { useRef, useEffect } from "react";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

import {
  Globe,
  Layout,
  BarChart3,
  Pencil,
  Smartphone,
  Database,
  ShoppingCart,
  Code2,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  const cardsRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // -----------------------------
  // GSAP ANIMATIONS
  // -----------------------------
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },

          delay: index * 0.08,
        }
      );
    });

    // Header Animation
    gsap.from(".services-heading", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".services-heading",
        start: "top 85%",
      },
    });
  }, []);

  // -----------------------------
  // SERVICES
  // -----------------------------
  const services = [
    {
      title: "Web Development",
      icon: Globe,
      description:
        "Custom websites and web apps built with modern technologies.",
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "UI/UX Design",
      icon: Layout,
      description:
        "Immersive user experiences crafted for engagement.",
      color: "from-violet-500 to-purple-500",
    },

    {
      title: "SEO & Marketing",
      icon: BarChart3,
      description:
        "Growth-focused digital marketing strategies.",
      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Graphics Design",
      icon: Pencil,
      description:
        "Creative branding and visual storytelling solutions.",
      color: "from-orange-500 to-red-500",
    },

    {
      title: "App Development",
      icon: Smartphone,
      description:
        "Scalable mobile applications with seamless UX.",
      color: "from-indigo-500 to-blue-500",
    },

    {
      title: "Software Solutions",
      icon: Database,
      description:
        "Powerful software systems tailored for businesses.",
      color: "from-yellow-500 to-amber-500",
    },

    {
      title: "E-Commerce",
      icon: ShoppingCart,
      description:
        "High-converting online stores built for growth.",
      color: "from-teal-500 to-green-500",
    },

    {
      title: "Cloud Infrastructure",
      icon: Code2,
      description:
        "Reliable cloud architecture for modern applications.",
      color: "from-slate-500 to-zinc-500",
    },
  ];

  // -----------------------------
  // PARALLAX EFFECT
  // -----------------------------
  const yOffsets = services.map((_, i) =>
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, -(25 + i * 4)]
    )
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#09090B] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Label */}
        <div className="services-heading flex items-center gap-4 mb-10">

          <span className="h-px w-14 bg-white/20" />

          <span className="text-sm tracking-[0.3em] uppercase text-zinc-400">
            What We Offer
          </span>

        </div>

        {/* Main Heading */}
        <h2 className="services-heading text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-8">

          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

            Premium Digital Solutions
            Built For Modern Brands

          </span>

        </h2>

        {/* Description */}
        <p className="services-heading text-zinc-400 text-lg leading-relaxed max-w-2xl mb-20">

          From strategy to execution,
          we create immersive digital experiences
          that help businesses scale and dominate online.

        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  y: yOffsets[index],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />

                {/* Icon */}
                <div
                  className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}
                >

                  <Icon className="h-6 w-6 text-white" />

                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">

                  {service.title}

                </h3>

                {/* Description */}
                <p className="relative z-10 text-zinc-400 leading-relaxed text-sm">

                  {service.description}

                </p>

                {/* Learn More */}
                <div className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition-all duration-300">

                  <span className="mr-2">
                    Learn more
                  </span>

                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}