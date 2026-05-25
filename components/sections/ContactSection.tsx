"use client"

import { useState, useEffect } from 'react'
import ContactDeskScene from '@/components/ui/ContactDesk'

/* ── Template data ───────────────────────────────────────────────────────── */

const CONTACT_INFO = {
  email: 'pviggiani61@gmail.com',
  github: 'https://github.com/phollyerviggiani',
  linkedin: 'https://linkedin.com/in/patrick-hollyer-viggiani',
  resume: '/PatrickHollyerViggiani_Resume.pdf',
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
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('copied!')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
        overflowX: 'hidden',
      }}
    >
      <h2 className="section-heading">contact</h2>

      <div
        className="anim-fade-up anim-delay-1"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'clamp(1rem, 4vw, 1.5rem)',
          marginTop: '0.5rem',
        }}
      >
        {/* ── Main row: notepad + desk scene ─────────────────────── */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 'clamp(1rem, 4vw, 2rem)',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          width: '100%',
        }}>

          {/* Notepad card - responsive */}
          <div style={{ 
            position: 'relative', 
            flexShrink: 0,
            width: isMobile ? '100%' : 'auto',
            maxWidth: '100%',
          }}>
            <div
              style={{
                background: '#f5f0e4',
                border: '2px solid #d4c8a8',
                padding: `clamp(0.75rem, 4vw, 1.25rem) clamp(0.75rem, 4vw, 1.5rem) clamp(0.75rem, 4vw, 1.25rem) clamp(1.5rem, 6vw, 2.5rem)`,
                position: 'relative',
                color: '#2c1f14',
                maxWidth: 'min(480px, 100%)',
                width: '100%',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.1)',
              }}
            >
              {/* Left binding lines */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 'clamp(6px, 2vw, 8px)',
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
                  left: 'clamp(3px, 1.5vw, 4px)',
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
                  left: 'clamp(1.5rem, 5vw, 2.5rem)',
                  background: 'repeating-linear-gradient(180deg, transparent, transparent 23px, rgba(180, 150, 200, 0.2) 23px, rgba(180, 150, 200, 0.2) 24px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Header */}
              <div style={{ position: 'relative', marginBottom: 'clamp(0.75rem, 3vw, 1rem)' }}>
                <h3
                  className="font-pixel"
                  style={{
                    fontSize: 'clamp(0.4rem, 2.5vw, 0.5rem)',
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
                    fontSize: 'clamp(0.5rem, 3vw, 0.7rem)',
                    opacity: 0.6,
                  }}
                >
                  📎
                </span>
              </div>

              {/* Message */}
              <p
                style={{
                  fontSize: 'clamp(0.75rem, 3vw, 0.85rem)',
                  lineHeight: 1.8,
                  color: '#3d2b18',
                  marginBottom: '1rem',
                  position: 'relative',
                  wordBreak: 'break-word',
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
                  fontSize: 'clamp(0.5rem, 2.5vw, 0.6rem)',
                  color: 'var(--blue2)',
                  cursor: 'pointer',
                  padding: '0.3rem 0',
                  borderBottom: '1px dashed var(--blue2)',
                  transition: 'all 0.1s ease',
                  wordBreak: 'break-word',
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
                <span style={{ fontSize: 'clamp(0.4rem, 2vw, 0.5rem)' }}>✉</span>
                {CONTACT_INFO.email}
              </button>

              {/* Decorative scribble */}
              <svg
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 'clamp(0.5rem, 2vw, 1rem)',
                  right: 'clamp(0.5rem, 2vw, 1rem)',
                  width: 'clamp(30px, 8vw, 40px)',
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
                fontSize: 'clamp(0.35rem, 2vw, 0.4rem)',
                opacity: toastVisible ? 1 : 0,
                transition: 'opacity 0.15s ease',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {toastMessage}
            </div>
          </div>

          {/* Desk scene — responsive positioning */}
          <div style={{ 
            opacity: 0.85, 
            marginTop: isMobile ? '0' : '0.5rem',
            marginLeft: isMobile ? '0' : 'clamp(0rem, 5vw, 13.4rem)',
            transform: isMobile ? 'scale(0.85)' : 'scale(1)',
            transformOrigin: 'left top',
          }}>
            <ContactDeskScene />
          </div>
        </div>

        {/* ── Social Links - left aligned ─────────────────────────── */}
        <div
          className="anim-fade-up anim-delay-2"
          style={{
            display: 'flex',
            gap: 'clamp(0.5rem, 3vw, 0.75rem)',
            flexWrap: 'wrap',
            marginTop: '0.5rem',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pixel btn-pixel--wood"
              style={{ 
                textDecoration: 'none', 
                display: 'inline-block',
                fontSize: 'clamp(0.4rem, 2.5vw, 0.55rem)',
                padding: 'clamp(0.4rem, 2vw, 0.65rem) clamp(0.6rem, 3vw, 1rem)',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                textAlign: 'center',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Footer note - left aligned ──────────────────────────── */}
        <div
          className="anim-fade-up anim-delay-4"
          style={{
            marginTop: '0.5rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--wood)',
            width: '100%',
          }}
        >
          <p
            className="font-pixel"
            style={{
              fontSize: 'clamp(0.35rem, 2vw, 0.4rem)',
              color: 'var(--text4)',
              letterSpacing: 0,
              lineHeight: 1.5,
              textAlign: 'left',
              wordBreak: 'break-word',
            }}
          >
            {'/* responses usually within 48 hours */'}
          </p>
        </div>
      </div>
    </section>
  )
}