import Image from "next/image"
import { COPY, LANDING_IMAGES } from "./constants"

export default function Benefit() {
  return (
    <section
      id="benefit"
      className="flex w-full flex-col items-center justify-center bg-surface px-6 pb-40 pt-20 text-surface-foreground"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-blinds text-[clamp(3rem,7vw,100px)] leading-none">
          {COPY.benefit.line1a} <span className="font-anzo uppercase">{COPY.benefit.line1b}</span>
        </p>
        <p className="mb-4 text-[clamp(3rem,7vw,100px)] leading-none">
          <span className="font-anzo">{COPY.benefit.line2a} </span>
          <span className="bg-primary px-[10px] pr-[15px] font-blinds italic uppercase text-primary-foreground">
            {COPY.benefit.line2b}
          </span>
        </p>
      </div>
      <Image
        src={LANDING_IMAGES.schedulePost}
        alt="Schedule a social media post"
        width={1100}
        height={620}
        className="h-auto max-h-[620px] w-auto rounded-[20px]"
      />
    </section>
  )
}
