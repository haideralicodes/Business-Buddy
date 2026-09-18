import Link from "next/link"
import Logo from "@/components/Logo"
import { COPY, LOGIN_HREF, NAV_LINKS, SIGNUP_HREF } from "./constants"
import { Divider, Rails } from "./Structure"

export default function Footer() {
  return (
    <footer>
      <Divider />
      <Rails className="px-6 py-12 md:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="size-7" />
              <span className="text-body font-semibold tracking-tight">{COPY.footer.company}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{COPY.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-body sm:gap-16">
            <div className="flex flex-col gap-2.5">
              <p className="font-mono text-label uppercase text-muted-foreground">Product</p>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-foreground/70 transition-colors hover:text-foreground">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-mono text-label uppercase text-muted-foreground">Account</p>
              <Link href={LOGIN_HREF} className="text-foreground/70 transition-colors hover:text-foreground">
                {COPY.nav.login}
              </Link>
              <Link href={SIGNUP_HREF} className="text-foreground/70 transition-colors hover:text-foreground">
                {COPY.nav.cta}
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-6 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {COPY.footer.company}. All rights reserved.
        </p>
      </Rails>
    </footer>
  )
}
