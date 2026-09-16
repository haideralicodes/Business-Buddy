import { cn } from "@/lib/utils"

// Duo Mark: two overlapping rounded squares. Uses currentColor so it
// tracks text-primary (and the .dark overrides in globals.css) automatically.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      role="img"
      aria-label="Business Buddy"
      className={cn("text-primary", className)}
    >
      <rect x="8" y="8" width="34" height="34" rx="10" />
      <rect x="22" y="22" width="34" height="34" rx="10" />
    </svg>
  )
}
