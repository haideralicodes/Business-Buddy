import type { ReactNode } from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import ThemeToggle from "@/components/landingPage/ThemeToggle"
import { Eyebrow } from "@/components/landingPage/SectionHeading"
import { Ticks } from "@/components/landingPage/Structure"
import { Button } from "@/packages/ui/button"
import { Label } from "@/packages/ui/label"
import { AppleIcon, FacebookIcon, GoogleIcon } from "./BrandIcons"

// Invented quote for the stage. Not a real customer.
const TESTIMONIAL = {
  tags: ["Bakery", "Two locations"],
  quote:
    "I used to lose Sunday nights to captions and a half-finished website. Buddy does both now, and the site actually looks like us.",
  name: "Nadia Rahman",
  role: "Owner",
  company: "Aurora Bakery",
}

/**
 * Two-column auth page inside the framed canvas: the form on the left
 * (logo, title, muted sub, fields, brand CTA, social row), a pastel stage on
 * the right carrying a testimonial card. Same tokens and radii as the landing
 * page, so it reads as the same product.
 */
export function AuthShell({
  title,
  sub,
  children,
  footer,
}: {
  title: ReactNode
  sub: string
  children: ReactNode
  footer: ReactNode
}) {
  return (
    <div className="grid flex-1 lg:grid-cols-2">
      <div className="relative flex flex-col px-6 py-8 sm:px-12 md:px-16 lg:px-20">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="size-7" />
            <span className="text-[15px] font-semibold tracking-tight">Business Buddy</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="h-full w-full flex items-center justify-center">
          <div className="my-auto w-full max-w-[440px] py-12">
            <h1 className="text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">{title}</h1>
            <p className="mt-3 text-[15px] leading-[1.55] text-muted-foreground">{sub}</p>

            <div className="mt-8">{children}</div>

            <div className="my-7 flex items-center gap-4">
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">or</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <SocialRow />

            <p className="mt-7 text-center text-sm text-muted-foreground">{footer}</p>
          </div>
        </div>
      </div>

      <Stage />
    </div>
  )
}

export function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string
  label: string
  hint?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id}>{label}</Label>
        {hint}
      </div>
      {children}
    </div>
  )
}

function SocialRow() {
  const providers = [
    { name: "Google", Icon: GoogleIcon },
    { name: "Facebook", Icon: FacebookIcon },
    { name: "Apple", Icon: AppleIcon },
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {providers.map(({ name, Icon }) => (
        <Button key={name} type="button" variant="secondary" size="xl" className="rounded-full" aria-label={`Continue with ${name}`}>
          <Icon className="size-5" />
        </Button>
      ))}
    </div>
  )
}

function Stage() {
  return (
    <div className="relative hidden border-l border-line p-6 lg:flex">
      <div
        className="relative flex flex-1 flex-col justify-end overflow-hidden rounded-xl p-6"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in oklch, var(--primary) 34%, var(--card)) 0%, color-mix(in oklch, var(--primary) 10%, var(--card)) 55%, color-mix(in oklch, oklch(0.8 0.1 60) 30%, var(--card)) 100%)",
        }}
      >
        <div aria-hidden className="bg-dither pointer-events-none absolute inset-0 opacity-50" />
        <Ticks />

        <div className="relative flex flex-wrap gap-2">
          {TESTIMONIAL.tags.map((t) => (
            <Eyebrow key={t} className="h-7 bg-card/80 px-3 text-[11px] backdrop-blur">
              {t}
            </Eyebrow>
          ))}
        </div>
        <figure className="relative mt-3 rounded-xl border border-black/5 bg-card/90 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] backdrop-blur">
          <blockquote className="text-[17px] font-medium leading-[1.5] tracking-[-0.01em]">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            {TESTIMONIAL.name}
            <br />
            {TESTIMONIAL.role}, <span className="font-semibold text-foreground">{TESTIMONIAL.company}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
