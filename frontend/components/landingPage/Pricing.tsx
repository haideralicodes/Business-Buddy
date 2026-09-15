import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Badge } from "@/packages/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/packages/ui/card"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, PLANS, SIGNUP_HREF } from "./constants"
import { Mark, Prominent, SectionHeading } from "./SectionHeading"

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-surface px-6 py-28 text-surface-foreground md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={COPY.pricing.eyebrow}
          title={
            <>
              {COPY.pricing.line1a} <Prominent>{COPY.pricing.line1b}</Prominent>,
              <br />
              {COPY.pricing.line2a} <Mark face="anzo">{COPY.pricing.line2b}</Mark>
            </>
          }
          sub={COPY.pricing.sub}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:items-start">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              variant="flat"
              className={cn(
                "relative gap-0 rounded-3xl border border-foreground/10 py-0 transition-transform duration-300 hover:-translate-y-1",
                plan.featured &&
                  "border-primary/60 shadow-[0_30px_60px_-30px_var(--primary)] ring-1 ring-primary/40 md:-mt-4"
              )}
            >
              {plan.featured ? (
                <Badge className="absolute right-5 top-5 h-6 px-2.5 font-mono text-[10px] uppercase tracking-[0.12em]">
                  {COPY.pricing.featuredBadge}
                </Badge>
              ) : null}

              <CardHeader className="gap-1 px-7 pt-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{plan.name}</p>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-[-0.03em]">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{COPY.pricing.period}</span>
                </p>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </CardHeader>

              <CardContent className="px-7 pt-6">
                <Link
                  href={SIGNUP_HREF}
                  className={cn(
                    buttonVariants({ variant: plan.featured ? "brand" : "pill-outline", size: "xl" }),
                    "w-full"
                  )}
                >
                  {COPY.pricing.cta}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </CardContent>

              <CardFooter className="mt-6 flex-col items-start gap-3 border-t border-foreground/10 bg-transparent px-7 py-6">
                {plan.features.map((feature, i) => (
                  <p key={`${feature}-${i}`} className="flex items-start gap-3 text-sm leading-snug">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {feature}
                  </p>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
