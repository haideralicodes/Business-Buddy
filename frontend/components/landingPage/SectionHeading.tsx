import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Bracketed mono eyebrow (Cognivis): tiny uppercase mono on a faint fill with
 * four 8px corner brackets. Neutral on purpose; the accent budget is spent on
 * the CTA, the hero panel, and one emphasized word.
 */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  const corner = "pointer-events-none absolute size-2 border-foreground/60"
  return (
    <span
      className={cn(
        "relative inline-flex h-9 items-center bg-surface px-4 font-mono text-label uppercase text-foreground",
        className
      )}
    >
      <span aria-hidden className={cn(corner, "-left-px -top-px border-l border-t")} />
      <span aria-hidden className={cn(corner, "-right-px -top-px border-r border-t")} />
      <span aria-hidden className={cn(corner, "-bottom-px -left-px border-b border-l")} />
      <span aria-hidden className={cn(corner, "-bottom-px -right-px border-b border-r")} />
      {children}
    </span>
  )
}

/**
 * The one prominent word in a headline, in the handwritten display face.
 * The script has one weight and a small x-height, so it is set larger than
 * the headline (1.18em) rather than bolder, with the headline's negative
 * tracking undone (scripts need their connecting strokes to touch). Colour is
 * primary-ink: the brand pink in dark mode, a readable cut of it in light.
 */
export function Prominent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-display text-[1.18em] font-normal not-italic leading-none tracking-normal text-primary", className)}>
      {children}
    </span>
  )
}

// Prominent word on a solid brand pill. Reserved for the closing CTA.
export function Mark({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Prominent className={cn("rounded-md bg-primary text-primary-foreground", className)}>
      {children}
    </Prominent>
  )
}

/**
 * Section heading block on the family's measured scale:
 * eyebrow → 28px → h2 (40–48px, Inter 600, -0.03em) → 20px → muted sub (18px, max 520px).
 */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
}: {
  eyebrow: ReactNode
  title: ReactNode
  sub?: ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-7 text-balance text-heading font-normal">
        {title}
      </h2>
      {sub ? (
        <p className="mt-5 max-w-[520px] text-balance text-[17px] leading-[1.55] text-muted-foreground md:text-lg">{sub}</p>
      ) : null}
    </div>
  )
}
