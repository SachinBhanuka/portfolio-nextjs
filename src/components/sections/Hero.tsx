"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, MapPin, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e2a3a18_1px,transparent_1px),linear-gradient(to_bottom,#1e2a3a18_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to opportunities in Australia
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Sachin{" "}
        <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
          Keragala
        </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-slate-300 font-medium mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-Stack Developer
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MapPin size={14} className="text-accent" />
          Brisbane, Australia
        </motion.div>

        <motion.p
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Building scalable web applications with React, Next.js, TypeScript, and Node.js.
          Passionate about clean code, great user experiences, and continuous learning.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-accent text-navy-950 font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
          >
            View My Work
          </a>
          <a
            href="/Sachin_Keragala_Resume.pdf"
            download="Sachin_Keragala_Resume.pdf"
            className="flex items-center gap-2 px-7 py-3 border border-slate-600 text-slate-200 font-semibold rounded-xl hover:border-accent hover:text-accent transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/sachinkeragala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-lg text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sachinkeragala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-lg text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
