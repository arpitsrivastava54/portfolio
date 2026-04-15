"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Mail, Send, Terminal, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/profile';

const GithubIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

  const contactOptions = [
    {
      Icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: LinkedinIcon,
      label: 'LinkedIn',
      value: profile.linkedin.replace('https://', ''),
      href: profile.linkedin,
    },
    {
      Icon: GithubIcon,
      label: 'GitHub',
      value: profile.github.replace('https://', ''),
      href: profile.github,
    },
  ];

  const infoItems = [
    { Icon: MapPin, label: 'Location', value: 'Remote / Global' },
    { Icon: Clock, label: 'Response Time', value: '< 24 Hours' },
    { Icon: Terminal, label: 'Availability', value: 'Full-time / Freelance' },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 min-h-screen pb-32">
        <section className="pt-32 pb-16 bg-bg-secondary/30 border-b border-border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl font-bold font-mono tracking-tighter uppercase">
                // GET IN <span className="text-accent-primary">TOUCH</span>
              </h1>
              <p className="max-w-xl text-text-secondary text-lg leading-relaxed">
                Interested in working together or have a question about my projects? Send me a message or connect on social platforms.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-24 items-start">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-8 p-10 rounded-2xl border border-border-primary bg-bg-secondary/20 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-bg-tertiary border border-border-secondary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all placeholder:text-text-tertiary/60"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-bg-tertiary border border-border-secondary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all placeholder:text-text-tertiary/60"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">
                    Message Body
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="I'm interested in collaborating on..."
                    className="w-full bg-bg-tertiary border border-border-secondary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all placeholder:text-text-tertiary/60 resize-none"
                  />
                </div>

                <button
                  disabled={formState !== 'idle'}
                  className="w-full py-4 rounded-lg bg-accent-gradient text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none group"
                >
                  {formState === 'idle' && (
                    <>
                      SEND MESSAGE{' '}
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                  {formState === 'sending' && 'INITIATING UPLINK...'}
                  {formState === 'sent' && 'MESSAGE RECEIVED. OVER.'}
                </button>

                {formState === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm font-mono text-success"
                  >
                    // Response protocol initiated. Talk soon.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Info & Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-20"
            >
              <div className="space-y-12">
                <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary">
                  // Connectivity Platforms
                </h2>
                <div className="space-y-6">
                  {contactOptions.map((opt, idx) => (
                    <a
                      key={idx}
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 p-6 rounded-xl border border-border-primary bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent-primary shadow-sm hover:shadow-accent-primary/5 transition-all group"
                    >
                      <div className="p-3 bg-bg-tertiary rounded-lg text-text-secondary group-hover:text-accent-primary group-hover:scale-110 transition-all">
                        <opt.Icon size={22} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-1">
                          {opt.label}
                        </span>
                        <span className="text-base font-medium text-text-primary font-mono">{opt.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
                {infoItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-6 items-start border-l border-border-primary pl-8 hover:border-accent-primary transition-colors"
                  >
                    <span className="text-accent-primary p-2 bg-accent-primary/5 rounded-full">
                      <item.Icon size={20} />
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-1">
                        {item.label}
                      </span>
                      <span className="text-lg font-medium text-text-primary leading-tight">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-primary py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="font-mono text-sm text-text-tertiary mb-2">
            {profile.name} &copy; {new Date().getFullYear()}
          </div>
          <div className="font-mono text-[10px] text-text-tertiary/60 tracking-widest">
            ENCRYPTED CONNECTION ESTABLISHED
          </div>
        </div>
      </footer>
    </>
  );
}
