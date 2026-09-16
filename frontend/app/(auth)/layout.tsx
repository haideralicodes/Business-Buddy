import type { Metadata } from "next"
import { Toaster } from "@/packages/ui/toast"

export const metadata: Metadata = {
  title: "Business Buddy",
  description: "Your AI Business Buddy!",
}

// Same framed canvas as the landing page: dot-grid backdrop, white rounded frame.
// Toaster lives here so every auth flow can report "code sent" / "link sent".
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <Toaster>
      <div className="bg-dot-paper flex flex-1 p-2 md:p-4">
        <div className="flex flex-1 overflow-clip rounded-2xl border border-line bg-card text-card-foreground">
          {children}
        </div>
      </div>
    </Toaster>
  )
}
