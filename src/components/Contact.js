"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1];

/* -------------------------------------------------- */
/* Edit everything about your agency here             */
/* -------------------------------------------------- */
const CONTACT = {
  email: "hello@devbybit.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // country code + number, digits only
  location: "Mumbai, India",
  hours: "Mon – Fri / 9AM – 6PM IST",
  acceptingWork: true,
};

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi DevByBit — I'd like to discuss a project."
)}`;

const MAIL_URL = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Project enquiry"
)}&body=${encodeURIComponent(
  "Hi DevByBit,\n\nHere's what I'm looking to build:\n\n\nTimeline:\nBudget range:\n\nThanks,"
)}`;

const contactInfo = [
  { icon: Mail, title: "Email", details: CONTACT.email, href: MAIL_URL },
  {
    icon: Phone,
    title: "Phone",
    details: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, title: "Location", details: CONTACT.location },
  { icon: Clock, title: "Working Hours", details: CONTACT.hours },
];

const steps = [
  {
    n: "01",
    title: "You reach out",
    desc: "A message on WhatsApp or email — whatever's easier.",
  },
  {
    n: "02",
    title: "We reply within 24 hours",
    desc: "With questions, scope thoughts, and a rough timeline.",
  },
  {
    n: "03",
    title: "We scope and start",
    desc: "A clear proposal with fixed milestones, then we build.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const VIEWPORT = { once: true, amount: 0.2 };

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#09090B] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* -------------------------------------------------- */}
      {/* AMBIENT BACKGROUND                                 */}
      {/* -------------------------------------------------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, #000 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, #000 20%, transparent 100%)",
          }}
        />
        <div className="absolute -left-1/4 -top-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[130px] sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute -bottom-32 -right-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[130px] sm:h-[34rem] sm:w-[34rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* ============================================ */}
          {/* LEFT                                          */}
          {/* ============================================ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:sticky lg:top-28"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5 backdrop-blur-xl"
            >
              <Mail className="h-3.5 w-3.5 text-cyan-300" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:mt-7 sm:text-4xl md:text-5xl xl:text-6xl"
            >
              Let&apos;s Build{" "}
              {/* pb/-mb keeps the 'g' descender from clipping under bg-clip-text */}
              <span className="-mb-[0.16em] inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text pb-[0.16em] text-transparent">
                Something Great
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg"
            >
              We create premium digital experiences for startups, brands, and
              modern businesses.
            </motion.p>

            {/* Contact cards */}
            <motion.div variants={stagger} className="mt-10 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? motion.a : motion.div;

                return (
                  <Wrapper
                    key={item.title}
                    {...(item.href ? { href: item.href } : {})}
                    variants={fadeUp}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl transition-colors duration-500 hover:border-cyan-400/30"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/20">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div className="relative z-10 min-w-0">
                      <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        {item.title}
                      </h3>
                      <p className="mt-1 truncate text-sm font-medium text-white sm:text-base">
                        {item.details}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight className="relative z-10 ml-auto h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover:text-cyan-300" />
                    )}
                  </Wrapper>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ============================================ */}
          {/* RIGHT — direct contact, no form              */}
          {/* ============================================ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 xl:p-10"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05]"
            />
            <div
              aria-hidden
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            />

            <div className="relative z-10">
              {/* Availability */}
              {CONTACT.acceptingWork && (
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                    Taking new projects
                  </span>
                </div>
              )}

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start Your Project
              </h3>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                Skip the form. Message us directly and you&apos;ll talk to the
                people who&apos;ll actually build it.
              </p>

              {/* Primary actions */}
              <div className="mt-7 space-y-3">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] sm:text-base"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>

                <motion.a
                  href={MAIL_URL}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium text-zinc-200 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] sm:text-base"
                >
                  <Mail className="h-5 w-5 text-cyan-300" />
                  Send an Email
                </motion.a>

                {/* Copy address — for people who'd rather use their own client */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-2 text-xs text-zinc-500 transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      Copied to clipboard
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      or copy {CONTACT.email}
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div
                aria-hidden
                className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              {/* What happens next */}
              <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                What happens next
              </h4>

              <ol className="mt-5 space-y-5">
                {steps.map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 bg-gradient-to-b from-cyan-300 to-blue-500 bg-clip-text font-mono text-xs font-bold tabular-nums text-transparent">
                      {step.n}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">
                        {step.title}
                      </p>
                      <p className="mt-1 text-pretty text-xs leading-relaxed text-zinc-500 sm:text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}