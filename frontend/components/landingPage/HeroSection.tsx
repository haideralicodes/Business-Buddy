import Link from "next/link"
import { ButtonArrow, ButtonLabel, buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import HeroProductPanel from "./HeroProductPanel"
import { COPY, SIGNUP_HREF } from "./constants"
import { Eyebrow, Prominent } from "./SectionHeading"
import { Hatch, Rails, Ticks } from "./Structure"

/**
 * Archetype A: blueprint centered + product panel. Measured rhythm (Cognivis):
 * hatch 56 → pad 96 → eyebrow → 28 → H1 → 20 → sub → 28 → CTAs → 14 → microcopy → 64 → panel.
 */
export default function HeroSection() {
  return (
    <section id="hero">
      <Hatch tall />
      <Rails>
        <Ticks />
        <div className="flex flex-col items-center px-6 pt-20 text-center md:pt-24">
          <Eyebrow className="animate-fade-up">{COPY.hero.eyebrow}</Eyebrow>

          <h1
            className="animate-fade-up mt-7 max-w-[960px] text-balance text-display font-normal"
            style={{ animationDelay: "80ms" }}
          >
            {COPY.hero.line1}
            <br className="hidden sm:block" />{" "}
            {COPY.hero.line2a} <Prominent className="text-[0.9em]">{COPY.hero.line2b}</Prominent>
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-[520px] text-balance text-body-lg text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            {COPY.hero.sub}
          </p>

          <div className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "240ms" }}>
            <Link href={SIGNUP_HREF} className={buttonVariants({ size: "xl" })}>
              <ButtonLabel>{COPY.hero.primaryCta}</ButtonLabel>
              <ButtonArrow />
            </Link>
            <a href="#pricing" className={cn(buttonVariants({ variant: "secondary", size: "xl" }))}>
              {COPY.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="animate-fade-up mt-16 border-t border-line" style={{ animationDelay: "280ms" }}>
          <HeroProductPanel />
        </div>
      </Rails>
    </section>
  )
}
