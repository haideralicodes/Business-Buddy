import Image from "next/image"
import { COPY, LANDING_IMAGES } from "./constants"
import { Mark, SectionHeading } from "./SectionHeading"

export default function Benefit() {
  return (
    <section id="benefit" className="scroll-mt-24 bg-surface px-6 py-28 text-surface-foreground md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={COPY.benefit.eyebrow}
          title={
            <>
              {COPY.benefit.line1a} {COPY.benefit.line1b}
              <br />
              {COPY.benefit.line2a} <Mark>{COPY.benefit.line2b}</Mark>
            </>
          }
          sub={COPY.benefit.sub}
        />

        <div className="mt-16 overflow-hidden rounded-[28px] border border-foreground/10 bg-card shadow-[0_40px_80px_-50px_rgba(0,0,0,0.5)]">
          <Image
            src={LANDING_IMAGES.schedulePost}
            alt="Scheduling a social media post in Business Buddy"
            width={1400}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
