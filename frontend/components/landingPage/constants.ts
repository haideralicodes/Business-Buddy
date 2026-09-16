export const SIGNUP_HREF = "/signup"
export const LOGIN_HREF = "/login"

export const NAV_LINKS = [
  { label: "Social", href: "#benefit" },
  { label: "Web Gen", href: "#genWeb" },
  { label: "Pricing", href: "#pricing" },
] as const

export type Plan = {
  name: string
  price: string
  tagline: string
  featured?: boolean
  features: string[]
}

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$9.99",
    tagline: "Get your first site and feed running.",
    features: [
      "Customizable website templates",
      "Basic social media scheduling",
      "Email support",
      "1 GB storage",
    ],
  },
  {
    name: "Pro",
    price: "$29.99",
    tagline: "For businesses posting every day.",
    featured: true,
    features: [
      "Everything in Starter",
      "Advanced website customization",
      "Unlimited social media scheduling",
      "AI post & caption generation",
      "10 GB storage",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$49.99",
    tagline: "Multiple brands, one dashboard.",
    features: [
      "Everything in Pro",
      "Up to 5 business profiles",
      "Team seats (up to 3 people)",
      "50 GB storage",
      "Dedicated priority support",
      "Early access to new features",
    ],
  },
]

// Invented content for the app window on the hero panel. Realistic numbers,
// names and status chips are what make it read as a product, not a placeholder.
export const HERO_APP = {
  business: "Aurora Bakery",
  nav: ["Overview", "Website", "Posts", "Calendar", "Inbox"],
  stats: [
    { label: "Site visits", value: "1,284", delta: "+18%" },
    { label: "Posts scheduled", value: "12", delta: "this week" },
    { label: "Captions drafted", value: "37", delta: "+9" },
    { label: "Bookings", value: "23", delta: "+6%" },
  ],
  site: { url: "aurorabakery.com", status: "Live", updated: "Edited 2 min ago" },
  posts: [
    { day: "Mon", time: "9:00", channel: "IG", title: "Weekend sale recap", state: "Posted" },
    { day: "Wed", time: "12:30", channel: "FB", title: "Meet the maker", state: "Scheduled" },
    { day: "Fri", time: "17:00", channel: "IG", title: "New sourdough drop", state: "Draft" },
  ],
} as const

// Invented content for the on-brand mockup replacing the old competitor screenshot.
// poster/tag mimic what an AI post-graphic actually looks like (bold text on a
// color field), not an empty swatch.
export const COPILOT_IDEAS = [
  { label: "Weekend sale", poster: "WEEKEND\nSALE", tag: "20% OFF", accent: "oklch(0.733 0.245 323)" },
  { label: "New arrival", poster: "JUST\nDROPPED", tag: "NEW", accent: "oklch(0.72 0.14 70)" },
  { label: "Behind the scenes", poster: "MEET THE\nMAKER", tag: "OUR STORY", accent: "oklch(0.55 0.09 150)" },
] as const

// Invented activity feed for the third social card: what happens after a post goes out.
export const PUBLISH_TIMELINE = [
  { icon: "post", label: "Post published", time: "9:00 AM" },
  { icon: "reply", label: "3 replies drafted", time: "9:14 AM" },
  {
    icon: "report",
    label: "Weekly report ready",
    time: "Mon 8:00",
    details: [
      { k: "Reach", v: "+42%" },
      { k: "Best post", v: "Sourdough drop" },
      { k: "Next", v: "Assigned" },
    ],
  },
] as const

// Invented style directions for the on-brand template preview strip — each one
// a tiny real site mockup (nav + headline + CTA) for a different invented
// small business, not an abstract color swatch.
export const TEMPLATE_STYLES = [
  { name: "Orchid", business: "Aurora Bakery", headline: "Fresh bakes,", headlineAccent: "daily.", accent: "oklch(0.733 0.245 323)" },
  { name: "Midnight", business: "Foundry Gym", headline: "Train with", headlineAccent: "intent.", accent: "oklch(0.35 0.05 260)" },
  { name: "Sage", business: "Willow & Co.", headline: "Plants for", headlineAccent: "every room.", accent: "oklch(0.55 0.09 150)" },
  { name: "Clay", business: "Terra Studio", headline: "Handmade,", headlineAccent: "not mass-made.", accent: "oklch(0.62 0.13 40)" },
  { name: "Slate", business: "Modern Cuts", headline: "Look sharp,", headlineAccent: "book today.", accent: "oklch(0.45 0.02 260)" },
  { name: "Amber", business: "Café Lumen", headline: "Slow mornings,", headlineAccent: "great coffee.", accent: "oklch(0.72 0.14 70)" },
] as const

export const COPY = {
  nav: { login: "Log in", cta: "Get started" },
  hero: {
    eyebrow: "Website + social, one login",
    line1: "Your business online,",
    line2a: "without the",
    line2b: "busywork",
    sub: "Tell Business Buddy about your business once. It builds your site, writes your captions, and keeps your calendar full. You just run the business.",
    primaryCta: "Start for free",
    secondaryCta: "See pricing",
  },
  benefit: {
    eyebrow: "Social media",
    line1: "Give your feed",
    line2a: "a",
    line2b: "week off",
    cards: [
      {
        title: "Ideas written for you",
        body: "Tell Buddy what's new in the shop. It drafts the post, the caption, and the hashtags in your voice, ready to approve.",
      },
      {
        title: "Scheduled while you sleep",
        body: "Buddy picks the times your customers are actually online and fills the calendar a week ahead. You just say yes.",
      },
      {
        title: "Published everywhere",
        body: "Instagram, Facebook and your website update together. Replies get drafted, and a short report lands Monday morning.",
      },
    ],
  },
  genWeb: {
    eyebrow: "Website generation",
    line1: "Your website,",
    line2a: "built in",
    line2b: "one sitting",
    sub: "Answer a few questions about your business and get a finished, hosted site. Edit anything in plain language.",
  },
  pricing: {
    eyebrow: "Pricing",
    line1: "Pricing that grows",
    line2a: "with your",
    line2b: "business",
    sub: "Start on Starter. Upgrade when the posts start paying for themselves.",
    cta: "Sign up now",
    period: "/month",
    featuredBadge: "Most popular",
  },
  call: {
    eyebrow: "Ready when you are",
    line1: "Sign up for",
    line2: "free!",
    body: "Your site goes live, your feed keeps posting, and you get your evenings back.",
    cta: "Get Started For Free",
  },
  footer: { company: "Business Buddy", tagline: "Your AI business buddy." },
} as const
