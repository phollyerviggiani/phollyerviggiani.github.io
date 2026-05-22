'use client'

import Bookshelf from '@/components/sections/project/Bookshelf'

/* ── Template data ───────────────────────────────────────────────────────── */

const PROJECTS_HEADER = {
  title: 'projects',
  subtitle: '// click a book to open it',
}

/* ── Component ───────────────────────────────────────────────────────────── */

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg2)',
      }}
    >
      {/* Section heading */}
      <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
        {PROJECTS_HEADER.title}
      </h2>

      {/* Ambient warm light glow behind bookshelf (optional cozy touch) */}
      <div
        aria-hidden="true"
        style={{
          position: 'relative',
          marginBottom: '1rem',
        }}
      >
        {/* Soft glow behind the shelf area */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '10%',
            right: '10%',
            height: '120px',
            background: 'radial-gradient(ellipse at center, rgba(245, 201, 122, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        
        {/* The bookshelf itself */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Bookshelf />
        </div>
      </div>

      {/* Optional: vintage bookshop sign / footer decoration */}
      <div
        aria-hidden="true"
        style={{
          marginTop: '2rem',
          textAlign: 'center',
          opacity: 0.5,
        }}
      >
        <div
          style={{
            width: '60px',
            height: '2px',
            background: 'var(--wood)',
            margin: '0 auto 0.5rem auto',
          }}
        />
        <p
          className="font-pixel"
          style={{
            fontSize: '0.28rem',
            color: 'var(--text4)',
            letterSpacing: 0,
          }}
        >
          {'✦ hand-bound collection ✦'}
        </p>
      </div>
    </section>
  )
}