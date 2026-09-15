import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/packages/ui/button"
import { cn } from "@/lib/utils"
import { COPY, LANDING_IMAGES, NAV_LINKS, SIGNUP_HREF } from "./constants"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header
      id="nav"
      className="flex h-[13vh] w-full items-center justify-between bg-surface px-6 text-surface-foreground md:px-20"
    >
      <Link href="/" className="flex h-[75px] w-[50px] items-center justify-center">
        <Image src={LANDING_IMAGES.logo} alt="Business Buddy" width={50} height={50} priority />
      </Link>
      <div className="flex h-full items-center gap-6 md:gap-12">
        <nav className="hidden items-center gap-12 text-[15px] md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
        <Link href={SIGNUP_HREF} className={cn(buttonVariants({ variant: "cta", size: "xl" }), "rounded-lg")}>
          {COPY.nav.cta}
        </Link>
      </div>
    </header>
  )
}
