import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, LANDING_IMAGES, SIGNUP_HREF } from "./constants"

export default function CallAction() {
  return (
    <section
      id="call"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-surface px-6 text-surface-foreground md:flex-row"
    >
      <div className="hidden w-1/3 md:block">
        <Image src={LANDING_IMAGES.star} alt="" width={400} height={400} className="w-[400px]" />
      </div>
      <div className="flex w-full max-w-[1100px] flex-col items-center justify-center text-center md:w-1/3">
        <h1 className="font-anzo text-[clamp(2.5rem,7vw,5.5rem)] leading-tight">{COPY.call.heading}</h1>
        <p className="mt-4 text-[22px]">
          {COPY.call.body}
        </p>
        <Link
          href={SIGNUP_HREF}
          className={cn(buttonVariants({ variant: "cta", size: "2xl" }), "mt-12 w-[270px] duration-500")}
        >
          {COPY.call.cta}
        </Link>
      </div>
      <div className="hidden w-1/3 md:block">
        <Image src={LANDING_IMAGES.spring} alt="" width={400} height={400} className="w-[400px]" />
      </div>
    </section>
  )
}
