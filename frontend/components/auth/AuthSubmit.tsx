"use client"

import { Loader2 } from "lucide-react"
import { Button, ButtonArrow, ButtonLabel } from "@/packages/ui/button"
import { cn } from "@/lib/utils"

/** Primary action for every auth form: the app's default button, full width, with the shared label + arrow reveal. */
export default function AuthSubmit({
  children,
  pending,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { pending?: boolean }) {
  return (
    <Button type="submit" size="xl" className={cn("w-full", className)} disabled={pending || props.disabled} {...props}>
      <ButtonLabel>{children}</ButtonLabel>
      {pending ? <Loader2 className="size-4 animate-spin" /> : <ButtonArrow />}
    </Button>
  )
}
