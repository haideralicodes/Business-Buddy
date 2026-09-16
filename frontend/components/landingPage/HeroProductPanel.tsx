import { Bell, CalendarDays, Globe, LayoutDashboard, MessageSquare, PenLine, Search, Sparkles } from "lucide-react"
import Logo from "@/components/Logo"
import { cn } from "@/lib/utils"
import { HERO_APP } from "./constants"

const NAV_ICONS = [LayoutDashboard, Globe, PenLine, CalendarDays, MessageSquare]

function StateChip({ state }: { state: string }) {
  const tone =
    state === "Posted"
      ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400"
      : state === "Scheduled"
        ? "bg-primary/15 text-primary"
        : "bg-foreground/8 text-muted-foreground"
  return <span className={cn("rounded-md px-1.5 py-0.5 text-[10px] font-medium", tone)}>{state}</span>
}

/**
 * Invented app window: the "real product proof" used on the hero panel and
 * the auth stage. Everything here is built from our own tokens so it reads as
 * Business Buddy's dashboard, not a borrowed screenshot.
 */
export function AppWindow({ className }: { className?: string }) {
  return (
<div
      className={cn(
        "overflow-hidden rounded-t-xl border border-b-0 border-black/10 bg-card text-card-foreground shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]",
        className
      )}
    >
  {/* Title bar */}
  <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
    <div className="flex items-center gap-1.5">
      <span className="size-2.5 rounded-full bg-foreground/15" />
      <span className="size-2.5 rounded-full bg-foreground/15" />
      <span className="size-2.5 rounded-full bg-foreground/15" />
    </div>
    <div className="ml-2 flex h-7 flex-1 items-center gap-2 rounded-md bg-surface px-3 text-[11px] text-muted-foreground">
      <Search className="size-3" />
      app.businessbuddy.com / {HERO_APP.business.toLowerCase().replace(" ", "-")}
    </div>
    <Bell className="size-3.5 text-muted-foreground" />
  </div>

  <div className="grid grid-cols-[180px_1fr] max-md:grid-cols-1">
    {/* Sidebar */}
    <aside className="hidden border-r border-line p-3 md:block">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <Logo className="size-5" />
        <span className="text-xs font-semibold">{HERO_APP.business}</span>
      </div>
      <ul className="mt-3 space-y-0.5">
        {HERO_APP.nav.map((item, i) => {
          const Icon = NAV_ICONS[i]
          return (
            <li
              key={item}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs",
                i === 0 ? "bg-surface font-medium" : "text-muted-foreground"
              )}
            >
              <Icon className="size-3.5" />
              {item}
            </li>
          )
        })}
      </ul>
      <div className="mt-6 rounded-lg border border-line bg-surface p-2.5">
        <p className="flex items-center gap-1.5 text-[11px] font-medium">
          <Sparkles className="size-3 text-primary" />
          Buddy suggests
        </p>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
          Post about the sourdough drop Friday at 5pm.
        </p>
      </div>
    </aside>

    {/* Main */}
    <div className="p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-muted-foreground">Overview</p>
          <p className="text-sm font-semibold">Good morning, Aurora</p>
        </div>
        <span className="rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
          New post
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {HERO_APP.stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-line p-3">
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">{s.value}</p>
            <p className="text-[10px] text-emerald-700 dark:text-emerald-400">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-2.5 md:grid-cols-[1fr_1.4fr]">
        {/* Website card */}
        <div className="rounded-lg border border-line p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">Website</p>
            <span className="flex items-center gap-1 text-[10px] text-emerald-700 dark:text-emerald-400">
              <span className="size-1.5 rounded-full bg-current" />
              {HERO_APP.site.status}
            </span>
          </div>
          <div className="mt-2.5 overflow-hidden rounded-md border border-line bg-surface">
            <div className="flex items-center gap-1 border-b border-line px-2 py-1">
              <span className="h-1 w-6 rounded-full bg-foreground/10" />
              <span className="h-1 w-4 rounded-full bg-foreground/10" />
            </div>
            <div className="p-2.5">
              <p className="text-[13px] font-bold leading-tight tracking-tight">
                Fresh bakes, <span className="text-primary">daily.</span>
              </p>
              <span className="mt-1.5 inline-block rounded-full bg-primary px-2 py-0.5 text-[9px] font-semibold text-primary-foreground">
                Order now
              </span>
            </div>
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">
            {HERO_APP.site.url} · {HERO_APP.site.updated}
          </p>
        </div>

        {/* Posts list */}
        <div className="rounded-lg border border-line p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">This week&rsquo;s posts</p>
            <p className="text-[10px] text-muted-foreground">Calendar</p>
          </div>
          <ul className="mt-2 divide-y divide-line">
            {HERO_APP.posts.map((p) => (
              <li key={p.title} className="flex items-center gap-3 py-2">
                <div className="w-9 text-center">
                  <p className="text-[10px] font-medium">{p.day}</p>
                  <p className="text-[10px] text-muted-foreground">{p.time}</p>
                </div>
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-surface text-[9px] font-semibold">
                  {p.channel}
                </span>
                <p className="min-w-0 flex-1 truncate text-xs">{p.title}</p>
                <StateChip state={p.state} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

// Rail-to-rail accent panel under the hero, with the window cropped at its bottom edge.
export default function HeroProductPanel() {
  return (
    <div className="relative bg-primary">
      <div aria-hidden className="bg-dither pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-[92%] max-w-[1180px] pt-12 md:pt-14">
        <AppWindow />
      </div>
    </div>
  )
}
