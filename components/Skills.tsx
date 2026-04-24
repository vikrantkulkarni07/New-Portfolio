"use client";
import { motion } from "framer-motion";
import { SiC, SiCplusplus, SiPython, SiOpenjdk, SiJavascript, SiGit, SiFirebase, SiSupabase, SiAutocad } from "react-icons/si";
import { FaMicrochip, FaRobot } from "react-icons/fa";
import { Wifi, Cpu, Code2 } from "lucide-react";

interface SkillBarProps { name: string; level: number; delay: number; }

function SkillBar({ name, level, delay }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-accent font-semibold">{level}%</span>
      </div>
      <div className="skill-bar-track h-2">
        <motion.div
          className="skill-bar-fill h-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const programmingSkills = [
  { name: "C", level: 85 },
  { name: "C++", level: 80 },
  { name: "Python", level: 75 },
  { name: "Java", level: 65 },
];

const learningSkills = [
  { name: "DSA (Java)", level: 50 },
  { name: "JavaScript", level: 55 },
];

const toolIcons = [
  { icon: <SiGit size={22} />, name: "Git" },
  { icon: <Code2 size={22} />, name: "VS Code" },
  { icon: <SiFirebase size={22} />, name: "Firebase" },
  { icon: <SiSupabase size={22} />, name: "Supabase" },
  { icon: <SiAutocad size={22} />, name: "AutoCAD" },
  { icon: <SiPython size={22} />, name: "PyCharm" },
];

const hwSkills = [
  { icon: <FaMicrochip size={20} />, name: "Embedded Systems" },
  { icon: <Wifi size={20} />, name: "IoT" },
  { icon: <FaRobot size={20} />, name: "Robotics" },
  { icon: <Cpu size={20} />, name: "Sensors & Electronics" },
];

const langIcons = [
  { icon: <SiC size={28} />, name: "C" },
  { icon: <SiCplusplus size={28} />, name: "C++" },
  { icon: <SiPython size={28} />, name: "Python" },
  { icon: <SiOpenjdk size={28} />, name: "Java" },
  { icon: <SiJavascript size={28} />, name: "JavaScript" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Technical Stack</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            {/* Programming */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Programming Languages
              </h3>
              <div className="space-y-4">
                {programmingSkills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="premium-card p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
                Currently Learning
              </h3>
              <div className="space-y-4">
                {learningSkills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="premium-card p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Hardware & Embedded
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {hwSkills.map(({ icon, name }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.04, borderColor: "rgba(108,99,255,0.5)" }}
                    className="flex items-center gap-3 bg-surface2 border border-border rounded-xl p-3.5 text-slate-300 cursor-default transition-all"
                  >
                    <span className="text-primary">{icon}</span>
                    <span className="text-sm font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Language icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="premium-card p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                Languages at a Glance
              </h3>
              <div className="flex flex-wrap gap-4">
                {langIcons.map(({ icon, name }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ scale: 1.15, color: "#00D4FF" }}
                    className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-accent transition-colors cursor-default"
                    title={name}
                  >
                    {icon}
                    <span className="text-xs font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="premium-card p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolIcons.map(({ icon, name }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-surface2 border border-border rounded-lg px-3 py-2 text-slate-300 hover:text-accent hover:border-accent/40 text-sm font-medium transition-all cursor-default"
                  >
                    {icon} {name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
