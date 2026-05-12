"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // -----------------------------
  // NAV LINKS
  // -----------------------------
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  // -----------------------------
  // CONTACT INFO
  // -----------------------------
  const contactInfo = [
    {
      icon: Mail,
      text: "hello@devagency.com",
      link: "mailto:hello@devagency.com",
    },

    {
      icon: Phone,
      text: "+91 98765 43210",
      link: "tel:+919876543210",
    },

    {
      icon: MapPin,
      text: "Mumbai, India",
      link: null,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090B] px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr_1fr] gap-14">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            viewport={{
              once: true,
            }}
          >

            {/* Logo */}
            <a
              href="#"
              className="inline-block text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
            >
              DevAgency
            </a>

            {/* Description */}
            <p className="mt-5 text-zinc-400 leading-relaxed max-w-md">

              We craft immersive digital experiences
              with premium design, scalable development,
              and growth-focused strategies.

            </p>

            {/* CTA */}
            <motion.a
              href="#contact"

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="group inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >

              Start Your Project

              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />

            </motion.a>

          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
              delay: 0.1,
            }}

            viewport={{
              once: true,
            }}
          >

            <h3 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">

              Navigation

            </h3>

            <ul className="space-y-4">

              {navLinks.map((link) => (
                <li key={link.name}>

                  <motion.a
                    href={link.href}

                    whileHover={{
                      x: 5,
                    }}

                    className="group inline-flex items-center text-zinc-400 hover:text-white transition-all duration-300"
                  >

                    <span>
                      {link.name}
                    </span>

                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  </motion.a>

                </li>
              ))}

            </ul>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
              delay: 0.2,
            }}

            viewport={{
              once: true,
            }}
          >

            <h3 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">

              Contact

            </h3>

            <div className="space-y-4">

              {contactInfo.map((item, idx) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}

                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4 transition-all duration-500"
                  >

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />

                    <div className="relative z-10 flex items-center gap-4">

                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">

                        <Icon className="w-5 h-5 text-white" />

                      </div>

                      {/* Text */}
                      <div>

                        <p className="text-white font-medium text-sm md:text-base">

                          {item.text}

                        </p>

                      </div>

                    </div>

                  </motion.div>
                );

                return item.link ? (
                  <a
                    key={idx}
                    href={item.link}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={idx}>
                    {content}
                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          transition={{
            duration: 1,
            delay: 0.3,
          }}

          viewport={{
            once: true,
          }}

          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5"
        >

          {/* Copyright */}
          <p className="text-zinc-500 text-sm text-center md:text-left">

            © {currentYear} DevAgency.
            All rights reserved.

          </p>

          {/* Extra Text */}
          <p className="text-zinc-600 text-sm text-center md:text-right">

            Crafted with precision & modern technologies.

          </p>

        </motion.div>

      </div>
    </footer>
  );
}