import Image from "next/image"
import { WEB_EXAMPLE_IMAGES } from "./constants"

// Doubled so the marquee loops without a visible seam at translateX(-50%).
const images = [...WEB_EXAMPLE_IMAGES, ...WEB_EXAMPLE_IMAGES]

export default function ScrollWeb() {
  return (
    <div className="relative mt-16 w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee-x items-center gap-6 hover:[animation-play-state:paused]">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group relative shrink-0 overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_20px_40px_-24px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5"
          >
            <Image
              src={src}
              alt={`Generated website example ${(index % WEB_EXAMPLE_IMAGES.length) + 1}`}
              width={420}
              height={252}
              className="h-[220px] w-[366px] object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
