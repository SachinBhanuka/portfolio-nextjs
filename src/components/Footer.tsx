"use client";

import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="text-white font-bold text-lg mb-1">
            Sachin Keragala<span className="text-accent">.</span>
          </div>
          <p className="text-slate-500 text-sm">
            Full-Stack Developer — Brisbane, Australia
          </p>
          <p className="text-slate-600 text-xs mt-1">
            &copy; {year} Sachin Keragala. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SachinBhanuka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-lg text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/sachin-keragalage-don-34aa26132"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-lg text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:keragalasachin@gmail.com"
            className="p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-lg text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="/Sachin_Keragala_Resume.pdf"
            download="Sachin_Keragala_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-lg text-xs font-medium hover:bg-accent hover:text-navy-950 transition-all"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
