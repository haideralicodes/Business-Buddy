import Image from "next/image"
import { Card, CardContent } from "@/packages/ui/card"
import { COPY, TESTIMONIAL_COLUMNS } from "./constants"

export default function Testimonials() {
  return (
    <section className="relative mx-auto mb-24 h-[1000px] w-full max-w-[1200px] overflow-hidden p-5">
      <div className="mb-[90px] mt-[100px] text-center">
        <h1 className="font-anzo text-[clamp(2.5rem,7vw,6rem)] leading-none">{COPY.testimonials.heading}</h1>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-2 h-20 w-full bg-linear-to-b from-background to-transparent" />
      <div className="flex justify-around gap-12">
        {TESTIMONIAL_COLUMNS.map((column, i) => (
          <div key={i} className="flex flex-1 flex-col items-center overflow-hidden">
            <div className="flex animate-marquee-y flex-col gap-5">
              {column.concat(column).map((t, index) => (
                <Card key={`${t.username}-${index}`} variant="ghost" className="w-[300px] text-center">
                  <CardContent className="flex flex-col items-center">
                    <Image
                      src={t.imageSrc}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="mb-4 size-20 rounded-full"
                    />
                    <p className="mb-2 italic">&ldquo;{t.text}&rdquo;</p>
                    <h3 className="mb-1 text-lg font-bold">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.username}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-2 h-20 w-full bg-linear-to-t from-background to-transparent" />
    </section>
  )
}
