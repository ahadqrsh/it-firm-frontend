"use client";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  motion,
} from "framer-motion";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  const formRef = useRef(null);

  const cardsRef = useRef([]);

  const [status, setStatus] =
    useState("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // -----------------------------
  // GSAP ANIMATIONS
  // -----------------------------
  useEffect(() => {
    gsap.from(".contact-heading", {
      opacity: 0,
      y: 80,

      duration: 1.2,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".contact-heading",
        start: "top 85%",
      },
    });

    gsap.from(formRef.current, {
      opacity: 0,
      x: 80,

      duration: 1.3,
      ease: "power4.out",

      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,

        duration: 1,
        ease: "power4.out",

        delay: index * 0.1,

        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, []);

  // -----------------------------
  // FORM
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@devagency.com",
    },

    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
    },

    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, India",
    },

    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri / 9AM - 6PM",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#09090B] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

  <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-start">

    {/* LEFT SIDE */}
    <div className="contact-heading lg:sticky lg:top-32">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">

        <Mail className="w-4 h-4 text-cyan-400" />

        <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">
          Get In Touch
        </span>

      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] text-white">

        Let's Build{" "}

        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">

          Something Great

        </span>

      </h2>

      {/* Description */}
      <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">

        We create premium digital experiences
        for startups, brands, and modern businesses.

      </p>

      {/* Contact Cards */}
      <div className="mt-10 space-y-4">

        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              ref={(el) =>
                (cardsRef.current[index] = el)
              }

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

                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">

                    {item.title}

                  </h3>

                  <p className="text-white font-medium text-sm md:text-base">

                    {item.details}

                  </p>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>

    {/* RIGHT SIDE FORM */}
    <motion.div
      ref={formRef}

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

      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 xl:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 space-y-5"
      >

        {/* Heading */}
        <div className="mb-6">

          <h3 className="text-2xl font-semibold text-white mb-2">
            Start Your Project
          </h3>

          <p className="text-zinc-400 text-sm">
            Tell us about your idea and let's make it real.
          </p>

        </div>

        {/* Name */}
        <div className="relative">

          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none focus:border-cyan-400 transition-all duration-300"
          />

        </div>

        {/* Email */}
        <div className="relative">

          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none focus:border-cyan-400 transition-all duration-300"
          />

        </div>

        {/* Message */}
        <div className="relative">

          <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-zinc-500" />

          <textarea
            rows={6}
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl pt-4 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none resize-none focus:border-cyan-400 transition-all duration-300"
          />

        </div>

        {/* Submit */}
        <motion.button
          whileHover={{
            scale: 1.01,
            boxShadow:
              "0 0 40px rgba(34,211,238,0.25)",
          }}

          whileTap={{
            scale: 0.98,
          }}

          type="submit"
          className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-white font-medium shadow-lg transition-all duration-300"
        >

          <span className="relative z-10 flex items-center justify-center gap-2">

            {status === "loading"
              ? "Sending..."
              : status === "success"
              ? "Message Sent"
              : "Send Message"}

            {status === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            )}

          </span>

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

        </motion.button>

      </form>

    </motion.div>

  </div>
</div>
    </section>
  );
}