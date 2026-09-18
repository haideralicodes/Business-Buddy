import ScrollWeb from "./ScrollWeb"
import { COPY } from "./constants"
import { Prominent, SectionHeading } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

export default function GenerateWebsite() {
  return (
    <section id="genWeb" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="overflow-hidden pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="px-6">
          <SectionHeading
            eyebrow={COPY.genWeb.eyebrow}
            title={
              <>
                {COPY.genWeb.line1}
                <br />
                {COPY.genWeb.line2a} <Prominent>{COPY.genWeb.line2b}</Prominent>
              </>
            }
            sub={COPY.genWeb.sub}
          />
        </div>
        <ScrollWeb />
      </Rails>
    </section>
  )
}
