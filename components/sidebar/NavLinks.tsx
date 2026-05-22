'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'hero',     label: '▸ home'     },
  { id: 'about',    label: '▸ about'    },
  { id: 'projects', label: '▸ projects' },
  { id: 'contact',  label: '▸ contact'  },
] as const

type SectionId = (typeof NAV_ITEMS)[number]['id']

export default function NavLinks() {
  const [active, setActive] = useState<SectionId>('hero')

  /*
    IntersectionObserver watches each section.
    Whichever one is most visible becomes "active" in the nav.
  */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        {
          root: null,
          // Fire when the top 20% of the section enters the viewport
          rootMargin: '0px 0px -80% 0px',
          threshold: 0,
        }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  function scrollToSection(id: SectionId) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <nav
      aria-label="Page sections"
      style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
    >
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            aria-current={isActive ? 'true' : undefined}
            className="font-pixel"
            style={{
              background: isActive ? 'var(--wood)' : 'none',
              border: `2px solid ${isActive ? 'var(--amber)' : 'transparent'}`,
              color: isActive ? 'var(--amber)' : 'var(--text2)',
              fontSize: '0.38rem',
              padding: '0.5rem 0.6rem',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              letterSpacing: 0,
              lineHeight: 1,
              transition: 'background 0.1s, border-color 0.1s, color 0.1s',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                const btn = e.currentTarget
                btn.style.background = 'var(--wood4)'
                btn.style.color = 'var(--cream2)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                const btn = e.currentTarget
                btn.style.background = 'none'
                btn.style.color = 'var(--text2)'
              }
            }}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}