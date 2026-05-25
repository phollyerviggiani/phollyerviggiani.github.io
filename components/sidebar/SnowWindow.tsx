'use client'

import { useEffect, useState } from 'react'

/*
  A tiny pixel-art window showing a snowy winter night outside the cottage.
  Gentle falling snowflakes with staggered delays that loop infinitely.
  Moon, city lights, and window frame are pure CSS.
*/

const STYLES = `
  @keyframes snow-fall {
    0% { transform: translateY(-20px) translateX(0px); opacity: 0.8; }
    25% { transform: translateY(25px) translateX(3px); opacity: 0.7; }
    50% { transform: translateY(50px) translateX(-2px); opacity: 0.6; }
    75% { transform: translateY(75px) translateX(2px); opacity: 0.5; }
    100% { transform: translateY(130px) translateX(0px); opacity: 0; }
  }
  .snowflake {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #e8f0ff;
    border-radius: 50%;
    animation: snow-fall linear infinite;
    pointer-events: none;
  }
  /* Slightly larger snowflakes */
  .snowflake-large {
    width: 2.5px;
    height: 2.5px;
    opacity: 0.7;
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  .star-twinkle {
    animation: twinkle 2.5s ease-in-out infinite;
  }
  .star-twinkle:nth-child(2n) { animation-duration: 3.2s; animation-delay: 0.8s; }
  .star-twinkle:nth-child(3n) { animation-duration: 1.8s; animation-delay: 1.5s; }
`

// Static city lights with fixed opacity values
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

// Snowflakes - gentle drifting snow
const SNOWFLAKES: Array<{ x: number; duration: number; delay: number; isLarge: boolean }> = [
  { x: 10, duration: 3.2, delay: 0, isLarge: false },
  { x: 25, duration: 4.0, delay: 0.5, isLarge: true },
  { x: 38, duration: 3.5, delay: 1.2, isLarge: false },
  { x: 52, duration: 4.2, delay: 0.3, isLarge: false },
  { x: 65, duration: 3.8, delay: 1.8, isLarge: true },
  { x: 78, duration: 3.0, delay: 0.7, isLarge: false },
  { x: 90, duration: 4.5, delay: 2.1, isLarge: false },
  { x: 105, duration: 3.6, delay: 0.9, isLarge: true },
  { x: 18, duration: 4.1, delay: 1.5, isLarge: false },
  { x: 42, duration: 3.3, delay: 2.3, isLarge: false },
  { x: 58, duration: 4.8, delay: 0.2, isLarge: true },
  { x: 72, duration: 3.9, delay: 1.1, isLarge: false },
  { x: 88, duration: 3.4, delay: 2.5, isLarge: false },
  { x: 100, duration: 4.3, delay: 0.6, isLarge: true },
  { x: 15, duration: 3.7, delay: 1.9, isLarge: false },
  { x: 32, duration: 4.6, delay: 0.4, isLarge: false },
  { x: 48, duration: 3.1, delay: 2.0, isLarge: true },
  { x: 62, duration: 4.4, delay: 1.4, isLarge: false },
  { x: 82, duration: 3.5, delay: 2.2, isLarge: false },
  { x: 95, duration: 4.0, delay: 0.8, isLarge: true },
  { x: 112, duration: 3.8, delay: 1.7, isLarge: false },
  { x: 8, duration: 4.2, delay: 2.4, isLarge: false },
  { x: 55, duration: 3.6, delay: 0.1, isLarge: false },
  { x: 75, duration: 4.7, delay: 1.3, isLarge: true },
  { x: 22, duration: 3.9, delay: 2.1, isLarge: false },
  { x: 68, duration: 4.1, delay: 0.5, isLarge: false },
  { x: 85, duration: 3.3, delay: 1.6, isLarge: true },
  { x: 102, duration: 4.5, delay: 2.3, isLarge: false },
]

export default function SnowWindow() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Inject keyframe styles once
    if (!document.getElementById('snow-styles')) {
      const styleEl = document.createElement('style')
      styleEl.id = 'snow-styles'
      styleEl.textContent = STYLES
      document.head.appendChild(styleEl)
    }
  }, [])

  return (
    <div
      style={{
        width: 128,
        height: 96,
        background: '#132840',
        border: '3px solid var(--wood2)',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: '2px',
      }}
    >
      {/* Night sky gradient layer - slightly cooler for winter */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, #0d1f35 0%, #1a3a5c 60%, #1e3048 100%)',
        }}
      />

      {/* Moon glow - cooler, wintery tint */}
      <div
        style={{
          position: 'absolute',
          top: 4,
          right: 8,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,230,255,0.3) 0%, rgba(220,230,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Moon - slightly cooler tone */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: 14,
          width: 16,
          height: 16,
          background: '#e0e8f5',
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


      {/* Snowflakes - gentle drifting */}
      {SNOWFLAKES.map((flake, i) => (
        <div
          key={i}
          className={`snowflake ${flake.isLarge ? 'snowflake-large' : ''}`}
          style={{
            left: flake.x,
            top: -10,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}

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

      {/* Snow dusting on window sill */}
      <div
        style={{
          position: 'absolute',
          bottom: 6,
          left: 0,
          right: 0,
          height: 2,
          background: '#c8d8e8',
          opacity: 0.5,
        }}
      />

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