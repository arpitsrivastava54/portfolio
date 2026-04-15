import { Code2, Database, Globe, Cpu, Zap, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface TechCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const techCategories: TechCategory[] = [
  {
    icon: Globe,
    title: 'Frontend & UI',
    description: 'High-performance, accessible, and reactive user interfaces across SaaS and enterprise products.',
    items: ['Next.js 14+', 'React 18+', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'Lucide Icons'],
  },
  {
    icon: Cpu,
    title: 'Backend & Runtime',
    description: 'Robust, multi-tenant, and high-throughput server-side applications with queue-driven architectures.',
    items: ['Node.js', 'Fastify', 'Python', 'Worker Threads', 'BullMQ Workers', 'Child Processes'],
  },
  {
    icon: Database,
    title: 'Data & Storage',
    description: 'Persistent, cached, and vector-searchable data systems optimised for real-time and AI workloads.',
    items: ['MongoDB', 'Redis', 'Qdrant (Vector DB)', 'PostgreSQL', 'BullMQ'],
  },
  {
    icon: Zap,
    title: 'AI & GenAI',
    description: 'Production LLM pipelines, autonomous voice agents, OCR engines, and neural evaluation systems.',
    items: ['Azure OpenAI', 'LangChain', 'LiveKit (Voice AI)', 'Vision LLM', 'OCR Pipeline', 'Embeddings / RAG'],
  },
  {
    icon: Code2,
    title: 'Core Services & APIs',
    description: 'Integrating business-critical APIs and specialized orchestration engines into production systems.',
    items: ['LinkedIn OAuth 2.0', 'Razorpay', 'WhatsApp API', 'Google Meet API', 'WebSocket', 'JWT / Auth'],
  },
  {
    icon: Layers,
    title: 'Infrastructure & DevOps',
    description: 'Reliable deployment pipelines, containerisation, and multi-tenant scoping at scale.',
    items: ['Vercel', 'Digital Ocean', 'Docker', 'PM2', 'GitHub Actions', 'Nginx'],
  },
];

export interface TechNode {
  id: string;
  label: string;
  category: 'frontend' | 'backend' | 'data' | 'ai' | 'infra';
  x: number;
  y: number;
}

export const techNodes: TechNode[] = [
  { id: 'nextjs', label: 'Next.js', category: 'frontend', x: 200, y: 150 },
  { id: 'react', label: 'React', category: 'frontend', x: 250, y: 220 },
  { id: 'tailwind', label: 'TailwindCSS', category: 'frontend', x: 150, y: 250 },

  { id: 'nodejs', label: 'Node.js', category: 'backend', x: 400, y: 150 },
  { id: 'fastify', label: 'Fastify', category: 'backend', x: 450, y: 220 },
  { id: 'python', label: 'Python', category: 'backend', x: 350, y: 250 },

  { id: 'mongodb', label: 'MongoDB', category: 'data', x: 600, y: 150 },
  { id: 'redis', label: 'Redis', category: 'data', x: 650, y: 220 },
  { id: 'qdrant', label: 'Qdrant', category: 'data', x: 550, y: 250 },

  { id: 'openai', label: 'OpenAI', category: 'ai', x: 400, y: 400 },
  { id: 'azure', label: 'Azure AI', category: 'ai', x: 480, y: 350 },
  { id: 'livekit', label: 'LiveKit', category: 'ai', x: 320, y: 350 },
  { id: 'vision', label: 'Vision LLM', category: 'ai', x: 400, y: 480 },

  { id: 'bull', label: 'Bull Queues', category: 'infra', x: 150, y: 400 },
  { id: 'workers', label: 'Workers', category: 'infra', x: 650, y: 400 },
];

export const techConnections: [string, string][] = [
  ['nextjs', 'nodejs'],
  ['react', 'nodejs'],
  ['nodejs', 'mongodb'],
  ['nodejs', 'redis'],
  ['nodejs', 'qdrant'],
  ['nodejs', 'openai'],
  ['python', 'livekit'],
  ['python', 'openai'],
  ['openai', 'qdrant'],
  ['bull', 'nodejs'],
  ['workers', 'nodejs'],
  ['fastify', 'mongodb'],
  ['azure', 'qdrant'],
  ['livekit', 'openai'],
];
