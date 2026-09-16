---
name: design-system-figma-the-collaborative-canvas-for-design-code-a
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Figma: The collaborative canvas for design, code, and AI

## Mission
Deliver implementation-ready design-system guidance for Figma: The collaborative canvas for design, code, and AI that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Figma: The collaborative canvas for design, code, and AI
- URL: https://www.figma.com/
- Audience: readers and knowledge seekers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=figmaSans`, `font.family.stack=figmaSans, figmaSans Fallback, SF Pro Display, system-ui, helvetica, sans-serif`, `font.size.base=20px`, `font.weight.base=330`, `font.lineHeight.base=28px`
- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=20px`, `font.size.xl=32px`, `font.size.2xl=48px`, `font.size.3xl=64px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#ffffff`, `color.text.tertiary=oklch(0 0 none / 0.54)`, `color.surface.raised=oklch(0 0 none / 0)`, `color.surface.strong=oklch(0 0 none / 0.04)`
- Spacing scale: `space.1=2px`, `space.2=4px`, `space.3=6px`, `space.4=8px`, `space.5=12px`, `space.6=16px`, `space.7=22px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=2px`, `radius.sm=8px`, `radius.md=16px`, `radius.lg=24px`, `radius.xl=50px`, `radius.2xl=9999px` | `shadow.1=oklch(0 0 none / 0.16) 0px 0px 0px 1px inset` | `motion.duration.instant=150ms`, `motion.duration.fast=180ms`, `motion.duration.normal=400ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
