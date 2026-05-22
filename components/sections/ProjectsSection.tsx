'use client'
import Bookshelf from '@/components/sections/project/Bookshelf'
import StudyCat from '@/components/ui/StudyCat'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg2)',
      }}
    >
      <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
        projects
      </h2>

      {/* Bookshelf + Decorative elements side by side */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {/* Bookshelf — does not grow beyond its natural content width */}
        <div style={{ flexShrink: 0 }}>
          <Bookshelf />
        </div>

        {/* Decorative column — sits naturally right after the bookshelf */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
          flexShrink: 0,
        }}>
          <div style={{ opacity: 0.7 }}>
            <StudyCat />
          </div>
        </div>
      </div>

      {/* Vintage bookshop sign */}
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
            fontSize: '0.5rem',
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