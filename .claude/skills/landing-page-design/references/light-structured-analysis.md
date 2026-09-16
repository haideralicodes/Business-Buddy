# Light Structured Family — Deep Design Analysis (Examples 10–17)

Measurements below were taken from the screenshots at ~1280px width. Colors are sampled pixel values, so treat them as exact targets. Font sizes come from measured line pitch, so treat them as close approximations (±4px). Most colors match the Tailwind v4 palette, which makes the family easy to reproduce with Tailwind tokens.

## Contents
1. System summary (read this first)
2. Typography system
3. Color tokens
4. Layout, grid and spacing system
5. Visual hierarchy rules
6. Hero archetypes (arrangement recipes)
7. Component recipes (with CSS)
8. Per-example breakdowns (10–17)
9. Build checklist

---

## 1. System summary

Every page in this family is built from the same five decisions:

1. **A framed canvas.** The site lives inside a white rounded container (radius 12–16px) sitting on a #F3F4F6–#F5F5F5 backdrop with 16–20px outer margin. Inside it, the content column is either bounded by visible 1px rails or by a slightly tinted inset panel (#F9FAFB).
2. **Exposed structure.** Grid rails, hatched bands, corner ticks, `+` crosshairs, dot grids, and selection boxes make the layout grid visible as a decorative element. It says "precise, engineered, designed".
3. **One headline, one accent, one primary action.** Neutral palette (near-black, 500-gray, whites) with exactly one saturated accent used on the primary CTA and at most one piece of emphasis.
4. **Real product proof immediately below or beside the headline.** Dashboard, phone mockup, app window, template thumbnails, avatars, or a logo row. Never an abstract stock illustration.
5. **Generous, deliberate whitespace.** Big gaps separate groups; small gaps bind items within a group (see spacing rules, section 4).

---

## 2. Typography system

### Typeface choices

| Example | Headline face (closest web font) | Weight | Body face | Mono / accent face |
|---|---|---|---|---|
| 10 Blockad | Segoe UI Light style humanist sans → use **Inter** / **Geist** at 200–300 | Thin/Light | Same sans, 300–400 | Monospace eyebrow (JetBrains Mono / Geist Mono) |
| 11 Cognivis | Segoe UI style → **Inter** / **Geist** 300–400 | Light/Regular | Same sans 400 | Monospace uppercase eyebrow |
| 12 Clonely (pixel) | **Inter** | Semibold 600 | Inter 400 | — |
| 13 Clonely (painted) | **Inter** | Semibold 600, tight tracking | Inter 400 | — |
| 14 FigmaNutz | **Inter** / Helvetica Neue | Regular 400 | Inter 400 | — |
| 15 Aceternity | **Plus Jakarta Sans** (geometric, rounded 'a' and 'y') | Bold 700 | **Inter** 400 | Hand-drawn SVG underlines |
| 16 DevStudio | **Inter** | Bold 700 | Inter 400 | — |
| 17 Landing kit | **Inter** | Medium 500 | Inter 400 | — |

**Rule:** one sans family for headline + body (two families max). Personality comes from *weight and tracking*, not from many fonts. Add a monospace only for tiny labels.

Recommended stacks:
```css
--font-sans: "Inter", "Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
--font-display-geo: "Plus Jakarta Sans", "Inter", sans-serif;
--font-mono: "Geist Mono", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
```

### Two headline "voices"

**Voice A — Airy/Light (10, 11, 14):** weight 200–400, letter-spacing ~-0.01em to -0.02em, line-height 1.0–1.05. Feels premium, calm, institutional. Works for finance, VC, enterprise AI.

**Voice B — Tight/Bold (12, 13, 15, 16, 17):** weight 500–700, letter-spacing -0.03em to -0.045em, line-height 0.95–1.05. Feels confident, product-led, startup. Works for dev tools, AI apps, agencies, consumer.

Pick one voice per page. Never mix light and bold weights inside the headline.

### Measured type scale (desktop, ~1280px)

| Role | Size | Line-height | Weight | Color | Tracking |
|---|---|---|---|---|---|
| Hero H1 (centered, 2 lines) | 64–76px (`clamp(2.75rem, 5.5vw, 4.75rem)`) | 1.0–1.05 | per voice | #09090B / #171717 | -0.02 to -0.04em |
| Hero H1 (split layout, 3–4 lines) | 56–76px | 1.0 | per voice | #171717 / #2E2E2E | same |
| Section H2 | 40–48px | 1.1 | same as H1 | same | -0.02em |
| Subheadline / lead | 18–22px | 1.5–1.55 | 400 | #737373 (neutral-500) or #71717B (zinc-500) | 0 |
| Body in split hero | 16–17px | 1.7 (≈28px) | 300–400 | #8A8390 / #737373 | 0 |
| Nav links | 14–15px | — | 500 | #262626–#404040 | 0 |
| Button label | 14–16px | — | 500–600 | white on dark/accent, #171717 on light | 0 |
| Eyebrow / badge (sans) | 13–14px | — | 500 | #171717 | 0 |
| Eyebrow (mono caps) | 12–14px | — | 400 | #171717 or #9CA3AF | 0.02–0.06em, uppercase |
| Microcopy ("No credit card required") | 13–14px | — | 400 | #525252 | 0 |
| "Trusted by" label | 13–14px | — | 400–500 | #525252 | 0 |

Headline width is constrained by `max-width`, not by container width: centered H1s run 760–880px wide (≈18–24 characters per line); subheadlines 440–520px (≈45–60 characters per line). Line breaks are deliberate and balanced (`text-wrap: balance`).

### Emphasis techniques (use exactly one per headline)
- **Accent color on the second half** (16): first clause zinc-700 #3F3F47, second clause indigo-600 #4F38F5. Split at a natural phrase boundary.
- **Highlighter block** (15): marker yellow #F9D132 rectangle behind 1–3 words, slightly taller than the x-height, extends ~4px past the glyphs, slightly irregular edges.
- **Hand-drawn underline** (15): 3–4px yellow SVG stroke under one word, and a thinner one under a number in the body copy.
- **Design-tool selection box** (14): 1px #0099FF rectangle hugging the H1 with a solid blue "768 x 120" tag at top-right.
- **Inline icon** (16): small outlined lightning icon in a lighter tint of the accent after the last word, aligned to the x-height middle.
- **None** (10, 11, 12, 13, 17): hierarchy from size and weight alone. This is the default; it's the most elegant.

---

## 3. Color tokens

Sampled values:

| Example | Canvas | Inset/panel | Headline | Body | Primary CTA | Secondary CTA | Accent/decor |
|---|---|---|---|---|---|---|---|
| 10 | #FFFFFF | #F8F8F8 | #2E2E2E | #8A8390 | #171717 pill | #F6F6F6 pill | dot #6889FF, lines #DEDEDE |
| 11 | #FFFFFF | #FAFAFA eyebrow | #171717 | #454545 | #143CFE square | #F1F1F1 square | panel #143CFE, lines #EEEEEE |
| 12 | image | — | #FFFFFF | #FFFFFF | #2B7FFF pill | #FFFFFF pill | — |
| 13 | #F3F4F6 | image | #09090B | #737373 | #2678FF square-ish | text link | hatch #C7C7C7 |
| 14 | #FFFFFF | — | #09090B | #737373 | #5C55FE pill | #FFFFFF pill + border | selection #0099FF, badge #F2F2F2 |
| 15 | #FFFFFF | #F9FAFB | #171717 | #737373 | #FDC700 (black text) | text link | highlighter #F9D132, bubbles #F3F4F6 |
| 16 | #FFFFFF | #F9FAFB | #3F3F47 + #4F38F5 | #71717B | #000000 | — | lightning icon indigo-300 |
| 17 | #F5F3F0 (warm) | #FDFDFC nav | #262626 | #737373 | #FFFFFF pill + shadow | — | dot grid ≈#E4E1DC |

Token template:
```css
:root {
  --backdrop: #F3F4F6;       /* outside the frame */
  --canvas: #FFFFFF;
  --inset: #F9FAFB;          /* tinted hero panel */
  --line: #E5E5E5;           /* rails & dividers (#DEDEDE–#EEEEEE) */
  --hatch: #D4D4D4;          /* hatch strokes (#C7C7C7–#DEDEDE) */
  --ink: #171717;            /* headline (#09090B for max contrast) */
  --ink-2: #404040;          /* nav, secondary text */
  --muted: #737373;          /* subheadline/body */
  --subtle: #F1F1F1;         /* secondary button fill */
  --accent: #143CFE;         /* pick ONE: #143CFE cobalt | #2B7FFF blue | #4F38F5 indigo | #5C55FE violet | #FDC700 yellow | #171717 mono */
  --accent-ink: #FFFFFF;     /* #000 when accent is yellow */
}
```
**Accent rules:** accent appears on the primary CTA and in at most two other places (e.g. a dot in the eyebrow, a large product panel, headline emphasis). Grays should be neutral (no blue tint) unless the canvas is warm, then use stone grays. A monochrome black-CTA page (10, 16) is fully valid.

---

## 4. Layout, grid and spacing system

### Frame
- Outer backdrop margin: 16–20px. Frame radius: 12–16px, 1px border #E5E5E5 or none.
- Content max-width: 1040–1170px, centered. Rails at the content edges, typically at ~8–10% of viewport width on each side (≈100–140px at 1280).
- A second "inset" rectangle (15, 16, 17) sits 40px inside the frame with a #F9FAFB/#F5F3F0 fill — the hero lives in it.

### Nav
- Height 64–96px (measured: 10 = 96px band, 11 = 86px, 13 ≈ 40px from top of inset).
- Nav content aligns to the same rails as the hero text. Logo left edge = headline left edge (10, 13). Always check this.
- Link gap 24–36px, links centered as a group or right-aligned before the CTA (10). CTA height 36–48px.
- Variant: floating pill capsule (17) — 48px tall, white, 1px border, soft shadow, 16px internal padding, a 1px vertical divider before Login.

### Vertical rhythm of the centered hero (measured on 11)
```
nav bottom
  ↓ 60px hatched band
  ↓ ~80px top padding
eyebrow (38px bracket box)
  ↓ 26px
H1 (2 lines, 76px pitch)
  ↓ 20px
subheadline (2 lines, 22px pitch)
  ↓ 25px
buttons (40px tall, 12px gap between)
  ↓ 16px
microcopy (12px)
  ↓ ~60px
product panel (full content width, bleeds into next fold)
```
Rule of proximity: **eyebrow→H1 24–40px, H1→sub 16–24px, sub→CTA 24–40px, CTA→microcopy 12–16px, CTA→social proof 56–80px.** Gaps grow as you move outward from the headline.

Other measured rhythms:
- **16 DevStudio:** avatars (56px) → 28px → H1 (2 lines, 72px pitch) → ~30px → body → ~35px → CTA (40px) → 58px → "Trusted by" → 30px → logo row (31px) → ~95px → carousel.
- **17 Landing kit:** H1 (2 lines, 58px pitch) → ~15px → sub → ~40px → CTA (44px). Hero vertically centered in viewport, ~320px empty above the headline.
- **14 FigmaNutz:** badge → ~25px → H1 → ~40px → sub (3 lines) → ~45px → 56px-tall CTAs. Everything a bit larger and looser.

### Split hero (10, 15)
- 2 columns. 10 = exact 50/50 with the right column a #F8F8F8 panel divided by a 1px line. 15 = ~60/40 text/media.
- Text column left padding 48px from rail; text max-width ~400–640px.
- 10 uses `justify-content: space-between` vertically: eyebrow + H1 top-aligned, body + CTAs bottom-aligned, with ~120px of empty space between H1 and body. This deliberate gap is what makes it feel editorial. The image is vertically centered in its panel with ~50px side padding and 16–20px radius.
- 15 vertically centers the text block; the phone bleeds off the bottom edge of the inset panel and slightly past its right edge.

### Left-aligned-low hero (13)
- Full-bleed image fills the upper ~70% of the inset. H1 anchored at bottom-left, starting ~650px down; text column max-width ~870px (H1) and ~670px (sub). Same left edge as logo (x≈91–94).

### Spacing scale
Use a 4px base: 4, 8, 12, 16, 24, 32, 40, 56, 64, 80, 120, 160. Hero section padding: 80–160px top, 64–120px bottom. Button padding: 10–12px × 16–24px. Gap between side-by-side CTAs: 12–16px.

### Alignment rules
- Everything snaps to the rails. Hatched bands, product panels and dividers span exactly rail-to-rail.
- Centered heroes: every element shares the same center axis, including the badge and microcopy.
- Left-aligned heroes: logo, eyebrow, H1, body, and first button share one left edge.
- Product media below a centered hero is wider than the text (full rail width) — the narrow text above a wide panel creates a strong funnel shape.
- Buttons in a pair are the same height; the secondary is never visually heavier than the primary.

---

## 5. Visual hierarchy rules

Reading order is engineered as: **(1) H1 → (2) product/hero media → (3) primary CTA → (4) subheadline → (5) eyebrow/social proof → (6) nav.**

How they achieve it:
- **Size contrast ≥ 3.5×** between H1 and subheadline (e.g. 72px vs 18px).
- **Color contrast step-down:** H1 near-black (#09090B–#171717) → sub neutral-500 (#737373) → microcopy/labels. The sub is intentionally low-contrast so the H1 reads first.
- **Only the primary CTA is filled with the strongest color.** Secondary is light gray fill, white with border, or just text.
- **Nav is quiet:** small 14–15px medium-gray links; only the nav CTA carries weight, and it repeats the hero CTA's style (10, 16) for consistency.
- **Decorative structure is lowest contrast** (#DEDEDE–#EEEEEE lines, faded thumbnails at ~10–20% opacity). It adds texture without competing.
- **One focal image.** Where there is a big image (12, 13), the text sits on the calmest region of it, with a contrast-helping wash or shadow.

---

## 6. Hero archetypes

Choose one archetype, then apply the tokens and components.

### A. Blueprint Centered + Product Panel (11)
```
[nav: logo | links (+ icons) | sign in  ■ CTA]
[////////////// hatched band, rail to rail //////////////]
            ⌜ MONO EYEBROW ⌟
      Light 72px headline, 2 lines
      muted 18px sub, 2 lines
      [■ Primary] [□ Secondary]
      ▭ No credit card required
[█████ accent panel with pixel texture ██████████████████]
[   ┌──── real dashboard screenshot, white, radius 8 ───┐ ]
```
Best for: enterprise AI, analytics, B2B SaaS.

### B. Editorial Split (10)
```
[nav: ▮▮ Logo            links      (● Pill CTA)]
[////////////////// hatched band ///////////////////]
⌜ • Label / MONO CATEGORY      │                     ⌝
  Thin 60px headline           │   ╭─────────────╮
  on three lines               │   │ moody photo │
                               │   ╰─────────────╯
  Gray light body, 4 lines     │  (#F8F8F8 panel)
  (● Primary) (○ Secondary)    │
⌞                              │                     ⌟
[////////////////// hatched band ///////////////////]
```
Best for: finance, VC, consulting, premium services.

### C. Image-Backdrop Centered (12)
Full-bleed textured illustration (pixel-dither, painterly) inside the frame → white bold H1 centered in the upper-middle → white sub → glossy blue pill + white pill → "Trusted by N+" left label with logo row → frosted app window overlapping the image bottom. Best for: AI builders, dev tools with brand flair.

### D. Image-Backdrop, Headline Low-Left (13)
Hatched gutters around frame → faint nav over a pale painted landscape → huge semibold H1 at bottom-left → large gray sub → small square blue CTA + text link. Best for: single-purpose AI products; minimal pages.

### E. Showcase Wall (14, 17)
Centered minimal text stack over (14) a faded mosaic of product outputs at ~15% opacity, or (17) crisp preview cards scattered at the viewport edges, partially cropped, with dot-grid paper background. The center must remain empty of decoration at least 200px around the text. Best for: template marketplaces, design/code tools, component libraries.

### F. Highlighted Split with Device (15)
Inset panel → left: 4-line bold geometric headline with yellow marker highlight + hand underline → gray body → yellow CTA + text link. Right: line-art phone with realistic in-app content, bleeding off the bottom. Best for: mobile apps, consumer productivity.

### G. People-First Centered (16)
Inset panel → nav → avatar stack → bold two-tone headline + tiny accent icon → gray 2-line sub → single black CTA → "Trusted by" label → 4 large color logos → carousel of work screenshots. Best for: agencies, studios, freelancers, services.

---

## 7. Component recipes

### Page frame + rails
```css
body { background: var(--backdrop); padding: 16px; }
.frame { background: var(--canvas); border-radius: 16px; overflow: hidden; }
.rails { max-width: 1040px; margin-inline: auto;
  border-inline: 1px solid var(--line); }
.section-divider { border-top: 1px solid var(--line); }
```

### Hatched band / gutter
```css
.hatch {
  height: 64px;
  background-image: repeating-linear-gradient(
    -45deg, var(--hatch) 0 1px, transparent 1px 9px);
  border-block: 1px solid var(--line);
}
```
Stroke 1px, spacing 8–10px, angle -45deg (lines rise left-to-right: ///). Use it for 48–70px bands between nav and hero, between sections, or as 32–40px vertical side gutters (13).

### Corner ticks / crosshairs
```css
.ticked { position: relative; }
.ticked::before, .ticked::after { content:""; position:absolute; width:8px; height:8px;
  border-color: #171717; border-style: solid; }
.ticked::before { top:-1px; left:-1px; border-width: 1px 0 0 1px; }
.ticked::after  { bottom:-1px; right:-1px; border-width: 0 1px 1px 0; }
/* repeat with extra spans for the other two corners, or use 4 absolutely positioned spans */
```
Ticks are 6–10px, 1px, dark (#171717–#525252) — darker than the rails, so they read as registration marks. `+` crosshairs at rail/divider intersections: 9px, 1px, #A3A3A3.

### Bracketed mono eyebrow (11)
Padding 8px 16px, background #FAFAFA, 14px mono uppercase, #171717, 0.04em tracking, four 8px corner brackets.

### Breadcrumb eyebrow (10)
`● #1 Global partner / WEALTH MANAGEMENT FIRM` — 6px accent dot, 14px sans #171717, a gray slash with 8px spacing each side, then 12–13px mono uppercase #9CA3AF.

### Pill badge (14)
Height 28–32px, padding 0 12px, radius 999px, fill #F2F2F2, small brand icon 16px + 14px medium text.

### Buttons
```css
.btn { height: 40px; padding: 0 20px; font: 500 15px/1 var(--font-sans); border-radius: 6px; }
.btn-pill { border-radius: 999px; height: 48px; padding: 0 24px; }
.btn-primary { background: var(--accent); color: var(--accent-ink); }
.btn-secondary { background: var(--subtle); color: var(--ink); }
.btn-outline { background:#fff; border:1px solid #E5E5E5; box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.05); }
/* 12: glossy */
.btn-glossy { box-shadow: inset 0 1px 0 rgba(255,255,255,.35), 0 0 0 3px rgba(255,255,255,.6), 0 4px 14px rgba(0,0,0,.15); }
/* 16: tactile black */
.btn-tactile { background:#000; color:#fff; box-shadow: 0 2px 0 #3F3F46; border-radius: 6px; }
```
Radius choice sets the tone: 0–4px = technical/enterprise (11, 13), 6–8px = balanced (15, 16), 999px = premium/friendly (10, 12, 14, 17). Keep one radius family per page.

### Highlighter + hand underline (15)
```html
<span class="mark">productivity tool</span>
```
```css
.mark { background: linear-gradient(transparent 12%, #F9D132 12%, #F9D132 92%, transparent 92%);
  padding: 0 .08em; box-decoration-break: clone; }
```
Underline: inline SVG path with slight wave, stroke #FACC15, width 3–4px, `stroke-linecap: round`, positioned 4–8px below baseline, 100–105% of word width.

### Selection box (14)
1px #0099FF border around H1 with 12–16px padding; label tag top-right, `#0099FF` fill, white 13px medium text, 2px radius, sits just outside the top edge.

### Dot grid paper (17)
```css
background-color:#F5F3F0;
background-image: radial-gradient(#DCD8D2 1px, transparent 1px);
background-size: 24px 24px;
```

### Pixel/dither texture panel (11)
Solid accent panel with sparse 4–6px lighter/darker squares concentrated near the edges and fading toward the center (generate with a small canvas script or an SVG pattern of random rects at 20–40% opacity).

### Avatar stack (16)
56px circles, 2px white ring, -12px overlap, 6 avatars max, centered.

### Logo row
4–6 logos, 24–32px tall, evenly spaced across 60–80% of container width. Either all grayscale at 40–60% opacity (12) or full color at normal weight (16). A small 14px "Trusted by …" label sits centered above (16) or left-aligned beside (12).

### Product screenshot
Realistic content (names, dates, numbers with +% deltas, status chips). White surface, 1px #E5E5E5 border, 8–12px radius, soft large shadow `0 20px 60px -20px rgba(0,0,0,.2)`. Place it on a saturated or textured stage so it pops.

### Faded template wall (14)
Grid of real-looking page thumbnails with 1px borders and 8px radius, overall opacity 0.15–0.25, plus a radial white fade toward the center (`mask-image: radial-gradient(ellipse at center, transparent 30%, #000 70%)`).

---

## 8. Per-example breakdowns

### 10 — Blockad VC: Editorial Split
- **Typography:** Thin (200–300) humanist sans, ~58px/58px (line-height 1.0), 3 lines ("Managing / private capital / for founders"), #2E2E2E. Body 17px/28px weight 300 #8A8390 (warm gray). Mixed eyebrow: sans label + mono caps category.
- **Layout:** 50/50 split inside rails. Left column text padding ~48px. Right column #F8F8F8 panel with a centered 420×315 photo, 20px radius. Hatched bands of 70px above and below the hero; corner ticks at the hero box's four corners. Below: a row of 6 equal columns begins (feature/logo grid).
- **Hierarchy:** Headline dominates the upper left; the image is the second focus; body and CTAs sit at the bottom, anchored to the baseline of the hero box.
- **Spacing:** eyebrow→H1 ≈40px; H1→body ≈130px (space-between); body→CTAs ≈28px; CTA height 48px, gap 12px.
- **Nav:** 96px tall; 2-bar logo + wordmark (20px medium); 4 links 16px medium, gap 36px; black pill CTA 48px tall matching the hero CTA exactly.
- **UX notes:** CTA label repeats across nav and hero ("Raise your interest") for a single conversion path; secondary action is low-commitment media ("Watch showreel").
- **Mood:** quiet, expensive, trustworthy. Blue-toned motion-blurred photo adds warmth without clutter.

### 11 — Cognivis: Blueprint Centered + Product Panel
- **Typography:** Light/regular (300–400) sans, ~72px, line pitch 76px, 2 lines ("AI Infrastructure for Strategic / Decision-Making"), #171717, width ~870px. Sub 17px/22px #454545 (darker than usual — good for enterprise legibility). Bracketed mono eyebrow 14px uppercase.
- **Layout:** Rails at x≈101 and x≈1186; `+` at the nav-divider intersections. 60px hatched band under nav. All hero text centered. Below, a full rail-width cobalt (#143CFE) panel with dither squares holds a white analytics app at ~88% of panel width, top-inset ~60px, cropping off the fold.
- **Hierarchy:** H1 → blue panel (the loudest color block, drags eye downward) → blue CTA → sub.
- **Spacing:** eyebrow→H1 26px, H1→sub 20px, sub→CTAs 25px, CTAs→micro 16px, micro→panel ~60px.
- **Buttons:** 40px tall, 2–4px radius, primary cobalt, secondary #F1F1F1; nav CTA same cobalt square.
- **UX notes:** friction reducer microcopy with icon; "Book a demo" primary signals sales-led; nav uses `+` affordance for expandable menus; dashboard shows domain-specific KPIs with deltas.

### 12 — Clonely: Image-Backdrop Centered
- **Typography:** Inter semibold ~68px, pitch 72px, 2 lines, white, very tight tracking (-0.04em), subtle text shadow. Sub 20px/28px white 400.
- **Layout:** Pixel-dithered mountain landscape fills the rounded frame. Text block centered at ~40% of viewport height. Social proof row: left label (2 lines, 15px medium white) + 5 logos in a single line across the container. App window starts ~70% down, ~94% frame width, light frosted border 8px, radius 16px, overlapping the landscape.
- **Buttons:** 44px pills, glossy: blue #2B7FFF with inner highlight + outer white ring; white secondary with gray ring. Nav mirrors them at smaller size.
- **Spacing:** H1→sub ~15px (tight binding), sub→CTAs ~40px, CTAs→logos ~70px, logos→app ~45px.
- **UX notes:** logos use brand colors but low saturation over the image; real task-management UI reinforces the product claim immediately.

### 13 — Clonely: Headline Low-Left
- **Typography:** Inter semibold ~72px, line pitch 73px (line-height ≈1.0), tracking -0.045em, #09090B, 2 lines. Sub 24px/32px #737373, 2 lines, max ~670px. Nav links 13px #40464B, very small and quiet. Wordmark in blue gradient.
- **Layout:** 38px hatched gutters on all four sides of the frame, plus thin horizontal lines stacked at the top edge. Painted landscape in pastel blue-whites occupies the top 70% and fades to #F3F4F6. Text starts ~650px from top; left edge x≈91 matches the logo.
- **Buttons:** small 36px, 4px radius #2678FF + plain text link "Read documentation" (#171717, 14px medium). Primary is deliberately small — the headline carries the page.
- **Spacing:** H1→sub ~28px, sub→CTAs ~35px.
- **Mood:** serene, cinematic, minimal. Shows how whitespace + a single image can replace UI clutter.

### 14 — FigmaNutz: Showcase Wall
- **Typography:** Inter/Helvetica regular 400, ~60px, pitch 59px, #09090B, 2 lines, very slight negative tracking. Sub 20px/28px #737373, 3 lines, ~500px wide. Badge 14px.
- **Layout:** Background is a masonry-ish grid of faded site thumbnails (cards ~300px wide, 8px radius, 1px borders, ~15% visible). Hero stack centered. Blue selection box hugs the headline with a dimension tag.
- **Buttons:** 56px tall pills (larger than other examples), primary #5C55FE with soft violet shadow, secondary white with 1px border and shadow; 16px gap.
- **Spacing:** badge→box 25px, H1→sub 40px, sub→CTAs 45px. Looser rhythm suits the busy background.
- **UX notes:** the product's own output is the texture; humorous secondary CTA shows brand voice (use playful copy only when the brand allows).

### 15 — Aceternity: Highlighted Split with Device
- **Typography:** Plus Jakarta Sans bold ~72–76px, pitch 72px, 4 lines, #171717, tracking -0.03em. Body Inter 17px/28px #737373, max ~650px.
- **Layout:** White frame → #F9FAFB inset 40px in. Text column left (x≈89 to ~720), vertically centered. Phone mockup right: 4px black outline, 48px corner radius, dynamic island pill, no shading; content = gray chat bubbles (#F3F4F6, 8px radius, 14px text) and a 2×2 photo grid (8px radius, 8px gap). Phone is cut off by the panel's bottom edge.
- **Emphasis:** yellow marker behind "productivity tool", hand underline under "mobile" and under "20%" in body.
- **Buttons:** yellow #FDC700 40px, 6px radius, black 15px semibold label + text link "Read changelog".
- **Spacing:** H1→body ~45px (includes underline), body→CTAs ~45px.
- **UX notes:** the underline on the discount figure draws attention to the incentive; line-art phone keeps focus on the content inside.

### 16 — DevStudio: People-First Centered
- **Typography:** Inter bold ~72px, pitch 72px, tracking -0.03em, 2 lines, ~960px wide. Two-tone: #3F3F47 then #4F38F5 from "design and development studio". Outlined lightning icon ~40px, indigo-300. Body 20px/28px #71717B, 2 lines ~530px.
- **Layout:** #F9FAFB inset. Nav: small black rounded-square logo + 15px wordmark, 4 centered links 15px #525252, black CTA right (48px). Hero centered below with ~110px top gap.
- **Components:** avatar stack 56px with overlap; single black CTA 40px with 2px bottom "lip" shadow; "Trusted by famous brands" 14px; 4 color logos ~30px tall at 200px spacing, first one fading (carousel hint); portfolio carousel of browser screenshots peeking at bottom.
- **Spacing:** avatars→H1 28px, H1→body 30px, body→CTA 35px, CTA→label 58px, label→logos 30px.
- **UX notes:** faces first builds human trust for services; single CTA = single decision; work carousel = proof.

### 17 — Landing Kit: Showcase Edges
- **Typography:** Inter medium 500, ~56px, pitch 58px, 2 lines, #262626, tracking -0.03em. Sub 18px/28px #737373, 2 lines. Nav 15px #525252.
- **Layout:** warm paper #F5F3F0 + 24px dot grid. Floating capsule nav centered at top (~450px wide). Headline block optically centered in viewport. Preview cards (white, 8px radius, big soft shadow) positioned asymmetrically at left edge, top-right and bottom-right, each cropped by the viewport by 20–60%.
- **CTA:** single white pill 44px, 1px #E5E5E5 border, soft shadow, label + right arrow icon. No colored accent at all on the page apart from the card contents.
- **Spacing:** H1→sub ~15px, sub→CTA ~40px; ≥150px clear radius around the text stack.
- **UX notes:** "Try 5 components for free" = specific, low-risk offer; the edges-only decoration keeps the center clean while showing breadth.

---

## 9. Build checklist (light structured)

- [ ] Picked one archetype (A–G) and one headline voice (Light or Bold).
- [ ] One sans family (+ optional mono for labels). Headline letter-spacing negative; line-height ≤1.05.
- [ ] H1 64–76px desktop, clamps down to ~40px on mobile; balanced line breaks, 2 lines centered or 3–4 lines split.
- [ ] Sub is #737373-ish, 18–22px, max ~520px wide.
- [ ] One accent color, used on primary CTA + ≤2 other spots.
- [ ] Frame + rails or inset panel present; at least one structure motif (hatch, ticks, crosshairs, dot grid, selection box).
- [ ] Proximity spacing: eyebrow→H1 24–40, H1→sub 16–24, sub→CTA 24–40, CTA→proof 56–80.
- [ ] Logo, nav and hero text share edges/axis; media spans rail to rail.
- [ ] Buttons: same height in a pair, consistent radius family, nav CTA matches hero CTA.
- [ ] Real product proof in the first viewport (dashboard, device, avatars, logos, previews).
- [ ] Friction-reducing microcopy or specific offer where appropriate.
- [ ] Mobile: rails collapse to 16–20px padding, hatched bands shrink to 32px, split heroes stack text-first, CTAs full-width or side-by-side if they fit, decoration cards hidden or reduced.
- [ ] Final pass: render, screenshot, and compare against the chosen reference image for type scale, gaps and contrast.
