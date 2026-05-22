'use client'

import { useState } from 'react'
import { PROJECTS, type Project } from '@/components/sections/project/projectData'

/* ─────────────────────────────────────────────────────────────────────────
   Bookshelf
   ─ Renders a row of pixel-art books on a wooden shelf.
   ─ Clicking a book selects it (lifts up) and opens the detail panel below.
   ─ Clicking the same book again collapses the panel.
───────────────────────────────────────────────────────────────────────── */

export default function Bookshelf() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null

  function handleBookClick(id: string) {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Hint label */}
      <p
        className="font-pixel"
        style={{
          fontSize: '0.32rem',
          color: 'var(--text3)',
          letterSpacing: 0,
          lineHeight: 1,
        }}
      >
        {'// click a book to open it'}
      </p>

      {/* ── Shelf ──────────────────────────────────────────────── */}
      <div>
        {/* Books row */}
        <div
          style={{
            display:        'flex',
            alignItems:     'flex-end',
            gap:            6,
            padding:        '10px 14px 0',
            background:     'var(--wood)',
            borderTop:      '2px solid var(--wood3)',
            borderLeft:     '2px solid var(--wood3)',
            borderRight:    '2px solid var(--wood3)',
            flexWrap:       'wrap',
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

          {/* Bookend — right side decorative block */}
          <div
            aria-hidden="true"
            style={{
              width:      16,
              height:     56,
              background: 'var(--wood3)',
              border:     '1px solid var(--wood4)',
              marginLeft: 'auto',
              flexShrink: 0,
            }}
          />
        </div>

        {/* Shelf plank */}
        <div
          style={{
            height:           10,
            background:       'var(--wood2)',
            borderLeft:       '2px solid var(--wood3)',
            borderRight:      '2px solid var(--wood3)',
            borderBottom:     '2px solid var(--wood4)',
          }}
        />
        {/* Shelf shadow */}
        <div
          aria-hidden="true"
          style={{
            height:     4,
            background: 'rgba(0,0,0,0.25)',
          }}
        />
      </div>

      {/* ── Project detail panel ───────────────────────────────── */}
      <ProjectPanel project={activeProject} />

    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Book
   ─ A single pixel-art book spine. Height and width vary per book.
   ─ Lifts on hover and when active. Active = slightly more lifted + border.
───────────────────────────────────────────────────────────────────────── */

const BOOK_SIZES: { w: number; h: number }[] = [
  { w: 26, h: 88 },
  { w: 22, h: 76 },
  { w: 30, h: 96 },
  { w: 20, h: 70 },
  { w: 28, h: 84 },
  { w: 24, h: 78 },
]

function Book({
  project,
  isActive,
  onClick,
}: {
  project:  Project
  isActive: boolean
  onClick:  () => void
}) {
  const size = BOOK_SIZES[PROJECTS.indexOf(project) % BOOK_SIZES.length]

  return (
    <button
      onClick={onClick}
      title={project.title}
      aria-pressed={isActive}
      aria-label={`Open project: ${project.title}`}
      style={{
        /* Reset button styles */
        appearance:    'none',
        border:        isActive ? `2px solid var(--amber)` : '2px solid transparent',
        padding:       0,
        cursor:        'pointer',
        background:    'none',

        /* Size */
        width:         size.w,
        height:        size.h,
        flexShrink:    0,

        /* Lift on hover / active */
        transform:     isActive ? 'translateY(-12px)' : 'translateY(0)',
        transition:    'transform 0.15s ease, border-color 0.1s',

        /* Pixel rendering */
        imageRendering: 'pixelated',

        /* Layout for inner content */
        display:       'flex',
        flexDirection: 'column',
        overflow:      'hidden',
        borderRadius:  0,
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = 'translateY(-6px)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = 'translateY(0)'
        }
      }}
    >
      {/* Book top highlight */}
      <div
        aria-hidden="true"
        style={{
          height:     4,
          background: project.spineLight,
          flexShrink: 0,
        }}
      />

      {/* Spine — main body with vertical text */}
      <div
        style={{
          flex:            1,
          background:      project.color,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          overflow:        'hidden',
          position:        'relative',
        }}
      >
        {/* Subtle texture stripes */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'repeating-linear-gradient(180deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
          }}
        />

        {/* Vertical spine title */}
        <span
          className="font-pixel"
          style={{
            writingMode:       'vertical-rl',
            textOrientation:   'mixed',
            fontSize:          '0.28rem',
            color:             'rgba(255,255,255,0.88)',
            letterSpacing:     0,
            lineHeight:        1,
            padding:           '4px 0',
            position:          'relative',
            zIndex:            1,
            /* Truncate if too long for the spine */
            overflow:          'hidden',
            maxHeight:         size.h - 16,
          }}
        >
          {project.spine}
        </span>
      </div>

      {/* Book bottom — slightly darker */}
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

/* ─────────────────────────────────────────────────────────────────────────
   ProjectPanel
   ─ Expands below the shelf when a book is active.
   ─ Shows title, year, description, tags, highlights, and links.
   ─ Animates in with a fade-up.
───────────────────────────────────────────────────────────────────────── */

function ProjectPanel({ project }: { project: Project | null }) {
  if (!project) return null

  return (
    <div
      key={project.id}  /* key forces remount → re-runs the animation */
      className="anim-fade-up"
      style={{
        background:   'var(--bg3)',
        border:       '2px solid var(--wood2)',
        padding:      '1.25rem 1.5rem',
        display:      'flex',
        flexDirection: 'column',
        gap:          '1rem',
      }}
    >
      {/* Header row: title + year */}
      <div
        style={{
          display:        'flex',
          alignItems:     'baseline',
          justifyContent: 'space-between',
          flexWrap:       'wrap',
          gap:            '0.5rem',
        }}
      >
        <h3
          className="font-pixel"
          style={{
            fontSize:    '0.6rem',
            color:       'var(--amber)',
            letterSpacing: 0,
            lineHeight:  1.6,
          }}
        >
          {project.title}
        </h3>
        <span
          className="font-pixel"
          style={{
            fontSize:    '0.32rem',
            color:       'var(--text3)',
            letterSpacing: 0,
            lineHeight:  1,
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize:   '0.9rem',
          color:      'var(--text2)',
          lineHeight: 1.8,
          maxWidth:   640,
        }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul
        style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           '0.4rem',
          paddingLeft:   0,
          listStyle:     'none',
        }}
      >
        {project.highlights.map((h, i) => (
          <li
            key={i}
            style={{
              display:    'flex',
              gap:        '0.6rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              className="font-pixel"
              style={{
                fontSize:   '0.3rem',
                color:      'var(--amber3)',
                lineHeight: 2.2,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              ▸
            </span>
            <span
              style={{
                fontSize:   '0.85rem',
                color:      'var(--text2)',
                lineHeight: 1.75,
              }}
            >
              {h}
            </span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pixel btn-pixel--wood"
          >
            {'[ github ↗ ]'}
          </a>
        ) : (
          <span
            className="btn-pixel font-pixel"
            style={{
              borderColor: 'var(--wood)',
              color:       'var(--text4)',
              cursor:      'default',
              fontSize:    '0.45rem',
            }}
          >
            {'[ private repo ]'}
          </span>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pixel btn-pixel--blue"
          >
            {'[ live demo ↗ ]'}
          </a>
        )}
      </div>
    </div>
  )
}