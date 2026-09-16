import Link from "next/link"
import { AuthShell } from "@/components/auth/AuthShell"
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"
import { Prominent } from "@/components/landingPage/SectionHeading"

export default function ForgotPassword() {
  return (
    <AuthShell
      social={false}
      title={
        <>
          Forgot your <Prominent className="text-primary">password?</Prominent>
        </>
      }
      sub="Enter the email you signed up with and we'll send a link to set a new one."
      footer={
        <>
          Remembered it?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Back to sign in
          </Link>
        </>
      }
    >
      <ForgotPasswordForm />
    </AuthShell>
  )
}
