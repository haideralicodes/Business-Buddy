"use client"

import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/packages/ui/button"
import { cn } from "@/lib/utils"

/**
 * Primary action for every auth form. The arrow is hidden at rest and slides
 * in on hover. Long tail easing (fast start, slow settle) over 500ms reads as
 * smooth rather than snappy; the arrow trails the label by a beat. Its width
 * is reserved so the label doesn't shift.
 */
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]"
export default function AuthSubmit({
  children,
  pending,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { pending?: boolean }) {
  return (
    <Button type="submit" variant="brand" size="xl" className={cn("w-full", className)} disabled={pending || props.disabled} {...props}>
      <span className={cn("translate-x-2 transition-transform duration-500 will-change-transform group-hover/button:translate-x-0", EASE)}>
        {children}
      </span>
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <ArrowRight
          className={cn(
            "size-4 -translate-x-2 opacity-0 transition-[opacity,transform] duration-500 will-change-transform group-hover/button:translate-x-0 group-hover/button:opacity-100 group-hover/button:delay-75",
            EASE
          )}
        />
      )}
    </Button>
  )
}
