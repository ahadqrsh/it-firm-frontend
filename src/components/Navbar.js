"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo with subtle gradient */}
        <a
          href="#"
          className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent"
        >
          DevAgency
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors py-1"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}