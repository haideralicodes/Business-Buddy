"use client"

import { Fragment, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * A horizontal strip that glides on its own and can be grabbed at any moment.
 *
 * - Ambient: scrolls at `speed` px/s and loops (children are rendered twice,
 *   so when it passes the halfway point it jumps back by half, invisibly).
 * - Interruptible: hover, touch or a drag pauses the glide; leaving resumes it.
 *   Touch and pen scroll natively (momentum for free). The mouse gets 1:1 drag
 *   with the pointer captured, and on release keeps the pointer's velocity and
 *   decelerates like a scroll view (Apple's projection, d = 0.998).
 * - Keyboard: focus the strip and use the arrow keys.
 * - Reduced motion: no ambient scrolling; drag and keys still work.
 */
export default function DragStrip({
  className,
  children,
  speed = 36,
  step = 344,
}: {
  className?: string
  children: ReactNode
  speed?: number
  step?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; left: number; vx: number; t: number; moved: boolean } | null>(null)
  const paused = useRef(false)
  const glide = useRef(0) // rAF id for the momentum glide after a drag

  // Ambient loop. One rAF for the life of the component; it does nothing
  // while paused or gliding, and it never runs under reduced motion.
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let id = 0
    let last = performance.now()
    let carry = 0
    const tick = (t: number) => {
      const dt = Math.min(64, t - last)
      last = t
      if (!paused.current && !glide.current) {
        carry += (speed * dt) / 1000
        const px = Math.floor(carry)
        if (px) {
          el.scrollLeft += px
          carry -= px
        }
        wrap(el)
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [speed])

  // Keep scrollLeft inside the first copy of the children.
  function wrap(el: HTMLDivElement) {
    const half = el.scrollWidth / 2
    if (el.scrollLeft >= half) el.scrollLeft -= half
    else if (el.scrollLeft < 0) el.scrollLeft += half
  }

  function stopGlide() {
    cancelAnimationFrame(glide.current)
    glide.current = 0
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    paused.current = true
    if (e.pointerType !== "mouse") return
    const el = ref.current!
    stopGlide()
    el.setPointerCapture(e.pointerId)
    drag.current = { x: e.clientX, left: el.scrollLeft, vx: 0, t: performance.now(), moved: false }
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current
    if (!d) return
    const el = ref.current!
    const now = performance.now()
    const dx = e.clientX - d.x
    if (Math.abs(dx) > 4) d.moved = true
    const next = d.left - dx
    const dt = Math.max(1, now - d.t)
    d.vx = 0.7 * d.vx + 0.3 * ((el.scrollLeft - next) / dt) // px/ms, lightly smoothed
    d.t = now
    el.scrollLeft = next
    wrap(el)
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current
    if (!d) {
      return
    }
    const el = ref.current!
    el.releasePointerCapture(e.pointerId)
    drag.current = null
    let v = d.vx * 1000 // px/s
    if (Math.abs(v) < 60) return
    const decel = 0.998
    let last = performance.now()
    const tick = (t: number) => {
      const dt = t - last
      last = t
      v *= Math.pow(decel, dt)
      el.scrollLeft += (v * dt) / 1000
      wrap(el)
      if (Math.abs(v) > 20) glide.current = requestAnimationFrame(tick)
      else glide.current = 0
    }
    glide.current = requestAnimationFrame(tick)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    stopGlide()
    ref.current?.scrollBy({ left: e.key === "ArrowLeft" ? -step : step, behavior: "smooth" })
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      aria-label="Example websites; use the arrow keys to scroll"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onKeyDown={onKeyDown}
      onClickCapture={(e) => {
        // A drag shouldn't count as a click on whatever it started over.
        if (drag.current?.moved) e.stopPropagation()
      }}
      className={cn(
        "flex cursor-grab gap-6 overflow-x-auto px-6 py-6 outline-none select-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/50 active:cursor-grabbing [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {/* Two copies for the seamless loop; fragments keep the children's keys scoped per copy. */}
      <Fragment key="a">{children}</Fragment>
      <Fragment key="b">{children}</Fragment>
    </div>
  )
}
