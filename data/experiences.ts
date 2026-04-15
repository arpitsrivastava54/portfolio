export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  company: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  tech: string[];
  metrics: {
    label: string;
    value: string;
    end: number;
    suffix?: string;
  }[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
  learnings: string[];
  image?: string;
  url?: string;
}

export const experiences: Project[] = [
  {
    id: 'examgrader',
    title: 'ExamGrader.ai',
    role: 'Lead Full-Stack & AI Engineer',
    period: '2024 - Present',
    company: 'MithilaStack',
    shortDescription: 'AI grading platform • Vision LLM • 5k+ educators',
    description:
      'AI-powered academic evaluation SaaS serving 5,000+ educators — automates grading of subjective, handwritten, and MCQ assessments using a Vision LLM, going beyond keyword matching to evaluate student reasoning and logic.',
    challenge:
      'Educators spend 40% of their time grading subjective assessments manually. Existing tools only handle MCQs, missing the nuance of free-response answers and handwritten work.',
    solution:
      'Built a context-aware neural grading engine achieving 95%+ accuracy on subjective and free-response questions. Engineered a high-speed OCR pipeline to process scanned PDFs and handwritten answer sheets, and designed a parallel-processing backend using Bull queues and worker threads to handle bulk institutional uploads at millisecond latency.',
    impact: [
      '5,000+ Educators Served',
      '95%+ Grading Accuracy',
      '10× Reduction in Grading Time',
    ],
    tech: ['Next.js', 'Node.js', 'Vision LLM', 'OCR Pipeline', 'Bull Queues', 'Worker Threads', 'MongoDB'],
    metrics: [
      { label: 'Educators Served', value: '5,000+', end: 5000, suffix: '+' },
      { label: 'Grading Accuracy', value: '95%+', end: 95, suffix: '%' },
      { label: 'Time Saved', value: '10×', end: 10, suffix: '×' },
    ],
    codeSnippet: {
      title: 'Queue-based grading orchestration with evaluation engine selection',
      language: 'javascript',
      code: `const gradingQueue = new Queue('grading', {
  redis: redisConfig,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 }
  }
});

gradingQueue.process(async (job) => {
  const { answers, rubric, questionType } = job.data;

  // Select appropriate evaluation engine (QPA / QPM / AFR)
  const engine = getEvaluationEngine(questionType);

  // Run OCR pipeline for handwritten/scanned content
  const processedAnswers = await ocrPipeline(answers);

  // Context-aware grading — evaluates reasoning, not keywords
  return await engine.evaluate(processedAnswers, rubric);
});`,
    },
    learnings: [
      'Optimizing LLM prompts for academic context requires domain-specific fine-tuning of evaluation criteria rather than generic prompting.',
      'Queue-based architectures handle variable institutional upload patterns far more gracefully than synchronous request-response cycles.',
      'OCR accuracy depends heavily on preprocessing steps to normalise handwriting variations before feeding into the vision model.',
    ],
  },
  {
    id: 'neurik',
    title: 'Neurik',
    role: 'Lead Full-Stack & AI Engineer',
    period: '2024 - Present',
    company: 'MithilaStack',
    shortDescription: 'AI voice agents • LiveKit • Multi-tenant CRM',
    description:
      'Business automation platform combining AI voice agents with a full CRM-style lead management system to scale B2B/B2C sales and support operations — enabling real-time outbound/inbound calling with transcript capture, call summaries, and human handoff.',
    challenge:
      'Businesses struggle to handle high-volume lead qualification and support calls with human agents, leading to slow response times, inconsistent follow-ups, and missed conversion opportunities.',
    solution:
      'Architected a multi-tenant AI CRM platform with a LiveKit-based Python agent runtime for scalable voice automation, built a modular knowledge-ingestion pipeline processing website and PDF data into structured context, and implemented BullMQ + Redis queue-driven processing for long-running ingestion and call workflows.',
    impact: [
      'Multi-tenant Voice CRM',
      'Real-time AI Call Handling',
      'Vector-backed Knowledge Retrieval',
    ],
    tech: ['Python', 'LiveKit', 'Azure OpenAI', 'Qdrant', 'BullMQ', 'Redis', 'Fastify', 'Node.js'],
    metrics: [
      { label: 'Call Response Latency', value: '<2s', end: 2, suffix: 's' },
      { label: 'Transcript Accuracy', value: '98%', end: 98, suffix: '%' },
      { label: 'Concurrent Calls', value: '100+', end: 100, suffix: '+' },
    ],
    codeSnippet: {
      title: 'LiveKit AI voice agent with vector-backed context retrieval',
      language: 'python',
      code: `class VoiceAgent:
    def __init__(self, room_name: str, knowledge_base: VectorStore):
        self.room = LiveKitRoom(room_name)
        self.kb = knowledge_base
        self.llm = AzureOpenAI()

    async def handle_call(self, audio_stream):
        # Transcribe incoming audio
        transcript = await self.transcribe(audio_stream)

        # Retrieve relevant business context from vector store
        context = await self.kb.search(transcript, top_k=3)

        # Generate a grounded, context-aware response
        response = await self.llm.chat(
            messages=[
                {"role": "system", "content": context},
                {"role": "user", "content": transcript}
            ]
        )

        # Synthesize and stream TTS response back to caller
        await self.tts_stream(response)`,
    },
    learnings: [
      'Low-latency voice interactions require a Python/C++ agent runtime — Node.js event-loop latency is too inconsistent for real-time audio pipelines.',
      'Multi-tenant CRMs need strict data isolation through organizational scoping at the query level, not just at the API layer.',
      'Vector retrieval with source-level traceability significantly improves AI response trustworthiness in enterprise deployments.',
    ],
  },
  {
    id: 'ai-clinic',
    title: 'AI Clinic',
    role: 'Lead Full-Stack & AI Platform Engineer',
    period: '2024 - Present',
    company: 'MithilaStack',
    shortDescription: 'Agent-as-a-Service • Healthcare AI • LiveKit • 98% adherence',
    description:
      'Specialized "Agent-as-a-Service" platform that empowers healthcare providers to build, customize, and deploy AI-driven medical agents — ranging from pre-surgery counseling to chronic care management — facilitating 24/7 patient engagement and achieving 98% medication adherence.',
    challenge:
      'Healthcare providers needed a scalable infrastructure to deploy intent-specific AI agents for patient engagement without requiring deep ML expertise — and the system had to maintain clinical accuracy, multi-language support, and compassionate interaction quality.',
    solution:
      'Architected the core platform using Node.js, Fastify, and MongoDB, integrating LiveKit-powered real-time voice AI and a neural embedding pipeline to process medical knowledge bases into searchable clinical context. Built a multi-tenant backend supporting multiple healthcare organizations and implemented a continuity engine for automated check-ins, lab insight analysis, and appointment management.',
    impact: [
      '98% Patient Medication Adherence',
      '40% Admin Overhead Reduced',
      'Multi-tenant Healthcare Platform',
    ],
    tech: ['Node.js', 'Fastify', 'MongoDB', 'LiveKit', 'Python', 'Neural Embeddings', 'Vector Store', 'Multi-tenant'],
    metrics: [
      { label: 'Medication Adherence', value: '98%', end: 98, suffix: '%' },
      { label: 'Admin Tasks Automated', value: '40%', end: 40, suffix: '%' },
      { label: 'Medical Agent Types', value: '5+', end: 5, suffix: '+' },
    ],
    codeSnippet: {
      title: 'Medical agent creation with knowledge embedding pipeline',
      language: 'typescript',
      code: `const createMedicalAgent = async (config: AgentConfig) => {
  const { specialization, persona, knowledgeBase, agentId } = config;

  // Embed and index clinical knowledge for this agent
  const embeddings = await processKnowledgeBase(knowledgeBase);
  await vectorStore.upsert({ namespace: agentId, vectors: embeddings });

  // Provision a LiveKit room for voice interaction
  const room = await liveKitClient.createRoom({
    name: agentId,
    emptyTimeout: 300,
    maxParticipants: 2,
  });

  // Return a fully configured, deploy-ready medical agent
  return new MedicalAgent({ specialization, persona, room, vectorStore, agentId });
};`,
    },
    learnings: [
      'Healthcare AI agents require strict persona boundaries to prevent clinical misinformation — system prompts must encode both knowledge scope and escalation protocols.',
      'Embedding medical documents at a finer granularity (section-level vs document-level) dramatically improves retrieval precision for clinical queries.',
      'A "build once, deploy anywhere" agent factory pattern significantly reduces time-to-deployment for new healthcare provider onboarding.',
    ],
  },
  {
    id: 'nivyasa',
    title: 'Nivyasa.ai',
    role: 'Backend Engineer',
    period: '2024 - Present',
    company: 'MithilaStack',
    shortDescription: 'Social automation • Razorpay • LinkedIn OAuth • WhatsApp',
    description:
      'AI-powered social content automation platform with subscription-led workflows, approval pipelines, and admin governance — covering post generation, scheduled publishing, WhatsApp-based approval notifications, and Razorpay-integrated recurring billing.',
    challenge:
      'Brands need reliable, automated approval workflows and billing systems for scaling social media content operations without manual overhead.',
    solution:
      'Built secure authentication infrastructure with LinkedIn OAuth 2.0 and JWT, implemented Razorpay-integrated payment system supporting Auto Pay recurring subscriptions and one-time credit purchases, and developed an end-to-end content operations pipeline with asynchronous workers for scheduling, approval orchestration, and WhatsApp notification handoff.',
    impact: [
      'End-to-end Content Automation',
      'Recurring Subscription Billing',
      'WhatsApp Approval Workflow',
    ],
    tech: ['Node.js', 'Fastify', 'Razorpay', 'LinkedIn OAuth 2.0', 'JWT', 'WhatsApp API', 'Bull Workers', 'MongoDB'],
    metrics: [
      { label: 'Posts Automated Daily', value: '1,000+', end: 1000, suffix: '+' },
      { label: 'Auth Security', value: 'OAuth 2.0', end: 100, suffix: '%' },
      { label: 'Platform Uptime', value: '99.9%', end: 99, suffix: '.9%' },
    ],
    codeSnippet: {
      title: 'Razorpay subscription with webhook-driven plan activation',
      language: 'javascript',
      code: `const createSubscription = async (userId, planId) => {
  const subscription = await razorpay.subscriptions.create({
    plan_id: planId,
    customer_notify: 1,
    total_count: 12, // Annual billing cycle
    notes: { userId }
  });

  return subscription;
};

// Webhook handler for payment lifecycle events
app.post('/webhooks/razorpay', async (req, res) => {
  const isValid = validateWebhookSignature(req);
  if (!isValid) return res.status(403).json({ error: 'Invalid signature' });

  const { event, payload } = req.body;

  if (event === 'subscription.charged') {
    await activateUserPlan(payload.subscription.entity.notes.userId);
  }

  res.json({ status: 'ok' });
});`,
    },
    learnings: [
      'Webhook signature validation is non-negotiable for payment integrity — verifying the Razorpay signature before processing any event prevents spoofed callbacks.',
      'OAuth 2.0 flows require robust state-parameter handling to prevent CSRF attacks during the LinkedIn authorization redirect.',
      'Asynchronous worker patterns with dead-letter queues ensure high throughput for background operations like WhatsApp approval notifications.',
    ],
  },
  {
    id: 'dconnec',
    title: 'DConnec',
    role: 'Frontend Engineer',
    period: '2024',
    company: 'MithilaStack',
    shortDescription: 'ERP • Data Centre Ops • RBAC • Multi-country Billing',
    description:
      'High-scale ERP platform designed for Data Centre Operations and Field Engineer Management, orchestrating complex workflows including client contract management, multi-country billing systems, and a real-time ticketing ecosystem for global data center operations.',
    challenge:
      'Data centre operations required a unified platform to manage field engineers, complex multi-country billing structures, real-time ticket escalation, and strict role-based data isolation across MBA, NOC, and Field Engineer personas.',
    solution:
      'Engineered a dynamic multi-level ticketing dashboard with sub-ticket generation and real-time progress tracking, implemented RBAC-driven frontend views with permission-based component rendering, and built interactive scheduling and assignment modules for geographic engineer allocation.',
    impact: [
      'RBAC for 3 User Personas',
      'Multi-country Billing UI',
      'Real-time Ticketing System',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'RBAC', 'WebSocket', 'REST APIs'],
    metrics: [
      { label: 'User Roles Supported', value: '3+', end: 3, suffix: '+' },
      { label: 'Billing Regions', value: 'Multi-country', end: 10, suffix: '+' },
      { label: 'Ticket Visibility', value: 'Real-time', end: 100, suffix: '%' },
    ],
    codeSnippet: {
      title: 'RBAC hook with permission-based component rendering',
      language: 'typescript',
      code: `type Permission = 'ASSIGN_TICKET' | 'VIEW_BILLING' | 'MANAGE_ENGINEERS' | 'VIEW_REPORTS';
type UserRole = 'MBA' | 'NOC' | 'FIELD_ENGINEER';

const rolePermissions: Record<UserRole, Permission[]> = {
  MBA: ['ASSIGN_TICKET', 'VIEW_BILLING', 'MANAGE_ENGINEERS', 'VIEW_REPORTS'],
  NOC: ['ASSIGN_TICKET', 'VIEW_REPORTS'],
  FIELD_ENGINEER: [],
};

const usePermissions = (userRole: UserRole) => {
  const permissions = rolePermissions[userRole];

  return {
    canAssignTicket: permissions.includes('ASSIGN_TICKET'),
    canViewBilling: permissions.includes('VIEW_BILLING'),
    canManageEngineers: permissions.includes('MANAGE_ENGINEERS'),
    hasAccess: (permission: Permission) => permissions.includes(permission),
  };
};`,
    },
    learnings: [
      'Frontend RBAC must enforce access at the component level, not just the route level — partial data visibility leaks are more common than full unauthorized access.',
      'Real-time ticket systems require optimistic UI updates paired with server reconciliation to avoid perceived latency in high-volume NOC environments.',
      'Multi-country billing UI needs abstraction layers that decouple currency formatting, tax logic, and contract templates from rendering components.',
    ],
  },
  {
    id: 'rising-bihar',
    title: 'Rising Bihar',
    role: 'Frontend Lead & Full-Stack Engineer',
    period: '2024',
    company: 'MithilaStack',
    shortDescription: 'Social Impact • 1,000+ Students • Google Meet API • Automated Grading',
    description:
      'Social-impact platform providing free career guidance to 1,000+ students across Bihar — featuring an automated assessment engine, Google Meet API integration for live counseling sessions, and a tri-panel architecture with RBAC for students, counselors, and admins.',
    challenge:
      'Career counseling at scale for underserved students required automating subjective assessment grading, eliminating friction from scheduling video counseling sessions, and managing complex multi-role permissions across student, counselor, and admin workflows.',
    solution:
      'Led the development of an intelligent automated grading engine for subjective assignments, integrated the Google Meet API for seamless session scheduling and link generation, and architected a tri-panel RBAC system with real-time chat and mobile push notifications to unify the counseling experience.',
    impact: [
      '1,000+ Students Served',
      'Automated Assessment Engine',
      'Google Meet Session Integration',
    ],
    tech: ['Next.js', 'Node.js', 'Google Meet API', 'RBAC', 'WebSocket', 'Push Notifications', 'MongoDB'],
    metrics: [
      { label: 'Students Served', value: '1,000+', end: 1000, suffix: '+' },
      { label: 'Admin Friction Reduced', value: '40%', end: 40, suffix: '%' },
      { label: 'Panels Architected', value: '3', end: 3 },
    ],
    codeSnippet: {
      title: 'Google Meet API integration for counseling session scheduling',
      language: 'typescript',
      code: `const scheduleCounselingSession = async (
  studentId: string,
  counselorId: string,
  scheduledAt: Date
) => {
  // Create a Google Meet space with trusted access
  const meetSpace = await googleMeetClient.spaces.create({
    requestBody: {
      config: {
        accessType: 'TRUSTED',
        entryPointAccess: 'CREATOR_AND_INVITED',
      },
    },
  });

  const meetLink = meetSpace.data.meetingUri;

  // Notify both participants with session details
  await Promise.all([
    notifyParticipant(studentId, { meetLink, scheduledAt, role: 'student' }),
    notifyParticipant(counselorId, { meetLink, scheduledAt, role: 'counselor' }),
  ]);

  return { meetLink, sessionId: meetSpace.data.name };
};`,
    },
    learnings: [
      'Automated subjective grading requires rubric-driven evaluation logic rather than keyword matching — students lose marks not for missing keywords but for missing reasoning.',
      'Google Meet API spaces must be created with correct access type upfront — modifying access controls post-creation causes participant confusion during live sessions.',
      'Tri-panel RBAC architectures benefit from a centralized permission resolver that all three panels reference, rather than per-panel role logic.',
    ],
  },

  // ── CareerBanao ────────────────────────────────────────────────────────────
  {
    id: 'careerbanao-website',
    title: 'CareerBanao Website',
    role: 'Frontend Engineer (Intern)',
    period: 'Mar 2024 – Aug 2024',
    company: 'CareerBanao',
    shortDescription: 'Main platform website • Career guidance • Student onboarding',
    description:
      'Public-facing marketing and onboarding website for CareerBanao — a career guidance platform. Responsible for building responsive, conversion-optimized landing pages and feature sections that introduce students to CareerBanao\'s counseling ecosystem.',
    challenge:
      'The existing site lacked responsiveness and had inconsistent UI patterns that reduced student trust and onboarding conversion rates.',
    solution:
      'Rebuilt key landing pages and onboarding flows with a consistent design system, responsive layouts, and optimized load performance.',
    impact: [
      'Improved mobile responsiveness across all key pages',
      'Consistent UI components aligned with brand identity',
      'Faster onboarding flow for new student sign-ups',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'REST APIs'],
    metrics: [
      { label: 'Pages Built', value: '10+', end: 10, suffix: '+' },
      { label: 'Mobile Ready', value: '100%', end: 100, suffix: '%' },
      { label: 'Load Time', value: '<2s', end: 2, suffix: 's' },
    ],
    learnings: [
      'Conversion-focused landing pages require iterative design with real user feedback — static assumptions rarely hold.',
      'Consistent design tokens across a team codebase reduce design drift significantly over multiple sprints.',
    ],
  },
  {
    id: 'careerbanao-admin',
    title: 'CareerBanao Admin Dashboard',
    role: 'Frontend Engineer (Intern)',
    period: 'Mar 2024 – Aug 2024',
    company: 'CareerBanao',
    shortDescription: 'Admin panel • RBAC • Student & counselor management',
    description:
      'Internal admin dashboard used by CareerBanao\'s operations team to manage students, counselors, content, and platform activity — featuring RBAC-driven views and data tables for real-time platform oversight.',
    challenge:
      'Operations staff needed a centralized interface to track and manage platform activity across hundreds of students and counselors without direct database access.',
    solution:
      'Built a modular admin dashboard with role-based views, filterable data tables, and status management panels for students and counselors.',
    impact: [
      'Centralized management for students and counselor accounts',
      'Role-based access control for operations staff',
      'Real-time status tracking across platform activity',
    ],
    tech: ['React', 'TypeScript', 'TailwindCSS', 'RBAC', 'REST APIs', 'Data Tables'],
    metrics: [
      { label: 'Admin Modules', value: '8+', end: 8, suffix: '+' },
      { label: 'RBAC Roles', value: '3+', end: 3, suffix: '+' },
      { label: 'Data Views', value: 'Real-time', end: 100, suffix: '%' },
    ],
    learnings: [
      'Admin dashboards benefit from strict separation of data-fetching and UI logic to stay maintainable as features grow.',
      'RBAC at the component level prevents accidental data exposure far more reliably than route-only guards.',
    ],
  },
  {
    id: 'cb-store',
    title: 'CB.Store',
    role: 'Frontend Engineer (Intern)',
    period: 'Mar 2024 – Aug 2024',
    company: 'CareerBanao',
    shortDescription: 'Course e-commerce • Checkout flow • Course catalog',
    description:
      'E-commerce storefront for CareerBanao\'s course catalog — allowing students to browse, filter, and purchase career guidance courses with a smooth checkout experience.',
    challenge:
      'Students needed a dedicated, trust-inspiring storefront to discover and purchase courses, separate from the main platform to keep the purchase journey focused.',
    solution:
      'Built a clean course listing and detail page UI with filtering, cart management, and a structured checkout flow integrated with the backend payments API.',
    impact: [
      'Dedicated storefront for course discovery and purchase',
      'Responsive catalog with filter and search capabilities',
      'Smooth, multi-step checkout flow',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'REST APIs', 'E-commerce'],
    metrics: [
      { label: 'Courses Listed', value: '20+', end: 20, suffix: '+' },
      { label: 'Checkout Steps', value: '3', end: 3 },
      { label: 'Mobile Ready', value: '100%', end: 100, suffix: '%' },
    ],
    learnings: [
      'E-commerce checkout UX requires progressive disclosure — show only what is needed at each step to minimise drop-off.',
      'Optimistic UI updates on cart interactions make the purchase flow feel significantly faster without any backend changes.',
    ],
  },

  // ── Freelance ──────────────────────────────────────────────────────────────
  {
    id: 'pralaylic',
    title: 'PralayLIC — Agent Landing Page',
    role: 'Freelance Frontend Developer',
    period: '2024',
    company: 'Freelance',
    shortDescription: 'LIC agent website • Lead capture • SEO optimized',
    description:
      'Personal landing page for a LIC (Life Insurance Corporation) agent — designed to establish an online presence, communicate service offerings, and capture leads from prospective clients.',
    challenge:
      'The client had no web presence, relying entirely on word-of-mouth. They needed a professional, fast-loading page that would rank in local search and convert visitors into leads.',
    solution:
      'Designed and built a conversion-focused landing page with a clear value proposition, service highlights, testimonials section, and a prominent contact form with WhatsApp CTA integration.',
    impact: [
      'Professional web presence established from scratch',
      'SEO-optimized structure for local search visibility',
      'WhatsApp CTA for direct client lead capture',
    ],
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'SEO', 'WhatsApp API'],
    url: 'https://pralaylic.in',
    metrics: [
      { label: 'Load Time', value: '<1.5s', end: 1, suffix: 's' },
      { label: 'SEO Score', value: '95+', end: 95, suffix: '+' },
      { label: 'CTA Channels', value: '2', end: 2 },
    ],
    learnings: [
      'Freelance clients value clear visual hierarchy and mobile-first design above all else — aesthetics matter more than technical complexity for trust-building.',
      'WhatsApp CTAs outperform email forms for local service businesses in terms of direct lead conversion.',
    ],
  },

  // ── College Projects ───────────────────────────────────────────────────────
  {
    id: 'monkeycloth',
    title: 'MonkeyCloth',
    role: 'Full Stack Developer',
    period: '2023 – 2024',
    company: 'College Projects',
    shortDescription: 'Custom T-shirt e-commerce • Canvas API • 3D customizer',
    description:
      'E-commerce platform for custom T-shirt printing featuring an interactive Canvas-based 3D customizer — allowing users to design their own T-shirt with custom text, graphics, and colors before placing an order.',
    challenge:
      'Building an in-browser product customizer that feels interactive and real-time without requiring a native app, while keeping the purchase flow seamless.',
    solution:
      'Used the Canvas API to build a real-time T-shirt design editor with layer controls, color pickers, and text overlays. Integrated the customizer output with a product order flow.',
    impact: [
      'Real-time in-browser T-shirt customizer using Canvas API',
      'End-to-end order flow from design to checkout',
      'Responsive product catalog with filter and cart',
    ],
    tech: ['React', 'Canvas API', 'Node.js', 'MongoDB', 'TailwindCSS', 'E-commerce'],
    url: 'https://monkeycloth.vercel.app',
    metrics: [
      { label: 'Canvas Layers', value: 'Dynamic', end: 5, suffix: '+' },
      { label: 'Design Options', value: '100+', end: 100, suffix: '+' },
      { label: 'Stack', value: 'Full Stack', end: 2 },
    ],
    learnings: [
      'Canvas API requires careful state management for undo/redo — immutable layer snapshots are far more reliable than mutable canvas mutations.',
      'Real-time preview performance depends heavily on debouncing user input before redrawing the canvas on each interaction.',
    ],
  },
  {
    id: 'blogify',
    title: 'Blogify',
    role: 'Full Stack Developer',
    period: '2023 – 2024',
    company: 'College Projects',
    shortDescription: 'Blog platform • CRUD • Auth • Markdown editor',
    description:
      'Full-stack blog platform where users can sign up, create and publish posts with a Markdown editor, browse other writers\' content, and manage their own articles — built as a college learning project.',
    challenge:
      'Learning full-stack development end-to-end: building an authenticated REST API, a relational data model for posts and users, and a responsive frontend — all from scratch.',
    solution:
      'Built a Node.js + Express REST API with JWT authentication and MongoDB for persistence. Built the React frontend with a Markdown editor, post listing, and profile pages.',
    impact: [
      'Full-stack blog platform with authentication and CRUD',
      'Markdown editor with live preview for post creation',
      'User profile pages with published post history',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Markdown', 'REST API'],
    url: 'https://as-blogify.netlify.app',
    metrics: [
      { label: 'Auth Flow', value: 'JWT', end: 1 },
      { label: 'API Routes', value: '15+', end: 15, suffix: '+' },
      { label: 'Stack', value: 'Full Stack', end: 2 },
    ],
    learnings: [
      'JWT refresh token rotation is critical for production auth — access token expiry without refresh creates poor UX that erodes trust.',
      'Building a real project end-to-end, even a simple blog, teaches more about system design than any tutorial.',
    ],
  },
];
