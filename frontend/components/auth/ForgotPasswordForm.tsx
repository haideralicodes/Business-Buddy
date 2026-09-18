"use client"

import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/packages/ui/field"
import { Input } from "@/packages/ui/input"
import { toast } from "@/packages/ui/toast"
import { forgotPasswordSchema, type ForgotPasswordValues } from "@/lib/validation/auth"
import AuthSubmit from "./AuthSubmit"

export default function ForgotPasswordForm() {
  const [sent, setSent] = useState(false)
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  })

  async function onSubmit(values: ForgotPasswordValues) {
    // TODO: call the password-reset endpoint. Same message either way so the
    // form doesn't reveal which emails have accounts.
    setSent(true)
    toast.add({
      type: "success",
      title: "Check your inbox",
      description: `If an account exists for ${values.email}, a reset link is on its way.`,
    })
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              {...field}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="jhon.doe@gmail.com"
              aria-invalid={fieldState.invalid}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />
      <AuthSubmit pending={form.formState.isSubmitting} className="mt-1">
        {sent ? "Resend link" : "Send reset link"}
      </AuthSubmit>
      {sent ? (
        <FieldDescription className="-mt-1 text-center text-caption">
          Didn&rsquo;t get it? Check spam, or resend in a minute.
        </FieldDescription>
      ) : null}
    </form>
  )
}
