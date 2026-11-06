import type { ProjectVisual as Kind } from '@/data/projects'

const box = 'fill-[var(--card)] stroke-[var(--border)]'
const label = 'fill-[var(--muted-foreground)] font-mono text-[10px]'
const line = 'stroke-[var(--border)]'
const accent = 'stroke-[var(--brand)]'

function Node({ x, y, w = 104, h = 30, text, hot = false }: { x: number; y: number; w?: number; h?: number; text: string; hot?: boolean }) {
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={8} className={hot ? `${box} ${accent}` : box} strokeWidth={1} />
      <text x={x} y={y + 3.5} textAnchor="middle" className={hot ? 'fill-[var(--foreground)] font-mono text-[10px]' : label}>
        {text}
      </text>
    </g>
  )
}

function Agents() {
  const nodes = [
    { x: 80, y: 60, t: 'Planner' },
    { x: 320, y: 60, t: 'Retriever · RAG' },
    { x: 80, y: 200, t: 'Human review' },
    { x: 320, y: 200, t: 'Tools · MCP' },
  ]
  return (
    <>
      {nodes.map((n) => (
        <line key={n.t} x1={200} y1={130} x2={n.x} y2={n.y} className={line} strokeDasharray="3 4" />
      ))}
      <circle cx={200} cy={130} r={46} className="fill-[var(--brand-soft)] stroke-[var(--brand)]" strokeOpacity={0.35} />
      <Node x={200} y={130} w={118} text="Orchestrator" hot />
      {nodes.map((n) => (
        <Node key={n.t} x={n.x} y={n.y} w={n.t.length > 10 ? 120 : 104} text={n.t} />
      ))}
      <text x={200} y={250} textAnchor="middle" className={label} opacity={0.7}>
        trace · evaluate · iterate
      </text>
    </>
  )
}

function Logistics() {
  const rows = ['Driver', 'Truck', 'Trailer', 'Pilot car']
  return (
    <>
      <Node x={62} y={130} w={84} text="Request" />
      <line x1={104} y1={130} x2={136} y2={130} className={line} />
      <Node x={186} y={96} w={100} text="Eligibility" />
      <Node x={186} y={164} w={100} text="Business rules" />
      <line x1={136} y1={96} x2={136} y2={164} className={line} />
      <line x1={236} y1={130} x2={262} y2={130} className={accent} />
      <line x1={236} y1={96} x2={236} y2={164} className={line} />
      <rect x={262} y={52} width={122} height={156} rx={10} className={box} />
      <text x={276} y={72} className={label}>
        ranked
      </text>
      {rows.map((r, i) => (
        <g key={r}>
          <rect x={274} y={82 + i * 30} width={98} height={22} rx={6} className={i === 0 ? 'fill-[var(--brand-soft)]' : 'fill-[var(--muted)]'} />
          <text x={284} y={97 + i * 30} className={i === 0 ? 'fill-[var(--foreground)] font-mono text-[10px]' : label}>
            {r}
          </text>
        </g>
      ))}
      <text x={186} y={222} textAnchor="middle" className={label} opacity={0.7}>
        deterministic · cached
      </text>
    </>
  )
}

function Realtime() {
  const clients = [50, 110, 170, 230].map((y, i) => ({ y, t: `client ${i + 1}` }))
  return (
    <>
      {clients.map((c) => (
        <g key={c.t}>
          <line x1={110} y1={c.y} x2={190} y2={140} className={line} strokeDasharray="3 4" />
          <Node x={62} y={c.y} w={88} text={c.t} />
        </g>
      ))}
      <Node x={210} y={140} w={92} text="WebSocket" hot />
      <line x1={256} y1={140} x2={286} y2={140} className={accent} />
      <Node x={336} y={90} w={96} text="Matchmaking" />
      <Node x={336} y={140} w={96} text="State sync" />
      <Node x={336} y={190} w={96} text="Leaderboard" />
      <line x1={286} y1={90} x2={286} y2={190} className={line} />
      <text x={336} y={232} textAnchor="middle" className={label} opacity={0.7}>
        redis pub/sub
      </text>
    </>
  )
}

function Erp() {
  const modules = ['Sales', 'Inventory', 'Finance', 'HR', 'Projects', 'Reports']
  return (
    <>
      {[0, 1].map((t) => (
        <g key={t}>
          <rect x={40 + t * 168} y={40} width={152} height={150} rx={10} className={box} />
          <text x={54 + t * 168} y={60} className={label}>
            tenant_{t === 0 ? 'a' : 'b'}
          </text>
          {modules.map((m, i) => (
            <g key={m}>
              <rect
                x={52 + t * 168 + (i % 2) * 66}
                y={72 + Math.floor(i / 2) * 36}
                width={60}
                height={28}
                rx={6}
                className={i === 2 && t === 0 ? 'fill-[var(--brand-soft)]' : 'fill-[var(--muted)]'}
              />
              <text
                x={82 + t * 168 + (i % 2) * 66}
                y={90 + Math.floor(i / 2) * 36}
                textAnchor="middle"
                className={i === 2 && t === 0 ? 'fill-[var(--foreground)] font-mono text-[9.5px]' : 'fill-[var(--muted-foreground)] font-mono text-[9.5px]'}
              >
                {m}
              </text>
            </g>
          ))}
        </g>
      ))}
      <line x1={116} y1={190} x2={116} y2={212} className={line} />
      <line x1={284} y1={190} x2={284} y2={212} className={line} />
      <rect x={40} y={212} width={320} height={30} rx={8} className={`${box} ${accent}`} />
      <text x={200} y={231} textAnchor="middle" className="fill-[var(--foreground)] font-mono text-[10px]">
        REST API · PostgreSQL
      </text>
    </>
  )
}

const visuals: Record<Kind, () => React.JSX.Element> = {
  agents: Agents,
  logistics: Logistics,
  realtime: Realtime,
  erp: Erp,
}

export function ProjectVisual({ kind, title }: { kind: Kind; title: string }) {
  const Visual = visuals[kind]
  return (
    <div className="bg-grid relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[var(--glow-strength)]"
        style={{ background: 'radial-gradient(60% 60% at 50% 45%, color-mix(in oklab, var(--brand) 7%, transparent), transparent)' }}
      />
      <svg viewBox="0 0 400 270" role="img" aria-label={`Schematic of ${title}`} className="relative h-full w-full p-3">
        <Visual />
      </svg>
    </div>
  )
}
