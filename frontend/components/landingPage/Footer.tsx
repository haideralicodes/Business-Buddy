import Image from "next/image"
import { COPY, LANDING_IMAGES, NAV_LINKS } from "./constants"

export default function Footer() {
  return (
    <footer className="flex h-[400px] w-full flex-col items-center justify-center gap-9 rounded-t-[120px] bg-inverse text-inverse-foreground">
      <Image src={LANDING_IMAGES.logo} alt="Business Buddy" width={60} height={60} className="h-[60px] w-auto" />
      <ul className="flex items-center justify-center gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="w-20 text-center">
            <a href={link.href} className="text-[17px] hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p>&copy; {new Date().getFullYear()} {COPY.footer.company}. All rights reserved.</p>
    </footer>
  )
}
