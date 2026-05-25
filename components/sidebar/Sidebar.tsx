'use client'

import { useState, useEffect } from 'react'
import NavLinks from '@/components/sidebar/NavLinks'
import RainWindow from '@/components/sidebar/SnowWindow'
import CandleFlicker from '@/components/sidebar/CandleFlicker'
import PixelAvatar from '@/components/ui/PixelAvatar'

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 769
      setIsMobile(mobile)
      if (!mobile) {
        setIsMobileOpen(true)
      } else {
        setIsMobileOpen(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileOpen(false)
    }
  }

  // Desktop version - normal flow, no fixed positioning
  if (!isMobile) {
    return (
      <aside
        style={{
          width: 'var(--sidebar-w)',
          minWidth: 'var(--sidebar-w)',
          background: 'var(--bg2)',
          borderRight: 'var(--border-wood)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '1.25rem 0.75rem',
          gap: '0.85rem',
          height: '100vh',
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Avatar - center */}
        <div style={{ alignSelf: 'center' }}>
          <PixelAvatar />
        </div>

        {/* Name / title - center */}
        <div style={{ textAlign: 'center', alignSelf: 'center' }}>
          <p
            className="font-pixel"
            style={{
              fontSize: '0.6rem',
              color: 'var(--amber)',
              lineHeight: 2,
              letterSpacing: 0,
            }}
          >
            Patrick Hollyer-Viggiani
          </p>
          <p
            className="font-pixel"
            style={{
              fontSize: '0.6rem',
              color: 'var(--text3)',
              lineHeight: 2,
              letterSpacing: 0,
            }}
          >
            · dev ·
          </p>
        </div>

        <Divider />
        
        <div style={{ width: '100%' }}>
          <NavLinks />
        </div>

        <Divider />

        <div style={{ alignSelf: 'center', textAlign: 'center' }}>
          <SidebarLabel label="outside" />
          {/* Added gap between label and snow window */}
          <div style={{ marginTop: '0.5rem' }}>
            <RainWindow />
          </div>
        </div>

        <Divider />

        <div style={{ alignSelf: 'center', textAlign: 'center' }}>
          <CandleFlicker />
          <div style={{ marginTop: '0.5rem' }}></div>
          <SidebarLabel label="mood: cozy" />
        </div>
      </aside>
    )
  }

  // Mobile version with overlay and sliding sidebar
  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle menu"
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 60,
          background: 'var(--wood2)',
          border: '2px solid var(--wood3)',
          color: 'var(--cream)',
          fontFamily: 'var(--font-pixel)',
          fontSize: '0.6rem',
          padding: '0.5rem 0.75rem',
          cursor: 'pointer',
        }}
      >
        {isMobileOpen ? '✕' : '☰'} menu
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 45,
          }}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        style={{
          width: 'var(--sidebar-w)',
          minWidth: 'var(--sidebar-w)',
          background: 'var(--bg2)',
          borderRight: 'var(--border-wood)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '1.25rem 0.75rem',
          gap: '0.85rem',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 50,
          transform: isMobileOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          boxShadow: isMobileOpen ? '2px 0 8px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div style={{ alignSelf: 'center' }}>
          <PixelAvatar />
        </div>

        <div style={{ textAlign: 'center', alignSelf: 'center' }}>
          <p
            className="font-pixel"
            style={{
              fontSize: '0.6rem',
              color: 'var(--amber)',
              lineHeight: 2,
              letterSpacing: 0,
            }}
          >
            Patrick Hollyer-Viggiani
          </p>
          <p
            className="font-pixel"
            style={{
              fontSize: '0.6rem',
              color: 'var(--text3)',
              lineHeight: 2,
              letterSpacing: 0,
            }}
          >
            · dev ·
          </p>
        </div>

        <Divider />
        
        <div onClick={handleLinkClick} style={{ width: '100%' }}>
          <NavLinks />
        </div>

        <Divider />

        <div style={{ alignSelf: 'center', textAlign: 'center' }}>
          <SidebarLabel label="outside" />
          {/* Added gap between label and snow window */}
          <div style={{ marginTop: '0.5rem' }}>
            <RainWindow />
          </div>
        </div>

        <Divider />

        <div style={{ alignSelf: 'center', textAlign: 'center' }}>
          <CandleFlicker />
          <SidebarLabel label="mood: cozy" />
        </div>
      </aside>
    </>
  )
}

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '2px solid var(--wood)',
        width: '100%',
        margin: '0.1rem 0',
      }}
    />
  )
}

function SidebarLabel({ label }: { label: string }) {
  return (
    <p
      className="font-pixel"
      style={{
        fontSize: '0.5rem',
        color: 'var(--text3)',
        letterSpacing: 0,
        lineHeight: 1,
        marginBottom: '0.25rem',
      }}
    >
      {label}
    </p>
  )
}