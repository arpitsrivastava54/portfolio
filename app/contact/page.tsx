"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Mail, Send, Terminal, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/profile';

const GithubIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="GitHub Icon">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="LinkedIn Icon">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <>
      <Navigation />
      <main className="flex-1 min-h-screen pb-32">
        <section className="pt-32 pb-16 bg-bg-secondary/30 border-b border-border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h1 className="text-4xl sm:text-6xl font-bold font-mono tracking-tighter uppercase">// GET IN <span className="text-accent-primary">TOUCH</span></h1>
              <h2 className="text-xl text-text-secondary">Contact an AI Software Engineer for Collaboration</h2>
              <p className="max-w-xl text-text-secondary text-lg leading-relaxed">
                Looking for an expert AI full stack developer or ML engineer? Reach out to discuss software engineering projects, technical consulting, or freelance opportunities. Our team provides custom AI solutions for enterprise-grade applications.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
              <form onSubmit={handleSubmit} className="space-y-8 p-10 rounded-2xl border border-border-primary bg-bg-secondary/20 shadow-xl backdrop-blur-sm">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">Full Name</label>
                  <input id="name" required type="text" placeholder="Jane Doe" className="w-full bg-bg-tertiary border border-border-secondary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">Email Address</label>
                  <input id="email" required type="email" placeholder="jane@company.com" className="w-full bg-bg-tertiary border border-border-secondary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">Message Body</label>
                  <textarea id="message" required rows={5} placeholder="I'm interested in collaborating on..." className="w-full bg-bg-tertiary border border-border-secondary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="w-full py-4 rounded-lg bg-accent-gradient text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50">
                  {formState === 'idle' && <>SEND MESSAGE <Send size={18} /></>}
                  {formState === 'sending' && 'INITIATING UPLINK...'}
                  {formState === 'sent' && 'MESSAGE RECEIVED. OVER.'}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}