import type * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"
import { cn } from "cn"

/**
 * The one button in the app. Shape comes from --radius-button, colours from
 * the theme tokens, easing from --ease-soft; change those in globals.css and
 * every button follows. Pick a variant by role, never by look:
 *
 *   default    the primary action on a screen (brand pink)
 *   secondary  the action next to it
 *   inverse    high-contrast black/white pill for dark or busy backgrounds
 *   outline    bordered, for toolbars and filters
 *   ghost      icon buttons and quiet actions
 *   link       inline text action
 *   destructive
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-button border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Ring is the brand pink, so on a pink button the focus ring is the foreground instead.
        default: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:border-foreground/60 focus-visible:ring-foreground/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        inverse: "bg-inverse text-inverse-foreground hover:bg-inverse/85",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        link: "text-primary-ink underline-offset-4 hover:underline",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
      },
      size: {
        default: "h-8 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xl: "h-11 gap-2 px-6 text-base",
        "2xl": "h-12 gap-2 px-8 text-base font-semibold",
        icon: "size-8",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
        // 44px: the touch-target floor. Use for any icon button a thumb has to hit.
        "icon-xl": "size-11 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

/**
 * Label + arrow pair for call-to-action buttons. The arrow is hidden at rest
 * and slides in on hover while the label shifts over to make room, so the
 * text stays visually centred. Use both together:
 *
 *   <Button size="xl"><ButtonLabel>Start for free</ButtonLabel><ButtonArrow /></Button>
 */
function ButtonLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="button-label"
      className={cn("translate-x-2 transition-transform duration-500 will-change-transform group-hover/button:translate-x-0", className)}
      {...props}
    />
  )
}

function ButtonArrow({ className, ...props }: React.ComponentProps<typeof ArrowRight>) {
  return (
    <ArrowRight
      data-slot="button-arrow"
      aria-hidden
      className={cn(
        "size-4 -translate-x-2 opacity-0 transition-[opacity,transform] duration-500 will-change-transform group-hover/button:translate-x-0 group-hover/button:opacity-100 group-hover/button:delay-75",
        className
      )}
      {...props}
    />
  )
}

export { Button, ButtonLabel, ButtonArrow, buttonVariants }
