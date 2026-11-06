import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  const text = profile.logo.replace(/\.$/, '')
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${profile.name} — home`}
      className={cn('text-lg font-bold tracking-[-0.06em] text-foreground', className)}
    >
      {text}
      <span className="text-brand">.</span>
    </Link>
  )
}
