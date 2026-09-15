import Image from "next/image"
import Link from "next/link"
import { COPY, LANDING_IMAGES, LOGIN_HREF, NAV_LINKS, SIGNUP_HREF } from "./constants"

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={LANDING_IMAGES.logo} alt="" width={28} height={28} className="size-7" />
            <span className="text-sm font-semibold tracking-tight">{COPY.footer.company}</span>
          </Link>
          <p className="text-sm text-muted-foreground">{COPY.footer.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
          <div className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Product</p>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Account</p>
            <Link href={LOGIN_HREF} className="text-foreground/80 transition-colors hover:text-foreground">
              {COPY.nav.login}
            </Link>
            <Link href={SIGNUP_HREF} className="text-foreground/80 transition-colors hover:text-foreground">
              {COPY.nav.cta}
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-foreground/10 pt-6 text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {COPY.footer.company}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
