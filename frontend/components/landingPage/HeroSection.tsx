import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarCheck, Globe } from "lucide-react"
import { buttonVariants } from "@/packages/ui/button"
import { Card } from "@/packages/ui/card"
import { cn } from "@/lib/utils"
import { COPY, HERO_AVATARS, HERO_CARDS, LANDING_IMAGES, SIGNUP_HREF } from "./constants"
import { Eyebrow, Prominent } from "./SectionHeading"

function FloatingCard({
  icon: Icon,
  label,
  title,
  meta,
  className,
  style,
}: {
  icon: typeof Globe
  label: string
  title: string
  meta: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <Card
      variant="flat"
      className={cn(
        "absolute w-[268px] animate-float gap-0 rounded-2xl border border-foreground/10 bg-card/85 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl",
        className
      )}
      style={style}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
          <p className="truncate text-[13px] font-semibold">{title}</p>
          <p className="truncate text-xs text-muted-foreground">{meta}</p>
        </div>
      </div>
    </Card>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative -mt-[72px] overflow-hidden pt-[72px]">
      {/* Atmosphere: primary glow at the top, faint dot grid behind the copy. */}
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-[70vh]" />
      <div aria-hidden className="bg-dot-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 md:pb-32 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col items-start gap-7">
          <Eyebrow className="animate-fade-up">{COPY.hero.eyebrow}</Eyebrow>

          <h1
            className="animate-fade-up flex flex-col text-[clamp(4rem,10.5vw,9rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em]"
            style={{ animationDelay: "80ms" }}
          >
            <span>{COPY.hero.line1}</span>
            <span>{COPY.hero.line2}</span>
            <Prominent className="relative normal-case">
              {COPY.hero.line3}
              <span
                aria-hidden
                className="absolute -bottom-[0.06em] left-0 h-[0.08em] w-[92%] origin-left -rotate-[3deg] rounded-full bg-primary"
              />
            </Prominent>
          </h1>

          <p
            className="animate-fade-up max-w-md text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {COPY.hero.sub}
          </p>

          <div className="animate-fade-up flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <Link href={SIGNUP_HREF} className={cn(buttonVariants({ variant: "brand", size: "xl" }), "pr-4")}>
              {COPY.hero.primaryCta}
              <ArrowRight data-icon="inline-end" />
            </Link>
            <a href="#pricing" className={buttonVariants({ variant: "pill-outline", size: "xl" })}>
              {COPY.hero.secondaryCta}
            </a>
          </div>

          <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: "320ms" }}>
            <div className="flex -space-x-2">
              {HERO_AVATARS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-full ring-2 ring-background"
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">{COPY.hero.proof}</p>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-[560px]" style={{ animationDelay: "200ms" }}>
          <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-card shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]">
            <Image
              src={LANDING_IMAGES.hero}
              alt="A shop owner working on a laptop"
              width={1120}
              height={840}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
          </div>
          <FloatingCard
            icon={CalendarCheck}
            {...HERO_CARDS.post}
            className="-left-4 top-8 md:-left-12"
            style={{ animationDelay: "0s" }}
          />
          <FloatingCard
            icon={Globe}
            {...HERO_CARDS.site}
            className="-right-4 bottom-10 md:-right-10"
            style={{ animationDelay: "-3s" }}
          />
        </div>
      </div>
    </section>
  )
}
