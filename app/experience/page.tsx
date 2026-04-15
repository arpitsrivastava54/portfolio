import { CareerTimeline } from '@/components/CareerTimeline';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 min-h-screen bg-bg-primary">
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight font-mono mb-4">// EXPERIENCE & PROJECTS</h1>
            <p className="text-text-secondary max-w-2xl leading-relaxed">
              A comprehensive breakdown of my career journey, detailing the problems I&apos;ve solved and systems I&apos;ve built.
            </p>
          </div>
          <CareerTimeline />
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
