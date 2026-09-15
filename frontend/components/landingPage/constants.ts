export const SIGNUP_HREF = "/signup"
export const LOGIN_HREF = "/login"

export const NAV_LINKS = [
  { label: "Social", href: "#benefit" },
  { label: "Web Gen", href: "#genWeb" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
] as const

export const LANDING_IMAGES = {
  logo: "/landing/logo.png",
  hero: "/landing/work.webp",
  schedulePost: "/landing/schedulePost.png",
  star: "/landing/star.png",
  spring: "/landing/spring.png",
} as const

export const WEB_EXAMPLE_IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
  (n) => `/landing/web${n}.webp`
)

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
      "Email Support",
      "1 GB Storage",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$29.99",
    tagline: "For businesses posting every day.",
    featured: true,
    features: [
      "All features in the Starter Plan",
      "Advanced website customization",
      "Unlimited social media scheduling",
      "10 GB storage",
      "Priority support",
      "Advanced support",
      "Post and Caption Generation",
    ],
  },
  {
    name: "Business",
    price: "$49.99",
    tagline: "Multiple brands, one dashboard.",
    features: [
      "Customizable website templates",
      "Basic social media scheduling",
      "Email Support",
      "1 GB Storage",
      "Basic support",
      "Customizable website templates",
      "Basic social media scheduling",
      "Email Support",
      "1 GB Storage",
      "Basic support",
    ],
  },
]

export type Testimonial = {
  text: string
  imageSrc: string
  name: string
  username: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/landing/avatar1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: "/landing/avatar2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/landing/avatar3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/landing/avatar4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/landing/avatar5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/landing/avatar6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/landing/avatar7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/landing/avatar8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/landing/avatar9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
]

export const TESTIMONIAL_COLUMNS = [
  TESTIMONIALS.slice(0, 3),
  TESTIMONIALS.slice(3, 6),
  TESTIMONIALS.slice(6, 9),
]

// Invented product-UI fragments that float around the hero image.
export const HERO_CARDS = {
  post: {
    label: "Scheduled",
    title: "Instagram · Tomorrow 9:00",
    meta: "Caption generated · 3 hashtags",
  },
  site: {
    label: "Website live",
    title: "bakery-on-main.com",
    meta: "Built in 2 min 14 s",
  },
} as const

export const HERO_AVATARS = [
  "/landing/avatar1.png",
  "/landing/avatar2.png",
  "/landing/avatar3.png",
  "/landing/avatar4.png",
]

export const COPY = {
  nav: { login: "Log in", cta: "Get started" },
  hero: {
    eyebrow: "AI for small business",
    line1: "grow",
    line2: "your",
    line3: "Business",
    sub: "One place to build your website, schedule your social posts, and keep customers coming back. No agency, no templates that look like everyone else's.",
    primaryCta: "Start for free",
    secondaryCta: "See pricing",
    proof: "Join the small businesses already online with Buddy",
  },
  benefit: {
    eyebrow: "Social scheduling",
    line1a: "Seamless",
    line1b: "Scheduling",
    line2a: "On your",
    line2b: "social media",
    sub: "Plan a month of posts in an afternoon. Buddy writes the captions, picks the times, and publishes while you run the shop.",
  },
  genWeb: {
    eyebrow: "Website generation",
    line1: "Website Generation",
    line2a: "in just",
    line2b: "few clicks",
    sub: "Answer a few questions about your business and get a finished, hosted site. Edit anything in plain language.",
  },
  pricing: {
    eyebrow: "Pricing",
    line1a: "Upgrade for",
    line1b: "customizations",
    line2a: "seamless",
    line2b: "scheduling",
    sub: "Start free. Upgrade when the posts start paying for themselves.",
    cta: "Sign up now",
    period: "/month",
    featuredBadge: "Most popular",
  },
  call: {
    eyebrow: "Ready when you are",
    line1: "Sign up for",
    line2: "free!",
    body: "Your business now online! You focus on growing your business, while we work behind the scenes.",
    cta: "Get Started For Free",
  },
  testimonials: {
    eyebrow: "Wall of love",
    line1: "What our",
    line2: "users",
    line3: "say?!",
  },
  footer: { company: "Business Buddy", tagline: "Your AI business buddy." },
} as const
