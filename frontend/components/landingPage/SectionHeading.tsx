import type { ReactNode } from "react"
import { Badge } from "@/packages/ui/badge"
import { cn } from "@/lib/utils"

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-7 gap-2 border-foreground/15 bg-background/60 px-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur",
        className
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-primary" />
      {children}
    </Badge>
  )
}

/**
 * The one prominent word in a headline. Everything else is Inter; this gets the
 * brand display face. `face` picks which: "blinds" (italic script) or "anzo" (condensed caps).
 */
export function Prominent({
  children,
  face = "blinds",
  className,
}: {
  children: ReactNode
  face?: "blinds" | "anzo"
  className?: string
}) {
  return (
    <span
      className={cn(
        "font-normal",
        face === "blinds" ? "font-blinds italic" : "font-anzo uppercase tracking-normal",
        className
      )}
    >
      {children}
    </span>
  )
}

// Prominent word painted with the accent. Used once per headline at most.
export function Mark({
  children,
  face = "blinds",
  className,
}: {
  children: ReactNode
  face?: "blinds" | "anzo"
  className?: string
}) {
  return (
    <Prominent
      face={face}
      className={cn("rounded-md bg-primary px-[0.18em] pb-[0.02em] text-primary-foreground", className)}
    >
      {children}
    </Prominent>
  )
}

/**
 * Section-level heading block. Owns the type scale so every section shares it:
 * eyebrow → h2 (display) → muted sub. Headlines pass their own font classes.
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
        "flex max-w-3xl flex-col gap-5",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.035em]">{title}</h2>
      {sub ? <p className="max-w-xl text-balance text-base text-muted-foreground md:text-lg">{sub}</p> : null}
    </div>
  )
}
