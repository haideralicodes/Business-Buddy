---
name: landing-page-design
description: House visual style for any web design work. Before generating or restyling any landing page, marketing site, homepage, hero section, pricing page, about page, waitlist page, product page, or any other UI/frontend design, look at the reference screenshots in "landing page examples/" and match their styling, typography, layout, and level of polish. Use this skill whenever Claude Code is asked to design, build, mock up, redesign, or "make prettier" any web page or component, even if the user doesn't mention landing pages, references, or style.
---

# Landing Page Design References

This skill holds a curated set of landing pages that represent the look and feel we want. Every design you generate should feel like it belongs in this set: premium, confident, modern SaaS/fintech marketing sites with strong type and real product detail, not generic templates.

## Workflow (do this every time)

1. **Look at the screenshots first.** Open the images in `landing page examples/` with your image viewing tool before writing any markup. Look at all of them at least once per task; they are small. Reading the catalog alone is not a substitute for seeing them.
2. **Read `references/examples-catalog.md`** for a breakdown of what each example demonstrates.
3. **Pick a direction.** Choose the 1–3 examples closest to the project (dark fintech, light editorial, bold consumer, dev tool, etc.). If the user gave no direction, default to the dark premium SaaS look (examples 01, 06, 08, 09). Briefly tell the user which references you're drawing from.
4. **Build, then compare.** After building, if you can render a screenshot (e.g. Playwright), compare it side by side with the chosen references and fix gaps in spacing, type scale, contrast, and detail.

Match the *style*, not the content: never copy these brands' logos, names, copy, or illustrations. Invent the product's own content.

## The shared DNA across all examples

**Hero-first, centered composition.** A short announcement pill or eyebrow label above the headline, a huge 2-line headline, a 1–2 line muted subheadline, then two CTAs side by side (one filled primary, one ghost/secondary). Hero usually fills most of the first viewport.

**Headlines do the heavy lifting.**
- Very large (roughly 56–96px desktop), tight line-height (~1.0–1.1), slightly negative letter-spacing.
- Broken deliberately into 2–3 balanced lines.
- Distinctive type pairings, never default system fonts alone. Patterns used:
  - Elegant display serif headline + clean sans body (Slash, Public).
  - Mixed sans + *italic serif* on key words inside one headline (Lumina).
  - Ultra-condensed heavy grotesk in ALL CAPS (BOS, UglyCash).
  - Clean geometric/grotesk sans with a subtle white→gray gradient on the text (Vetra, ToDesktop).
- Inline visual accents inside the headline: a small glossy icon tile placed between words (Slash ⚡, ToDesktop app icon).

**Small monospace/uppercase labels** for eyebrows, badges, and section tags ("END-TO-END ELECTRON", "■ WHAT WE DO", "NEW: …"). Pill-shaped, subtle border, tiny text.

**Depth and atmosphere on dark themes.** Near-black or deep navy/indigo backgrounds (#05060A–#0B1020 range), never flat pure black. Add one of: radial glow, a glowing planet horizon arc, faint grid or dot/character pattern, thin geometric line work, starfield specks. Glow colors are cool blues/indigo.

**Real product UI as decoration.** Floating glassy cards showing balances, transactions, charts, cards, terminal windows, app docks. Cards have 1px low-opacity borders, soft shadows, 12–20px radii, realistic data. This is what makes pages feel credible rather than templated.

**Restraint in color.** Mostly neutral palette plus one accent (electric blue #2563EB-ish, mint green, hot magenta). Accent reserved for primary CTA, badges, and highlights.

**Buttons.** Pill or softly rounded, medium height, compact padding. Primary = solid accent or white-on-dark; secondary = dark/transparent with a subtle border. Arrow or chevron icons are common.

**Navigation.** Minimal: logo left, 4–6 links centered (often with dropdown chevrons), log in + one CTA button right. Frequently a floating rounded "capsule" nav with a translucent background.

**Personality touches (use one, sparingly).** Handwritten annotations with curved arrows (ToDesktop), sticker collages (UglyCash), brush-stroke shapes and an avatar (Fibery), 3D iridescent object (Public), full-bleed cinematic illustration (BOS).

**Social proof directly under the hero.** "Trusted by 500+ companies" with a row of grayscale, low-opacity logos, or an app-icon dock of customers.

## Avoid

- Generic Bootstrap/template look: purple-to-pink gradients everywhere, stock 3-column feature grids as the first thing below the nav, emoji bullet lists.
- Small, timid headlines or default Inter-only typography with no hierarchy.
- Flat pure black or pure white with no texture, glow, or product detail.
- Many competing accent colors.
- Cramped spacing: these pages use generous vertical whitespace (hero padding ~120–200px).

## Adding more examples

Drop new screenshots into `landing page examples/` using the naming pattern `NN-brand-short-style-description.png`, and add an entry to `references/examples-catalog.md`. The skill picks them up automatically since step 1 says to view every image in the folder.
