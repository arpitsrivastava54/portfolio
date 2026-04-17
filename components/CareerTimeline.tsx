"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, ArrowUpRight, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { journey, JourneyEntry } from '@/data/journey';

const companyColors: Record<string, string> = {
  MithilaStack: 'bg-accent-primary/10 border-accent-primary/30 text-accent-primary',
  CareerBanao: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  Freelance: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  'College Projects': 'bg-purple-500/10 border-purple-500/30 text-purple-400',
};

const dotColors: Record<string, string> = {
  MithilaStack: 'bg-accent-primary shadow-accent-primary/40',
  CareerBanao: 'bg-emerald-400 shadow-emerald-400/40',
  Freelance: 'bg-amber-400 shadow-amber-400/40',
  'College Projects': 'bg-purple-400 shadow-purple-400/40',
};

const lineColors: Record<string, string> = {
  MithilaStack: 'from-accent-primary/60 to-accent-primary/10',
  CareerBanao: 'from-emerald-400/60 to-emerald-400/10',
  Freelance: 'from-amber-400/60 to-amber-400/10',
  'College Projects': 'from-purple-400/60 to-purple-400/10',
};

const workTypeColors: Record<JourneyEntry['workType'], string> = {
  Remote: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300',
  Onsite: 'bg-orange-500/20 border-orange-400/60 text-orange-300',
  Hybrid: 'bg-violet-500/20 border-violet-400/60 text-violet-300',
};

function TypeIcon({ type }: { type: JourneyEntry['type'] }) {
  if (type === 'college') return <GraduationCap size={14} />;
  if (type === 'freelance') return <Code2 size={14} />;
  return <Briefcase size={14} />;
}

function ProjectChip({ project }: { project: { title: string; experienceId?: string; url?: string; tags: string[] } }) {
  const base =
    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-mono font-semibold transition-all duration-200';

  if (project.experienceId) {
    return (
      <Link
        href={`/experience/${project.experienceId}`}
        className={`${base} bg-bg-tertiary/90 border-border-primary text-text-primary shadow-sm hover:bg-bg-tertiary hover:border-border-primary/80 group`}
      >
        {project.title}
        <ArrowUpRight size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  }

  if (project.url) {
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-bg-tertiary/90 border-border-primary text-text-primary shadow-sm hover:bg-bg-tertiary hover:border-border-primary/80 group`}
      >
        {project.title}
        <ExternalLink size={11} className="opacity-60 group-hover:opacity-90 transition-opacity" />
      </Link>
    );
  }

  return (
    <span className={`${base} bg-bg-tertiary/90 border-border-primary text-text-primary shadow-sm cursor-default`}>
      {project.title}
    </span>
  );
}

export function CareerTimeline() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const entryVariants = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="relative max-w-4xl mx-auto"
    >
      {journey.map((entry, entryIdx) => {
        const dotColor = dotColors[entry.company] ?? 'bg-text-tertiary shadow-text-tertiary/20';
        const lineColor = lineColors[entry.company] ?? 'from-text-tertiary/40 to-transparent';
        const chipColor = companyColors[entry.company] ?? 'bg-bg-tertiary border-border-secondary text-text-secondary';
        const workTypeColor = workTypeColors[entry.workType];
        const isLast = entryIdx === journey.length - 1;

        return (
          <motion.div key={entry.id} variants={entryVariants} className="relative flex gap-6 md:gap-10">
            {/* Left — dot + vertical line */}
            <div className="relative flex flex-col items-center w-6 shrink-0 pt-1">
              <div
                className={`w-3.5 h-3.5 rounded-full shadow-lg shrink-0 ${dotColor} ring-2 ring-bg-primary z-10`}
              />
              {!isLast && (
                <div className={`flex-1 w-px mt-2 bg-linear-to-b ${lineColor} min-h-[60px]`} />
              )}
            </div>

            {/* Right — content */}
            <div className="pb-14 flex-1 min-w-0">
              {/* Company header */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase border ${chipColor}`}
                >
                  <TypeIcon type={entry.type} />
                  {entry.company}
                </span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase ${workTypeColor}`}
                >
                  {entry.workType}
                </span>
                <span className="text-text-tertiary font-mono text-xs">{entry.overallPeriod}</span>
              </div>

              {/* Roles */}
              <div className="space-y-8">
                {entry.roles.map((roleEntry, roleIdx) => (
                  <div key={roleIdx} className="space-y-4">
                    {/* Role + period row */}
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-sm font-semibold font-mono text-text-primary">
                        {roleEntry.role}
                      </span>
                      <span className="text-[11px] font-mono text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded border border-border-secondary">
                        {roleEntry.period}
                      </span>
                    </div>

                    {/* Project chips */}
                    <div className="flex flex-wrap gap-2">
                      {roleEntry.projects.map((project, projIdx) => (
                        <ProjectChip key={projIdx} project={project} />
                      ))}
                    </div>

                    {/* Tech tags for first role project (optional visual richness) */}
                    <div className="flex flex-wrap gap-1.5">
                      {roleEntry.projects
                        .flatMap((p) => p.tags)
                        .filter((tag, i, arr) => arr.indexOf(tag) === i)
                        .slice(0, 8)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-border-primary bg-bg-tertiary/90 px-2 py-0.5 text-[10px] font-mono font-medium text-text-secondary shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Bottom cap */}
      <div className="flex gap-6 md:gap-10 items-center">
        <div className="w-6 flex justify-center">
          <div className="w-2 h-2 rounded-full bg-border-secondary" />
        </div>
        <span className="text-[11px] font-mono text-text-tertiary italic">— where it all began</span>
      </div>
    </motion.div>
  );
}
