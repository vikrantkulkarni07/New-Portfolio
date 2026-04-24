"use client";
import { motion, Variants } from "framer-motion";
import { Cpu, Globe, Zap } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "2", label: "Clubs Active" },
  { value: "3+", label: "Years Experience" },
];

const highlights = [
  { icon: <Cpu size={20} />, title: "Hardware First", desc: "Embedded Systems, IoT, Robotics — building at the silicon level." },
  { icon: <Globe size={20} />, title: "Full Stack Ready", desc: "From REST APIs to responsive UIs, I ship complete products." },
  { icon: <Zap size={20} />, title: "Problem Solver", desc: "I turn complex engineering challenges into robust, real-world solutions." },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Who I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – text */}
          <div className="space-y-6">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="text-slate-300 text-lg leading-relaxed"
            >
              I&apos;m an{" "}
              <span className="text-white font-semibold">Electronics & Telecommunication Engineering</span>{" "}
              student passionate about building real-world systems that tightly integrate hardware and software.
            </motion.p>

            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={2}
              className="text-slate-400 leading-relaxed"
            >
              My core focus is <span className="text-accent font-medium">Embedded Systems</span>,{" "}
              <span className="text-accent font-medium">IoT & Robotics</span>, and{" "}
              <span className="text-accent font-medium">Electronics prototyping</span> — alongside Full Stack Development
              and AI/ML exploration.
            </motion.p>

            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={3}
              className="text-slate-400 leading-relaxed"
            >
              I actively contribute to technical communities like{" "}
              <span className="text-primary font-medium">EmbedEdge</span> and{" "}
              <span className="text-primary font-medium">IETE</span>, where I collaborate on real-world engineering
              projects and workshops.
            </motion.p>

            <motion.blockquote
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={4}
              className="border-l-4 border-primary pl-6 py-2"
            >
              <p className="text-xl text-white font-semibold italic">
                "Learning by building real products, not just studying theory."
              </p>
            </motion.blockquote>
          </div>

          {/* Right – stats + highlight cards */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="premium-card p-6 text-center flex flex-col justify-center">
                  <div className="text-4xl font-display font-black gradient-text mb-2">{value}</div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i + 2}
                  whileHover={{ x: 6 }}
                  className="premium-card p-8 flex items-start gap-5 group"
                >
                  <div className="mt-1 p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{title}</div>
                    <div className="text-slate-400 text-sm">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
