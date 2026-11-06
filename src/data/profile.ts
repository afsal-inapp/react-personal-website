export type Availability = {
  /** Set to false to hide the status pill entirely. */
  enabled: boolean
  status: 'available' | 'limited' | 'unavailable'
  label: string
}

export const profile = {
  name: 'Mohammed Afsal',
  shortName: 'Afsal',
  logo: 'AF.',
  role: 'AI Engineer',
  positioning: 'AI Engineer | Forward-Deployed Engineer',
  label: 'AI Forward-Deployed Engineer',
  tagline: 'Building AI. Engineering Systems. Shipping Products.',
  location: 'Kerala, India',
  email: 'afsalkallingal7@gmail.com',
  photo: {
    src: '/images/afsal.png',
    webp: '/images/afsal.webp',
    webpSmall: '/images/afsal-640.webp',
    alt: 'Portrait of Mohammed Afsal',
    width: 900,
    height: 1125,
  },
  social: {
    github: 'https://github.com/Afsal-kallingal',
    linkedin: 'https://linkedin.com/in/afsalkallingal',
  },
  availability: {
    enabled: true,
    status: 'available',
    label: 'Open to interesting AI problems',
  } as Availability,

  hero: {
    headline: ['Building AI systems.', 'Turning ideas into reality.'],
    description:
      'I engineer intelligent systems, AI agents, and scalable software products — working across AI, backend, infrastructure, and product engineering.',
  },

  intro: [
    'I am an engineer passionate about building intelligent systems, AI agents, scalable backend architectures, and products that solve real-world problems.',
    'I work across AI engineering, backend systems, infrastructure, and product development — taking ideas from concept to production.',
  ],

  about: {
    heading: 'Engineer by mindset. Builder by nature.',
    paragraphs: [
      'I care less about which layer of the stack a problem lives in and more about whether it actually gets solved. Good engineering starts by understanding the business problem — the people, the constraints, the workflow — before a single line of code is written.',
      'From there I like to own the whole arc: designing the technical approach, building the AI-powered application, engineering the backend that keeps it reliable, and deploying the infrastructure it runs on.',
      'Shipping is the beginning, not the end. The most useful systems are the ones that keep improving through observation, feedback, and iteration.',
    ],
    lifecycle: [
      { title: 'Understand', text: 'Business problems, users, and constraints.' },
      { title: 'Design', text: 'Technical solutions and system architecture.' },
      { title: 'Build', text: 'AI-powered applications and agents.' },
      { title: 'Engineer', text: 'Reliable, scalable backend systems.' },
      { title: 'Deploy', text: 'Production infrastructure and delivery.' },
      { title: 'Iterate', text: 'Measure, learn, and improve the system.' },
    ],
    highlight:
      'I enjoy taking ownership beyond a single technology stack — wherever the problem needs me.',
  },

  buildingInPublic: {
    heading: 'Always building something.',
    paragraphs: [
      'I believe the best way to understand technology is to build with it.',
      'I experiment with AI, explore new engineering approaches, build products, and share what I learn.',
    ],
    themes: [
      {
        title: 'Learn deeply.',
        text: 'Go past the tutorial. Read the source, understand the trade-offs, and know why things work.',
      },
      {
        title: 'Build consistently.',
        text: 'Small, steady progress compounds. Prototypes become products when you keep showing up.',
      },
      {
        title: 'Share openly.',
        text: 'Write about what worked, what didn’t, and what I’d do differently next time.',
      },
    ],
  },

  contact: {
    heading: 'Have an interesting problem to solve?',
    description:
      'I’m always interested in connecting with people building products, exploring AI, and solving meaningful engineering problems.',
  },

  footer: {
    credit: 'Designed & built by Mohammed Afsal.',
    motto: 'Building AI. Building Systems. Building Products.',
  },

  seo: {
    title: 'Mohammed Afsal — AI Engineer & Forward-Deployed Engineer',
    description:
      'Mohammed Afsal is an AI Forward-Deployed Engineer building AI agents, multi-agent systems, RAG pipelines and scalable backend systems — from concept to production.',
  },
} as const

export const mailto = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${profile.email}${query ? `?${query}` : ''}`
}
