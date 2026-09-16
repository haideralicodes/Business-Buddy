import Link from "next/link"
import { ArrowRight, CreditCard } from "lucide-react"
import { AuthShell, Field } from "@/components/auth/AuthShell"
import { Prominent } from "@/components/landingPage/SectionHeading"
import { Button } from "@/packages/ui/button"
import { Input } from "@/packages/ui/input"

export default function Signup() {
  return (
    <AuthShell
      title={
        <>
          Meet your <Prominent className="text-primary">Buddy</Prominent>
        </>
      }
      sub="Tell us about your business once. Buddy builds the site, writes the posts, and keeps the calendar full."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form className="flex flex-col gap-5">
        <Field id="business" label="Business name">
          <Input id="business" name="business" autoComplete="organization" placeholder="Aurora Bakery" className="h-11 px-3.5" />
        </Field>
        <Field id="email" label="Email">
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com" className="h-11 px-3.5" />
        </Field>
        <Field id="password" label="Password">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            className="h-11 px-3.5"
          />
        </Field>
        <Button type="submit" variant="brand" size="xl" className="mt-1 w-full">
          Create account
          <ArrowRight data-icon="inline-end" />
        </Button>
        <p className="-mt-1 flex items-center justify-center gap-1.5 text-[13px] text-foreground/70">
          <CreditCard className="size-3.5" />
          No credit card required
        </p>
      </form>
    </AuthShell>
  )
}
