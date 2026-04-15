"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { profile } from '@/data/profile';
import { Terminal, AnimatedSpan, TypingAnimation } from '@/components/ui/terminal';
import { Particles } from '@/components/ui/particles';
import { useEffect, useState } from 'react';

export function Hero() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setColor(isDark ? "#ffffff" : "#000000");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg-primary">
      {/* Background Particles representing dynamic personality */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="font-mono text-accent-primary text-sm font-semibold tracking-widest uppercase">
              // {profile.name.toUpperCase()}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-text-primary via-accent-primary to-accent-secondary bg-clip-text text-transparent"
          >
            Full Stack Engineer <br /> & AI Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-6 leading-relaxed bg-bg-primary/50 backdrop-blur-sm rounded-lg p-2"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm text-text-tertiary max-w-xl mb-12 leading-relaxed font-mono bg-bg-primary/50 backdrop-blur-sm rounded-lg p-2"
          >
            <span className="text-accent-primary">{profile.company}</span> · {profile.companyRole} · {profile.companyPeriod}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="/experience"
              className="px-8 py-3 rounded-lg bg-accent-gradient text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-accent-primary/20"
            >
              View My Work
            </a>
            <a
              href="/stack"
              className="px-8 py-3 rounded-lg border border-border-primary bg-bg-secondary text-text-primary font-medium hover:bg-bg-tertiary transition-colors"
            >
              Tech Stack
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-8 py-3 rounded-lg border border-border-primary bg-bg-secondary text-text-primary font-medium hover:bg-bg-tertiary transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-lg lg:w-[450px] flex-shrink-0 relative mt-12 lg:mt-0"
        >
          {/* Glowing backdrop for terminal */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent-primary/40 to-accent-secondary/40 blur-xl opacity-50 animate-pulse" />
          <Terminal className="relative border border-border-primary !bg-bg-secondary text-left shadow-2xl">
            <TypingAnimation>&gt; whoami</TypingAnimation>
            <AnimatedSpan className="text-accent-primary font-bold" delay={800}>
              {profile.name}. Full Stack + AI Engineer.
            </AnimatedSpan>
            <TypingAnimation delay={1500}>&gt; ./load_skills.sh</TypingAnimation>
            <AnimatedSpan className="text-green-500" delay={2500}>
              ✔ Booting Neural Engine...
            </AnimatedSpan>
            <AnimatedSpan className="text-green-500" delay={3000}>
              ✔ Initializing WebRTC...
            </AnimatedSpan>
            <AnimatedSpan className="text-green-500" delay={3500}>
              ✔ Connecting Next.js Frontend...
            </AnimatedSpan>
            <AnimatedSpan className="text-blue-500" delay={4000}>
              <span>ℹ Systems Ready.</span>
            </AnimatedSpan>
            <TypingAnimation className="text-text-tertiary" delay={4500}>
              Ready to ship code at scale.
            </TypingAnimation>
          </Terminal>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-tertiary gap-2 cursor-pointer"
        onClick={() => {
          const exp = document.getElementById('experience');
          if (exp) {
             exp.scrollIntoView({ behavior: 'smooth' });
          } else {
             window.location.href = '/experience';
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">SCROLL</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
