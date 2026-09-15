import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SIGNUP_HREF } from "./constants"

export default function RotateBtn() {
  return (
    <div className="flex size-[127px] items-center justify-center rounded-full bg-surface">
      <Link
        href={SIGNUP_HREF}
        aria-label="Get started"
        className="flex size-[110px] animate-spin-slow items-center justify-center rounded-full bg-inverse text-primary will-change-transform"
      >
        <ArrowRight className="size-16" strokeWidth={2.5} />
      </Link>
    </div>
  )
}
