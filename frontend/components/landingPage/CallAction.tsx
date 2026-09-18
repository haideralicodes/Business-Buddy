import Link from "next/link"
import { ButtonArrow, ButtonLabel, buttonVariants } from "@/packages/ui/button"
import { Stage } from "./Stage"
import { COPY, SIGNUP_HREF } from "./constants"
import { Eyebrow, Prominent } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

export default function CallAction() {
  return (
    <section id="call" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
        {/* Same stage surface as the social cards and the auth pages: one look for "product on a pastel field". */}
        <Stage dither className="px-6 py-20 text-center md:py-24">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <Eyebrow className="bg-card/80 backdrop-blur">{COPY.call.eyebrow}</Eyebrow>
            <h2 className="mt-7 text-balance text-heading font-normal">
              {COPY.call.line1} <Prominent>{COPY.call.line2}</Prominent>
            </h2>
            {/* On a stage, copy is foreground at reduced alpha, never muted-foreground: the pink end of the gradient drops muted below 4.5:1 in dark. */}
            <p className="mt-5 max-w-[520px] text-balance text-body-lg text-foreground/75">
              {COPY.call.body}
            </p>
            <Link href={SIGNUP_HREF} className={buttonVariants({ variant: "inverse", size: "xl", className: "mt-7" })}>
              <ButtonLabel>{COPY.call.cta}</ButtonLabel>
              <ButtonArrow />
            </Link>
          </div>
        </Stage>
      </Rails>
    </section>
  )
}
