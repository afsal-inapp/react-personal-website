export type ProjectVisual = 'agents' | 'logistics' | 'realtime' | 'erp'

export type Project = {
  id: string
  index: string
  title: string
  category: string
  description: string
  technologies: string[]
  capabilities: string[]
  visual: ProjectVisual
  /** Optional public links. Leave undefined unless a real URL exists. */
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'enterprise-ai-agent-platform',
    index: '01',
    title: 'Enterprise AI Agent Platform',
    category: 'AI Engineering',
    description:
      'An enterprise AI platform designed to build intelligent agents that interact with organizational knowledge, external tools, and business systems.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'RAG', 'MCP'],
    capabilities: [
      'Multi-agent orchestration',
      'Retrieval-Augmented Generation',
      'Tool execution',
      'Context management',
      'Human-in-the-loop workflows',
      'Agent harness architecture',
      'Execution tracing and evaluation',
    ],
    visual: 'agents',
  },
  {
    id: 'logistics-recommendation-platform',
    index: '02',
    title: 'Logistics Recommendation Platform',
    category: 'Backend Systems',
    description:
      'A scalable logistics management platform with intelligent driver, truck, trailer, and pilot car recommendation workflows.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Microservices'],
    capabilities: [
      'Deterministic recommendation engine',
      'Configurable business rules',
      'Candidate eligibility evaluation',
      'Redis caching',
      'RBAC and permissions',
      'Concurrent request processing',
    ],
    visual: 'logistics',
  },
  {
    id: 'real-time-multiplayer-platform',
    index: '03',
    title: 'Real-Time Multiplayer Platform',
    category: 'Distributed Systems',
    description: 'Distributed backend infrastructure supporting real-time multiplayer experiences.',
    technologies: ['Python', 'WebSockets', 'Redis', 'AWS', 'Docker'],
    capabilities: [
      'Real-time communication',
      'Matchmaking',
      'State synchronization',
      'Leaderboards',
      'Asynchronous processing',
      'Scalable backend services',
    ],
    visual: 'realtime',
  },
  {
    id: 'enterprise-erp-systems',
    index: '04',
    title: 'Enterprise ERP Systems',
    category: 'Enterprise Software',
    description: 'Modular enterprise applications supporting business processes across different domains.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST APIs'],
    capabilities: [
      'Multi-tenant architecture',
      'Business workflows',
      'Database design',
      'REST APIs',
      'Backend integrations',
    ],
    visual: 'erp',
  },
]
