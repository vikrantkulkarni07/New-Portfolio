"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    emoji: "🥈",
    title: "1st Runner-Up",
    event: "Toycathon 2026",
    description: "Secured 1st Runner-Up position in the national-level Toycathon 2026 competition, showcasing an innovative hardware-software toy concept.",
    color: "border-slate-400/40 hover:border-slate-400",
    glow: "0 0 30px rgba(148,163,184,0.15)",
    badge: "bg-slate-400/10 text-slate-300 border-slate-400/20",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Milestones</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-xl">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="premium-card p-8 cursor-default flex flex-col justify-center inner-glow text-center items-center"
            >
              <div className="text-6xl mb-5">{a.emoji}</div>
              <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${a.badge} mb-3`}>
                {a.event}
              </div>
              <h3 className="text-white font-display font-black text-2xl mb-3">{a.title}</h3>
              <p className="text-slate-400 leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>

        {/* More coming badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="h-px flex-1 max-w-xs bg-border" />
          <span className="text-slate-500 text-sm font-medium">More coming soon ✨</span>
          <div className="h-px flex-1 max-w-xs bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
