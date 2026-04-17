"use client";

import { use } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Rocket, Target, Lightbulb, ExternalLink, Lock } from 'lucide-react';
import Link from 'next/link';
import { experiences } from '@/data/experiences';
import { profile } from '@/data/profile';
import { Navigation } from '@/components/Navigation';
import { MetricCounter } from '@/components/MetricCounter';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const currentIndex = experiences.findIndex((p) => p.id === id);
  const project = experiences[currentIndex];
  console.log(project);

  if (!project) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? experiences[currentIndex - 1] : null;
  const nextProject = currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navigation />

      <main className="flex-1 min-h-screen pb-24">
        {/* Header */}
        <section className="pt-24 pb-16 border-b border-border-primary bg-bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#experience"
              className="inline-flex items-center gap-2 text-sm font-mono text-text-tertiary hover:text-accent-primary transition-colors mb-8"
            >
              <ChevronLeft size={16} /> BACK TO WORK
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest bg-accent-primary/10 text-accent-primary rounded uppercase border border-accent-primary/20">
                  {project.company}
                </span>
                <span className="text-text-tertiary font-mono text-sm">{project.period}</span>
                <span className="px-2 py-0.5 text-[10px] font-mono text-text-tertiary border border-border-secondary rounded">
                  {project.role}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-mono uppercase">
                // {project.title}
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
                {project.description}
              </p>
              <div className="pt-2">
                {project.url ? (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-4 py-2.5 text-sm font-bold text-bg-primary transition-opacity hover:opacity-90"
                  >
                    Visit Website
                    <ExternalLink size={15} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border-primary bg-bg-tertiary px-4 py-2.5 text-sm font-medium text-text-tertiary"
                  >
                    Website Unavailable
                    <Lock size={14} className="opacity-70" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">

          {/* Challenge & Solution */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent-primary">
                <Target size={24} />
                <h2 className="text-xl font-bold font-mono tracking-tight uppercase">The Challenge</h2>
              </div>
              <div className="h-px bg-border-primary w-full" />
              <p className="text-text-secondary leading-relaxed text-lg">{project.challenge}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-success">
                <Rocket size={24} />
                <h2 className="text-xl font-bold font-mono tracking-tight uppercase">The Solution</h2>
              </div>
              <div className="h-px bg-border-primary w-full" />
              <p className="text-text-secondary leading-relaxed text-lg">{project.solution}</p>
            </div>
          </motion.section>

          {/* Key Metrics */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-bg-secondary border border-border-primary rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-xs font-mono text-text-tertiary tracking-widest uppercase mb-12 text-center">
              // Key Impact Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {project.metrics.map((metric, idx) => (
                <MetricCounter
                  key={idx}
                  end={metric.end}
                  label={metric.label}
                  suffix={metric.suffix}
                />
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-xs font-mono text-text-tertiary tracking-widest uppercase">// Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono bg-bg-tertiary text-text-secondary border border-border-secondary rounded hover:border-accent-primary/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.section>


          {/* Key Learnings */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-3 text-warning">
              <Lightbulb size={24} />
              <h2 className="text-xl font-bold font-mono tracking-tight uppercase">Key Learnings</h2>
            </div>

            <div className="grid gap-6">
              {project.learnings.map((learning, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 bg-bg-tertiary/50 border border-border-primary rounded-xl hover:border-warning/30 transition-colors"
                >
                  <span className="text-warning font-mono font-bold shrink-0">0{idx + 1}.</span>
                  <p className="text-text-secondary leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Dynamic prev/next navigation */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border-primary pt-12">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link href={`/experience/${prevProject.id}`} className="group">
                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest block mb-1">Previous</span>
                <span className="text-lg font-bold font-mono group-hover:text-accent-primary transition-colors">
                  ← {prevProject.title}
                </span>
              </Link>
            ) : (
              <Link href="/#experience" className="group">
                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest block mb-1">Back to</span>
                <span className="text-lg font-bold font-mono group-hover:text-accent-primary transition-colors">← All Projects</span>
              </Link>
            )}

            {nextProject ? (
              <Link href={`/experience/${nextProject.id}`} className="group text-right">
                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest block mb-1">Next</span>
                <span className="text-lg font-bold font-mono group-hover:text-accent-primary transition-colors">
                  {nextProject.title} →
                </span>
              </Link>
            ) : (
              <Link href="/#experience" className="group text-right">
                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest block mb-1">Back to</span>
                <span className="text-lg font-bold font-mono group-hover:text-accent-primary transition-colors">All Projects →</span>
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-border-primary py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} {profile.name}.
          </div>
          <div className="flex gap-8 text-text-tertiary">
            <Link href="/#experience" className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest">
              All Projects
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
