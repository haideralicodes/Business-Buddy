import { TEMPLATE_STYLES } from "./constants"

// Invented mini website mockups, not real generated sites — each is a
// different invented small business so the strip reads as "built for
// businesses like yours" rather than a color-palette picker.
const styles = [...TEMPLATE_STYLES, ...TEMPLATE_STYLES]

function SitePreview({ style }: { style: (typeof TEMPLATE_STYLES)[number] }) {
  return (
    <div className="group relative shrink-0 overflow-hidden rounded-lg border border-line bg-card shadow-[0_20px_60px_-24px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1.5">
      <div className="flex h-[240px] w-[320px] flex-col">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full" style={{ background: style.accent }} />
            <span className="text-[11px] font-semibold">{style.business}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-5 rounded-full bg-foreground/10" />
            <span className="h-1 w-5 rounded-full bg-foreground/10" />
            <span
              className="rounded-full px-2 py-1 text-[9px] font-semibold text-white"
              style={{ background: style.accent }}
            >
              Book
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 px-4">
          <p className="text-xl font-bold leading-tight tracking-tight">
            {style.headline}
            <br />
            <span style={{ color: style.accent }}>{style.headlineAccent}</span>
          </p>
          <span
            className="mt-1 w-fit rounded-full px-3 py-1.5 text-[10px] font-semibold text-white"
            style={{ background: style.accent }}
          >
            Get started
          </span>
        </div>
      </div>
      <p className="border-t border-line px-4 py-2.5 text-xs font-medium text-muted-foreground">{style.name} style</p>
    </div>
  )
}

export default function ScrollWeb() {
  return (
    <div className="relative mt-14 w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee-x items-center gap-6 hover:[animation-play-state:paused]">
        {styles.map((style, index) => (
          <SitePreview key={`${style.name}-${index}`} style={style} />
        ))}
      </div>
    </div>
  )
}
