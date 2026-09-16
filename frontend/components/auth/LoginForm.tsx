"use client"

import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldError, FieldLabel } from "@/packages/ui/field"
import { Input } from "@/packages/ui/input"
import { toast } from "@/packages/ui/toast"
import { loginSchema, type LoginValues } from "@/lib/validation/auth"
import AuthSubmit from "./AuthSubmit"
import PasswordInput from "./PasswordInput"

export default function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  })

  async function onSubmit(values: LoginValues) {
    // TODO: POST to the sign-in endpoint, then route into the app.
    toast.add({ type: "success", title: "Signed in", description: `Welcome back, ${values.email}.` })
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
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">
                Forgot password?
              </Link>
            </div>
            <PasswordInput
              {...field}
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              aria-invalid={fieldState.invalid}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <AuthSubmit pending={form.formState.isSubmitting} className="mt-1">
        Sign in
      </AuthSubmit>
    </form>
  )
}
