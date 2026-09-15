import Image from "next/image"
import RotateBtn from "./RotateBtn"
import { COPY, LANDING_IMAGES } from "./constants"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex w-full flex-col items-center justify-center bg-surface pb-10 text-surface-foreground md:h-[87vh] md:flex-row"
    >
      <div className="flex h-full w-full flex-col items-start justify-center px-6 md:w-1/2 md:pl-20">
        <p className="text-[11.11vw] font-semibold uppercase leading-[8.89vw]">{COPY.hero.line1}</p>
        <p className="text-[11.11vw] font-semibold uppercase leading-[8.89vw]">{COPY.hero.line2}</p>
        <p className="font-blinds text-[13.11vw] italic uppercase leading-[11vw]">{COPY.hero.line3}</p>
        <hr className="h-[7px] w-[530px] max-w-full origin-bottom-left -rotate-[5deg] border-none bg-primary" />
      </div>
      <div className="flex h-full w-full flex-col items-start justify-center px-6 md:w-1/2">
        <div className="relative">
          <div className="absolute left-0 top-[55%] z-2 -translate-x-1/2 -translate-y-1/2">
            <RotateBtn />
          </div>
          <Image
            src={LANDING_IMAGES.hero}
            alt="Business Buddy at work"
            width={640}
            height={480}
            priority
            className="mt-[70px] rounded-[30px]"
          />
        </div>
      </div>
    </section>
  )
}
