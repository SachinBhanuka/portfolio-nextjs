"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    year: "2021 – 2024",
    title: "Bachelor of Information Technology",
    org: "University of Melbourne",
    desc: "Focused on software engineering, database systems, and web development. Graduated with distinction.",
    type: "education",
  },
  {
    icon: Award,
    year: "2024",
    title: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    desc: "Certified in cloud fundamentals, AWS services, security, and architecture best practices.",
    type: "cert",
  },
  {
    icon: BookOpen,
    year: "2023",
    title: "Full-Stack Web Development Bootcamp",
    org: "Self-directed / Online",
    desc: "Completed intensive training in React, Node.js, PostgreSQL, and modern DevOps workflows.",
    type: "training",
  },
  {
    icon: Award,
    year: "2023",
    title: "Meta Front-End Developer Certificate",
    org: "Coursera / Meta",
    desc: "Professional certificate covering React, JavaScript, UX principles, and front-end development.",
    type: "cert",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-navy-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 w-10 h-10 bg-navy-800 border border-slate-700/60 rounded-full flex items-center justify-center">
                  <item.icon size={16} className="text-accent" />
                </div>

                <div className="bg-navy-900/60 border border-slate-800/60 rounded-xl p-5 hover:border-accent/20 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-accent/70 bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                      {item.year}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        item.type === "education"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : item.type === "cert"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      {item.type === "education"
                        ? "Education"
                        : item.type === "cert"
                        ? "Certification"
                        : "Training"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-base mb-0.5">{item.title}</h3>
                  <p className="text-accent/80 text-sm font-medium mb-2">{item.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
