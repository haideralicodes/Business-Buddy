"use client"

import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/packages/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/packages/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/packages/ui/input-otp"
import { toast } from "@/packages/ui/toast"
import { OTP_LENGTH, verifyEmailSchema, type VerifyEmailValues } from "@/lib/validation/auth"
import AuthSubmit from "./AuthSubmit"

export default function VerifyEmailForm({ email }: { email: string }) {
  const form = useForm<VerifyEmailValues>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: { code: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  })
  const complete = useWatch({ control: form.control, name: "code" }).length === OTP_LENGTH

  async function onSubmit() {
    // TODO: verify the code against the API, then route into the app.
    toast.add({ type: "success", title: "Email verified", description: "Taking you to your dashboard." })
  }

  function resend() {
    // TODO: request a fresh code.
    form.reset()
    toast.add({ type: "info", title: "New code sent", description: `We sent another code to ${email}.` })
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Controller
        control={form.control}
        name="code"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="code">Verification code</FieldLabel>
            <InputOTP
              id="code"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              maxLength={OTP_LENGTH}
              autoFocus
              containerClassName="justify-between"
            >
              <InputOTPGroup className="w-full gap-2">
                {Array.from({ length: OTP_LENGTH }, (_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    aria-invalid={fieldState.invalid}
                    className="h-14 flex-1 rounded-lg border border-input text-xl font-semibold tracking-tight first:rounded-lg last:rounded-lg"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <AuthSubmit pending={form.formState.isSubmitting} disabled={!complete} className="mt-1">
        Verify email
      </AuthSubmit>

      <FieldDescription className="-mt-1 text-center text-[13px]">
        Didn&rsquo;t get a code?{" "}
        <Button type="button" variant="link" size="xs" className="h-auto p-0 text-[13px]" onClick={resend}>
          Send a new one
        </Button>
      </FieldDescription>
    </form>
  )
}
