import * as React from 'react'
import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-28 w-full rounded-xl border border-input bg-background/60 px-3.5 py-3 text-[15px] text-foreground transition-colors outline-none placeholder:text-subtle-foreground',
        'focus-visible:border-product/60 focus-visible:ring-4 focus-visible:ring-product/10 focus-visible:outline-none',
        'aria-invalid:border-destructive/70 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
