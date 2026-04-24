"use client";
import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { SiGithub, SiLeetcode, SiHackerrank } from "react-icons/si";

const socials = [
  { icon: <SiGithub size={20} />, label: "GitHub", href: "https://github.com/vikrantkulkarni07" },
  { icon: <SiLeetcode size={20} />, label: "LeetCode", href: "https://leetcode.com/u/Vikrant_Kulkarni/" },
  { icon: <SiHackerrank size={20} />, label: "HackerRank", href: "https://www.hackerrank.com/profile/vikrant2007yt" },
  { icon: <Mail size={20} />, label: "Email", href: "mailto:vikrant@example.com" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS integration — add your credentials to .env.local
    // import emailjs from "@emailjs/browser";
    // await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);

    // Simulating for now (replace with real emailjs call above)
    setTimeout(() => {
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="section-heading">Contact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 premium-card p-8 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-white font-bold text-2xl mb-3">Let&apos;s Build Something Together</h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m open to internships, collaborations, and freelance projects. If you have a
                hardware/software project in mind, let&apos;s talk.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:vikrant@example.com" className="hover:text-accent transition-colors">
                  vikrant@example.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-400 text-sm mb-4 font-medium uppercase tracking-wide">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 bg-bg border border-border text-slate-300 hover:text-accent hover:border-accent/40 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  >
                    {icon} {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 premium-card p-8">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Vikrant Kulkarni", name: "from_name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", name: "reply_to" },
              ].map(({ id, label, type, placeholder, name }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
                    {label}
                  </label>
                  <input
                    id={id}
                    name={name}
                    type={type}
                    required
                    placeholder={placeholder}
                    className="w-full bg-surface2 border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Let's collaborate on..."
                  className="w-full bg-surface2 border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-surface2 border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full solid-btn py-4 rounded-xl flex items-center justify-center gap-2 font-bold disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <><CheckCircle size={18} /> Message Sent!</>
                ) : status === "error" ? (
                  <><AlertCircle size={18} /> Failed — Try Again</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
