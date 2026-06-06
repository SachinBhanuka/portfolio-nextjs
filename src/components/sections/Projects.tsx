"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with product management, cart functionality, Stripe payments, and a real-time inventory system. Built for performance and scalability.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/sachinkeragala",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop boards, real-time updates via WebSockets, user authentication, and team workspaces.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/sachinkeragala",
    demo: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather application with location-based forecasting, 7-day outlook, hourly breakdowns, and data visualization using Chart.js.",
    tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/sachinkeragala",
    demo: "#",
    featured: false,
  },
  {
    title: "REST API Backend",
    description:
      "RESTful API service with comprehensive CRUD operations, JWT authentication, rate limiting, request validation, and API documentation via Swagger.",
    tech: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Zod"],
    github: "https://github.com/sachinkeragala",
    demo: "#",
    featured: false,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Live chat application supporting private messages, group rooms, message history, online presence indicators, and file attachments.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/sachinkeragala",
    demo: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion animations. SEO-optimised and deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sachinkeragala",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            A selection of projects that demonstrate my ability to build full-stack applications
            from concept to deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col bg-navy-900/60 border border-slate-800/60 rounded-xl p-6 hover:border-accent/30 transition-all card-hover"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-mono font-medium text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-slate-800/80 border border-slate-700/60 text-slate-400 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
