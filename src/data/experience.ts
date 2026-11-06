export type Experience = {
  company: string
  role: string
  start: string
  end: string
  current?: boolean
  summary: string
  highlights: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: 'InApp Information Technologies',
    role: 'Software Engineer',
    start: 'May 2026',
    end: 'Present',
    current: true,
    summary:
      'Building software systems with a focus on AI-enabled products, backend services, and production delivery.',
    highlights: [
      'Engineering backend services and integrations for client-facing products.',
      'Applying AI and LLM capabilities where they solve a concrete problem.',
    ],
    tags: ['Python', 'AI Engineering', 'Backend'],
  },
  {
    company: 'Infocom Software',
    role: 'Senior Software Engineer, Agents',
    start: 'August 2024',
    end: 'April 2026',
    summary:
      'Designed and built enterprise AI agent systems that work with organizational knowledge, external tools, and business systems.',
    highlights: [
      'Built multi-agent orchestration with LangGraph, including tool execution and context management.',
      'Developed RAG pipelines and MCP-based tool integrations for enterprise knowledge.',
      'Implemented human-in-the-loop workflows, execution tracing, and agent evaluation.',
    ],
    tags: ['LangGraph', 'LangChain', 'RAG', 'MCP', 'FastAPI'],
  },
  {
    company: 'Osperb Innovations',
    role: 'Software Engineer',
    start: 'August 2022',
    end: 'July 2024',
    summary:
      'Built backend platforms and distributed services across logistics, real-time, and enterprise domains.',
    highlights: [
      'Engineered microservices with FastAPI, PostgreSQL, and Redis, including rule-based recommendation workflows.',
      'Built real-time backend services over WebSockets with matchmaking and state synchronization.',
      'Developed modular, multi-tenant Django applications and REST APIs.',
    ],
    tags: ['FastAPI', 'Django', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
  },
  {
    company: 'Maitexa Technologies',
    role: 'Machine Learning Intern',
    start: 'March 2022',
    end: 'June 2022',
    summary: 'Worked on machine learning fundamentals — data preparation, model training, and evaluation.',
    highlights: ['Prepared datasets and built, trained, and evaluated ML models in Python.'],
    tags: ['Python', 'Machine Learning'],
  },
]
