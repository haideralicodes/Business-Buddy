import Link from "next/link"
import { AuthShell } from "@/components/auth/AuthShell"
import LoginForm from "@/components/auth/LoginForm"
import { Prominent } from "@/components/landingPage/SectionHeading"

export default function Login() {
  return (
    <AuthShell
      title={
        <>
          Welcome <Prominent>back!</Prominent>
        </>
      }
      sub="Your site is live and your posts are queued. Sign in to see what Buddy did while you were away."
      footer={
        <>
          New to Business Buddy?{" "}
          <Link href="/signup" className="font-medium text-primary-ink hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  )
}
