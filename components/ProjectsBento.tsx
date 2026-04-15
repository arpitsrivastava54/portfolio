"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import Link from 'next/link';
import { experiences } from '@/data/experiences';

export function ProjectsBento() {
  // Group projects by company metadata
  const companyProjects = experiences.reduce((acc, project) => {
    if (!acc[project.company]) {
      acc[project.company] = [];
    }
    acc[project.company].push(project);
    return acc;
  }, {} as Record<string, typeof experiences>);

  return (
    <div className="space-y-24">
      {Object.entries(companyProjects).map(([company, projects]) => (
        <div key={company} className="space-y-12">
          {/* Company Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border-primary" />
            <div className="px-6 py-2 bg-bg-secondary/40 border border-border-primary rounded-full backdrop-blur-sm">
              <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-accent-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse hidden sm:inline-block" />
                {company} <span className="opacity-50 text-text-tertiary hidden sm:inline-block">(METADATA)</span>
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border-primary" />
          </motion.div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 sm:px-0">
            {projects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col bg-bg-secondary/20 rounded-3xl border border-border-primary overflow-hidden hover:border-accent-primary/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                {/* 1. Image Placeholder Block */}
                <div className="h-44 w-full relative bg-bg-primary overflow-hidden border-b border-border-primary z-10">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:20px_20px] opacity-30 group-hover:opacity-50 transition-all duration-700 mix-blend-screen bg-bg-secondary/50">
                       <span className="font-extrabold text-4xl tracking-tighter uppercase font-mono text-text-secondary opacity-30 select-none group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">{p.title}</span>
                     </div>
                  )}
                  {/* Subtle fade overlay marrying image to card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/95 to-transparent pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col relative z-10">
                  {/* 2. Description Area */}
                  <div className="mb-6 flex-none">
                     <h3 className="text-2xl font-bold font-mono tracking-tight text-text-primary mb-3 decoration-accent-primary/30 group-hover:underline underline-offset-4 pointer-events-auto">{p.title}</h3>
                     <p className="text-sm leading-relaxed text-text-secondary line-clamp-3">{p.description}</p>
                  </div>

                  {/* 3. Skills/Tech Stack */}
                  <div className="mb-6 flex-none">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary mb-3 border-b border-border-primary pb-2 inline-block">Build Stack</p>
                    <div className="flex flex-wrap gap-2">
                       {p.tech.slice(0, 5).map(tech => (
                         <span key={tech} className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-lg bg-bg-primary border border-border-primary text-text-secondary shadow-sm">{tech}</span>
                       ))}
                       {p.tech.length > 5 && <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg bg-transparent text-text-tertiary">+{p.tech.length - 5}</span>}
                    </div>
                  </div>

                  {/* 4. Key Features / Impact array mapped */}
                  <div className="flex-1 mb-8 flex flex-col justify-end">
                     <p className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary border-b border-border-primary pb-2 inline-block mb-3 w-max">Key Features & Impact</p>
                     <ul className="space-y-2">
                       {p.impact.slice(0, 2).map((imp, l_idx) => (
                         <li key={l_idx} className="text-xs text-text-secondary flex items-start gap-2.5 leading-relaxed">
                            <span className="text-accent-primary mt-1 opacity-70 text-[8px]">▶</span> {imp}
                         </li>
                       ))}
                     </ul>
                  </div>

                  {/* 5. Conditioned Action Link */}
                  <div className="pt-5 border-t border-border-primary flex-none w-full">
                     {p.url ? (
                       <Link href={p.url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between px-5 py-3.5 bg-accent-primary text-bg-primary font-bold text-sm rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(129,140,248,0.3)]">
                         Visit Platform <ExternalLink size={16} />
                       </Link>
                     ) : (
                       <button disabled className="w-full flex items-center justify-between px-5 py-3.5 bg-bg-primary text-text-tertiary border border-border-primary font-medium text-sm rounded-xl cursor-not-allowed opacity-80 group-hover:opacity-100 transition-opacity">
                         Restricted by Company Policy <Lock size={14} className="opacity-60 text-red-400" />
                       </button>
                     )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
