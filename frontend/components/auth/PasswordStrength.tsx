"use client"

import { Check, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { checkPassword, passwordStrength } from "@/lib/validation/auth"

const TONES = ["", "bg-destructive", "bg-amber-500", "bg-primary", "bg-emerald-500"]

/**
 * Live meter + rule checklist under the signup password field. Reads the
 * same PASSWORD_RULES the zod schema enforces, so the list and the errors
 * always agree.
 */
export default function PasswordStrength({ value }: { value: string }) {
  const rules = checkPassword(value)
  const { score, label } = passwordStrength(value)
  const started = value.length > 0

  return (
    <div className="mt-2.5 flex flex-col gap-2" aria-live="polite">
      {/* Meter spans the full input width; the label sits above it so it never steals bar length. */}
      <div className="flex h-3.5 items-end justify-end">
        <span className={cn("text-[11px] leading-none font-medium transition-opacity duration-300", started ? "opacity-100" : "opacity-0")}>
          {label}
        </span>
      </div>
      <div className="flex gap-1.5" aria-hidden>
        {[1, 2, 3, 4].map((step) => (
          <span
            key={step}
            className={cn(
              "h-1 flex-1 rounded-full bg-foreground/10 transition-colors duration-300",
              score >= step && TONES[score]
            )}
          />
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
        {rules.map((rule) => (
          <li
            key={rule.id}
            className={cn(
              "flex items-center gap-1.5 text-[12px] transition-colors duration-300",
              rule.passed ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {rule.passed ? (
              <Check className="size-3 text-emerald-600 dark:text-emerald-400" strokeWidth={3} />
            ) : (
              <Circle className="size-3 text-foreground/25" strokeWidth={2.5} />
            )}
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
