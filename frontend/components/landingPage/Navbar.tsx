import Link from "next/link"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/components/Logo"
import { COPY, LOGIN_HREF, NAV_LINKS, SIGNUP_HREF } from "./constants"
import { Rails } from "./Structure"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/85 backdrop-blur-xl">
      <Rails as="div" className="flex h-[72px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="size-7" />
          <span className="text-[15px] font-semibold tracking-tight">{COPY.footer.company}</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={LOGIN_HREF}
            className="hidden px-2 text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground sm:inline-flex"
          >
            {COPY.nav.login}
          </Link>
          <Link href={SIGNUP_HREF} className={cn(buttonVariants({ size: "lg" }), "px-5")}>
            {COPY.nav.cta}
          </Link>
        </div>
      </Rails>
    </header>
  )
}
