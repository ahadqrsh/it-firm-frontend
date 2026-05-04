"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Only existing routes from your website
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@devagency.com", link: "mailto:hello@devagency.com" },
    { icon: Phone, text: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", link: null },
  ];

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative px-6 py-12 border-t border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand column */}
          <motion.div variants={child} className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              DevAgency
            </a>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto md:mx-0">
              Architecting the future with custom software solutions. We transform complex challenges into seamless digital experiences.
            </p>
          </motion.div>

          {/* Company links – only existing routes */}
          <motion.div variants={child} className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect column */}
          <motion.div variants={child} className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">CONNECT</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="break-words">{item.text}</span>
                  </div>
                );
                return item.link ? (
                  <li key={idx}>
                    <a href={item.link} className="block hover:no-underline">
                      {content}
                    </a>
                  </li>
                ) : (
                  <li key={idx}>{content}</li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Copyright bar */}
        <motion.div
          variants={child}
          className="mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-400"
        >
          © {currentYear} DevAgency. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}