"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { TechStackGraph } from '@/components/TechStackGraph';
import { techCategories } from '@/data/stack';
import { profile } from '@/data/profile';

export default function StackPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Navigation />

      <main className="flex-1 min-h-screen">
        <section className="pt-32 pb-16 bg-bg-secondary/30 border-b border-border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl font-bold font-mono tracking-tighter uppercase">
                // FULL STACK <br /> <span className="text-accent-primary">ECOSYSTEM</span>
              </h1>
              <p className="max-w-xl text-text-secondary text-lg leading-relaxed">
                An overview of my core technical stack — curated for performance, scalability, and cutting-edge AI integration across production systems at {profile.company}. As a senior software engineer and AI engineer, I specialize in building robust, scalable architectures.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <TechStackGraph />
          </div>

          <h2 className="text-3xl font-bold font-mono mb-12 text-center">Core Technical Competencies</h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-8 rounded-xl border border-border-primary bg-bg-secondary/40 hover:bg-bg-secondary/60 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-lg bg-bg-tertiary text-accent-primary group-hover:scale-110 transition-transform">
                    <cat.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold font-mono tracking-tight">{cat.title}</h3>
                </div>

                <p className="text-sm text-text-tertiary mb-8 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono bg-bg-primary text-text-secondary border border-border-secondary rounded group-hover:border-accent-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-32 bg-bg-secondary border-t border-border-primary">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold font-mono mb-6 uppercase tracking-tight">Need specific expertise?</h2>
            <p className="text-text-secondary mb-12">
              I am an AI software engineer and full stack developer available for high-impact projects. Let's discuss your system requirements.
            </p>
            <a
              href="/contact"
              className="px-10 py-4 rounded-full bg-accent-gradient text-white font-medium hover:shadow-xl hover:shadow-accent-primary/20 transition-all"
            >
              Hire Me for Your Project
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-primary py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="font-mono text-sm text-text-tertiary mb-4">
            {profile.name} | AI Full Stack Developer Portfolio
          </div>
        </div>
      </footer>
    </>
  );
}