import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";

/** Builds /llms.txt content from profile, projects, and site URL. */
export function generateLlmsTxt(): string {
  const base = getSiteUrl();

  const projects = experiences
    .map((p) => {
      const link = p.url ? ` (${p.url})` : ` (${base}/experience/${p.id})`;
      return `- ${p.title} — ${p.shortDescription}${link}`;
    })
    .join("\n");

  const caseStudies = experiences
    .map((p) => `- ${p.title}: ${base}/experience/${p.id}`)
    .join("\n");

  return `# ${profile.name} — Software Engineer & Full Stack Developer

> ${profile.name} is a Software Engineer and Full Stack Developer specializing in React, Node.js, JavaScript, Python, and AI platforms. Official portfolio: ${base}

## About

${profile.summary}

- Name: ${profile.name}
- Moniker: ${profile.moniker.replace(/^\/\//, "").trim()}
- Role: Software Engineer & Full Stack Developer | AI & GenAI
- Company: ${profile.company} (${profile.companyRole}, ${profile.companyPeriod})
- Experience: 2 years
- Availability: Open to opportunities
- Email: ${profile.email}

## Primary Technical Skills

- Frontend: Next.js, React, TypeScript, JavaScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Fastify, Express, Python, REST APIs, WebSocket, JWT / Auth
- Data: MongoDB, Redis, PostgreSQL, Qdrant (Vector DB), BullMQ
- AI & GenAI: LLMs, Vision LLM, OCR pipelines, LiveKit, Embeddings / RAG, LangChain
- DevOps: Docker, AWS, Vercel, CI/CD, Queues, Nginx
- SEO & Performance: Metadata API, JSON-LD, Sitemap, Canonical URLs, llms.txt

## Projects

Industry-scale projects developed by ${profile.name}:

${projects}

## Frequently Asked Questions

### Who is ${profile.name}?
${profile.name} is a Software Engineer and Full Stack Developer who builds production AI platforms, scalable backends, and high-performance web apps. ${profile.headline}

### What is ${profile.name}'s area of expertise?
${profile.name} specializes in full stack development with React, Next.js, Node.js, JavaScript, and Python — plus Generative AI, LLMs, and real-time systems.

### What are ${profile.name}'s primary technical skills?
Core skills include React, Next.js, Node.js, JavaScript, Python, Fastify, MongoDB, and AI tooling (LLMs, LiveKit, embeddings/RAG).

### What kind of projects does ${profile.name} work on?
AI SaaS products, healthcare agents, social automation, enterprise RBAC platforms, education/social-impact apps, and e-commerce.

### What technologies does ${profile.name} work with?
React, Next.js, TypeScript, JavaScript, Node.js, Fastify, Python, MongoDB, Redis, Tailwind CSS, Framer Motion, Docker, and modern SEO tooling (Metadata API, JSON-LD, sitemaps).

### How many years of experience does ${profile.name} have?
${profile.name} has 2 years of experience shipping production-grade software and AI platforms.

### What is ${profile.name}'s approach to software development?
He designs end-to-end systems built to scale — queue-driven backends, multi-tenant architecture, real-time features, and production LLM integrations — with ownership of the full stack from UI to infrastructure.

## Site Pages

- Home: ${base}
- Experience: ${base}/experience
- Projects: ${base}/projects
- Tech Stack: ${base}/stack
- Contact: ${base}/contact

## Case Studies

${caseStudies}

## Links

- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Email: mailto:${profile.email}

## Optional

- Sitemap: ${base}/sitemap.xml
- Robots: ${base}/robots.txt
- llms.txt: ${base}/llms.txt
`;
}
