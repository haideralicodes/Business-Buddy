import Link from "next/link"
import { ButtonArrow, ButtonLabel, buttonVariants } from "@/packages/ui/button"
import { Card } from "@/packages/ui/card"
import { COPY, SIGNUP_HREF } from "./constants"
import { Eyebrow, Prominent } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

export default function CallAction() {
  return (
    <section id="call" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
        {/* Same stage surface as the social cards and the auth pages: one look for "product on a pastel field". */}
        <Card variant="stage" size="none" className="bg-stage-brand px-6 py-20 text-center md:py-24">
          <div aria-hidden className="bg-dither pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <Eyebrow className="bg-card/80 backdrop-blur">{COPY.call.eyebrow}</Eyebrow>
            <h2 className="mt-7 text-balance text-[clamp(2.5rem,4.5vw,3.75rem)] font-semibold leading-[1.0] tracking-[-0.035em]">
              {COPY.call.line1} <Prominent className="text-primary">{COPY.call.line2}</Prominent>
            </h2>
            <p className="mt-5 max-w-[520px] text-balance text-[17px] leading-[1.55] text-muted-foreground md:text-lg">
              {COPY.call.body}
            </p>
            <Link href={SIGNUP_HREF} className={buttonVariants({ size: "xl", className: "mt-7" })}>
              <ButtonLabel>{COPY.call.cta}</ButtonLabel>
              <ButtonArrow />
            </Link>
          </div>
        </Card>
      </Rails>
    </section>
  )
}
