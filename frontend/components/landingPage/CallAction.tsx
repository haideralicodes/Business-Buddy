import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, SIGNUP_HREF } from "./constants"
import { Eyebrow, Prominent } from "./SectionHeading"

export default function CallAction() {
  return (
    <section id="call" className="scroll-mt-24 px-6 pb-28 md:pb-36">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-inverse px-6 py-24 text-center text-inverse-foreground md:py-32">
        {/* Atmosphere: primary glow rising from the bottom, faint dot texture. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,color-mix(in_oklch,var(--primary)_55%,transparent),transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,var(--inverse-foreground)_12%,transparent)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]"
        />

        <div className="relative flex flex-col items-center gap-6">
          <Eyebrow className="border-inverse-foreground/20 bg-inverse-foreground/5 text-inverse-foreground/70">
            {COPY.call.eyebrow}
          </Eyebrow>
          <h2 className="text-balance text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            {COPY.call.line1} <Prominent className="text-primary">{COPY.call.line2}</Prominent>
          </h2>
          <p className="max-w-xl text-balance text-base text-inverse-foreground/70 md:text-lg">{COPY.call.body}</p>
          <Link href={SIGNUP_HREF} className={cn(buttonVariants({ variant: "brand", size: "2xl" }), "mt-2 pr-5")}>
            {COPY.call.cta}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </section>
  )
}
