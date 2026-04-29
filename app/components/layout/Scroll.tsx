"use client"
import { useEffect, useState } from "react"

const sections = ["header", "services", "services-two", "team"]

export default function ScrollIndicator() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      let currentIndex = 0

      sections.forEach((id, index) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          if (window.scrollY >= top - 200) {
            currentIndex = index
          }
        }
      })

      setActive(currentIndex)

      // 🔥 progress (0 → 100%)
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / scrollHeight
      setProgress(scrolled * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-[5px] top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">

      {/* 🔥 vertikální čára */}
      <div className="relative h-40 w-[2px] bg-gray-700 mb-4">
        <div
          className="absolute top-0 left-0 w-full bg-pink-400 transition-all duration-200"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* 🔢 čísla */}
      <div className="flex flex-col gap-3">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`text-sm font-bold transition-all ${
              active === index
                ? "text-pink-400 scale-110"
                : "text-gray-500 opacity-50"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>

    </div>
  )
}