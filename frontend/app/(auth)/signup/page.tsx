import Link from "next/link"
import { AuthShell } from "@/components/auth/AuthShell"
import SignupForm from "@/components/auth/SignupForm"
import { Prominent } from "@/components/landingPage/SectionHeading"

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
          <Link href="/login" className="font-medium text-primary-ink hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthShell>
  )
}
