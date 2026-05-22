import NavLinks from '@/components/sidebar/NavLinks'
import RainWindow from '@/components/sidebar/RainWindow'
import CandleFlicker from '@/components/sidebar/CandleFlicker'
import PixelAvatar from '@/components/ui/PixelAvatar'

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 'var(--sidebar-w)',
        minWidth: 'var(--sidebar-w)',
        minHeight: '100vh',
        background: 'var(--bg2)',
        borderRight: 'var(--border-wood)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.25rem 0.75rem',
        gap: '0.85rem',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 10,
      }}
    >
      {/* Avatar */}
      <PixelAvatar />

      {/* Name / title */}
      <div style={{ textAlign: 'center' }}>
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

      {/* Pixel divider */}
      <Divider />

      {/* Navigation */}
      <NavLinks />

      {/* Pixel divider */}
      <Divider />

      {/* Rain window — shows current "weather" outside the study */}
      <SidebarLabel label="outside" />
      <RainWindow />

      {/* Pixel divider */}
      <Divider />

      {/* Candle — ambient mood indicator */}
      <CandleFlicker />
      <SidebarLabel label="mood: cozy" />
    </aside>
  )
}

/* ── Small helpers (no separate files needed) ── */

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '2px solid var(--wood)',
        width: '80%',
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
      }}
    >
      {label}
    </p>
  )
}