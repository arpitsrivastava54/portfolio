"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/data/experiences';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="project-card group"
    >
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-period">{project.period}</span>
      </div>
      
      <p className="project-role">{project.role}</p>
      
      <div className="project-description">
        {project.shortDescription}
      </div>
      
      <div className="tech-stack">
        {project.tech.slice(0, 5).map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="text-text-tertiary text-[10px] self-center">
            +{project.tech.length - 5} more
          </span>
        )}
      </div>
      
      <Link 
        href={`/experience/${project.id}`}
        className="view-case-study mt-4 inline-flex items-center gap-1 text-accent-primary hover:gap-2 transition-all duration-200 font-medium"
      >
        View Case Study <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
