import type { LucideIcon } from 'lucide-react'
import { Bot, Boxes, Cloud, Database, Layers, Server, Workflow } from 'lucide-react'

export type Capability = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

export const capabilities: Capability[] = [
  {
    id: 'ai',
    title: 'AI Engineering',
    description: 'Agents and LLM systems that reason over real data and act through real tools.',
    icon: Bot,
    items: [
      'AI Agents',
      'Multi-Agent Systems',
      'RAG Pipelines',
      'LLM Integration',
      'LangGraph',
      'Tool Calling',
      'MCP',
      'Agent Orchestration',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    description: 'Services and data layers designed to stay fast, consistent, and boring under load.',
    icon: Server,
    items: [
      'Python',
      'FastAPI',
      'Django',
      'Microservices',
      'PostgreSQL',
      'Redis',
      'Async Processing',
      'Event-Driven Architecture',
    ],
  },
  {
    id: 'infra',
    title: 'AI Infrastructure & LLMOps',
    description: 'The plumbing that takes AI from a notebook to something you can trust in production.',
    icon: Cloud,
    items: [
      'Model Integration',
      'Agent Observability',
      'LLM Evaluation',
      'Docker',
      'AWS',
      'CI/CD',
      'Production Deployment',
    ],
  },
  {
    id: 'product',
    title: 'Product Engineering',
    description: 'Turning fuzzy ideas into clear specs, clean APIs, and working software — quickly.',
    icon: Boxes,
    items: [
      'Product Architecture',
      'API Design',
      'System Design',
      'Full-Stack Collaboration',
      'Spec-Driven Development',
      'Rapid Prototyping',
    ],
  },
]

export type StackCategory = {
  id: string
  title: string
  icon: LucideIcon
  items: string[]
}

export const techStack: StackCategory[] = [
  {
    id: 'ai',
    title: 'AI',
    icon: Bot,
    items: ['Python', 'LangChain', 'LangGraph', 'Hugging Face', 'RAG', 'MCP', 'LLMs'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    items: ['FastAPI', 'Django', 'SQLAlchemy', 'Pydantic', 'REST APIs', 'WebSockets'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Vector Databases'],
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    icon: Layers,
    items: ['AWS', 'Docker', 'Linux', 'Nginx', 'CI/CD'],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    icon: Workflow,
    items: ['Microservices', 'System Design', 'Distributed Systems', 'RBAC', 'Multi-Tenant Architecture'],
  },
]
