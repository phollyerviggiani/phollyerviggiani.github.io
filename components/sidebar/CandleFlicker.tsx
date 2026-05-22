'use client'

/*
  CSS-only flickering candle using clip-path for the flame shape.
  The 'flicker' keyframe is already declared in globals.css.
  This component just assembles the DOM structure.
*/

export default function CandleFlicker() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        flexShrink: 0,
      }}
      aria-label="Decorative candle"
      role="img"
    >
      {/* Flame glow — soft halo behind the flame */}
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: 'rgba(245, 201, 122, 0.18)',
          marginBottom: -10,
          animation: 'flicker 0.9s ease-in-out infinite alternate',
          animationDelay: '0.15s',
        }}
      />

      {/* Flame */}
      <div
        style={{
          width: 10,
          height: 16,
          background: 'var(--amber)',
          clipPath: 'polygon(50% 0%, 100% 75%, 65% 100%, 35% 100%, 0% 75%)',
          animation: 'flicker 0.75s ease-in-out infinite alternate',
          transformOrigin: 'bottom center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Inner flame — slightly cooler tone */}
        <div
          style={{
            position: 'absolute',
            bottom: 2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 4,
            height: 8,
            background: '#fff8e0',
            clipPath: 'polygon(50% 0%, 100% 80%, 50% 100%, 0% 80%)',
            opacity: 0.7,
          }}
        />
      </div>

      {/* Wick */}
      <div
        style={{
          width: 2,
          height: 5,
          background: '#4a3020',
          marginTop: -1,
          zIndex: 2,
          position: 'relative',
        }}
      />

      {/* Candle wax drip — decorative detail */}
      <div
        style={{
          width: 14,
          height: 4,
          background: 'var(--cream2)',
          borderRadius: '0 0 3px 3px',
          position: 'relative',
        }}
      >
        {/* Tiny wax drip on right side */}
        <div
          style={{
            position: 'absolute',
            right: 2,
            top: 2,
            width: 3,
            height: 5,
            background: 'var(--cream2)',
            borderRadius: '0 0 2px 2px',
          }}
        />
      </div>

      {/* Candle body */}
      <div
        style={{
          width: 18,
          height: 36,
          background: 'var(--cream2)',
          border: '1px solid var(--cream3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle vertical stripe texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(0,0,0,0.04) 5px, rgba(0,0,0,0.04) 6px)',
          }}
        />
      </div>

      {/* Candle base / holder */}
      <div
        style={{
          width: 24,
          height: 5,
          background: 'var(--wood2)',
          borderRadius: '0 0 2px 2px',
        }}
      />

      {/* Wax pool on holder */}
      <div
        style={{
          width: 20,
          height: 3,
          background: 'rgba(245, 234, 216, 0.4)',
          borderRadius: '50%',
          marginTop: -1,
        }}
      />
    </div>
  )
}