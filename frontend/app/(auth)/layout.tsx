import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Buddy",
  description: "Your AI Business Buddy!",
}

// Same framed canvas as the landing page: dot-grid backdrop, white rounded frame.
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="bg-dot-paper flex flex-1 p-2 md:p-4">
      <div className="flex flex-1 overflow-clip rounded-2xl border border-line bg-card text-card-foreground">{children}</div>
    </div>
  )
}
