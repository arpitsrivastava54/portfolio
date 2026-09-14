import { CareerTimeline } from '@/components/CareerTimeline';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Senior AI Software Engineer Experience | itsarpit.dev",
  description: "Explore the professional journey of an AI Software Engineer and Full Stack Developer. View expert-level projects, ML systems, and DevOps engineering experience.",
  alternates: { canonical: "https://itsarpit.dev/experience" },
  openGraph: {
    title: "Senior AI Software Engineer Experience | itsarpit.dev",
    description: "Explore the professional journey of an AI Software Engineer and Full Stack Developer. View expert-level projects, ML systems, and DevOps engineering experience.",
    url: "https://itsarpit.dev/experience",
    siteName: "Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior AI Software Engineer Experience | itsarpit.dev",
    description: "Explore the professional journey of an AI Software Engineer and Full Stack Developer. View expert-level projects, ML systems, and DevOps engineering experience."
  },
  robots: { index: true, follow: true }
};

export default function ExperiencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Experience & Projects",
    "description": "Professional experience as an AI Software Engineer and Full Stack Developer.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://itsarpit.dev" }, { "@type": "ListItem", "position": 2, "name": "Experience", "item": "https://itsarpit.dev/experience" }]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main className="flex-1 min-h-screen bg-bg-primary">
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight font-mono mb-4">// EXPERIENCE & PROJECTS</h1>
            <p className="text-text-secondary max-w-2xl leading-relaxed mb-6">
              A comprehensive breakdown of my career journey as an AI Software Engineer, detailing the complex problems I have solved and scalable systems I have built using modern ML and DevOps practices.
            </p>
            <Link href="/contact" className="inline-block bg-accent-primary text-white px-6 py-3 rounded font-mono text-sm hover:opacity-90 transition-opacity">
              HIRE ME FOR YOUR PROJECT
            </Link>
          </div>
          <h2 className="text-2xl font-mono mb-8">Professional Career Timeline</h2>
          <CareerTimeline />
        </section>
      </main>

      <footer className="border-t border-border-primary py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} {profile.name}. {profile.footerNote}
          </div>
          <div className="flex gap-8 text-text-tertiary">
            <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest">GITHUB</Link>
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest">LINKEDIN</Link>
            <Link href={`mailto:${profile.email}`} className="hover:text-accent-primary transition-colors font-mono text-xs uppercase tracking-widest">EMAIL</Link>
          </div>
        </div>
      </footer>
    </>
  );
}