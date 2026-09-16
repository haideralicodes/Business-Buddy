import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AuthShell, Field } from "@/components/auth/AuthShell"
import { Prominent } from "@/components/landingPage/SectionHeading"
import { Button } from "@/packages/ui/button"
import { Input } from "@/packages/ui/input"

export default function Login() {
  return (
    <AuthShell
      title={
        <>
          Welcome <Prominent className="text-primary">back!</Prominent>
        </>
      }
      sub="Your site is live and your posts are queued. Sign in to see what Buddy did while you were away."
      footer={
        <>
          New to Business Buddy?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form className="flex flex-col gap-5">
        <Field id="email" label="Email">
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com" className="h-11 px-3.5" />
        </Field>
        <Field
          id="password"
          label="Password"
          hint={
            <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">
              Forgot password?
            </Link>
          }
        >
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="h-11 px-3.5"
          />
        </Field>
        <Button type="submit" variant="brand" size="xl" className="mt-1 w-full">
          Sign in
          <ArrowRight data-icon="inline-end" />
        </Button>
      </form>
    </AuthShell>
  )
}
