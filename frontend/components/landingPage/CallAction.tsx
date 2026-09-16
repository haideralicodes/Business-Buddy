import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, SIGNUP_HREF } from "./constants"
import { Eyebrow, Prominent } from "./SectionHeading"
import { Hatch, Rails, Ticks } from "./Structure"

export default function CallAction() {
  return (
    <section id="call" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="px-6 py-20 md:px-16 md:py-24">
        <div className="relative border border-line bg-surface px-6 py-20 text-center md:py-24">
          <Ticks />
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <Eyebrow className="bg-card">{COPY.call.eyebrow}</Eyebrow>
            <h2 className="mt-7 text-balance text-[clamp(2.5rem,4.5vw,3.75rem)] font-semibold leading-[1.0] tracking-[-0.035em]">
              {COPY.call.line1} <Prominent className="text-primary">{COPY.call.line2}</Prominent>
            </h2>
            <p className="mt-5 max-w-[520px] text-balance text-[17px] leading-[1.55] text-muted-foreground md:text-lg">
              {COPY.call.body}
            </p>
            <Link href={SIGNUP_HREF} className={cn(buttonVariants({ variant: "brand", size: "xl" }), "mt-7 pr-4")}>
              {COPY.call.cta}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </Rails>
    </section>
  )
}
