"use client"

import PixelDesk from '@/components/ui/PixelDesk'
import TypingSubtitle from '@/components/ui/TypingSubtitle'
import HeroWindow from '@/components/ui/HeroWindow'

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg3)',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient wood-panel texture lines */}
      <WoodGrainLines />

      {/* Main content container - using grid for better positioning */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '1rem',
          alignItems: 'center',
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Left side - Text content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Eyebrow label */}
          <p
            className="font-pixel anim-fade-up anim-delay-1"
            style={{
              fontSize: '0.5rem',
              color: 'var(--text3)',
              letterSpacing: 0,
              lineHeight: 1,
            }}
          >
            {'> hello, world'}
          </p>

          {/* Main title */}
          <h1
            className="anim-fade-up anim-delay-2"
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(1.2rem, 4vw, 2rem)',
              color: 'var(--amber)',
              lineHeight: 1.4,
              letterSpacing: 0,
            }}
          >
            Patrick Hollyer-Viggiani
          </h1>

          {/* Typing subtitle */}
          <div className="anim-fade-up anim-delay-3">
            <TypingSubtitle
              text="software engineer · cpga grad · builder of things"
              startDelay={800}
              speed={50}
            />
          </div>

          {/* Bio description */}
          <p
            className="anim-fade-up anim-delay-4"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--text2)',
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            I write code, break things in dev, and ship features that
            (mostly) work in prod. Recently graduated from University of Toronto & Durham College
            with a CPGA degree.
            Currently looking for my next adventure.
          </p>

          {/* CTA buttons */}
          <div
            className="anim-fade-up anim-delay-5"
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}
          >
            <a
              href="#projects"
              className="btn-pixel btn-pixel--amber"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {'[ view projects ]'}
            </a>

            <a
              href="/Patrick_Resume.pdf"
              className="btn-pixel btn-pixel--blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'[ download cv ]'}
            </a>
          </div>

          {/* Scroll hint */}
          <ScrollHint />
        </div>

        {/* Right side - Window with Desk on top */}
        <div
          className="anim-fade-up anim-delay-1"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            marginLeft: '-1rem',
          }}
        >
          {/* Background window */}
          <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
            <HeroWindow />
          </div>

          {/* Desk on top */}
          <div style={{ position: 'relative', zIndex: 2, marginBottom: '-20px', marginRight: '-10px' }}>
            <PixelDesk />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

function WoodGrainLines() {
  const lines = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.04,
      }}
    >
      {lines.map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: `${(i / 6) * 100}%`,
            height: 1,
            background: 'var(--wood3)',
          }}
        />
      ))}
    </div>
  )
}

function ScrollHint() {
  return (
    <div
      aria-hidden="true"
      style={{
        marginTop: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0,
        animation: 'fade-up 0.5s ease 2s forwards',
      }}
    >
      <p
        className="font-pixel"
        style={{
          fontSize: '0.38rem',
          color: 'var(--text4)',
          letterSpacing: 0,
          lineHeight: 1,
        }}
      >
        scroll to explore
      </p>
      <div
        style={{
          width: 6,
          height: 6,
          borderRight: '2px solid var(--text4)',
          borderBottom: '2px solid var(--text4)',
          transform: 'rotate(45deg)',
          animation: 'bounce 1.4s ease-in-out 2s infinite',
        }}
      />
    </div>
  )
}