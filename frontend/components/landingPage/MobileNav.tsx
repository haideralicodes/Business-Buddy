"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button, ButtonArrow, ButtonLabel, buttonVariants } from "@/packages/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/packages/ui/sheet"
import { Separator } from "@/packages/ui/separator"
import Logo from "@/components/Logo"
import { COPY, LOGIN_HREF, NAV_LINKS, SIGNUP_HREF } from "./constants"

/**
 * Below `lg` the centred links are hidden, so this is the only way to jump to
 * a section on a phone or tablet. A right-hand Sheet with the same three
 * links, then the two account actions. Closes itself on any link.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon-xl" aria-label="Open menu" className="lg:hidden" />}>
        <Menu />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] gap-0 p-6">
        <SheetHeader className="p-0">
          <SheetTitle className="flex items-center gap-2.5 text-body font-semibold tracking-tight">
            <Logo className="size-6" />
            {COPY.footer.company}
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        <nav className="mt-8 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-11 items-center text-title font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Separator className="my-6 bg-line" />

        <div className="flex flex-col gap-3">
          <Link href={SIGNUP_HREF} onClick={() => setOpen(false)} className={buttonVariants({ size: "xl", className: "w-full" })}>
            <ButtonLabel>{COPY.nav.cta}</ButtonLabel>
            <ButtonArrow />
          </Link>
          <Link
            href={LOGIN_HREF}
            onClick={() => setOpen(false)}
            className={buttonVariants({ variant: "secondary", size: "xl", className: "w-full" })}
          >
            {COPY.nav.login}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
