'use client'
import { useState } from 'react'
import Bookshelf from '@/components/sections/project/Bookshelf'
import StudyCat from '@/components/ui/StudyCat'
import AwakeCat from '@/components/ui/AwakeCat'

export default function ProjectsSection() {
  const [hasActiveBook, setHasActiveBook] = useState(false)

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

      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {/* Bookshelf — notifies us when a book is active */}
        <div style={{ flexShrink: 0 }}>
          <Bookshelf onActiveChange={setHasActiveBook} />
        </div>

        {/* Cat — swaps between sleeping and awake */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
          flexShrink: 0,
          transition: 'opacity 0.3s ease',
        }}>
          <div style={{ opacity: 0.7 }}>
            {hasActiveBook ? <AwakeCat /> : <StudyCat />}
          </div>
        </div>
      </div>

      {/* Vintage bookshop sign */}
      <div
        aria-hidden="true"
        style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.5 }}
      >
        <div style={{
          width: '60px',
          height: '2px',
          background: 'var(--wood)',
          margin: '0 auto 0.5rem auto',
        }} />
        <p
          className="font-pixel"
          style={{ fontSize: '0.5rem', color: 'var(--text4)', letterSpacing: 0 }}
        >
          {'✦ hand-bound collection ✦'}
        </p>
      </div>
    </section>
  )
}