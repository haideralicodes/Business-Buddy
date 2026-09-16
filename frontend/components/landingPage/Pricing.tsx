import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Badge } from "@/packages/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/packages/ui/card"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, PLANS, SIGNUP_HREF } from "./constants"
import { Prominent, SectionHeading } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="px-6 py-20 md:px-16 md:py-28">
        <SectionHeading
          eyebrow={COPY.pricing.eyebrow}
          title={
            <>
              {COPY.pricing.line1}
              <br />
              {COPY.pricing.line2a} <Prominent className="text-primary">{COPY.pricing.line2b}</Prominent>
            </>
          }
          sub={COPY.pricing.sub}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:items-start">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              variant="flat"
              className={cn(
                "relative gap-0 rounded-xl border border-line py-0",
                plan.featured && "border-primary shadow-[0_20px_60px_-24px_var(--primary)] md:-mt-3"
              )}
            >
              {plan.featured ? (
                <Badge className="absolute right-5 top-5 h-6 rounded-md px-2 font-mono text-[10px] uppercase tracking-[0.06em]">
                  {COPY.pricing.featuredBadge}
                </Badge>
              ) : null}

              <CardHeader className="gap-1 px-6 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{plan.name}</p>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-[44px] font-semibold leading-none tracking-[-0.03em]">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{COPY.pricing.period}</span>
                </p>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </CardHeader>

              <CardContent className="px-6 pt-5">
                <Link
                  href={SIGNUP_HREF}
                  className={cn(
                    buttonVariants({ variant: plan.featured ? "brand" : "secondary", size: "xl" }),
                    "w-full rounded-full"
                  )}
                >
                  {COPY.pricing.cta}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </CardContent>

              <CardFooter className="mt-5 flex-col items-start gap-2.5 border-t border-line bg-transparent px-6 py-5">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-start gap-2.5 text-sm leading-snug">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                    {feature}
                  </p>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Rails>
    </section>
  )
}
