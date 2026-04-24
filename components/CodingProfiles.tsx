"use client";
import { motion } from "framer-motion";
import { SiGithub, SiLeetcode, SiHackerrank } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    icon: <SiGithub size={36} />,
    name: "GitHub",
    handle: "@vikrantkulkarni07",
    url: "https://github.com/vikrantkulkarni07",
    description: "Embedded systems, IoT builds, robotics code, and full-stack projects — all open source.",
    color: "hover:border-slate-400/60",
    iconColor: "text-slate-300",
    stats: [
      { label: "Repos", value: "20+" },
      { label: "Focus", value: "Hardware" },
    ],
    badge: "bg-slate-800 text-slate-300 border-slate-600",
  },
  {
    icon: <SiLeetcode size={36} />,
    name: "LeetCode",
    handle: "@Vikrant_Kulkarni",
    url: "https://leetcode.com/u/Vikrant_Kulkarni/",
    description: "Actively practicing DSA in Java — building algorithmic thinking to complement hardware skills.",
    color: "hover:border-yellow-500/60",
    iconColor: "text-yellow-400",
    stats: [
      { label: "Language", value: "Java" },
      { label: "Focus", value: "DSA" },
    ],
    badge: "bg-yellow-900/30 text-yellow-300 border-yellow-600/30",
  },
  {
    icon: <SiHackerrank size={36} />,
    name: "HackerRank",
    handle: "@vikrant2007yt",
    url: "https://www.hackerrank.com/profile/vikrant2007yt",
    description: "Problem solving and skill certifications across Python, C++, and Java domains.",
    color: "hover:border-green-500/60",
    iconColor: "text-green-400",
    stats: [
      { label: "Platform", value: "HackerRank" },
      { label: "Focus", value: "Problem Solving" },
    ],
    badge: "bg-green-900/30 text-green-300 border-green-600/30",
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Online Presence</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Coding Profiles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group block bg-surface2 border border-border/50 ${p.color} rounded-2xl p-7 transition-all shadow-xl`}
            >
              <div className={`mb-5 ${p.iconColor} transition-transform group-hover:scale-110`}>
                {p.icon}
              </div>

              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-white font-bold text-xl">{p.name}</h3>
                <ExternalLink size={16} className="text-slate-500 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>

              <p className={`text-xs font-mono mb-4 inline-block px-2 py-0.5 rounded border ${p.badge}`}>
                {p.handle}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="flex gap-3">
                {p.stats.map(({ label, value }) => (
                  <div key={label} className="flex-1 bg-bg border border-border rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm">{value}</div>
                    <div className="text-slate-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
