import Link from "next/link"
import { AuthShell } from "@/components/auth/AuthShell"
import VerifyEmailForm from "@/components/auth/VerifyEmailForm"
import { Prominent } from "@/components/landingPage/SectionHeading"

// TODO: read the pending email from the signup session instead of a placeholder.
const PENDING_EMAIL = "jhon.doe@gmail.com"

export default function VerifyEmail() {
  return (
    <AuthShell
      social={false}
      title={
        <>
          Check your <Prominent className="text-primary">inbox</Prominent>
        </>
      }
      sub={
        <>
          We sent a 6-digit code to <span className="font-medium text-foreground">{PENDING_EMAIL}</span>. Enter it
          below to finish setting up your account.
        </>
      }
      footer={
        <>
          Wrong email?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Start over
          </Link>
        </>
      }
    >
      <VerifyEmailForm email={PENDING_EMAIL} />
    </AuthShell>
  )
}
