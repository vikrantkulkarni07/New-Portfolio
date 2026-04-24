"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Wrench, Monitor, Rocket, Construction } from "lucide-react";

type Tag = "All" | "Hardware" | "Software";

interface Project {
  title: string;
  description: string;
  tech: string[];
  tags: Exclude<Tag, "All">[];
  links?: { github?: string; demo?: string };
  status?: "In Progress";
  emoji: string;
}

const projects: Project[] = [
  {
    title: "Tarang Setu",
    emoji: "📡",
    description: "Advanced communication and signal bridge system designed to enable reliable data transmission across hardware and software layers.",
    tech: ["Embedded C", "RF Modules", "Arduino", "Protocol Design"],
    tags: ["Hardware", "Software"],
  },
  {
    title: "Agriguard",
    emoji: "🌾",
    description: "Autonomous smart farming robot integrating sensors and actuators to monitor crop conditions, detect pests, and automate irrigation — a full robotics + agriculture innovation.",
    tech: ["Arduino", "IoT", "Sensors", "Robotics", "Python"],
    tags: ["Hardware"],
  },
  {
    title: "Smart Attendance Monitoring Platform",
    emoji: "🎓",
    description: "Dual-layer attendance system combining a software dashboard for real-time records and hardware integration (RFID/biometrics) for automated entry detection.",
    tech: ["Firebase", "React", "RFID", "Embedded C", "Node.js"],
    tags: ["Hardware", "Software"],
  },
  {
    title: "Line Follower Robot",
    emoji: "🤖",
    description: "Precision-engineered line-following robot using IR sensors and PID control for smooth, accurate path tracking on complex tracks.",
    tech: ["Arduino", "IR Sensors", "PID Control", "C++"],
    tags: ["Hardware"],
  },
  {
    title: "Robo Race Robot",
    emoji: "🏎️",
    description: "High-speed competition robot built for robo-racing events, optimised for speed, stability, and reliable remote control responsiveness.",
    tech: ["Arduino", "RF Remote", "Motor Driver", "C++"],
    tags: ["Hardware"],
  },
];

const filters: Tag[] = ["All", "Hardware", "Software"];

const tagColors: Record<Exclude<Tag, "All">, string> = {
  Hardware: "bg-primary/10 border-primary/30 text-purple-300",
  Software: "bg-accent/10 border-accent/30 text-cyan-300",
};

const tagIcon: Record<Exclude<Tag, "All">, React.ReactNode> = {
  Hardware: <Wrench size={11} />,
  Software: <Monitor size={11} />,
};

export default function Projects() {
  const [active, setActive] = useState<Tag>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active as Exclude<Tag, "All">));

  return (
    <section id="projects" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">What I&apos;ve Built</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border transition-all ${
                active === f
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-surface border-border text-slate-400 hover:text-white hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative premium-card p-8 flex flex-col inner-glow overflow-hidden"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.04) 0%, rgba(0,212,255,0.03) 100%)" }}
                />

                {/* In Progress badge */}
                {project.status === "In Progress" && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold px-2.5 py-1 rounded-full">
                    <Construction size={11} />
                    In Progress
                  </div>
                )}

                <div className="text-4xl mb-4">{project.emoji}</div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[tag]}`}>
                      {tagIcon[tag]} {tag}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-slate-500 bg-bg border border-border rounded px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
