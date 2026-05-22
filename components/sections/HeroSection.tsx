"use client"

import PixelDesk      from '@/components/ui/PixelDesk'
import TypingSubtitle from '@/components/ui/TypingSubtitle'

/*
  Layout (desktop):
  ┌──────────────────────────────────────────────────┐
  │  [Pixel desk scene — right-aligned]              │
  │                                                  │
  │  Your Name              ← h1, pixel font, amber  │
  │  software engineer · … ← typing animation, blue  │
  │  Bio blurb             ← serif, muted            │
  │                                                  │
  │  [ view projects ]  [ download cv ]             │
  └──────────────────────────────────────────────────┘

  On mobile the desk scene stacks above the text.
*/

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
        gap: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient wood-panel texture lines */}
      <WoodGrainLines />

      {/* Desk scene — floats top-right on large screens */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '-1rem',
        }}
        className="anim-fade-up anim-delay-1"
        aria-hidden="true"
      >
        <PixelDesk />
      </div>

      {/* ── Text block ─────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Eyebrow label */}
        <p
          className="font-pixel anim-fade-up anim-delay-1"
          style={{
            fontSize: '0.38rem',
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
            fontSize: 'clamp(0.85rem, 2.5vw, 1.4rem)',
            color: 'var(--amber)',
            lineHeight: 1.8,
            letterSpacing: 0,
          }}
        >
          Your Name
        </h1>

        {/* Typing subtitle — client component */}
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
            fontSize: '1rem',
            color: 'var(--text2)',
            lineHeight: 1.85,
            maxWidth: 520,
          }}
        >
          I write clean code, break things in dev, and ship features that
          (mostly) work in prod. Recently graduated from University of Toronto & Durham College
          with a CPGA degree an internship&apos;s worth of battle scars.
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
            href="/resume.pdf"
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
    </section>
  )
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

/*
  Subtle animated wood-grain lines behind the hero content.
  Pure CSS, purely decorative — hidden from screen readers.
*/
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

/*
  A small bouncing arrow hinting that the user can scroll down.
  Fades out after 4 seconds via CSS animation.
*/
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
          fontSize: '0.32rem',
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