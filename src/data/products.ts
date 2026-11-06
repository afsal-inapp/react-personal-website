import type { LucideIcon } from 'lucide-react'
import {
  ArrowRightLeft,
  BarChart3,
  Bed,
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Captions,
  Clapperboard,
  Clock,
  FileText,
  GraduationCap,
  HeartPulse,
  Home,
  Layers,
  LayoutTemplate,
  LineChart,
  MessageCircleQuestion,
  MessagesSquare,
  Mic,
  Palette,
  PhoneCall,
  PiggyBank,
  Plane,
  Repeat,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  Users,
  UtensilsCrossed,
  Wallet,
  Wand2,
  Workflow,
} from 'lucide-react'

/** Overall product maturity. Only mark a product `live` when it genuinely is. */
export type ProductStatus = 'building' | 'live' | 'experimental'

/** Per-capability maturity, so planned work is never presented as shipped. */
export type CapabilityStatus = 'available' | 'in-development' | 'planned'

export type ProductVisualKind = 'voice' | 'reel' | 'finance'

export type Cta = { label: string; href: string }

export type ProductFeature = {
  title: string
  description: string
  icon: LucideIcon
  status: CapabilityStatus
}

export type Product = {
  slug: string
  name: string
  category: string
  shortDescription: string
  status: ProductStatus
  icon: LucideIcon
  visual: ProductVisualKind
  /** Accent colours for the product's own identity, tuned for each theme. */
  theme: { dark: string; light: string }
  hero: {
    eyebrow: string
    headline: string
    subheading: string
    primaryCta: Cta
    secondaryCta: Cta
  }
  problem: { heading: string; text: string; points: string[] }
  solution: { heading: string; text: string; points: string[] }
  features: ProductFeature[]
  workflow: { title: string; description: string }[]
  architecture: {
    heading: string
    description: string
    layers: { label: string; nodes: string[] }[]
  }
  audience: {
    heading: string
    description: string
    segments: { label: string; icon: LucideIcon }[]
  }
  mockups: { heading: string; description: string }
  cta: { heading: string; description: string; primary: Cta; secondary: Cta }
  form?: {
    heading: string
    description: string
    businessTypes: string[]
    automateLabel: string
    automatePlaceholder: string
    submitLabel: string
  }
  /** Extra caveat shown alongside the product status notice. */
  disclaimer?: string
  seo: { title: string; description: string }
}

export const productStatusMeta: Record<ProductStatus, { label: string; description: string }> = {
  building: { label: 'Building', description: 'Actively in development. Not yet generally available.' },
  live: { label: 'Live', description: 'Available for use.' },
  experimental: { label: 'Experimental', description: 'An early exploration. Scope may change.' },
}

export const capabilityStatusMeta: Record<CapabilityStatus, { label: string }> = {
  available: { label: 'Available' },
  'in-development': { label: 'In development' },
  planned: { label: 'Planned' },
}

const businessTypes = [
  'Hotel',
  'Resort',
  'Restaurant',
  'Hospital / Clinic',
  'Real estate agency',
  'Travel agency',
  'Service business',
  'Other',
]

export const products: Product[] = [
  {
    slug: 'ai-calling-agent',
    name: 'AI Calling Agent',
    category: 'AI Voice Automation',
    shortDescription:
      'AI-powered phone agents for hotels and businesses that automate customer calls, enquiries and booking workflows.',
    status: 'building',
    icon: PhoneCall,
    visual: 'voice',
    theme: { dark: '#38bdf8', light: '#0369a1' },
    hero: {
      eyebrow: 'AI Voice Automation',
      headline: 'Never miss a business call again.',
      subheading:
        'Deploy intelligent AI voice agents that answer calls, handle customer enquiries, and automate business conversations around the clock.',
      primaryCta: { label: 'Integrate AI Calling Agent', href: '#integrate' },
      secondaryCta: { label: 'Request a Demo', href: '#integrate' },
    },
    problem: {
      heading: 'Every unanswered call is a customer who calls someone else.',
      text: 'Front desks get busy, calls arrive after hours, and staff spend much of the day answering the same handful of questions.',
      points: [
        'Calls go unanswered during peak hours, nights, and holidays.',
        'Staff repeat the same answers about pricing, availability, and directions.',
        'Booking and enquiry details are captured inconsistently, or not at all.',
        'There is little visibility into why customers call in the first place.',
      ],
    },
    solution: {
      heading: 'An AI agent that answers like your best front-desk staff.',
      text: 'AI Calling Agent is designed to pick up every call, understand what the caller needs using your own business knowledge, capture the details that matter, and hand off to a human when it should.',
      points: [
        'Grounded in your business information, not generic answers.',
        'Structured capture of bookings and enquiries.',
        'Clear escalation path to your team for complex requests.',
      ],
    },
    features: [
      { title: 'Natural AI voice conversations', description: 'Low-latency, natural-sounding conversations that let callers speak normally.', icon: Mic, status: 'planned' },
      { title: '24/7 incoming call handling', description: 'Answer calls at any hour, including nights, weekends, and holidays.', icon: Clock, status: 'planned' },
      { title: 'Business knowledge integration', description: 'Ground the agent in your services, pricing, policies, and FAQs.', icon: BookOpen, status: 'planned' },
      { title: 'FAQ automation', description: 'Resolve repetitive questions instantly and consistently.', icon: MessageCircleQuestion, status: 'planned' },
      { title: 'Booking and enquiry capture', description: 'Collect names, dates, preferences, and contact details in a structured format.', icon: CalendarCheck, status: 'planned' },
      { title: 'Human call transfer', description: 'Hand complex or sensitive calls to the right staff member.', icon: ArrowRightLeft, status: 'planned' },
      { title: 'Conversation history & transcripts', description: 'Review every conversation with a searchable transcript.', icon: FileText, status: 'planned' },
      { title: 'Call analytics', description: 'Understand call volumes, common topics, and outcomes.', icon: BarChart3, status: 'planned' },
      { title: 'Configurable business workflows', description: 'Define what the agent should do for each type of request.', icon: Settings2, status: 'planned' },
      { title: 'Existing phone infrastructure', description: 'Designed to work with your current business phone number.', icon: Workflow, status: 'planned' },
    ],
    workflow: [
      { title: 'Connect your business phone number', description: 'Route calls from your existing number to the AI agent.' },
      { title: 'Configure your AI agent', description: 'Add business knowledge — services, pricing, policies, and FAQs.' },
      { title: 'Customers call your business', description: 'Calls are answered instantly, at any time of day.' },
      { title: 'AI understands and handles requests', description: 'The agent listens, reasons over your knowledge, and responds.' },
      { title: 'Bookings and enquiries are captured', description: 'Relevant details are recorded in a structured format for your team.' },
      { title: 'Complex requests go to staff', description: 'Calls that need a human are transferred with context.' },
    ],
    architecture: {
      heading: 'How the system is designed',
      description:
        'A real-time voice pipeline sits between your phone line and an LLM-powered agent that is grounded in your business knowledge and connected to the tools it needs.',
      layers: [
        { label: 'Telephony', nodes: ['Business phone number', 'Telephony provider', 'Call routing'] },
        { label: 'Voice pipeline', nodes: ['Speech-to-text', 'Voice agent (LLM)', 'Text-to-speech'] },
        { label: 'Knowledge & tools', nodes: ['Business knowledge (RAG)', 'Booking capture', 'Human transfer'] },
        { label: 'Operations', nodes: ['Transcripts', 'Call analytics', 'Workflow configuration'] },
      ],
    },
    audience: {
      heading: 'Built for businesses that live on the phone',
      description: 'Anywhere a missed call means a missed booking, enquiry, or patient.',
      segments: [
        { label: 'Hotels', icon: Bed },
        { label: 'Resorts', icon: Sparkles },
        { label: 'Restaurants', icon: UtensilsCrossed },
        { label: 'Hospitals', icon: HeartPulse },
        { label: 'Real estate agencies', icon: Home },
        { label: 'Travel agencies', icon: Plane },
        { label: 'Service businesses', icon: Store },
      ],
    },
    mockups: {
      heading: 'A look at the experience',
      description: 'Concept designs of the live call console. Illustrative only — not real calls or customer data.',
    },
    cta: {
      heading: 'Bring AI Calling Agent to your business.',
      description:
        'AI Calling Agent is in active development. Share your use case to explore an integration or request a walkthrough of the current build.',
      primary: { label: 'Integrate AI Calling Agent', href: '#integrate' },
      secondary: { label: 'Request a Demo', href: '#integrate' },
    },
    form: {
      heading: 'Integration enquiry',
      description:
        'Tell me about your business and what you’d like to automate. I’ll get back to you personally.',
      businessTypes,
      automateLabel: 'What do you want to automate?',
      automatePlaceholder: 'e.g. Room availability enquiries, after-hours bookings, FAQs about check-in…',
      submitLabel: 'Send enquiry',
    },
    seo: {
      title: 'AI Calling Agent — Never miss a business call again',
      description:
        'AI voice agents for hotels and businesses that answer calls, handle enquiries, and capture bookings around the clock. Currently in development.',
    },
  },
  {
    slug: 'ai-reel-studio',
    name: 'AI Reel Studio',
    category: 'Agentic AI / Content Automation',
    shortDescription:
      'An agentic platform that turns ideas and business briefs into branded social media videos.',
    status: 'building',
    icon: Clapperboard,
    visual: 'reel',
    theme: { dark: '#fb7185', light: '#be123c' },
    hero: {
      eyebrow: 'Agentic AI · Content Automation',
      headline: 'From a brief to a branded reel.',
      subheading:
        'An agentic studio that turns ideas and business briefs into on-brand, short-form social videos — scripted, storyboarded, and assembled for you.',
      primaryCta: { label: 'Join the early list', href: '#get-started' },
      secondaryCta: { label: 'See how it works', href: '#how-it-works' },
    },
    problem: {
      heading: 'Consistent video content is slow, expensive, and hard to keep on-brand.',
      text: 'Short-form video is where attention is, but most small teams don’t have the time, tools, or editing skills to produce it every week.',
      points: [
        'Turning an idea into a script, shots, and edit takes hours.',
        'Brand colours, fonts, and tone drift from video to video.',
        'Agencies and freelancers are costly for frequent content.',
      ],
    },
    solution: {
      heading: 'A team of AI agents that works like a small studio.',
      text: 'Specialised agents collaborate — one plans, one writes, one directs, one edits — while you stay in control of every creative decision.',
      points: [
        'Start from a single sentence or a full business brief.',
        'Every output follows your brand kit.',
        'Review and revise at each stage before anything is rendered.',
      ],
    },
    features: [
      { title: 'Brief-to-script generation', description: 'Turn an idea or brief into a hook-first script for short-form video.', icon: Wand2, status: 'planned' },
      { title: 'Brand kit', description: 'Logos, colours, fonts, and tone of voice applied automatically.', icon: Palette, status: 'planned' },
      { title: 'Storyboard planning', description: 'Scene-by-scene plans with shots, on-screen text, and timing.', icon: LayoutTemplate, status: 'planned' },
      { title: 'Multi-agent pipeline', description: 'Planner, writer, director, and editor agents working together.', icon: Users, status: 'planned' },
      { title: 'Voiceover & captions', description: 'Generated narration with accurate, styled captions.', icon: Captions, status: 'planned' },
      { title: 'Social-ready formats', description: 'Vertical exports sized for Reels, Shorts, and other platforms.', icon: Layers, status: 'planned' },
      { title: 'Human review loop', description: 'Approve or revise the script, storyboard, and cut at each step.', icon: ShieldCheck, status: 'planned' },
      { title: 'Content series', description: 'Plan recurring content themes from a single brief.', icon: Repeat, status: 'planned' },
    ],
    workflow: [
      { title: 'Share an idea or brief', description: 'A sentence, a product launch, or a full campaign brief.' },
      { title: 'Agents draft the script', description: 'The planner and writer agents shape the hook, message, and structure.' },
      { title: 'Review the storyboard', description: 'See every scene before anything is generated, and adjust freely.' },
      { title: 'Studio assembles the video', description: 'Scenes, brand kit, voiceover, and captions come together.' },
      { title: 'Revise and export', description: 'Make final tweaks and export in social-ready formats.' },
    ],
    architecture: {
      heading: 'An agentic production pipeline',
      description:
        'An orchestrated multi-agent workflow, with human checkpoints between each stage, feeding a deterministic render pipeline.',
      layers: [
        { label: 'Inputs', nodes: ['Idea or brief', 'Brand kit', 'Media assets'] },
        { label: 'Agents', nodes: ['Planner', 'Scriptwriter', 'Director', 'Editor'] },
        { label: 'Generation', nodes: ['Visuals', 'Voiceover', 'Captions'] },
        { label: 'Output', nodes: ['Render pipeline', 'Review', 'Export'] },
      ],
    },
    audience: {
      heading: 'For teams that need to show up on social',
      description: 'Anyone who needs regular, on-brand video without a production team.',
      segments: [
        { label: 'Small businesses', icon: Store },
        { label: 'Marketing teams', icon: Target },
        { label: 'Agencies', icon: Briefcase },
        { label: 'Creators', icon: Sparkles },
        { label: 'Hospitality brands', icon: UtensilsCrossed },
        { label: 'E-commerce brands', icon: ShoppingBag },
      ],
    },
    mockups: {
      heading: 'Inside the studio',
      description: 'Concept designs of the brief, storyboard, and timeline views. Illustrative only.',
    },
    cta: {
      heading: 'Want early access to AI Reel Studio?',
      description: 'AI Reel Studio is being built now. Get in touch to share your use case or follow progress.',
      primary: { label: 'Join the early list', href: 'mailto' },
      secondary: { label: 'Follow on LinkedIn', href: 'linkedin' },
    },
    seo: {
      title: 'AI Reel Studio — From a brief to a branded reel',
      description:
        'An agentic AI platform that turns ideas and business briefs into branded social media videos. Currently in development.',
    },
  },
  {
    slug: 'personal-cfo-agent',
    name: 'Personal CFO Agent',
    category: 'Personal AI / FinTech',
    shortDescription:
      'An intelligent personal finance assistant for financial tracking, analysis and planning.',
    status: 'experimental',
    icon: Wallet,
    visual: 'finance',
    theme: { dark: '#34d399', light: '#047857' },
    hero: {
      eyebrow: 'Personal AI · FinTech',
      headline: 'A CFO for your personal finances.',
      subheading:
        'An intelligent assistant that helps you track spending, understand where your money goes, and plan ahead — in plain language.',
      primaryCta: { label: 'Get updates', href: '#get-started' },
      secondaryCta: { label: 'See how it works', href: '#how-it-works' },
    },
    problem: {
      heading: 'Your money is spread everywhere. Answers are not.',
      text: 'Accounts, cards, and wallets each tell part of the story. Spreadsheets are tedious, and most finance apps show charts without explaining what to do next.',
      points: [
        'Tracking expenses manually is easy to abandon.',
        'It’s hard to see the full picture across accounts.',
        'Planning for goals involves guesswork.',
      ],
    },
    solution: {
      heading: 'Ask your finances questions, and get clear answers.',
      text: 'Personal CFO Agent is an AI assistant that organises your financial data and lets you explore it conversationally — so you can understand your habits and plan with confidence.',
      points: [
        'Conversational analysis over your own data.',
        'Budgets and goals that stay up to date.',
        'Privacy as a design principle, not an afterthought.',
      ],
    },
    features: [
      { title: 'Expense tracking', description: 'Log or import transactions, automatically categorised.', icon: Wallet, status: 'planned' },
      { title: 'Ask in plain language', description: '“How much did I spend on travel this quarter?”', icon: MessagesSquare, status: 'planned' },
      { title: 'Spending analysis', description: 'Trends and breakdowns that explain where money goes.', icon: LineChart, status: 'planned' },
      { title: 'Budget planning', description: 'Set monthly budgets and see how you’re tracking.', icon: PiggyBank, status: 'planned' },
      { title: 'Goal tracking', description: 'Plan for savings goals and see what it takes to reach them.', icon: Target, status: 'planned' },
      { title: 'Recurring payments', description: 'Spot subscriptions and recurring charges.', icon: Repeat, status: 'planned' },
      { title: 'Periodic summaries', description: 'A concise monthly review of your finances.', icon: FileText, status: 'planned' },
      { title: 'Privacy-first design', description: 'Your financial data stays yours.', icon: ShieldCheck, status: 'planned' },
    ],
    workflow: [
      { title: 'Add your transactions', description: 'Import statements or log expenses as you go.' },
      { title: 'The agent organises them', description: 'Transactions are categorised into a clean personal ledger.' },
      { title: 'Ask questions', description: 'Explore spending, trends, and habits conversationally.' },
      { title: 'Set budgets and goals', description: 'Define targets and track progress over time.' },
      { title: 'Review and plan', description: 'Get periodic summaries and plan your next steps.' },
    ],
    architecture: {
      heading: 'A finance agent with the right tools',
      description:
        'Structured financial data, deterministic calculations, and an LLM agent that explains — never guesses — the numbers.',
      layers: [
        { label: 'Data', nodes: ['Statements', 'Manual entries', 'Budgets & goals'] },
        { label: 'Processing', nodes: ['Parser', 'Categoriser', 'Personal ledger'] },
        { label: 'Intelligence', nodes: ['Finance agent', 'Calculation tools', 'Planner'] },
        { label: 'Experience', nodes: ['Chat', 'Dashboard', 'Summaries'] },
      ],
    },
    audience: {
      heading: 'For anyone who wants clarity about money',
      description: 'Especially people juggling multiple accounts, irregular income, or big goals.',
      segments: [
        { label: 'Young professionals', icon: Briefcase },
        { label: 'Freelancers', icon: Sparkles },
        { label: 'Families', icon: Users },
        { label: 'Students', icon: GraduationCap },
        { label: 'Small business owners', icon: Building2 },
      ],
    },
    mockups: {
      heading: 'A glimpse of the assistant',
      description: 'Concept designs of the dashboard and chat. Sample figures are illustrative only.',
    },
    cta: {
      heading: 'Interested in Personal CFO Agent?',
      description: 'This is an early, experimental product. Reach out if you’d like to follow along or share feedback.',
      primary: { label: 'Get updates', href: 'mailto' },
      secondary: { label: 'Follow on GitHub', href: 'github' },
    },
    disclaimer: 'Personal CFO Agent is an informational tool and does not provide financial advice.',
    seo: {
      title: 'Personal CFO Agent — A CFO for your personal finances',
      description:
        'An intelligent personal finance assistant for tracking, analysis and planning. Experimental and in early development.',
    },
  },
]

export const getProduct = (slug: string | undefined) => products.find((p) => p.slug === slug)
