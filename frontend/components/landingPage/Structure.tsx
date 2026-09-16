import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Exposed-structure primitives for the light-structured layout: a bounded
 * content column with visible 1px rails, hatched bands between blocks,
 * registration ticks on the hero box, and `+` crosshairs where rails meet
 * dividers. Decoration reads at the lowest contrast on the page on purpose.
 */

export const RAIL_WIDTH = "max-w-[1320px]"

export function Rails({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer"
}) {
  return (
    <Tag className={cn("relative mx-auto border-x border-line", RAIL_WIDTH, className)}>{children}</Tag>
  )
}

export function Hatch({ className, tall }: { className?: string; tall?: boolean }) {
  return (
    <div className={cn("border-y border-line", className)}>
      <Rails className={cn("bg-hatching", tall ? "h-14" : "h-8 md:h-10")}>
        <Crosshair className="-left-[5px] -top-[5px]" />
        <Crosshair className="-right-[5px] -top-[5px]" />
      </Rails>
    </div>
  )
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("border-t border-line", className)}>
      <Rails className="h-0 border-y-0">
        <Crosshair className="-left-[5px] -top-[5px]" />
        <Crosshair className="-right-[5px] -top-[5px]" />
      </Rails>
    </div>
  )
}

// 9px `+` at a rail/divider intersection.
export function Crosshair({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("pointer-events-none absolute size-[9px] text-muted-foreground/70", className)}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
    </span>
  )
}

// 8px dark registration ticks on the four corners of a box.
export function Ticks() {
  const base = "pointer-events-none absolute size-2 border-foreground"
  return (
    <>
      <span aria-hidden className={cn(base, "-left-px -top-px border-l border-t")} />
      <span aria-hidden className={cn(base, "-right-px -top-px border-r border-t")} />
      <span aria-hidden className={cn(base, "-bottom-px -left-px border-b border-l")} />
      <span aria-hidden className={cn(base, "-bottom-px -right-px border-b border-r")} />
    </>
  )
}
