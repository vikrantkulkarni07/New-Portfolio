"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-bg grid-bg"
    >
      <ParticleBackground />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/8 blur-[80px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/6 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left – text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
          >
            Vikrant Kulkarni
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg mb-4"
          >
            Building the Future with Hardware &amp; Software
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-accent text-xl font-semibold mb-8 h-8"
          >
            <TypeAnimation
              sequence={[
                "Embedded Systems", 1500,
                "IoT & Robotics", 1500,
                "AI / ML Engineer", 1500,
                "Full Stack Dev", 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="solid-btn px-8 py-3.5 rounded-xl font-bold text-base transition-transform"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-white font-bold px-8 py-3.5 rounded-xl text-base border border-border hover:border-primary/50 bg-surface hover:bg-surface2 transition-all hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            {[
              { icon: <SiGithub size={20} />, href: "https://github.com/vikrantkulkarni07", label: "GitHub" },
              { icon: <Mail size={20} />, href: "mailto:vikrant@example.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 transition-all hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right – profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-slow" />
            <div className="absolute -inset-4 rounded-full border border-accent/10" />
            {/* Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-border">
              <Image
                src="/profile.png"
                alt="Vikrant Kulkarni"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-surface2 border border-border px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-xl whitespace-nowrap"
            >
              ⚡ Electronics Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm"
      >
        <span>Scroll down</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
