import type { ReactNode } from "react"
import { BarChart3, Check, MessageCircle, Plus, Send, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { COPILOT_IDEAS, COPY, HERO_APP, PUBLISH_TIMELINE } from "./constants"
import { Prominent, SectionHeading } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

/**
 * Three tall feature cards, each a pastel gradient stage holding one invented
 * product fragment, with the title and description sitting under the card
 * rather than inside it. Same shape as the "Give your sales teams their
 * mornings back" reference.
 */

const STAGES = [
  // cool → warm
  "linear-gradient(180deg, color-mix(in oklch, oklch(0.7 0.12 250) 28%, var(--card)) 0%, color-mix(in oklch, oklch(0.8 0.1 60) 30%, var(--card)) 100%)",
  // brand tint
  "linear-gradient(180deg, color-mix(in oklch, var(--primary) 26%, var(--card)) 0%, color-mix(in oklch, var(--primary) 8%, var(--card)) 100%)",
  // warm → cool
  "linear-gradient(180deg, color-mix(in oklch, oklch(0.8 0.1 60) 34%, var(--card)) 0%, color-mix(in oklch, oklch(0.7 0.12 250) 26%, var(--card)) 100%)",
]

function Stage({ index, className, children }: { index: number; className?: string; children: ReactNode }) {
  return (
    <div
      className={cn("relative flex aspect-[3/4] w-full min-w-0 items-center justify-center overflow-hidden rounded-xl p-5 sm:p-6", className)}
      style={{ background: STAGES[index] }}
    >
      {children}
    </div>
  )
}

// Hover never moves the card or the panel; it animates the product inside (see each fragment).
const panel = "w-full min-w-0 rounded-xl border border-black/5 bg-card text-card-foreground shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"

// Card 1: prompt in, three post directions out, one approved.
function IdeasFragment() {
  return (
    <div className={cn(panel, "max-w-[300px] p-4")}>
      <div className="flex items-center gap-2 rounded-full bg-surface px-3 py-2 text-[11px] text-muted-foreground">
        <Sparkles className="size-3.5 shrink-0 text-primary" />
        <span className="truncate">&ldquo;New eid cookies, promote this weekend&rdquo;</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {COPILOT_IDEAS.map((idea, i) => {
          // Poster 0 is selected at rest; on hover the pick moves to poster 1.
          const selected =
            i === 0 ? "opacity-100 group-hover:opacity-0" : i === 1 ? "opacity-0 group-hover:opacity-100" : "opacity-0"
          return (
            <div
              key={idea.label}
              className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg p-2 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
              style={{ background: idea.accent, transitionDelay: `${i * 60}ms` }}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-lg ring-2 ring-inset ring-foreground transition-opacity duration-300",
                  selected
                )}
              />
              <p className="whitespace-pre-line text-[10px] font-extrabold leading-[1.05] text-white">{idea.poster}</p>
              <span
                className={cn(
                  "absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-foreground text-background transition-opacity duration-300",
                  selected
                )}
              >
                <Check className="size-2.5" strokeWidth={3} />
              </span>
            </div>
          )
        })}
      </div>
      <p className="mt-3 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
        Fresh from the oven this weekend: eid cookies, boxed by the dozen. Pre-order at the counter or online.
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">#eid #cookies #aurorabakery</span>
        <span className="rounded-full bg-inverse px-2.5 py-1 text-[10px] font-semibold text-inverse-foreground">Approve</span>
      </div>
    </div>
  )
}

// Card 2: the week's calendar with slots Buddy picked.
const SUGGESTED_SLOTS: Record<string, { channel: string; title: string; time: string }> = {
  Tue: { channel: "FB", title: "Cookie pre-orders open", time: "11:00" },
  Thu: { channel: "IG", title: "Behind the counter", time: "15:30" },
  Sat: { channel: "IG", title: "Weekend hours", time: "8:00" },
}

function ScheduleFragment() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const slots: Record<string, (typeof HERO_APP.posts)[number]> = {}
  for (const p of HERO_APP.posts) slots[p.day] = p
  let ghostIndex = 0
  return (
    <div className={cn(panel, "max-w-[300px] p-4")}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">This week</p>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">Auto-filled</span>
      </div>
      <ul className="mt-3 divide-y divide-line">
        {days.map((d) => {
          const p = slots[d]
          const ghost = SUGGESTED_SLOTS[d]
          const delay = ghost ? `${ghostIndex++ * 90}ms` : undefined
          return (
            <li key={d} className="flex items-center gap-3 py-2">
              <span className="w-7 text-[11px] font-medium text-muted-foreground">{d}</span>
              {p ? (
                <>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-surface text-[9px] font-semibold">
                    {p.channel}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-xs">{p.title}</span>
                  <span className="text-[10px] text-muted-foreground">{p.time}</span>
                </>
              ) : ghost ? (
                // Empty at rest; Buddy fills it on hover.
                <span className="relative flex min-w-0 flex-1 items-center">
                  <span className="h-1.5 flex-1 rounded-full bg-foreground/6 transition-opacity duration-300 group-hover:opacity-0" />
                  <span
                    className="absolute inset-0 flex translate-y-1 items-center gap-3 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: delay }}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-[9px] font-semibold text-primary">
                      {ghost.channel}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-xs text-primary">{ghost.title}</span>
                    <span className="text-[10px] text-primary/70">{ghost.time}</span>
                  </span>
                </span>
              ) : (
                <span className="h-1.5 flex-1 rounded-full bg-foreground/6" />
              )}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-[11px]">
        <span className="size-1.5 rounded-full bg-primary" />
        Best time for your followers: <span className="font-medium">Fri 5:00 PM</span>
      </div>
    </div>
  )
}

const TIMELINE_ICONS = { post: Send, reply: MessageCircle, report: BarChart3 }

// Card 3: what happens after publish, as a connected timeline.
function PublishFragment() {
  return (
    <div className="relative w-full max-w-[300px]">
      <div aria-hidden className="absolute bottom-6 left-1/2 top-4 w-px -translate-x-1/2 border-l border-dashed border-foreground/25" />
      <ul className="relative space-y-4">
        {PUBLISH_TIMELINE.map((step) => {
          const Icon = TIMELINE_ICONS[step.icon]
          return (
            <li key={step.label} className={cn(panel, "p-3")}>
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="size-3.5" />
                </span>
                <span className="flex-1 text-xs font-medium">{step.label}</span>
                <span className="rounded-md bg-surface px-2 py-0.5 text-[10px] text-muted-foreground">{step.time}</span>
              </div>
              {"details" in step ? (
                // Collapsed at rest; hovering the card opens the report.
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <dl className="min-h-0 overflow-hidden">
                    <div className="mt-3 space-y-1.5 border-t border-line pt-3 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                      {step.details.map((d) => (
                        <div key={d.k} className="flex items-center gap-2 text-[11px]">
                          <dt className="text-muted-foreground">{d.k} →</dt>
                          <dd className="rounded-md border border-line px-1.5 py-0.5 font-medium">{d.v}</dd>
                        </div>
                      ))}
                    </div>
                  </dl>
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
      <span className="relative mx-auto mt-4 flex size-7 items-center justify-center rounded-full bg-inverse text-inverse-foreground">
        <Plus className="size-3.5 transition-transform duration-300 ease-out group-hover:rotate-90" />
      </span>
    </div>
  )
}

const FRAGMENTS = [IdeasFragment, ScheduleFragment, PublishFragment]

export default function Benefit() {
  return (
    <section id="benefit" className="scroll-mt-[72px]">
      <Hatch />
      <Rails className="px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <SectionHeading
          eyebrow={COPY.benefit.eyebrow}
          title={
            <>
              {COPY.benefit.line1}
              <br />
              {COPY.benefit.line2a} <Prominent className="text-primary">{COPY.benefit.line2b}</Prominent>
            </>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {COPY.benefit.cards.map((card, i) => {
            const Fragment = FRAGMENTS[i]
            // Two columns on tablet leave the third card alone on its row, so it
            // goes wide there and back to a portrait stage at three columns.
            const last = i === FRAGMENTS.length - 1
            return (
              <div key={card.title} className={cn("group flex min-w-0 flex-col", last && "sm:col-span-2 lg:col-span-1")}>
                <Stage index={i} className={last ? "sm:aspect-[16/9] lg:aspect-[3/4]" : undefined}>
                  <Fragment />
                </Stage>
                <h3 className="mt-6 text-lg font-medium tracking-[-0.01em]">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{card.body}</p>
              </div>
            )
          })}
        </div>
      </Rails>
    </section>
  )
}
