'use client'

import { type Project } from './projectData'
import { useState } from 'react'

/* ── Component ───────────────────────────────────────────────────────────── */

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      style={{
        background: 'var(--bg3)',
        border: '2px solid var(--wood)',
        padding: '1rem',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'var(--amber)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--wood)'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Book-colored top accent bar */}
      <div
        style={{
          height: '4px',
          background: project.color,
          marginBottom: '0.75rem',
        }}
      />

      {/* Title and year row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '0.5rem',
        }}
      >
        <h3
          className="font-pixel"
          style={{
            fontSize: '0.45rem',
            color: 'var(--amber)',
            letterSpacing: 0,
          }}
        >
          {project.title}
        </h3>
        <span
          className="font-pixel"
          style={{
            fontSize: '0.28rem',
            color: 'var(--text4)',
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Description (truncated) */}
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--text2)',
          lineHeight: 1.6,
          marginBottom: '0.75rem',
        }}
      >
        {project.description.length > 100
          ? `${project.description.slice(0, 100)}...`
          : project.description}
      </p>

      {/* Tags (first 3) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.24rem',
              padding: '0.2rem 0.4rem',
              border: '1px solid var(--green)',
              color: 'var(--green2)',
              background: 'rgba(74, 124, 74, 0.1)',
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.24rem',
              color: 'var(--text4)',
            }}
          >
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Expandable details */}
      {isExpanded && (
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--wood)',
          }}
        >
          {/* Highlights */}
          <ul style={{ marginBottom: '0.75rem', paddingLeft: '1rem' }}>
            {project.highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text2)',
                  marginBottom: '0.25rem',
                }}
              >
                {h}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel--wood"
                style={{ fontSize: '0.35rem', padding: '0.3rem 0.6rem' }}
                onClick={(e) => e.stopPropagation()}
              >
                {'[ github ]'}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel--blue"
                style={{ fontSize: '0.35rem', padding: '0.3rem 0.6rem' }}
                onClick={(e) => e.stopPropagation()}
              >
                {'[ demo ]'}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Expand/collapse indicator */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '0.5rem',
          fontFamily: 'var(--font-pixel)',
          fontSize: '0.24rem',
          color: 'var(--text4)',
        }}
      >
        {isExpanded ? '[ close ]' : '[ expand ]'}
      </div>
    </div>
  )
}