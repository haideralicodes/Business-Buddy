import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display faces used by the landing page headlines.
const anzo = localFont({
  src: "./fonts/anzo.woff2",
  variable: "--font-anzo",
  display: "swap",
});

const blinds = localFont({
  src: "./fonts/BlindsAudience.otf",
  variable: "--font-blinds",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bussiness Buddy",
  description: "Your AI Business Buddy!",
};

// Runs before paint so a stored dark preference doesn't flash light on load.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anzo.variable} ${blinds.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
