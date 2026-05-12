"use client";

import { useState, useRef, useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ExternalLink,
  Code2,
  TrendingUp,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  {
    title: "Fintech Dashboard",
    category: "Web",
    tags: ["React", "D3.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    color: "from-blue-500/20 to-cyan-500/20",
    gradient: "from-blue-500 to-cyan-500",
    result: "+45% User Engagement",
  },

  {
    title: "Eco Beauty Brand",
    category: "Design",
    tags: ["Figma", "Framer", "Illustrator"],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    color: "from-emerald-500/20 to-teal-500/20",
    gradient: "from-emerald-500 to-teal-500",
    result: "32% Lower Bounce Rate",
  },

  {
    title: "Tech Startup SEO",
    category: "SEO",
    tags: ["SEO", "Analytics", "Content"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    color: "from-purple-500/20 to-pink-500/20",
    gradient: "from-purple-500 to-pink-500",
    result: "+120% Organic Traffic",
  },

  {
    title: "Healthcare Portal",
    category: "Web",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    color: "from-indigo-500/20 to-blue-500/20",
    gradient: "from-indigo-500 to-blue-500",
    result: "99.9% Uptime",
  },

  {
    title: "Fashion E-Commerce",
    category: "Design",
    tags: ["UI/UX", "Shopify", "Mobile-first"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    color: "from-rose-500/20 to-orange-500/20",
    gradient: "from-rose-500 to-orange-500",
    result: "+78% Conversion Rate",
  },

  {
    title: "Local Business SEO",
    category: "SEO",
    tags: ["Local SEO", "Maps", "Reviews"],
    image:
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=1200&q=80",
    color: "from-yellow-500/20 to-amber-500/20",
    gradient: "from-yellow-500 to-amber-500",
    result: "#1 Rankings For 15+ Keywords",
  },
];

const categories = ["All", "Web", "Design", "SEO"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const cardsRef = useRef([]);

  // -----------------------------
  // FILTER PROJECTS
  // -----------------------------
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter(
          (p) => p.category === activeCategory
        );

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
          scale: 0.92,
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

    gsap.from(".portfolio-heading", {
      opacity: 0,
      y: 50,

      duration: 1.2,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".portfolio-heading",
        start: "top 85%",
      },
    });
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#09090B] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="portfolio-heading text-center mb-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">

            <Code2 className="w-4 h-4 text-cyan-400" />

            <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">
              Portfolio
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">

            Selected{" "}

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">

              Work

            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">

            Premium digital experiences crafted
            with strategy, creativity, and precision.

          </p>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-xl border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
              y: 30,
            }}

            transition={{
              duration: 0.5,
            }}

            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                ref={(el) =>
                  (cardsRef.current[idx] = el)
                }

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                transition={{
                  duration: 0.4,
                }}

                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
              >

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 z-0" />

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Result Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-medium flex items-center gap-2">

                      <TrendingUp className="w-4 h-4 text-cyan-300" />

                      {project.result}

                    </div>

                  </div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                    >
                      {project.category}
                    </span>

                  </div>

                </div>

                {/* Content */}
                <div className="relative z-10 p-6">

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">

                    {project.title}

                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* Learn More */}
                  <div className="flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition duration-300">

                    <span className="mr-2">
                      View Project
                    </span>

                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                  </div>

                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${project.gradient} transition-all duration-500`}
                />

              </motion.div>
            ))}

          </motion.div>

        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          className="text-center mt-20"
        >

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >

            Let's Build Something Great

            <ExternalLink className="w-4 h-4" />

          </a>

        </motion.div>
      </div>
    </section>
  );
}