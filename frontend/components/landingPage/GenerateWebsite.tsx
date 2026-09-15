import ScrollWeb from "./ScrollWeb"
import { COPY } from "./constants"

export default function GenerateWebsite() {
  return (
    <section
      id="genWeb"
      className="flex w-full flex-col items-center justify-center bg-surface px-6 pb-20 text-center text-surface-foreground"
    >
      <h1 className="font-anzo text-[clamp(3rem,6.5vw,90px)] uppercase leading-tight">{COPY.genWeb.line1}</h1>
      <h1 className="font-blinds text-[clamp(3rem,7vw,100px)] leading-tight">
        {COPY.genWeb.line2a}{" "}
        <span className="bg-primary px-[10px] pr-[22px] italic uppercase text-primary-foreground">{COPY.genWeb.line2b}</span>
      </h1>
      <ScrollWeb />
    </section>
  )
}
