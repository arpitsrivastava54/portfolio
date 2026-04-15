"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/experiences';
import { ChevronRight, Calendar, Building2 } from 'lucide-react';
import Link from 'next/link';

export function TimelineView({ experiences }: { experiences: Project[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(experiences[0]?.id || null);

  const selectedProject = experiences.find(p => p.id === selectedId);

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      {/* Horizontal Timeline Line */}
      <div className="relative mb-24">
        <div className="absolute top-1/2 left-0 w-full h-px bg-border-primary -translate-y-1/2 z-0" />
        
        <div className="relative z-10 flex justify-between items-center max-w-4xl mx-auto overflow-x-auto pb-8 no-scrollbar">
          {experiences.map((exp, idx) => {
             const isSelected = selectedId === exp.id;
             return (
               <div 
                 key={exp.id}
                 className="flex flex-col items-center cursor-pointer group px-4 min-w-[150px]"
                 onClick={() => setSelectedId(exp.id)}
               >
                 <motion.div 
                   animate={{ 
                     scale: isSelected ? 1.5 : 1,
                     backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-tertiary)'
                   }}
                   className="w-4 h-4 rounded-full border-2 border-bg-primary shadow-sm mb-4 transition-colors group-hover:bg-accent-primary/60"
                 />
                 <span className={`text-[10px] font-mono uppercase tracking-widest mb-1 transition-colors ${isSelected ? 'text-accent-primary' : 'text-text-tertiary'}`}>
                    {idx === 0 ? 'Latest' : exp.period.split('-')[0]}
                 </span>
                 <span className={`text-xs font-bold font-mono text-center transition-colors ${isSelected ? 'text-text-primary' : 'text-text-tertiary group-hover:text-text-secondary'}`}>
                    {exp.title}
                 </span>
               </div>
             );
          })}
        </div>
      </div>
      
      {/* Detail Expansion */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div 
            key={selectedProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-bg-secondary/50 border border-border-primary rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
               <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/10 text-accent-primary text-[10px] font-mono font-bold tracking-widest uppercase">
                     {selectedProject.company}
                  </div>
                  <h3 className="text-2xl font-bold font-mono tracking-tight uppercase">// {selectedProject.title}</h3>
                  <div className="space-y-3 text-sm text-text-tertiary font-mono uppercase tracking-wider">
                     <div className="flex items-center gap-2 italic">
                        <Calendar size={14} /> {selectedProject.period}
                     </div>
                     <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 size={14} /> {selectedProject.role}
                     </div>
                  </div>
                  <Link 
                    href={`/experience/${selectedProject.id}`} 
                    className="inline-flex items-center gap-2 text-sm text-accent-primary font-bold group"
                  >
                    VIEW CASE STUDY <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
               
               <div className="space-y-8">
                  <p className="text-text-secondary leading-relaxed text-lg italic border-l-2 border-accent-primary/30 pl-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {selectedProject.impact.slice(0, 2).map((imp, idx) => (
                       <div key={idx} className="p-4 bg-bg-primary rounded-lg border border-border-primary">
                          <span className="block text-[10px] text-text-tertiary font-mono mb-2 uppercase tracking-tighter">Impact point 0{idx+1}</span>
                          <span className="text-sm font-medium text-text-primary">{imp}</span>
                       </div>
                     ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                     {selectedProject.tech.slice(0, 6).map(t => (
                       <span key={t} className="tech-badge">
                          {t}
                       </span>
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
