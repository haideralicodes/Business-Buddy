import Image from "next/image"
import { WEB_EXAMPLE_IMAGES } from "./constants"

// Doubled so the marquee loops without a visible seam at translateX(-50%).
const images = [...WEB_EXAMPLE_IMAGES, ...WEB_EXAMPLE_IMAGES]

export default function ScrollWeb() {
  return (
    <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
      <div className="flex animate-marquee-x items-center gap-10 whitespace-nowrap">
        {images.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={`Generated website example ${(index % WEB_EXAMPLE_IMAGES.length) + 1}`}
            width={420}
            height={252}
            className="h-[252px] w-[420px] shrink-0 rounded-[25px] object-cover transition-transform duration-300 ease-in-out hover:z-10 hover:scale-110"
          />
        ))}
      </div>
    </div>
  )
}
