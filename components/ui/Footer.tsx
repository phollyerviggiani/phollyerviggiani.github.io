'use client'

import { useState, useEffect } from 'react'

/* ── Template data ───────────────────────────────────────────────────────── */

const CURRENT_YEAR = new Date().getFullYear()

const FOOTER_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  email: 'mailto:hello@yourname.com',
}

const MOTTO = 'made with pixel love & too much coffee'

/* ── Component ───────────────────────────────────────────────────────────── */

export default function Footer() {
  const [coffeeCupVisible, setCoffeeCupVisible] = useState(false)

  // Easter egg: click the heart to make a coffee cup appear
  useEffect(() => {
    if (coffeeCupVisible) {
      const timer = setTimeout(() => setCoffeeCupVisible(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [coffeeCupVisible])

  return (
    <footer
      style={{
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        borderTop: '2px solid var(--wood)',
        background: 'var(--bg2)',
        position: 'relative',
      }}
    >
      {/* ── Left side: copyright ───────────────────────────────── */}
      <div
        className="font-pixel"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.28rem',
          color: 'var(--text3)',
          letterSpacing: 0,
          lineHeight: 1,
        }}
      >
        <span>© {CURRENT_YEAR}</span>
        <span>Your Name</span>

        {/* Decorative divider */}
        <span
          aria-hidden="true"
          style={{
            width: '1px',
            height: '0.6rem',
            background: 'var(--wood)',
            margin: '0 0.2rem',
          }}
        />

        {/* Tech stack badge */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          <span>built with</span>
          <span
            style={{
              color: 'var(--blue3)',
              border: '1px solid var(--blue2)',
              padding: '0.1rem 0.25rem',
              fontSize: '0.24rem',
            }}
          >
            Next.js
          </span>
          <span>+</span>
          <span
            style={{
              color: 'var(--blue3)',
              border: '1px solid var(--blue2)',
              padding: '0.1rem 0.25rem',
              fontSize: '0.24rem',
            }}
          >
            Tailwind
          </span>
        </span>
      </div>

      {/* ── Center: heart + motto (with easter egg) ─────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setCoffeeCupVisible(true)}
          aria-label="Click for a surprise"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.55rem',
            padding: '0.2rem 0.3rem',
            transition: 'transform 0.1s ease',
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <span className="pixel-heart" style={{ color: '#e87a7a' }}>
            ♥
          </span>
        </button>

        <span
          className="font-pixel"
          style={{
            fontSize: '0.28rem',
            color: 'var(--text4)',
            letterSpacing: 0,
            lineHeight: 1,
          }}
        >
          {MOTTO}
        </span>

        {/* Easter egg: floating coffee cup */}
        {coffeeCupVisible && (
          <div
            style={{
              position: 'fixed',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'floatUp 2s ease-out forwards',
              pointerEvents: 'none',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                fontSize: '1.5rem',
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
              }}
            >
              ☕
            </div>
          </div>
        )}
      </div>

      {/* ── Right side: social quick links ─────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
        }}
      >
        <a
          href={FOOTER_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-pixel"
          style={{
            fontSize: '0.28rem',
            color: 'var(--text3)',
            textDecoration: 'none',
            transition: 'color 0.1s ease',
            letterSpacing: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--amber)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text3)'
          }}
        >
          [ github ]
        </a>

        <span
          aria-hidden="true"
          style={{
            width: '1px',
            height: '0.6rem',
            background: 'var(--wood)',
          }}
        />

        <a
          href={FOOTER_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-pixel"
          style={{
            fontSize: '0.28rem',
            color: 'var(--text3)',
            textDecoration: 'none',
            transition: 'color 0.1s ease',
            letterSpacing: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--amber)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text3)'
          }}
        >
          [ linkedin ]
        </a>

        <span
          aria-hidden="true"
          style={{
            width: '1px',
            height: '0.6rem',
            background: 'var(--wood)',
          }}
        />

        <a
          href={FOOTER_LINKS.email}
          className="font-pixel"
          style={{
            fontSize: '0.28rem',
            color: 'var(--text3)',
            textDecoration: 'none',
            transition: 'color 0.1s ease',
            letterSpacing: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--amber)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text3)'
          }}
        >
          [ email ]
        </a>
      </div>
    </footer>
  )
}