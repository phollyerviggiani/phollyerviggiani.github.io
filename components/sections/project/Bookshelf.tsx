'use client'

import { useState, useRef, useEffect } from 'react'
import { PROJECTS, type Project } from '@/components/sections/project/projectData'

export default function Bookshelf({ onActiveChange }: { onActiveChange?: (active: boolean) => void }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [shelfWidth, setShelfWidth] = useState<number | null>(null)
  const booksRowRef = useRef<HTMLDivElement>(null)

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null

  function handleBookClick(id: string) {
    setActiveId((prev) => (prev === id ? null : id))
  }
  
  useEffect(() => {
    onActiveChange?.(activeId !== null)
  }, [activeId, onActiveChange])

  useEffect(() => {
    if (booksRowRef.current) {
      setShelfWidth(booksRowRef.current.offsetWidth)
    }
  }, [PROJECTS.length])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>

      <p
        className="font-pixel"
        style={{ fontSize: '0.5rem', color: 'var(--text3)', letterSpacing: 0, lineHeight: 1 }}
      >
        {'// click a book to open it'}
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '2rem',
        flexWrap: 'wrap',
      }}>
        {/* Bookshelf */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            <div
              ref={booksRowRef}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                gap: 6,
                padding: '10px 14px 0',
                background: 'var(--wood)',
                borderTop: '2px solid var(--wood3)',
                borderLeft: '2px solid var(--wood3)',
                borderRight: '2px solid var(--wood3)',
                flexWrap: 'wrap',
                width: 'fit-content',
                minWidth: 'auto',
              }}
            >
              {PROJECTS.map((project) => (
                <Book
                  key={project.id}
                  project={project}
                  isActive={activeId === project.id}
                  onClick={() => handleBookClick(project.id)}
                />
              ))}
            </div>

            <div
              style={{
                height: 10,
                background: 'var(--wood2)',
                borderLeft: '2px solid var(--wood3)',
                borderRight: '2px solid var(--wood3)',
                borderBottom: '2px solid var(--wood4)',
                width: shelfWidth ? `${shelfWidth}px` : 'fit-content',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                height: 4,
                background: 'rgba(0,0,0,0.25)',
                width: shelfWidth ? `${shelfWidth}px` : 'fit-content',
              }}
            />
          </div>
        </div>

        {/* Project panel */}
        {activeProject && (
          <div style={{ flex: 1, minWidth: '280px', maxWidth: '500px' }}>
            <ProjectPanel project={activeProject} />
          </div>
        )}
      </div>
    </div>
  )
}

// Rest of your file remains exactly the same from here...
function getBookSize(index: number, totalBooks: number) {
  const sizes = [
    { w: 26, h: 133 },
    { w: 24, h: 140 },
    { w: 28, h: 144 },
    { w: 20, h: 190 },
    { w: 28, h: 84 },
    { w: 24, h: 78 },
  ]
  return sizes[index % sizes.length]
}

function Book({
  project,
  isActive,
  onClick,
}: {
  project:  Project
  isActive: boolean
  onClick:  () => void
}) {
  const projectIndex = PROJECTS.findIndex(p => p.id === project.id)
  const size = getBookSize(projectIndex, PROJECTS.length)

  return (
    <button
      onClick={onClick}
      title={project.title}
      aria-pressed={isActive}
      aria-label={`Open project: ${project.title}`}
      style={{
        appearance:     'none',
        border:         isActive ? `2px solid var(--amber)` : '2px solid transparent',
        padding:        0,
        cursor:         'pointer',
        background:     'none',
        width:          size.w,
        height:         size.h,
        flexShrink:     0,
        transform:      isActive ? 'translateY(-12px)' : 'translateY(0)',
        transition:     'transform 0.15s ease, border-color 0.1s',
        imageRendering: 'pixelated',
        display:        'flex',
        flexDirection:  'column',
        overflow:       'hidden',
        borderRadius:   0,
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.transform = 'translateY(-6px)'
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div aria-hidden="true" style={{ height: 4, background: project.spineLight, flexShrink: 0 }} />

      <div
        style={{
          flex:           1,
          background:     project.color,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          overflow:       'hidden',
          position:       'relative',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'repeating-linear-gradient(180deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
          }}
        />
        <span
          style={{
            writingMode:     'vertical-rl',
            textOrientation: 'mixed',
            fontSize:        '0.7rem',
            fontFamily:      'Silkscreen',
            color:           '#ffffff',
            textShadow:      `0px 0px 4px rgba(0,0,0,0.95), -1px -1px 0 rgba(0,0,0,0.8), 1px -1px 0 rgba(0,0,0,0.8), -1px 1px 0 rgba(0,0,0,0.8), 1px 1px 0 rgba(0,0,0,0.8)`,
            letterSpacing:   0,
            lineHeight:      1.2,
            padding:         '6px 0',
            position:        'relative',
            zIndex:          1,
            overflow:        'hidden',
            maxHeight:       size.h - 12,
          }}
        >
          {project.spine}
        </span>
      </div>

      <div
        aria-hidden="true"
        style={{
          height:     4,
          background: `color-mix(in srgb, ${project.color} 60%, black)`,
          flexShrink: 0,
        }}
      />
    </button>
  )
}

function ProjectPanel({ project }: { project: Project | null }) {
  if (!project) return null

  return (
    <div
      key={project.id}
      className="anim-fade-up"
      style={{
        background:    'var(--bg3)',
        border:        '2px solid var(--wood2)',
        padding:       '1.25rem 1.5rem',
        display:       'flex',
        flexDirection: 'column',
        gap:           '1rem',
        height:        'fit-content',
        maxHeight:     '400px',
        overflowY:     'auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3 className="font-pixel" style={{ fontSize: '0.6rem', color: 'var(--amber)', letterSpacing: 0, lineHeight: 1.6 }}>
          {project.title}
        </h3>
        <span className="font-pixel" style={{ fontSize: '0.5rem', color: 'var(--text3)', letterSpacing: 0, lineHeight: 1 }}>
          {project.year}
        </span>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.8 }}>
        {project.description}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: 0, listStyle: 'none' }}>
        {project.highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <span className="font-pixel" style={{ fontSize: '0.3rem', color: 'var(--amber3)', lineHeight: 2.2, flexShrink: 0 }} aria-hidden="true">▸</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.75 }}>{h}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-pixel btn-pixel--wood">
            {'[ github ↗ ]'}
          </a>
        ) : (
          <span className="btn-pixel font-pixel" style={{ borderColor: 'var(--wood)', color: 'var(--text4)', cursor: 'default', fontSize: '0.45rem' }}>
            {'[ private repo ]'}
          </span>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-pixel btn-pixel--blue">
            {'[ live demo ↗ ]'}
          </a>
        )}
      </div>
    </div>
  )
}