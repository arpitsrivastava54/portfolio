"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { ProjectsBento } from '@/components/ProjectsBento';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      
      <main className="flex-1 min-h-screen">
        {/* Header Block exactly matching the other sub-pages in styling */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-bg-primary">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                Deployed Platforms
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-mono">// FLAGSHIP PROJECTS</h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                Enterprise-grade platforms and SaaS applications engineered for high scale, performance, and impact. Explore the architectural metadata and core tech stacks behind my featured work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section mapping the Bento UI */}
        <section className="py-24 relative overflow-hidden bg-bg-secondary/10 border-t border-border-primary">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ProjectsBento />
          </div>
        </section>
      </main>

      <footer className="border-t border-border-primary py-12 bg-bg-primary">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} {profile.name}. {profile.footerNote}
          </div>
          <div className="flex gap-8 text-text-tertiary">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest"
            >
              GITHUB
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest"
            >
              LINKEDIN
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest"
            >
              EMAIL
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
