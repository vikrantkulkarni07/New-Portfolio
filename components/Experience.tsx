"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaUsers, FaCalendarAlt } from "react-icons/fa";

interface Experience {
  role: string;
  org: string;
  period: string;
  icon: React.ReactNode;
  iconColor: string;
  bullets: string[];
  keywords: string[];
}

const experiences: Experience[] = [
  {
    role: "Tech Team Member",
    org: "EmbedEdge Club — Dept. of Electronics & Telecommunication",
    period: "2024 – Present",
    icon: <FaMicrochip size={20} />,
    iconColor: "text-primary bg-primary/15",
    bullets: [
      "Worked on embedded systems and electronics-based projects.",
      "Contributed to technical development and innovation activities.",
      "Collaborated with team members on real-world hardware implementations.",
    ],
    keywords: ["Embedded Systems", "Hardware Projects", "Team Collaboration"],
  },
  {
    role: "Tech Team Member",
    org: "IETE Club — Institution of Electronics and Telecommunication Engineers",
    period: "2024 – Present",
    icon: <FaUsers size={20} />,
    iconColor: "text-accent bg-accent/15",
    bullets: [
      "Active involvement in electronics and communication-related activities.",
      "Participated in technical discussions, projects, and workshops.",
      "Strengthened practical engineering knowledge through hands-on sessions.",
    ],
    keywords: ["Electronics", "Communication", "Team Collaboration"],
  },
  {
    role: "Volunteer",
    org: "Workshops, Competitions & Technical Events",
    period: "2023 – Present",
    icon: <FaCalendarAlt size={20} />,
    iconColor: "text-orange-400 bg-orange-400/15",
    bullets: [
      "Volunteered in multiple technical workshops and competitions.",
      "Assisted in organizing and managing events at college and inter-college levels.",
      "Gained experience in teamwork, coordination, and technical execution.",
    ],
    keywords: ["Event Management", "Technical Workshops", "Leadership"],
  },
];

function highlight(text: string, keywords: string[]) {
  let result = text;
  keywords.forEach((kw) => {
    result = result.replace(
      new RegExp(`(${kw})`, "gi"),
      `<span class="text-accent font-semibold">$1</span>`
    );
  });
  return result;
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 md:gap-10"
              >
                {/* Icon dot */}
                <div className="hidden md:flex flex-shrink-0 flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-xl ${exp.iconColor} flex items-center justify-center flex-shrink-0 border border-white/10 z-10`}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  className="flex-1 premium-card p-8 inner-glow"
                >
                  {/* Mobile icon */}
                  <div className={`md:hidden w-12 h-12 rounded-xl ${exp.iconColor} flex items-center justify-center mb-4`}>
                    {exp.icon}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-slate-400 text-sm mt-0.5">{exp.org}</p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-slate-400 text-sm leading-relaxed flex gap-2"
                        dangerouslySetInnerHTML={{ __html: `<span class="text-primary mt-1 flex-shrink-0">▸</span> ${highlight(b, exp.keywords)}` }}
                      />
                    ))}
                  </ul>

                  {/* Keyword tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.keywords.map((k) => (
                      <span key={k} className="tag-pill">{k}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
