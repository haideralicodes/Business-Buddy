"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/packages/ui/button"

const STORAGE_KEY = "theme"

type Theme = "light" | "dark"

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

// Server render and first client paint both use this; the real value
// arrives once the store subscribes, which avoids a hydration mismatch.
function getServerSnapshot(): Theme {
  return "light"
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // storage blocked; the class still applies for this page view
  }
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const next: Theme = theme === "dark" ? "light" : "dark"

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={`Switch to ${next} mode`}
      onClick={() => applyTheme(next)}
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}
