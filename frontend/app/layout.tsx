import type { Metadata } from "next";
import { Geist_Mono, Inter, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";

// Primary typeface for the whole app. Display faces below are for single emphasized words only.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face: one word per headline, through <Prominent>. A handwritten
// script, single weight; <Prominent> compensates for its light stroke and
// small x-height with size, not weight.
const display = Nothing_You_Could_Do({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bussiness Buddy",
  description: "Your AI Business Buddy!",
};

// Runs before paint so the stored theme (or the OS preference) applies without a flash. The class is only ever set here and in ThemeToggle.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
