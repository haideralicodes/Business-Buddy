"use client"

import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldError, FieldLabel } from "@/packages/ui/field"
import { Input } from "@/packages/ui/input"
import { toast } from "@/packages/ui/toast"
import { signupSchema, type SignupValues } from "@/lib/validation/auth"
import AuthSubmit from "./AuthSubmit"
import PasswordInput from "./PasswordInput"
import PasswordStrength from "./PasswordStrength"

export default function SignupForm() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { fullName: "", email: "", password: "", confirmPassword: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  })
  const password = useWatch({ control: form.control, name: "password" })

  async function onSubmit(values: SignupValues) {
    // TODO: POST to the signup endpoint, then route to /verify-email.
    toast.add({ type: "success", title: "Account created", description: `We sent a verification code to ${values.email}.` })
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Controller
        control={form.control}
        name="fullName"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="fullName">Full name</FieldLabel>
            <Input
              {...field}
              id="fullName"
              autoComplete="name"
              placeholder="Jhon Doe"
              aria-invalid={fieldState.invalid}
              className="h-11 px-3.5"
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

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
              className="h-11 px-3.5"
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        control={form.control}
        name="password"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <PasswordInput
              {...field}
              id="password"
              autoComplete="new-password"
              placeholder="Create a password"
              aria-invalid={fieldState.invalid}
            />
            {/* The checklist explains the rules while typing; the error only appears after blur/submit. */}
            <PasswordStrength value={password} />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        control={form.control}
        name="confirmPassword"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="confirmPassword">Confirm password</FieldLabel>
            <PasswordInput
              {...field}
              id="confirmPassword"
              autoComplete="new-password"
              placeholder="Type it again"
              aria-invalid={fieldState.invalid}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <AuthSubmit pending={form.formState.isSubmitting} className="mt-1">
        Create account
      </AuthSubmit>
    </form>
  )
}
