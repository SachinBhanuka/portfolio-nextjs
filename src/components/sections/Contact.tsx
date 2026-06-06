"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Wire up to your preferred email service (EmailJS, Formspree, etc.)
    // Example with Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(formData) })
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            I&apos;m currently available for graduate developer, React, and full-stack roles in Australia.
            Reach out — I&apos;d love to chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 bg-navy-900/60 border border-slate-800/60 rounded-xl">
              <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Email</p>
                <a href="mailto:sachin.keragala@email.com" className="text-slate-200 hover:text-accent transition-colors">
                  sachin.keragala@email.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-navy-900/60 border border-slate-800/60 rounded-xl">
              <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Location</p>
                <p className="text-slate-200">Melbourne, Australia</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/sachinkeragala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-navy-900/60 border border-slate-800/60 rounded-xl text-slate-300 hover:text-accent hover:border-accent/30 transition-all text-sm"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/sachinkeragala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-navy-900/60 border border-slate-800/60 rounded-xl text-slate-300 hover:text-accent hover:border-accent/30 transition-all text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="text-sm text-slate-400 font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 bg-navy-900/60 border border-slate-700/60 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 bg-navy-900/60 border border-slate-700/60 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 font-medium mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                className="w-full px-4 py-3 bg-navy-900/60 border border-slate-700/60 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-navy-950 font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-60 transition-all"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Try emailing me directly.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
