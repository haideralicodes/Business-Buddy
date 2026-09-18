import type { ReactNode } from "react"
import { BarChart3, Check, Sparkles } from "lucide-react"
import { Card } from "@/packages/ui/card"
import { Stage, type StageTone } from "./Stage"
import { cn } from "@/lib/utils"
import { COPILOT_IDEAS, COPY, HERO_APP, PUBLISH_CHANNELS, WEEKLY_REPORT } from "./constants"
import { Prominent, SectionHeading } from "./SectionHeading"
import { Hatch, Rails } from "./Structure"

/**
 * Three feature cards: a `stage` card (pastel field) holding one `panel` card
 * (a fragment of the product), with the title and body under the stage.
 * Everything a card wants to say is visible at rest; hover only animates the
 * product inside. The stage and panel never move, scale or lift.
 */

const TONES: StageTone[] = ["cool", "brand", "warm"]
const STAGE = "flex aspect-[3/4] w-full min-w-0 items-center justify-center p-5 sm:p-6"

function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <Card variant="panel" size="none" className={cn("w-full max-w-[300px] p-4", className)}>
      {children}
    </Card>
  )
}

// Card 1: prompt in, three post directions out, one approved. On hover the
// pick moves from the first poster to the second.
function IdeasFragment() {
  return (
    <Panel>
      <div className="flex items-center gap-2 rounded-full bg-surface px-3 py-2 text-[11px] text-muted-foreground">
        <Sparkles className="size-3.5 shrink-0 text-primary" />
        <span className="truncate">&ldquo;New eid cookies, promote this weekend&rdquo;</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {COPILOT_IDEAS.map((idea, i) => {
          const selected =
            i === 0 ? "opacity-100 group-hover:opacity-0" : i === 1 ? "opacity-0 group-hover:opacity-100" : "opacity-0"
          return (
            <div
              key={idea.label}
              className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg p-2 transition-transform duration-500 group-hover:-translate-y-0.5"
              style={{ background: idea.accent, transitionDelay: `${i * 60}ms` }}
            >
              <span className={cn("pointer-events-none absolute inset-0 rounded-lg ring-2 ring-inset ring-foreground transition-opacity", selected)} />
              <p className="whitespace-pre-line text-[10px] font-extrabold leading-[1.05] text-white">{idea.poster}</p>
              <span
                className={cn(
                  "absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-foreground text-background transition-opacity",
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
    </Panel>
  )
}

// Card 2: the week, with the slots Buddy already filled and the ones it is
// suggesting. Suggestions are visible at rest as outlined chips; on hover they
// fill in, one after another, as if being accepted.
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
    <Panel>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">This week</p>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary-ink">3 suggested</span>
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
                <span
                  className="flex min-w-0 flex-1 items-center gap-3 rounded-md border border-dashed border-primary/50 px-1 py-0.5 -mx-1 transition-[background-color,border-color] duration-500 group-hover:border-solid group-hover:border-primary/0 group-hover:bg-primary/12"
                  style={{ transitionDelay: delay }}
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-[9px] font-semibold text-primary-ink">
                    {ghost.channel}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-xs text-primary-ink">{ghost.title}</span>
                  <span className="text-[10px] text-primary-ink/70">{ghost.time}</span>
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
    </Panel>
  )
}

// Card 3: one post, every channel, and the report that follows. The numbers
// are on screen at rest; hover ticks the channels in sequence.
function PublishFragment() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Weekend sale recap</p>
        <span className="text-[10px] text-muted-foreground">Mon 9:00</span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {PUBLISH_CHANNELS.map((ch, i) => (
          <li key={ch.name} className="flex items-center gap-2.5 rounded-lg bg-surface px-2.5 py-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-card text-[9px] font-semibold">
              {ch.short}
            </span>
            <span className="flex-1 text-xs font-medium">{ch.name}</span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <span
                className="flex size-3.5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 transition-transform duration-500 group-hover:scale-125 dark:text-emerald-400"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              {ch.state}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-lg border border-line p-3">
        <div className="flex items-center gap-2">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-ink">
            <BarChart3 className="size-3.5" />
          </span>
          <span className="flex-1 text-xs font-medium">{WEEKLY_REPORT.title}</span>
          <span className="text-[10px] text-muted-foreground">{WEEKLY_REPORT.when}</span>
        </div>
        <dl className="mt-2.5 space-y-1.5 border-t border-line pt-2.5">
          {WEEKLY_REPORT.rows.map((row, i) => (
            <div
              key={row.k}
              className="flex items-center justify-between text-[11px] transition-transform duration-500 group-hover:translate-x-0.5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <dt className="text-muted-foreground">{row.k}</dt>
              <dd className="font-medium">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Panel>
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
              {COPY.benefit.line2a} <Prominent>{COPY.benefit.line2b}</Prominent>
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
                <Stage tone={TONES[i]} aria-hidden className={cn(STAGE, last && "sm:aspect-[16/9] lg:aspect-[3/4]")}>
                  <Fragment />
                </Stage>
                <h3 className="mt-6 text-title font-semibold">{card.title}</h3>
                <p className="mt-2 text-body text-muted-foreground">{card.body}</p>
              </div>
            )
          })}
        </div>
      </Rails>
    </section>
  )
}
