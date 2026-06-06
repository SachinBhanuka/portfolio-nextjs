"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Heart } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I believe readable, maintainable code is the foundation of every great product.",
  },
  {
    icon: Briefcase,
    title: "Problem Solver",
    desc: "Breaking down complex problems into elegant, scalable solutions is what drives me.",
  },
  {
    icon: Heart,
    title: "User-First",
    desc: "Great software earns trust by putting the user's experience at the center of every decision.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-slate-300 leading-relaxed"
          >
            <p>
              I&apos;m a passionate Full-Stack Developer based in Melbourne, Australia, with a strong
              foundation in building modern web applications. I specialize in React and Next.js on
              the frontend, paired with Node.js and PostgreSQL on the backend.
            </p>
            <p>
              My journey into software development started with a curiosity about how things are
              built — that curiosity turned into a career path. I love the challenge of translating
              complex requirements into intuitive, performant products that real people enjoy using.
            </p>
            <p>
              I&apos;m actively seeking graduate developer, React developer, and full-stack positions
              across Australia. I bring energy, a growth mindset, and a genuine love for the craft
              to every team I join.
            </p>
          </motion.div>

          <div className="space-y-4">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-navy-900/60 border border-slate-800/60 rounded-xl hover:border-accent/30 transition-all card-hover"
              >
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
