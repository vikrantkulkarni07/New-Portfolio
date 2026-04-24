"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaRobot } from "react-icons/fa";
import { Wifi, Eye, Activity } from "lucide-react";
import { BsKeyboard } from "react-icons/bs";

interface HwProject {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
}

const hwProjects: HwProject[] = [
  {
    title: "Obstacle Avoider",
    description: "A 4-wheel drive autonomous robot that detects and avoids physical obstacles in real-time using ultrasonic sensors.",
    icon: <FaRobot size={28} />,
    tags: ["Arduino", "Ultrasonic", "Autonomous"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Patient Monitoring",
    description: "Remote patient monitoring system transmitting vital stats (heart rate, SpO2, temperature) to the cloud for real-time analysis.",
    icon: <Activity size={28} />,
    tags: ["IoT", "Sensors", "Cloud", "Firebase"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Radar Visualization",
    description: "Real-time environment mapping using servo-mounted ultrasonic sensor with Processing IDE visualization — a 2D radar display.",
    icon: <Eye size={28} />,
    tags: ["Arduino", "Processing IDE", "Servo", "Ultrasonic"],
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "Keypad Lock",
    description: "Password-protected entry system with servo actuation, LCD feedback, and buzzer alerts for secure access control.",
    icon: <BsKeyboard size={28} />,
    tags: ["Arduino", "Servo", "LCD", "Security"],
    color: "from-orange-500/20 to-orange-500/5",
  },
];

export default function HardwareProjects() {
  return (
    <section id="hardware" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Arduino & IoT</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              <span className="section-heading">Mini Hardware Projects</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg">
              Hands-on embedded systems and IoT builds — real hardware, real problems, real solutions.
            </p>
          </div>
          <a
            href="https://vikrantkulkarni07.github.io/mini-projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 solid-btn font-semibold px-6 py-3 rounded-xl transition-transform hover:scale-105 self-start lg:self-auto flex-shrink-0"
          >
            <FaMicrochip size={16} />
            View Full Portfolio
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {hwProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group premium-card p-8 cursor-default inner-glow flex flex-col"
            >
              {/* Icon block */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                {p.icon}
              </div>

              <h3 className="text-white font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arduino badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3 items-center"
        >
          <span className="text-slate-500 text-sm">Built with:</span>
          {["Arduino Uno", "ESP8266", "ESP32", "NodeMCU", "Raspberry Pi", "Processing IDE"].map((chip) => (
            <span key={chip} className="flex items-center gap-1.5 text-xs text-slate-400 bg-surface2 border border-border rounded-full px-3 py-1">
              <FaMicrochip size={12} className="text-primary" />
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
