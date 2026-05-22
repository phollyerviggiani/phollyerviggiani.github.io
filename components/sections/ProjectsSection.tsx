'use client'

import Bookshelf from '@/components/sections/project/Bookshelf'
import StudyCat from '@/components/ui/StudyCat'
import HangingPlant from '@/components/ui/HangingPlant'

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
        {/* Bookshelf - takes remaining space */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <Bookshelf />
        </div>

        {/* Decorative right column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          marginTop: '2rem',
        }}>
          {/* Hanging plant */}
          <div style={{ opacity: 0.8 }}>
            <HangingPlant />
          </div>
          
          {/* Study cat */}
          <div style={{ opacity: 0.7 }}>
            <StudyCat />
          </div>
          
          {/* Tiny framed picture or clock */}
          <div style={{
            width: '48px',
            height: '48px',
            border: '2px solid var(--wood2)',
            background: 'var(--bg3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: '20px' }}>🕰️</div>
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