import type { ComponentProps } from "react"
import { Card } from "@/packages/ui/card"
import { cn } from "@/lib/utils"

export type StageTone = "brand" | "cool" | "warm"

const TONE = { brand: "bg-stage-brand", cool: "bg-stage-cool", warm: "bg-stage-warm" } as const

/**
 * The one pastel field in the system: a `stage` Card with a tone and, when
 * asked, the dither texture. Feature cards, the closing CTA and the auth
 * page's product panel are all this component, so they can't drift apart.
 */
export function Stage({
  tone = "brand",
  dither = false,
  className,
  children,
  ...props
}: ComponentProps<typeof Card> & { tone?: StageTone; dither?: boolean }) {
  return (
    <Card variant="stage" size="none" className={cn(TONE[tone], className)} {...props}>
      {dither ? <div aria-hidden className="bg-dither pointer-events-none absolute inset-0 opacity-50" /> : null}
      {children}
    </Card>
  )
}
