'use client'

import { useEffect, useRef, useState } from 'react'

/*
  A tiny pixel-art window showing the rainy night outside the study.
  Rain drops are <div>s injected by a JS interval so they fall
  at randomised positions, speeds, and opacities.
  The moon + window frame are pure CSS.
*/

const STYLES = `
  @keyframes rain-fall {
    from { transform: translateY(-12px); opacity: 0.8; }
    to   { transform: translateY(84px);  opacity: 0;   }
  }
  .rain-drop {
    position: absolute;
    width: 1px;
    border-radius: 1px;
    background: rgba(140, 190, 240, 0.55);
    animation: rain-fall linear forwards;
    pointer-events: none;
  }
`

// Static city lights with fixed opacity values (no random)
const CITY_LIGHTS: Array<{ x: number; y: number; opacity: number }> = [
  { x: 14, y: 48, opacity: 0.6 },
  { x: 22, y: 52, opacity: 0.7 },
  { x: 34, y: 46, opacity: 0.5 },
  { x: 50, y: 50, opacity: 0.8 },
  { x: 62, y: 44, opacity: 0.6 },
  { x: 74, y: 50, opacity: 0.7 },
  { x: 86, y: 47, opacity: 0.5 },
  { x: 96, y: 52, opacity: 0.6 },
]

export default function RainWindow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Inject keyframe styles once
    if (!document.getElementById('rain-styles')) {
      const styleEl = document.createElement('style')
      styleEl.id = 'rain-styles'
      styleEl.textContent = STYLES
      document.head.appendChild(styleEl)
    }

    const container = containerRef.current
    if (!container) return

    function spawnDrop() {
      if (!container) return
      const drop = document.createElement('div')
      drop.className = 'rain-drop'
      drop.style.left   = `${Math.random() * 108}px`
      drop.style.height = `${7 + Math.random() * 10}px`
      drop.style.animationDuration = `${0.35 + Math.random() * 0.45}s`
      drop.style.animationDelay   = `${Math.random() * 0.4}s`
      container.appendChild(drop)
      // Clean up after animation completes
      drop.addEventListener('animationend', () => drop.remove(), { once: true })
    }

    const interval = setInterval(spawnDrop, 160)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        width: 112,
        height: 72,
        background: '#132840',
        border: '3px solid var(--wood2)',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Night sky gradient layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, #0d1f35 0%, #1a3a5c 60%, #0f2030 100%)',
        }}
      />

      {/* Moon */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: 14,
          width: 16,
          height: 16,
          background: '#f0e6b0',
          borderRadius: '50%',
        }}
      >
        {/* Moon shadow — makes it a crescent */}
        <div
          style={{
            position: 'absolute',
            top: -1,
            right: -4,
            width: 13,
            height: 13,
            background: '#0d1f35',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Distant city lights — static values, no hydration mismatch */}
      {CITY_LIGHTS.map((light, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: light.x,
            top: light.y,
            width: 2,
            height: 2,
            background: '#f5c97a',
            opacity: light.opacity,
          }}
        />
      ))}

      {/* Rain drop container — drops are injected here (only on client) */}
      <div
        ref={containerRef}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
      />

      {/* Window cross-frame */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Vertical bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: 3,
            background: 'var(--wood2)',
            transform: 'translateX(-50%)',
          }}
        />
        {/* Horizontal bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '50%',
            height: 3,
            background: 'var(--wood2)',
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* Window sill */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'var(--wood2)',
        }}
      />
    </div>
  )
}