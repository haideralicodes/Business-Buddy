import type { SVGProps } from "react"

// Lucide ships no brand marks, so these three are inlined. Google keeps its
// colours; Facebook and Apple follow currentColor so they sit on any button.

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.55 5.55 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.55-5.17 3.55-8.87Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.94-2.91l-3.87-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29A12 12 0 0 0 0 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  )
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  )
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.37 12.73c-.03-2.66 2.17-3.94 2.27-4-1.24-1.81-3.16-2.06-3.84-2.09-1.64-.17-3.2.96-4.03.96-.83 0-2.11-.94-3.47-.91-1.78.03-3.43 1.04-4.35 2.63-1.86 3.22-.47 7.99 1.33 10.6.89 1.28 1.94 2.72 3.32 2.67 1.33-.05 1.84-.86 3.45-.86 1.61 0 2.06.86 3.47.83 1.44-.03 2.34-1.3 3.22-2.59 1.01-1.49 1.43-2.93 1.45-3-.03-.01-2.79-1.07-2.82-4.24ZM13.73 4.9c.73-.89 1.23-2.12 1.09-3.35-1.06.04-2.34.7-3.1 1.59-.68.78-1.27 2.04-1.11 3.24 1.18.09 2.38-.6 3.12-1.48Z" />
    </svg>
  )
}
