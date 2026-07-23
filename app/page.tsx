"use client";

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { MetricCounter } from '@/components/MetricCounter';
import { TechStackGraph } from '@/components/TechStackGraph';
import { CareerTimeline } from '@/components/CareerTimeline';
import { GitHubStats } from '@/components/GitHubStats';
import Link from 'next/link';
import { globalMetrics, profile } from '@/data/profile';
export default function Home() {
  return (
    <>
      <Navigation />

      <main className="flex-1 min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* About — crawlable keyword-rich bio */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-20 border-t border-border-primary bg-bg-primary"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight font-mono mb-6"
              >
                // About Me
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
                {profile.summary}
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                As a software developer and full stack engineer, I ship production
                systems with React and Next.js on the frontend, Node.js backends,
                and Python for AI and data workflows — from RBAC dashboards to
                queue-driven services and real-time features.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tech Ecosystem */}
        <section id="stack" className="py-24 relative overflow-hidden bg-bg-secondary/20 border-y border-border-primary">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-xs font-mono mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                    System Architecture
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-text-primary">
                    The Engine <br className="hidden lg:block"/> Behind The Code
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed">
                    A unified ecosystem bridging <strong>high-performance frontends</strong> with <strong>scalable AI infrastructure</strong>. Every tool is carefully chosen to build robust, secure, and lightning-fast applications.
                  </p>
                </motion.div>

                {/* Categories */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
                >
                  <div className="p-4 rounded-xl border border-border-primary bg-bg-primary/50 backdrop-blur-sm hover:border-accent-primary/50 transition-colors">
                    <h3 className="font-semibold text-text-primary mb-1">Frontend</h3>
                    <p className="text-xs text-text-tertiary">Next.js, React, Tailwind, Framer Motion</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border-primary bg-bg-primary/50 backdrop-blur-sm hover:border-accent-secondary/50 transition-colors">
                    <h3 className="font-semibold text-text-primary mb-1">AI & Data</h3>
                    <p className="text-xs text-text-tertiary">Python, LLMs, Vector DBs, LiveKit</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border-primary bg-bg-primary/50 backdrop-blur-sm hover:border-accent-primary/50 transition-colors">
                    <h3 className="font-semibold text-text-primary mb-1">Backend</h3>
                    <p className="text-xs text-text-tertiary">Node.js, Express, Fastify, MongoDB</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border-primary bg-bg-primary/50 backdrop-blur-sm hover:border-accent-secondary/50 transition-colors">
                    <h3 className="font-semibold text-text-primary mb-1">DevOps</h3>
                    <p className="text-xs text-text-tertiary">Docker, AWS, CI/CD, Queues</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <a href="/stack" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent-primary transition-colors underline underline-offset-4">
                    Explore detailed tech stack &rarr;
                  </a>
                </motion.div>
              </div>

              {/* Right Content - Graph Window */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 relative group mt-8 lg:mt-0"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative flex flex-col items-center bg-bg-primary rounded-2xl border border-border-primary overflow-hidden shadow-2xl">
                  {/* Window header */}
                  <div className="w-full h-11 border-b border-border-primary bg-bg-secondary/50 backdrop-blur-md flex items-center px-4 z-20">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/80" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                       <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center font-mono text-[10px] sm:text-xs text-text-tertiary opacity-70">
                       architecture-map.ts
                    </div>
                  </div>
                  {/* Graph Container */}
                  <div className="w-full relative bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px] before:absolute before:inset-0 before:bg-bg-primary/90">
                     <div className="relative z-10 w-full p-2">
                       <TechStackGraph />
                     </div>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Career Journey / Experience */}
        <section id="experience" className="py-24 bg-bg-secondary/20 border-t border-border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight font-mono">// CAREER JOURNEY</h2>
              <p className="text-text-secondary text-sm font-mono mt-2 tracking-wider uppercase opacity-60">
                {profile.company} · {profile.companyRole} · {profile.companyPeriod}
              </p>
            </motion.div>

            <CareerTimeline />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-10 text-center"
            >
              <p className="text-text-tertiary text-sm font-mono">
                Click any project chip to read the full case study.
                {' '}
                <Link href="/stack" className="text-accent-primary underline hover:text-accent-secondary">
                  View tech stack
                </Link>
                {' or '}
                <Link href="/contact" className="text-accent-primary underline hover:text-accent-secondary">
                  get in touch
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>

        {/* Flagship Projects */}
        <section id="projects" className="py-24 relative overflow-hidden bg-bg-secondary/10 border-t border-border-primary">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-start mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-xs font-mono mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                  Deployed Platforms
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-mono mb-4">// FLAGSHIP PROJECTS</h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-2xl mb-8">
                  Enterprise-grade platforms and SaaS applications engineered for high scale, performance, and impact.
                </p>

                <Link 
                  href="/projects" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-bg-primary font-bold font-mono tracking-widest uppercase text-sm rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(129,140,248,0.4)]"
                >
                  View Deployed Platforms
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GitHub Activity */}
        <section id="github" className="py-24 relative overflow-hidden bg-bg-primary">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" />
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-xs font-mono mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                  Open Source Commits
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-mono">// GITHUB METRICS</h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-2xl mx-auto">
                  Engineering {new Date().getFullYear()} — tracking shipped features, late-night pushes, and architectural reviews straight from{' '}
                  <Link
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-accent-primary underline underline-offset-4 transition-colors"
                  >
                    @{profile.githubUsername}
                  </Link>
                  .
                </p>
              </motion.div>
            </div>

            <GitHubStats />
          </div>
        </section>
      </main>

      <footer className="border-t border-border-primary py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
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
