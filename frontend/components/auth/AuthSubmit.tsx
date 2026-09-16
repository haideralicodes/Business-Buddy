"use client"

import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/packages/ui/button"
import { cn } from "@/lib/utils"

/**
 * Primary action for every auth form. The arrow is hidden at rest and slides
 * in on hover, 300ms ease-out, the same tempo as the rest of the app. Its
 * width is reserved so the label doesn't shift.
 */
export default function AuthSubmit({
  children,
  pending,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { pending?: boolean }) {
  return (
    <Button type="submit" variant="brand" size="xl" className={cn("w-full", className)} disabled={pending || props.disabled} {...props}>
      <span className="translate-x-2 transition-transform duration-300 ease-out group-hover/button:translate-x-0">
        {children}
      </span>
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover/button:translate-x-0 group-hover/button:opacity-100" />
      )}
    </Button>
  )
}
