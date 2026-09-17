import Link from "next/link"
import { Check } from "lucide-react"
import { Badge } from "@/packages/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/packages/ui/card"
import { ButtonArrow, ButtonLabel, buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, PLANS, SIGNUP_HREF } from "./constants"
import { Prominent, SectionHeading } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="px-6 py-20 md:px-10 md:py-28 lg:px-16">
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
              size="none"
              className={cn(plan.featured && "border-primary md:-mt-3")}
            >
              {plan.featured ? (
                <Badge className="absolute right-5 top-5 h-6 px-2 font-mono text-[10px] uppercase tracking-[0.06em]">
                  {COPY.pricing.featuredBadge}
                </Badge>
              ) : null}

              <CardHeader className="gap-1 px-6 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{plan.name}</p>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-[40px] font-semibold leading-none tracking-[-0.03em] lg:text-[44px]">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{COPY.pricing.period}</span>
                </p>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </CardHeader>

              <CardContent className="px-6 pt-5">
                <Link
                  href={SIGNUP_HREF}
                  className={buttonVariants({ variant: plan.featured ? "default" : "secondary", size: "xl", className: "w-full" })}
                >
                  <ButtonLabel>{COPY.pricing.cta}</ButtonLabel>
                  <ButtonArrow />
                </Link>
              </CardContent>

              <CardFooter className="mt-5 flex-col items-start gap-2.5 border-t border-line bg-transparent px-6 py-5">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-start gap-2.5 text-sm leading-snug">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-ink" strokeWidth={2.5} />
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
