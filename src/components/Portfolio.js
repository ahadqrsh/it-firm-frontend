"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Palette, Search, TrendingUp } from "lucide-react";

const allProjects = [
  {
    title: "Fintech Dashboard",
    category: "Web",
    tags: ["React", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
    gradient: "from-blue-600 to-cyan-600",
    result: "+45% user engagement",
  },
  {
    title: "Eco Beauty Brand",
    category: "Design",
    tags: ["Figma", "Framer", "Illustrator"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
    gradient: "from-emerald-600 to-teal-600",
    result: "Reduced bounce rate by 32%",
  },
  {
    title: "Tech Startup SEO",
    category: "SEO",
    tags: ["SEO", "Analytics", "Content"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
    gradient: "from-purple-600 to-pink-600",
    result: "+120% organic traffic",
  },
  {
    title: "Healthcare Portal",
    category: "Web",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    color: "from-indigo-500/20 to-blue-500/20",
    gradient: "from-indigo-600 to-blue-600",
    result: "HIPAA compliant, 99.9% uptime",
  },
  {
    title: "Fashion E‑commerce",
    category: "Design",
    tags: ["UI/UX", "Shopify", "Mobile-first"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    color: "from-rose-500/20 to-orange-500/20",
    gradient: "from-rose-600 to-orange-600",
    result: "+78% conversion rate",
  },
  {
    title: "Local Business SEO",
    category: "SEO",
    tags: ["Local SEO", "Maps", "Reviews"],
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=600&h=400&fit=crop",
    color: "from-yellow-500/20 to-amber-500/20",
    gradient: "from-yellow-600 to-amber-600",
    result: "Ranked #1 for 15+ keywords",
  },
];

const categories = ["All", "Web", "Design", "SEO"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="portfolio" className="relative px-6 py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            <Code2 className="w-3.5 h-3.5" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-3">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Here are some of our best projects that showcase our expertise.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={child}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  {/* Hover overlay with result badge */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900 shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {project.result}
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white shadow-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-100 rounded-md text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative line on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            View all projects
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}