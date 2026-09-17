"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/packages/ui/button"
import { Input } from "@/packages/ui/input"
import { cn } from "@/lib/utils"

/**
 * shadcn Input with a show/hide toggle. The eye only appears once there is
 * something to reveal; it fades in on the first keystroke and out when the
 * field is cleared.
 */
export default function PasswordInput({
  className,
  value,
  ...props
}: Omit<React.ComponentProps<typeof Input>, "type">) {
  const [visible, setVisible] = useState(false)
  const hasValue = typeof value === "string" && value.length > 0

  return (
    <div className="relative">
      <Input type={visible ? "text" : "password"} value={value} className={cn("pr-11", className)} {...props} />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        tabIndex={hasValue ? 0 : -1}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-hidden={!hasValue}
        onClick={() => setVisible((v) => !v)}
        className={cn(
          // Centred with inset + margin, not translate: the Button base uses a
          // translate for its press nudge, and the two would fight on click.
          "absolute inset-y-0 right-1.5 my-auto text-muted-foreground transition-opacity duration-300 ease-out hover:text-foreground active:translate-y-0",
          hasValue ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </Button>
    </div>
  )
}
