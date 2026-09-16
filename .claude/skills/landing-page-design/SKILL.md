---
name: landing-page-design
description: House visual style for any web design work. Before generating or restyling any landing page, marketing site, homepage, hero section, pricing page, about page, waitlist page, product page, or any other UI/frontend design, look at the reference screenshots in "landing page examples/" and match their styling, typography, layout, and level of polish. Use this skill whenever Claude Code is asked to design, build, mock up, redesign, or "make prettier" any web page or component, even if the user doesn't mention landing pages, references, or style.
---

# Landing Page Design References

This skill holds a curated set of landing pages that represent the look and feel we want. Every design you generate should feel like it belongs in this set: premium, confident, modern SaaS/fintech/AI marketing sites with strong type and real product detail, not generic templates.

The examples fall into two families:
- **Dark premium (01–09):** atmospheric dark/navy backgrounds, glows, floating product UI, display type.
- **Light structured (10–17):** white or off-white canvases, visible layout grid lines and hatched borders, crisp product screenshots, one bold accent color, restrained sans typography.

## Workflow (do this every time)

1. **Look at the screenshots first.** Open the images in `landing page examples/` with your image viewing tool before writing any markup. Look at all of them at least once per task; they are small. Reading the catalog alone is not a substitute for seeing them.
2. **Read `references/examples-catalog.md`** for a breakdown of what each example demonstrates. If you're working in the light structured style (10–17), also read `references/light-structured-analysis.md` in full.
3. **Pick a direction.** Choose the 1–3 examples closest to the project (dark fintech, light framed grid, bold consumer, dev tool, etc.). Respect any light/dark preference in the user's request or existing codebase. If there's no signal, pick the family that fits the product (dark premium for fintech/crypto/dev infra; light structured for B2B tools, AI apps, agencies, templates), and if it's genuinely a toss-up, ask one short question: light or dark? Briefly tell the user which references you're drawing from.
4. **Plan before coding.** Write down the archetype, headline voice, font stack, color tokens, and the hero's vertical spacing values, then build to those numbers.
5. **Build, then compare.** After building, if you can render a screenshot (e.g. Playwright), compare it side by side with the chosen references and fix gaps in spacing, type scale, contrast, and detail.

Match the *style*, not the content: never copy these brands' logos, names, copy, or illustrations. Invent the product's own content.

## Shared DNA + dark premium family (01–09)

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

## Light structured family (10–17)

**Before building anything in this family, read `references/light-structured-analysis.md`.** It contains measured type scales, sampled color tokens, spacing rhythms, 7 hero archetypes with layout diagrams, CSS recipes for every motif, per-example breakdowns, and a build checklist. The essentials:

**Framed canvas with exposed structure.** Site sits in a white rounded frame (12–16px radius) on a #F3F4F6 backdrop. 1px rails (#DEDEDE–#EEEEEE) bound a ~1040–1170px content column; 48–70px diagonal hatch bands (1px strokes every ~9px) separate nav, hero and sections; dark 8px corner ticks or `+` crosshairs mark intersections. Alternatives: a #F9FAFB inset panel, or warm #F5F3F0 paper with a 24px dot grid.

**Typography.** One sans family (Inter/Geist; Plus Jakarta Sans for geometric bold) plus optional mono for tiny uppercase labels. Pick one headline voice:
- *Light:* weight 200–400, -0.01 to -0.02em, line-height 1.0–1.05 (finance, enterprise).
- *Bold:* weight 500–700, -0.03 to -0.045em, line-height 0.95–1.05 (product, dev, consumer, agency).
H1 64–76px centered on 2 balanced lines (or 3–4 lines in split layouts), #09090B/#171717. Subheadline 18–22px, line-height 1.5, #737373, max ~520px. H1 is ≥3.5× the sub size.

**Spacing rhythm (gaps grow outward from the H1).** Eyebrow→H1 24–40px · H1→sub 16–24px · sub→CTAs 24–40px · CTAs→microcopy 12–16px · CTAs→social proof/media 56–80px. Hero top padding 80–160px. 4px base scale.

**Color.** Neutrals plus exactly one accent: cobalt #143CFE, blue #2B7FFF, indigo #4F38F5, violet #5C55FE, yellow #FDC700 (black text), or pure black. Accent on the primary CTA and at most two other spots.

**Alignment.** Logo, eyebrow, H1, body and first button share one left edge (left layouts) or one center axis (centered layouts). Media and bands span exactly rail to rail; text is narrow, media is wide.

**Hero archetypes.** A Blueprint centered + product panel (11) · B Editorial split (10) · C Image-backdrop centered (12) · D Image-backdrop headline low-left (13) · E Showcase wall (14, 17) · F Highlighted split with device (15) · G People-first centered (16).

**Buttons.** Pair has equal heights (40–56px); one radius family per page: 2–4px technical, 6–8px balanced, pill premium/friendly. Secondary = #F1F1F1 fill, white+border, or text link. Nav CTA matches the hero CTA.

**Emphasis (one per headline, or none).** Accent-colored second clause, yellow highlighter block + hand-drawn SVG underline, design-tool selection box with dimension tag, or a small inline outline icon.

**Proof in the first viewport.** Realistic dashboard on a textured accent panel, line-art phone with real content, frosted app window, avatar stack, logo row, faded template wall, or edge-cropped preview cards. Friction-reducing microcopy ("No credit card required") under CTAs.

## Avoid

- Generic Bootstrap/template look: purple-to-pink gradients everywhere, stock 3-column feature grids as the first thing below the nav, emoji bullet lists.
- Small, timid headlines or default Inter-only typography with no hierarchy.
- Flat pure black or pure white with no texture, glow, structure lines, or product detail.
- Many competing accent colors.
- Cramped spacing: these pages use generous vertical whitespace (hero padding ~120–200px).

## Adding more examples

Drop new screenshots into `landing page examples/` using the naming pattern `NN-brand-short-style-description.png`, and add an entry to `references/examples-catalog.md`. The skill picks them up automatically since step 1 says to view every image in the folder.
