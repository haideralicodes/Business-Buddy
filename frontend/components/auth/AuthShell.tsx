import type { ReactNode } from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import ThemeToggle from "@/components/landingPage/ThemeToggle"
import { AppWindow } from "@/components/landingPage/HeroProductPanel"
import { Eyebrow } from "@/components/landingPage/SectionHeading"
import { Button } from "@/packages/ui/button"
import { Stage as StageSurface } from "@/components/landingPage/Stage"
import { Separator } from "@/packages/ui/separator"
import { AppleIcon, FacebookIcon, GoogleIcon } from "./BrandIcons"

// What the stage says about the product. Plain claims, no invented customers.
const STAGE = {
  eyebrow: "What's inside",
  line1: "Your site, your posts,",
  line2: "one dashboard.",
  points: ["Website built from a few questions", "Captions drafted in your voice", "A week of posts scheduled at once"],
}

/**
 * Two-column auth page inside the framed canvas: the form on the left
 * (logo, title, muted sub, fields, brand CTA, social row), a pastel stage on
 * the right showing the product's own dashboard. Same tokens and radii as the
 * landing page, so it reads as the same product.
 */
export function AuthShell({
  title,
  sub,
  children,
  footer,
  social = false,
}: {
  title: ReactNode
  sub: ReactNode
  children: ReactNode
  footer: ReactNode
  /** Show the "or" divider and provider buttons. Off until providers are wired. */
  social?: boolean
}) {
  return (
    <div className="grid flex-1 lg:grid-cols-2">
      <div className="relative flex flex-col px-6 py-8 sm:px-12 md:px-16 lg:px-20">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="size-7" />
            <span className="text-body font-semibold tracking-tight">Business Buddy</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Top-aligned at a fixed offset so the title sits in the same place on every auth page,
            whatever the form's height. */}
        <div className="flex w-full justify-center pt-12 lg:pt-20">
          <div className="w-full max-w-[440px] pb-12">
            <h1 className="text-heading font-semibold">{title}</h1>
            <p className="mt-3 text-body text-muted-foreground">{sub}</p>

            <div className="mt-8">{children}</div>

            {social ? (
              <>
                <div className="my-7 flex items-center gap-4">
                  <Separator className="flex-1 bg-line" />
                  <span className="font-mono text-label uppercase text-muted-foreground">or</span>
                  <Separator className="flex-1 bg-line" />
                </div>
                <SocialRow />
              </>
            ) : null}

            <p className="mt-7 text-center text-body text-muted-foreground">{footer}</p>
          </div>
        </div>
      </div>

      <Stage />
    </div>
  )
}

export function SocialRow() {
  const providers = [
    { name: "Google", Icon: GoogleIcon },
    { name: "Facebook", Icon: FacebookIcon },
    { name: "Apple", Icon: AppleIcon },
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {providers.map(({ name, Icon }) => (
        <Button key={name} type="button" variant="secondary" size="xl" aria-label={`Continue with ${name}`}>
          <Icon className="size-5" />
        </Button>
      ))}
    </div>
  )
}

function Stage() {
  return (
    <div className="relative hidden border-l border-line p-6 lg:flex select-none">
      <StageSurface dither className="flex flex-1 flex-col p-8">

        <div className="relative z-10 max-w-[400px]">
          <Eyebrow className="bg-card/80 backdrop-blur">{STAGE.eyebrow}</Eyebrow>
          <p className="mt-5 text-subheading font-semibold">
            {STAGE.line1}
            <br />
            {STAGE.line2}
          </p>
          <ul className="mt-4 space-y-1.5 text-body text-foreground/75">
            {STAGE.points.map((pt) => (
              <li key={pt} className="flex items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Product proof: our dashboard, in flow under the copy so a short laptop
            viewport can't push it up over the text. It takes whatever height is
            left, bleeds off the right and bottom edges, and fades at the bottom. */}
        <div className="pointer-events-none relative mt-8 min-h-[220px] flex-1 overflow-hidden">
          <div className="absolute left-0 top-0 w-[125%] min-w-[860px] [mask-image:linear-gradient(to_bottom,black_45%,transparent_95%)]">
            <AppWindow />
          </div>
        </div>
      </StageSurface>
    </div>
  )
}
