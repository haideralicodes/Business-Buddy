import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, LANDING_IMAGES, LOGIN_HREF, NAV_LINKS, SIGNUP_HREF } from "./constants"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-foreground/10 bg-background/70 pl-4 pr-2 shadow-[0_1px_0_0_var(--background),0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={LANDING_IMAGES.logo} alt="" width={28} height={28} priority className="size-7" />
          <span className="text-sm font-semibold tracking-tight">{COPY.footer.company}</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link
            href={LOGIN_HREF}
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "hidden rounded-full px-3.5 sm:inline-flex")}
          >
            {COPY.nav.login}
          </Link>
          <Link href={SIGNUP_HREF} className={cn(buttonVariants({ variant: "pill", size: "lg" }), "px-4")}>
            {COPY.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  )
}
