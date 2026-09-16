import { z } from "zod"

/**
 * Auth form schemas. Every form in the app validates with zod through
 * react-hook-form's resolver; messages are written for the person typing,
 * not for a log file.
 */

export const PASSWORD_MIN = 8
export const PASSWORD_MAX = 20

// One source for the password rules: the schema, the live checklist and the
// strength meter all read from this list, so they can never disagree.
export const PASSWORD_RULES = [
  { id: "length", label: `${PASSWORD_MIN}–${PASSWORD_MAX} characters`, test: (v: string) => v.length >= PASSWORD_MIN && v.length <= PASSWORD_MAX },
  { id: "upper", label: "One uppercase letter (A–Z)", test: (v: string) => /[A-Z]/.test(v) },
  { id: "lower", label: "One lowercase letter (a–z)", test: (v: string) => /[a-z]/.test(v) },
  { id: "number", label: "One number (0–9)", test: (v: string) => /[0-9]/.test(v) },
] as const

export type PasswordRuleId = (typeof PASSWORD_RULES)[number]["id"]

export function checkPassword(value: string) {
  return PASSWORD_RULES.map((rule) => ({ ...rule, passed: rule.test(value) }))
}

/** 0–4: how many rules pass. Used by the strength meter. */
export function passwordStrength(value: string) {
  const passed = checkPassword(value).filter((r) => r.passed).length
  const label = value.length === 0 ? "" : passed <= 1 ? "Weak" : passed === 2 ? "Fair" : passed === 3 ? "Good" : "Strong"
  return { score: passed, label }
}

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Enter your email address.")
  .email("That doesn't look like an email address. Check for typos like a missing @ or .com.")

export const passwordSchema = z
  .string()
  .min(1, "Enter a password.")
  .min(PASSWORD_MIN, `Password needs at least ${PASSWORD_MIN} characters.`)
  .max(PASSWORD_MAX, `Password can't be longer than ${PASSWORD_MAX} characters.`)
  .regex(/[A-Z]/, "Add at least one uppercase letter (A–Z).")
  .regex(/[a-z]/, "Add at least one lowercase letter (a–z).")
  .regex(/[0-9]/, "Add at least one number (0–9).")

export const loginSchema = z.object({
  email: emailSchema,
  // On login we only check presence; the rules are enforced at signup and the
  // server decides whether it matches.
  password: z.string().min(1, "Enter your password."),
})
export type LoginValues = z.infer<typeof loginSchema>

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, "Enter your full name.")
      .min(2, "Your name needs at least 2 characters.")
      .max(60, "Keep your name under 60 characters.")
      .regex(/^[\p{L}\p{M}' .-]+$/u, "Use letters, spaces, apostrophes or hyphens only."),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Type your password again to confirm it."),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match. Check both fields.",
  })
export type SignupValues = z.infer<typeof signupSchema>

export const forgotPasswordSchema = z.object({ email: emailSchema })
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export const OTP_LENGTH = 6
export const verifyEmailSchema = z.object({
  code: z
    .string()
    .length(OTP_LENGTH, `Enter all ${OTP_LENGTH} digits from the email.`)
    .regex(/^\d+$/, "The code is numbers only."),
})
export type VerifyEmailValues = z.infer<typeof verifyEmailSchema>
