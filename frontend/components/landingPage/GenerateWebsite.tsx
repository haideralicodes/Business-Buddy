import ScrollWeb from "./ScrollWeb"
import { COPY } from "./constants"
import { Mark, SectionHeading } from "./SectionHeading"

export default function GenerateWebsite() {
  return (
    <section id="genWeb" className="scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={COPY.genWeb.eyebrow}
          title={
            <>
              {COPY.genWeb.line1}
              <br />
              {COPY.genWeb.line2a} <Mark>{COPY.genWeb.line2b}</Mark>
            </>
          }
          sub={COPY.genWeb.sub}
        />
      </div>
      <ScrollWeb />
    </section>
  )
}
