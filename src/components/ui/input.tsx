import * as React from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-11 w-full min-w-0 rounded-xl border border-input bg-background/60 px-3.5 text-[15px] text-foreground transition-colors outline-none placeholder:text-subtle-foreground',
        'focus-visible:border-product/60 focus-visible:ring-4 focus-visible:ring-product/10 focus-visible:outline-none',
        'aria-invalid:border-destructive/70 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
