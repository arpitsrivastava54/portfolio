"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sun, Moon, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { profile } from '@/data/profile';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Stack', href: '/stack' },
  { name: 'Contact', href: '/contact' },
];

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Navigation() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-md border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-mono text-lg font-bold tracking-tighter hover:text-accent-primary transition-colors">
              <span className="text-accent-primary">//</span> {profile.name.split(' ')[0]}.S
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent-primary',
                  pathname === link.href ? 'text-accent-primary' : 'text-text-secondary'
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="h-4 w-px bg-border-primary" />

            <div className="flex items-center space-x-4">
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="text-text-tertiary hover:text-text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </Link>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-bg-tertiary transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-bg-secondary border-b border-border-primary"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-text-primary hover:bg-bg-tertiary rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex pt-4 px-3 space-x-6">
              <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-tertiary" aria-label="GitHub">
                <GithubIcon />
              </Link>
              <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-tertiary" aria-label="LinkedIn">
                <LinkedinIcon />
              </Link>
              <Link href={`mailto:${profile.email}`} className="text-text-tertiary" aria-label="Email">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
