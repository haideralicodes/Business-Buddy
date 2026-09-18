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

// Invented state for the third social card: one post, every channel, and the
// report that follows. All visible at rest; hover only adds a little life.
export const PUBLISH_CHANNELS = [
  { name: "Instagram", short: "IG", state: "Posted" },
  { name: "Facebook", short: "FB", state: "Posted" },
  { name: "Website", short: "Web", state: "Updated" },
] as const

export const WEEKLY_REPORT = {
  title: "Weekly report",
  when: "Mon 8:00",
  rows: [
    { k: "Reach", v: "+42%" },
    { k: "Replies drafted", v: "3" },
    { k: "Best post", v: "Sourdough drop" },
  ],
} as const

// Invented sites for the template strip. Each one is a different small
// business with its own nav, hero, sections and CTA, so the strip reads as
// "sites like yours" rather than a colour picker. Accents are kept light
// enough to hold up on the dark theme.
export const TEMPLATE_STYLES = [
  {
    name: "Orchid",
    business: "Aurora Bakery",
    kind: "Bakery · Lahore",
    nav: ["Menu", "Orders", "Visit"],
    headline: "Fresh bakes,",
    headlineAccent: "daily.",
    cta: "Order now",
    sections: ["Sourdough", "Cakes", "Cookies"],
    accent: "oklch(0.733 0.245 323)",
  },
  {
    name: "Midnight",
    business: "Foundry Gym",
    kind: "Gym · Columbus",
    nav: ["Classes", "Coaches", "Join"],
    headline: "Train with",
    headlineAccent: "intent.",
    cta: "Book a class",
    sections: ["Strength", "Mobility", "Open gym"],
    accent: "oklch(0.6 0.14 260)",
  },
  {
    name: "Sage",
    business: "Willow & Co.",
    kind: "Plant shop · Manchester",
    nav: ["Shop", "Care", "Delivery"],
    headline: "Plants for",
    headlineAccent: "every room.",
    cta: "Shop plants",
    sections: ["Low light", "Pet safe", "Gifts"],
    accent: "oklch(0.58 0.11 150)",
  },
  {
    name: "Clay",
    business: "Terra Studio",
    kind: "Ceramics · Dubai",
    nav: ["Collection", "Workshops", "Story"],
    headline: "Handmade,",
    headlineAccent: "not mass-made.",
    cta: "See the collection",
    sections: ["Tableware", "Vases", "Classes"],
    accent: "oklch(0.64 0.13 40)",
  },
  {
    name: "Slate",
    business: "Modern Cuts",
    kind: "Barber · Lagos",
    nav: ["Services", "Barbers", "Book"],
    headline: "Look sharp,",
    headlineAccent: "book today.",
    cta: "Book a chair",
    sections: ["Cuts", "Beard", "Kids"],
    accent: "oklch(0.55 0.05 260)",
  },
  {
    name: "Amber",
    business: "Café Lumen",
    kind: "Café · Bengaluru",
    nav: ["Menu", "Events", "Find us"],
    headline: "Slow mornings,",
    headlineAccent: "great coffee.",
    cta: "See the menu",
    sections: ["Coffee", "Brunch", "Beans"],
    accent: "oklch(0.72 0.14 70)",
  },
] as const

export const COPY = {
  nav: { login: "Log in", cta: "Start for free" },
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
    line2b: "week-off",
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
        body: "One post goes to Instagram, Facebook and your website together. Replies get drafted, and a short report lands Monday morning.",
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
    cta: "Start on",
    period: "/month",
    featuredBadge: "Most popular",
  },
  call: {
    eyebrow: "Ready when you are",
    line1: "Sign up for",
    line2: "free!",
    body: "Your site goes live, your feed keeps posting, and you get your evenings back.",
    cta: "Start for free",
  },
  footer: { company: "Business Buddy", tagline: "Your AI business buddy." },
} as const
