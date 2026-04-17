"use client";

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
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
            <div className="flex-1 h-px bg-linear-to-r from-transparent to-border-primary" />
            <div className="px-6 py-2 bg-bg-secondary/40 border border-border-primary rounded-full backdrop-blur-sm">
              <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-accent-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse hidden sm:inline-block" />
                {company} <span className="opacity-50 text-text-tertiary hidden sm:inline-block">(METADATA)</span>
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent to-border-primary" />
          </motion.div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-0">
            {projects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative mx-auto flex w-full max-w-[360px] flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-secondary/20 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-accent-primary/40 hover:shadow-2xl ${
                  p.url ? 'cursor-pointer' : ''
                }`}
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-accent-primary/5 to-bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                {p.url ? (
                  <Link href={p.url} target="_blank" rel="noopener noreferrer" className="contents" aria-label={`Open ${p.title}`}>
                    {/* 1. Image Placeholder Block */}
                    <div className="relative z-10 h-56 w-full overflow-hidden border-b border-border-primary bg-bg-primary">
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                         <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(#818cf8_1px,transparent_1px)] bg-size-[20px_20px] opacity-30 group-hover:opacity-50 transition-all duration-700 mix-blend-screen bg-bg-secondary/50">
                           <span className="font-extrabold text-4xl tracking-tighter uppercase font-mono text-text-secondary opacity-30 select-none group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">{p.title}</span>
                         </div>
                      )}
                      {/* Subtle fade overlay marrying image to card */}
                      <div className="absolute inset-0 bg-linear-to-t from-bg-secondary/95 to-transparent pointer-events-none" />
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                      {/* 2. Description Area */}
                      <div className="mb-4 flex-none">
                         <h3 className="mb-2 text-xl font-bold font-mono tracking-tight text-text-primary decoration-accent-primary/30 underline-offset-4 pointer-events-auto group-hover:underline">{p.title}</h3>
                         <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">{p.description}</p>
                      </div>

                      {/* 3. Skills/Tech Stack */}
                      <div className="mb-4 flex-none">
                        <p className="mb-2 inline-block border-b border-border-primary pb-1.5 text-[10px] font-mono uppercase tracking-widest text-text-tertiary">Build Stack</p>
                        <div className="flex flex-wrap gap-2">
                           {p.tech.slice(0, 5).map(tech => (
                             <span key={tech} className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-lg bg-bg-primary border border-border-primary text-text-secondary shadow-sm">{tech}</span>
                           ))}
                           {p.tech.length > 5 && <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg bg-transparent text-text-tertiary">+{p.tech.length - 5}</span>}
                        </div>
                      </div>

                      {/* 4. Key Features / Impact array mapped */}
                      <div className="mb-5 flex flex-1 flex-col justify-end">
                         <p className="mb-2 inline-block w-max border-b border-border-primary pb-1.5 text-[10px] font-mono uppercase tracking-widest text-text-tertiary">Key Features & Impact</p>
                         <ul className="space-y-2">
                           {p.impact.slice(0, 2).map((imp, l_idx) => (
                             <li key={l_idx} className="text-xs text-text-secondary flex items-start gap-2.5 leading-relaxed">
                                <span className="text-accent-primary mt-1 opacity-70 text-[8px]">▶</span> {imp}
                             </li>
                           ))}
                         </ul>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <>
                    {/* 1. Image Placeholder Block */}
                    <div className="relative z-10 h-56 w-full overflow-hidden border-b border-border-primary bg-bg-primary">
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                         <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(#818cf8_1px,transparent_1px)] bg-size-[20px_20px] opacity-30 group-hover:opacity-50 transition-all duration-700 mix-blend-screen bg-bg-secondary/50">
                           <span className="font-extrabold text-4xl tracking-tighter uppercase font-mono text-text-secondary opacity-30 select-none group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">{p.title}</span>
                         </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-bg-secondary/95 to-transparent pointer-events-none" />
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-4 flex-none">
                         <h3 className="mb-2 text-xl font-bold font-mono tracking-tight text-text-primary">{p.title}</h3>
                         <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">{p.description}</p>
                      </div>

                      <div className="mb-4 flex-none">
                        <p className="mb-2 inline-block border-b border-border-primary pb-1.5 text-[10px] font-mono uppercase tracking-widest text-text-tertiary">Build Stack</p>
                        <div className="flex flex-wrap gap-2">
                           {p.tech.slice(0, 5).map(tech => (
                             <span key={tech} className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-lg bg-bg-primary border border-border-primary text-text-secondary shadow-sm">{tech}</span>
                           ))}
                           {p.tech.length > 5 && <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg bg-transparent text-text-tertiary">+{p.tech.length - 5}</span>}
                        </div>
                      </div>

                      <div className="mb-4 flex flex-1 flex-col justify-end">
                         <p className="mb-2 inline-block w-max border-b border-border-primary pb-1.5 text-[10px] font-mono uppercase tracking-widest text-text-tertiary">Key Features & Impact</p>
                         <ul className="space-y-2">
                           {p.impact.slice(0, 2).map((imp, l_idx) => (
                             <li key={l_idx} className="text-xs text-text-secondary flex items-start gap-2.5 leading-relaxed">
                                <span className="text-accent-primary mt-1 opacity-70 text-[8px]">▶</span> {imp}
                             </li>
                           ))}
                         </ul>
                      </div>

                      <div className="inline-flex w-max items-center gap-2 rounded-full border border-border-primary bg-bg-primary px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-text-tertiary">
                        <Lock size={11} className="opacity-70" />
                        Restricted by company policy
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
