import Link from "next/link"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/packages/ui/card"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, PLANS, SIGNUP_HREF } from "./constants"

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="flex w-full flex-col items-center bg-surface px-6 pt-20 text-surface-foreground"
    >
      <div className="text-center">
        <p className="text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.95]">
          <span className="font-anzo font-semibold">{COPY.pricing.line1a} </span>
          <span className="font-blinds italic">{COPY.pricing.line1b}</span>,
        </p>
        <p className="text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.2]">
          <span className="font-blinds">{COPY.pricing.line2a}</span>{" "}
          <span className="bg-primary px-[10px] pr-[15px] font-anzo font-semibold italic text-primary-foreground">
            {COPY.pricing.line2b}
          </span>
        </p>
      </div>

      <div className="mt-20 flex w-full max-w-[1300px] flex-wrap items-stretch justify-center gap-10">
        {PLANS.map((plan) => (
          <Card key={plan.name} variant="flat" className="min-h-[600px] w-[390px] rounded-md px-5 py-8">
            <CardHeader className="px-0">
              <CardTitle className="text-[1.6rem] font-medium opacity-80">{plan.name}</CardTitle>
              <p className="mt-4 text-[4rem] font-bold leading-none">
                {plan.price}
                <span className="text-base font-bold opacity-90">{COPY.pricing.period}</span>
              </p>
            </CardHeader>
            <CardContent className="flex flex-col px-0">
              <Link
                href={SIGNUP_HREF}
                className={cn(
                  buttonVariants({ variant: "brand", size: "2xl" }),
                  "mt-10 w-[270px] font-anzo uppercase duration-500"
                )}
              >
                {COPY.pricing.cta}
              </Link>
              <ul className="mt-8 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={`${feature}-${i}`} className="flex items-center text-lg leading-[30px]">
                    <Check className="mr-4 size-4 shrink-0" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
