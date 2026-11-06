import { useId, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import type { Product } from '@/data/products'
import { mailto } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Values = {
  businessName: string
  businessType: string
  contactPerson: string
  phone: string
  email: string
  automate: string
}

type Errors = Partial<Record<keyof Values, string>>

type Status = 'idle' | 'submitting' | 'success' | 'mailto' | 'error'

const initial: Values = { businessName: '', businessType: '', contactPerson: '', phone: '', email: '', automate: '' }

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

function validate(v: Values): Errors {
  const e: Errors = {}
  if (!v.businessName.trim()) e.businessName = 'Please enter your business name.'
  if (!v.businessType) e.businessType = 'Please choose a business type.'
  if (!v.contactPerson.trim()) e.contactPerson = 'Please enter a contact name.'
  if (!/^[+()\d\s-]{7,20}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.automate.trim().length < 10) e.automate = 'Tell me a little more (at least 10 characters).'
  return e
}

export function IntegrationForm({ product }: { product: Product }) {
  const form = product.form
  const uid = useId()
  const [values, setValues] = useState<Values>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  if (!form) return null

  const id = (k: keyof Values) => `${uid}-${k}`
  const set = (k: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [k]: value }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }
  const fieldProps = (k: keyof Values) => ({
    id: id(k),
    name: k,
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${id(k)}-error` : undefined,
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0] as keyof Values
      document.getElementById(id(first))?.focus()
      return
    }

    setStatus('submitting')
    const payload = { product: product.name, ...values }

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus('success')
        setValues(initial)
      } catch {
        setStatus('error')
      }
      return
    }

    const body = [
      `Product: ${product.name}`,
      `Business name: ${values.businessName}`,
      `Business type: ${values.businessType}`,
      `Contact person: ${values.contactPerson}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      '',
      'What we want to automate:',
      values.automate,
    ].join('\n')
    window.location.href = mailto(`${product.name} — integration enquiry from ${values.businessName}`, body)
    setStatus('mailto')
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-2xl border border-product/30 bg-product-soft p-8">
        <CheckCircle2 className="size-8 text-product" aria-hidden />
        <h3 className="text-xl font-semibold tracking-tight">Thanks — your enquiry is in.</h3>
        <p className="text-muted-foreground">I’ll review it and get back to you personally by email.</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    )
  }

  const error = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${id(k)}-error`} className="text-[12.5px] text-destructive">
        {errors[k]}
      </p>
    ) : null

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-5 sm:p-7" aria-labelledby={`${uid}-title`}>
      <h3 id={`${uid}-title`} className="text-xl font-semibold tracking-tight">
        {form.heading}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{form.description}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={id('businessName')}>Business name</Label>
          <Input {...fieldProps('businessName')} autoComplete="organization" value={values.businessName} onChange={(e) => set('businessName')(e.target.value)} />
          {error('businessName')}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={id('businessType')}>Business type</Label>
          <Select value={values.businessType} onValueChange={set('businessType')}>
            <SelectTrigger {...fieldProps('businessType')}>
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              {form.businessTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error('businessType')}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={id('contactPerson')}>Contact person</Label>
          <Input {...fieldProps('contactPerson')} autoComplete="name" value={values.contactPerson} onChange={(e) => set('contactPerson')(e.target.value)} />
          {error('contactPerson')}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={id('phone')}>Phone number</Label>
          <Input {...fieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(e) => set('phone')(e.target.value)} />
          {error('phone')}
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={id('email')}>Email</Label>
          <Input {...fieldProps('email')} type="email" autoComplete="email" value={values.email} onChange={(e) => set('email')(e.target.value)} />
          {error('email')}
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={id('automate')}>{form.automateLabel}</Label>
          <Textarea {...fieldProps('automate')} placeholder={form.automatePlaceholder} value={values.automate} onChange={(e) => set('automate')(e.target.value)} />
          {error('automate')}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-subtle-foreground sm:max-w-xs">
          {endpoint
            ? 'Your enquiry is sent to me directly. Submitting does not connect any phone line or service.'
            : 'Submitting opens your email app with the details filled in. Nothing is connected to your phone line.'}
        </p>
        <Button type="submit" variant="brand" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? <Loader2 className="animate-spin" /> : <Send />}
          {status === 'submitting' ? 'Sending…' : form.submitLabel}
        </Button>
      </div>

      <div role="status" aria-live="polite">
        {status === 'mailto' && (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-muted p-3 text-[13px] text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-product" aria-hidden />
            Your email app should open with the enquiry ready to send. If it didn’t, email me at{' '}
            <a className="underline" href={mailto(`${product.name} — integration enquiry`)}>
              this address
            </a>
            .
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-destructive/10 p-3 text-[13px] text-destructive">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            Something went wrong sending your enquiry. Please try again, or email me directly.
          </p>
        )}
      </div>
    </form>
  )
}
