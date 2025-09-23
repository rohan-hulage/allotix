"use client"

import { useRef, useEffect } from "react"

interface MagicBentoProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function MagicBento({
  children,
  className = "",
  glowColor = "132, 0, 255",
}: MagicBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const overlay = overlayRef.current
    if (!container || !overlay) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      // Calculate distance from center for ripple intensity
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2)
      const intensity = Math.max(0.5, 1 - distance / maxDistance)

      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100

      // Create ripple effect with animated gradient - increased area and intensity
      overlay.style.background = `
        radial-gradient(
          circle at ${xPercent}% ${yPercent}%, 
          rgba(${glowColor}, ${intensity * 1}) 0%, 
          rgba(${glowColor}, ${intensity * 0.8}) 30%,
          rgba(${glowColor}, ${intensity * 0.5}) 60%,
          transparent 85%
        )
      `
      
      // Animate the border glow using outline to prevent layout shift - increased intensity
      container.style.outline = `2px solid rgba(${glowColor}, ${intensity * 0.9})`
      container.style.outlineOffset = "0px"
      container.style.boxShadow = `
        0 0 20px rgba(${glowColor}, ${intensity * 0.6}),
        0 0 40px rgba(${glowColor}, ${intensity * 0.3})
      `
    }

    const handleMouseEnter = () => {
      overlay.style.opacity = "1"
      container.addEventListener("mousemove", handleMouseMove)
    }

    const handleMouseLeave = () => {
      container.removeEventListener("mousemove", handleMouseMove)
      
      // Smooth fade out
      overlay.style.opacity = "0"
      container.style.outline = "none"
      container.style.boxShadow = "none"
      container.style.transition = "all 0.5s ease-out"
      
      // Reset transition after animation
      setTimeout(() => {
        container.style.transition = ""
      }, 500)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [glowColor])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg transition-all duration-300 ${className}`}
      style={{ 
        background: "transparent",
        border: "1px solid rgba(200, 200, 200, 0.2)"
      }}
    >
      {/* Ripple overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none rounded-lg opacity-0 transition-opacity duration-300"
        style={{ zIndex: 1 }}
      />
      
      {/* Content wrapper */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}