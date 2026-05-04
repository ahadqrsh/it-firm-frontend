"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Services", "Portfolio", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-5"
      >
        <div className={`mx-auto transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-6xl"
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-full shadow-lg border border-slate-200 px-4 py-2 sm:px-6">
            <div className="flex justify-between items-center">
              <a href="#" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                DevAgency
              </a>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition"
                  >
                    {link}
                  </a>
                ))}
                
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100 transition"
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 pt-2 border-t border-slate-100"
                >
                  <div className="flex flex-col space-y-3 pb-3">
                    {navLinks.map((link) => (
                      <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl"
                      >
                        {link}
                      </a>
                    ))}
                   
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
      <div className="h-20 sm:h-24" />
    </>
  );
}