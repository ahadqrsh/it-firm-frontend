"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // -----------------------------
  // LENIS SMOOTH SCROLL
  // -----------------------------
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // -----------------------------
  // NAVBAR SCROLL EFFECT
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Services", "Portfolio", "Contact"];

  // -----------------------------
  // SCROLL TO SECTION
  // -----------------------------
  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-5"
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-5xl translate-y-0"
              : "max-w-6xl translate-y-2"
          }`}
        >
          {/* Navbar Container */}
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-500/10 before:to-blue-500/10 before:blur-xl before:-z-10 px-4 py-2 sm:px-6">

            {/* Main Navbar */}
            <div className="flex justify-between items-center">

              {/* Logo */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#")}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
              >
                DevAgency
              </motion.button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <motion.button
                    key={link}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      scrollToSection(`#${link.toLowerCase()}`)
                    }
                    className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
                  >
                    {link}
                  </motion.button>
                ))}

                {/* CTA Button */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 30px rgba(34,211,238,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("#contact")}
                  className="ml-3 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full text-zinc-300 hover:bg-white/5 transition-all duration-300"
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pt-4 border-t border-white/10 overflow-hidden"
                >
                  <div className="flex flex-col space-y-2 pb-3">

                    {navLinks.map((link) => (
                      <motion.button
                        key={link}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                          scrollToSection(`#${link.toLowerCase()}`)
                        }
                        className="block text-left px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                      >
                        {link}
                      </motion.button>
                    ))}

                    {/* Mobile CTA */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection("#contact")}
                      className="mt-2 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Get Started
                    </motion.button>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20 sm:h-24" />
    </>
  );
}