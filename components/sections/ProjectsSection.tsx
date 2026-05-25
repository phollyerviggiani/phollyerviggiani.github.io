'use client'
import { useState, useEffect } from 'react'
import Bookshelf from '@/components/sections/project/Bookshelf'
import StudyCat from '@/components/ui/StudyCat'
import AwakeCat from '@/components/ui/AwakeCat'

export default function ProjectsSection() {
  const [hasActiveBook, setHasActiveBook] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      id="projects"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg2)',
        overflowX: 'hidden',
      }}
    >
      <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
        projects
      </h2>

      {/* Desktop layout - horizontal */}
      {!isMobile && (
        <>
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <div style={{ flexShrink: 0 }}>
              <Bookshelf onActiveChange={setHasActiveBook} layout="desktop" />
            </div>
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
                {hasActiveBook ? <AwakeCat /> : <StudyCat />}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile layout - vertical */}
      {isMobile && (
        <>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
          }}>
            <div style={{
              width: '100%',
              overflowX: 'auto',
            }}>
              <Bookshelf onActiveChange={setHasActiveBook} layout="mobile" />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ opacity: 0.7 }}>
                {hasActiveBook ? <AwakeCat /> : <StudyCat />}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}