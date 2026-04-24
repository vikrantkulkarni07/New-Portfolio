"use client";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="bg-bg border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-black text-lg gradient-text">VK</span>
          <span className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vikrant Kulkarni. Built with Next.js & Framer Motion.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vikrantkulkarni07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </a>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl bg-surface2 border border-border flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
