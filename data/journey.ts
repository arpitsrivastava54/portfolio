export interface JourneyProject {
  title: string;
  experienceId?: string; // links to /experience/:id
  url?: string;          // external link for non-case-study projects
  tags: string[];
}

export interface JourneyRole {
  role: string;
  period: string;
  projects: JourneyProject[];
}

export interface JourneyEntry {
  id: string;
  company: string;
  overallPeriod: string;
  type: 'work' | 'freelance' | 'college';
  workType: 'Remote' | 'Onsite' | 'Hybrid';
  roles: JourneyRole[];
}

export const journey: JourneyEntry[] = [
  {
    id: 'mithilastack-lead',
    company: 'MithilaStack',
    overallPeriod: 'August 2024 – Present',
    type: 'work',
    workType:"Remote",
    roles: [
      {
        role: 'Lead Full Stack & AI Engineer',
        period: 'April 2025 – Present',
        projects: [
          {
            title: 'ExamGrader.ai',
            experienceId: 'examgrader',
            tags: ['Next.js', 'Vision LLM', 'Bull Queues', 'OCR'],
          },
          // {
          //   title: 'Neurik',
          //   experienceId: 'neurik',
          //   tags: ['LiveKit', 'Python', 'Azure OpenAI', 'BullMQ'],
          // },
          {
            title: 'AI Clinic',
            experienceId: 'ai-clinic',
            tags: ['Fastify', 'LiveKit', 'Embeddings', 'Multi-tenant'],
          },
          {
            title: 'Nivyasa.ai',
            experienceId: 'nivyasa',
            tags: ['Razorpay', 'OAuth 2.0', 'WhatsApp API', 'Node.js'],
          },
        ],
      },
      {
        role: 'Full Stack Engineer',
        period: 'January 2025 – March 2025',
        projects: [
          {
            title: 'Rising Bihar',
            experienceId: 'rising-bihar',
            tags: ['Next.js', 'Node.js', 'Google Meet API', 'RBAC'],
          },
        ],
      },
      {
        role: 'Frontend Engineer (Intern)',
        period: 'August 2024 – December 2024',
        projects: [
          {
            title: 'DConnec',
            experienceId: 'dconnec',
            tags: ['Next.js', 'React', 'RBAC', 'WebSocket'],
          },
        ],
      },
    ],
  },
  {
    id: 'careerbanao',
    company: 'CareerBanao',
    overallPeriod: 'March 2024 – August 2024',
    type: 'work',
    workType: 'Remote',
    roles: [
      {
        role: 'Frontend Engineer (Intern)',
        period: 'March 2024 – August 2024',
        projects: [
          {
            title: 'CareerBanao Main Website',
            tags: ['Next.js', 'React', 'TailwindCSS'],
          },
          {
            title: 'Admin Dashboard',
            tags: ['React', 'RBAC', 'REST APIs'],
          },
          {
            title: 'CB.Store',
            tags: ['Next.js', 'E-commerce', 'Course Platform'],
          },
        ],
      },
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    overallPeriod: '2024',
    type: 'freelance',
    workType: 'Remote',
    roles: [
      {
        role: 'Frontend Developer',
        period: '2024',
        projects: [
          {
            title: 'PralayLIC — Personal Landing Page',
            url: 'https://pralaylic.in',
            tags: ['Next.js', 'TailwindCSS', 'Landing Page'],
          },
        ],
      },
    ],
  },
  {
    id: 'college',
    company: 'College Projects',
    overallPeriod: '2023 – 2024',
    type: 'college',
    workType: 'Onsite',
    roles: [
      {
        role: 'Full Stack Developer',
        period: '2023 – 2024',
        projects: [
          {
            title: 'MonkeyCloth — Custom T-Shirt E-commerce',
            url: 'https://monkeycloth.vercel.app',
            tags: ['React', 'Canvas API', '3D Customizer', 'E-commerce'],
          },
          {
            title: 'Blogify — Blog Platform',
            url: 'https://as-blogify.netlify.app',
            tags: ['React', 'Node.js', 'Blog', 'Full Stack'],
          },
        ],
      },
    ],
  },
];
