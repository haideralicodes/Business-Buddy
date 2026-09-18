import { Card } from "@/packages/ui/card"
import { TEMPLATE_STYLES } from "./constants"
import DragStrip from "./DragStrip"

/**
 * Template strip: six invented small-business sites, each a real page
 * thumbnail (nav, hero with image, three sections, footer) built from our own
 * tokens on the shared `panel` card. It glides on its own and stops the moment
 * you hover or grab it (see DragStrip). Thumbnails are decoration for the copy
 * above them, so they're hidden from assistive tech, and they never lift on
 * hover.
 */

type Site = (typeof TEMPLATE_STYLES)[number]

function SitePreview({ site }: { site: Site }) {
  const accent = { background: site.accent }
  return (
    <Card variant="panel" size="none" className="group w-[320px] shrink-0">
      {/* Browser-ish top bar */}
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="size-1.5 rounded-full bg-foreground/15" />
        <span className="size-1.5 rounded-full bg-foreground/15" />
        <span className="size-1.5 rounded-full bg-foreground/15" />
        <span className="ml-2 h-3.5 flex-1 rounded-sm bg-surface" />
      </div>

      {/* Site nav */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold">
          <span className="size-2 rounded-full" style={accent} />
          {site.business}
        </span>
        <span className="flex items-center gap-2.5 text-[9px] text-muted-foreground">
          {site.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </div>

      {/* Hero: copy left, image block right. The image block is a solid accent
          field with one shape in it, the way a real template hero has a photo. */}
      <div className="grid grid-cols-[1fr_96px] items-center gap-3 px-4 pb-3 pt-1">
        <div>
          <p className="text-[17px] font-bold leading-[1.1] tracking-tight">
            {site.headline}
            <br />
            <span style={{ color: site.accent }}>{site.headlineAccent}</span>
          </p>
          <span className="mt-2.5 inline-block rounded-full px-2.5 py-1 text-[9px] font-semibold text-white" style={accent}>
            {site.cta}
          </span>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg" style={accent}>
          <span className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
          <span className="absolute -bottom-3 -right-3 size-14 rounded-full bg-white/25 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* Three sections */}
      <div className="grid grid-cols-3 gap-2 border-t border-line px-4 py-3">
        {site.sections.map((label) => (
          <div key={label} className="rounded-md border border-line p-1.5">
            <span className="mb-1.5 block h-8 rounded-sm opacity-25" style={accent} />
            <span className="block truncate text-[9px] font-medium">{label}</span>
          </div>
        ))}
      </div>

      {/* Footer label: what kind of business this is, not a colour name */}
      <p className="border-t border-line px-4 py-2 text-[11px] text-muted-foreground">{site.kind}</p>
    </Card>
  )
}

export default function ScrollWeb() {
  // DragStrip renders its children twice for the loop, so keys stay unique per copy.
  return (
    <DragStrip className="mt-14 w-full [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      {TEMPLATE_STYLES.map((site) => (
        <div key={site.name} aria-hidden>
          <SitePreview site={site} />
        </div>
      ))}
    </DragStrip>
  )
}
