import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { profile, mailto } from '@/data/profile'
import { cn } from '@/lib/utils'

export const socialLinks = [
  { label: 'GitHub', href: profile.social.github, icon: GitHubIcon, external: true },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: LinkedInIcon, external: true },
  { label: 'Email', href: mailto(), icon: Mail, external: false },
] as const

export function SocialLinks({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' }) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {socialLinks.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={cn(
              'inline-flex items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
              size === 'sm' ? 'size-8' : 'size-10',
            )}
          >
            <Icon className={size === 'sm' ? 'size-4' : 'size-[18px]'} />
          </a>
        </li>
      ))}
    </ul>
  )
}
