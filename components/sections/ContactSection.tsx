"use client"

import { useState } from 'react'
import ContactDeskScene from '@/components/ui/ContactDesk'

/* ── Template data ───────────────────────────────────────────────────────── */

const CONTACT_INFO = {
  email: 'pviggiani61@gmail.com',
  github: 'https://github.com/phollyerviggiani',
  linkedin: 'https://linkedin.com/in/patrick-hollyer-viggiani',
  resume: '/Patrick_Resume.pdf',
}

const SOCIAL_LINKS = [
  { platform: 'github',   url: CONTACT_INFO.github,   label: '[ github ]' },
  { platform: 'linkedin', url: CONTACT_INFO.linkedin,  label: '[ linkedin ]' },
  { platform: 'resume',   url: CONTACT_INFO.resume,    label: '[ resume / cv ]' },
]

const NOTEPAD_TEXT = {
  greeting: 'get in touch',
  message: "I'm open to full-time roles and interesting side projects. Drop me a line!",
}

/* ── Component ───────────────────────────────────────────────────────────── */

export default function ContactSection() {
  const [toastVisible, setToastVisible]   = useState(false)
  const [toastMessage, setToastMessage]   = useState('copied!')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email)
      setToastMessage('copied!')
      setToastVisible(true)
      setTimeout(() => setToastVisible(false), 1500)
    } catch {
      setToastMessage('failed to copy')
      setToastVisible(true)
      setTimeout(() => setToastVisible(false), 1500)
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg2)',
      }}
    >
      <h2 className="section-heading">contact</h2>

      <div
        className="anim-fade-up anim-delay-1"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
          marginTop: '0.5rem', // Reduced gap between heading and card
        }}
      >
        {/* ── Main row: notepad + desk scene ─────────────────────── */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-start', // Changed from 'flex-end' to 'flex-start'
          flexWrap: 'wrap',
        }}>

          {/* Notepad card */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div
              style={{
                background: '#f5f0e4',
                border: '2px solid #d4c8a8',
                padding: '1.25rem 1.5rem 1.25rem 2.5rem',
                position: 'relative',
                color: '#2c1f14',
                maxWidth: 480,
                boxShadow: '4px 4px 0 rgba(0,0,0,0.1)',
              }}
            >
              {/* Left binding lines */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '1rem',
                  bottom: '1rem',
                  width: '1px',
                  background: 'rgba(180, 150, 120, 0.4)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '4px',
                  top: '1rem',
                  bottom: '1rem',
                  width: '1px',
                  background: 'rgba(180, 150, 120, 0.3)',
                }}
              />

              {/* Notebook lines overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  left: '2.5rem',
                  background: 'repeating-linear-gradient(180deg, transparent, transparent 23px, rgba(180, 150, 200, 0.2) 23px, rgba(180, 150, 200, 0.2) 24px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Header */}
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <h3
                  className="font-pixel"
                  style={{
                    fontSize: '0.5rem',
                    color: '#5c3a1e',
                    letterSpacing: 0,
                    display: 'inline-block',
                    background: '#f5f0e4',
                    paddingRight: '0.5rem',
                  }}
                >
                  {NOTEPAD_TEXT.greeting}
                </h3>
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '-6px',
                    fontSize: '0.7rem',
                    opacity: 0.6,
                  }}
                >
                  📎
                </span>
              </div>

              {/* Message */}
              <p
                style={{
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                  color: '#3d2b18',
                  marginBottom: '1rem',
                  position: 'relative',
                }}
              >
                {NOTEPAD_TEXT.message}
              </p>

              {/* Email copy button */}
              <button
                onClick={copyEmail}
                className="font-pixel"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.6rem',
                  color: 'var(--blue2)',
                  cursor: 'pointer',
                  padding: '0.3rem 0',
                  borderBottom: '1px dashed var(--blue2)',
                  transition: 'all 0.1s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--blue3)'
                  e.currentTarget.style.borderBottomColor = 'var(--blue3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--blue2)'
                  e.currentTarget.style.borderBottomColor = 'var(--blue2)'
                }}
              >
                <span style={{ fontSize: '0.5rem' }}>✉</span>
                {CONTACT_INFO.email}
              </button>

              {/* Decorative scribble */}
              <svg
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  width: 40,
                  opacity: 0.3,
                }}
                viewBox="0 0 100 20"
              >
                <path
                  d="M5,15 Q20,5 35,15 T65,15 T95,10"
                  fill="none"
                  stroke="#8b6914"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Toast */}
            <div
              className="font-pixel"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '1rem',
                background: 'var(--amber)',
                color: 'var(--bg1)',
                padding: '0.25rem 0.6rem',
                fontSize: '0.4rem',
                opacity: toastVisible ? 1 : 0,
                transition: 'opacity 0.15s ease',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {toastMessage}
            </div>
          </div>

          {/* Desk scene — right side */}
          <div style={{ opacity: 0.85, marginTop: '0.5rem', marginLeft: '13.4rem' }}>
            <ContactDeskScene />
          </div>
        </div>

        {/* ── Social Links ─────────────────────────────────────────── */}
        <div
          className="anim-fade-up anim-delay-2"
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.5rem',
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pixel btn-pixel--wood"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Footer note ──────────────────────────────────────────── */}
        <div
          className="anim-fade-up anim-delay-4"
          style={{
            marginTop: '0.5rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--wood)',
          }}
        >
          <p
            className="font-pixel"
            style={{
              fontSize: '0.4rem',
              color: 'var(--text4)',
              letterSpacing: 0,
              lineHeight: 1.5,
            }}
          >
            {'/* responses usually within 48 hours */'}
          </p>
        </div>
      </div>
    </section>
  )
}