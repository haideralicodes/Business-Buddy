import Image from "next/image"
import { Card, CardContent } from "@/packages/ui/card"
import { COPY, TESTIMONIAL_COLUMNS } from "./constants"
import { Prominent, SectionHeading } from "./SectionHeading"

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={COPY.testimonials.eyebrow}
          title={
            <>
              {COPY.testimonials.line1} <Prominent>{COPY.testimonials.line2}</Prominent> {COPY.testimonials.line3}
            </>
          }
        />

        <div className="relative mt-16 h-[720px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <div className="grid h-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIAL_COLUMNS.map((column, i) => (
              <div
                key={i}
                className={i === 2 ? "hidden overflow-hidden lg:block" : i === 1 ? "hidden overflow-hidden sm:block" : "overflow-hidden"}
              >
                <div
                  className="flex animate-marquee-y flex-col gap-5 hover:[animation-play-state:paused]"
                  style={{ animationDelay: `${i * -7}s` }}
                >
                  {column.concat(column).map((t, index) => (
                    <Card
                      key={`${t.username}-${index}`}
                      variant="flat"
                      className="gap-0 rounded-2xl border border-foreground/10 py-0 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.4)]"
                    >
                      <CardContent className="flex flex-col gap-5 p-6">
                        <p className="text-[15px] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                        <div className="flex items-center gap-3">
                          <Image src={t.imageSrc} alt="" width={40} height={40} className="size-10 rounded-full" />
                          <div>
                            <p className="text-sm font-semibold leading-tight">{t.name}</p>
                            <p className="text-xs text-muted-foreground">{t.username}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
