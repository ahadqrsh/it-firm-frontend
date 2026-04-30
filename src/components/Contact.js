"use client";

import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { User, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobBlueY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const blobPurpleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const formCardY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="relative px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50/50 via-transparent to-transparent dark:from-neutral-900/30" />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={child} className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            Get In Touch
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div variants={child} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
                Let's work together
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
              Have a project in mind? We'd love to hear about it. 
              Send us a message and we'll get back to you within 24 hours.
            </p>
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <Mail className="w-5 h-5" />
                <span>hello@devagency.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={child} style={{ y: formCardY }} className="relative">
            {/* ⚠️ FIX: Changed <div> to <motion.div> */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-8 lg:p-10 rounded-3xl bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-neutral-900/5 dark:shadow-black/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ... form fields unchanged ... */}
                {/* Name field */}
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                    focusedField === "name" ? "text-blue-600 dark:text-blue-400" : "text-neutral-400 dark:text-neutral-500"
                  }`}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                  />
                </div>

                {/* Email field */}
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                    focusedField === "email" ? "text-blue-600 dark:text-blue-400" : "text-neutral-400 dark:text-neutral-500"
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                  />
                </div>

                {/* Message field */}
                <div className="relative">
                  <div className={`absolute left-4 top-5 transition-colors duration-200 ${
                    focusedField === "message" ? "text-blue-600 dark:text-blue-400" : "text-neutral-400 dark:text-neutral-500"
                  }`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="relative w-full py-4 px-6 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-medium overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-white/20"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-100 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Message sent successfully! We'll be in touch soon.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Parallax blobs */}
            <motion.div
              style={{ y: blobBlueY }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl -z-10"
            />
            <motion.div
              style={{ y: blobPurpleY }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}