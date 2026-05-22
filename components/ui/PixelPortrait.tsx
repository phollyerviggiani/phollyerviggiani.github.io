/*
  A 24×28 pixel portrait rendered at 3× (72×84) inside a wooden frame.
  More detailed than the sidebar avatar — full upper body with background.
  The frame and nameplate are pure SVG shapes.
*/
export default function PixelPortrait() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      {/* Outer wooden frame */}
      <svg
        className="pixel"
        width={108}
        height={126}
        viewBox="0 0 36 42"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Pixel art portrait"
        role="img"
      >
        {/* Frame border */}
        <rect x={0}  y={0}  width={36} height={38} fill="#5c3a1e" />
        <rect x={1}  y={1}  width={34} height={36} fill="#7c4f2a" />

        {/* Frame inner bevel */}
        <rect x={2}  y={2}  width={32} height={34} fill="#a0662e" />
        <rect x={3}  y={3}  width={30} height={32} fill="#1a3a5c" />

        {/* Background — night-study window glow */}
        <rect x={3}  y={3}  width={30} height={32} fill="#132840" />

        {/* Bookshelf hint in background */}
        <rect x={3}  y={24} width={5}  height={11} fill="#c0392b" opacity={0.6} />
        <rect x={8}  y={26} width={4}  height={9}  fill="#2980b9" opacity={0.6} />
        <rect x={12} y={25} width={5}  height={10} fill="#8e44ad" opacity={0.6} />
        <rect x={28} y={26} width={5}  height={9}  fill="#27ae60" opacity={0.5} />

        {/* Desk surface behind character */}
        <rect x={3}  y={33} width={30} height={2}  fill="#5c3a1e" opacity={0.7} />

        {/* ── Character ────────────────────────────────── */}
        {/* Hair */}
        <rect x={12} y={5}  width={12} height={3}  fill="#3d2b14" />
        <rect x={11} y={6}  width={1}  height={4}  fill="#3d2b14" />
        <rect x={23} y={6}  width={1}  height={4}  fill="#3d2b14" />
        <rect x={13} y={4}  width={10} height={2}  fill="#3d2b14" />

        {/* Face */}
        <rect x={11} y={7}  width={14} height={9}  fill="#f5c97a" />
        <rect x={10} y={8}  width={1}  height={7}  fill="#f5c97a" />
        <rect x={25} y={8}  width={1}  height={7}  fill="#f5c97a" />

        {/* Eyes */}
        <rect x={13} y={9}  width={3}  height={2}  fill="#2c1f14" />
        <rect x={20} y={9}  width={3}  height={2}  fill="#2c1f14" />
        {/* Eye shine */}
        <rect x={13} y={9}  width={1}  height={1}  fill="#ffffff" />
        <rect x={20} y={9}  width={1}  height={1}  fill="#ffffff" />

        {/* Glasses */}
        <rect x={12} y={8}  width={5}  height={4}  fill="none"   stroke="#8b6914" strokeWidth={0.5} />
        <rect x={19} y={8}  width={5}  height={4}  fill="none"   stroke="#8b6914" strokeWidth={0.5} />
        <rect x={17} y={10} width={2}  height={1}  fill="#8b6914" />

        {/* Nose */}
        <rect x={17} y={12} width={2}  height={1}  fill="#d4a060" />

        {/* Mouth — smile */}
        <rect x={14} y={14} width={8}  height={1}  fill="#c08040" />
        <rect x={13} y={13} width={1}  height={1}  fill="#c08040" />
        <rect x={22} y={13} width={1}  height={1}  fill="#c08040" />

        {/* Ear */}
        <rect x={9}  y={9}  width={1}  height={4}  fill="#f5c97a" />
        <rect x={26} y={9}  width={1}  height={4}  fill="#f5c97a" />

        {/* Neck */}
        <rect x={15} y={16} width={6}  height={3}  fill="#f5c97a" />

        {/* Shirt / hoodie — blue */}
        <rect x={9}  y={19} width={18} height={16} fill="#5b8dd9" />
        {/* Hoodie pocket */}
        <rect x={14} y={28} width={8}  height={5}  fill="#3a6bb5" />
        {/* Hoodie strings */}
        <rect x={15} y={19} width={1}  height={5}  fill="#3a6bb5" />
        <rect x={20} y={19} width={1}  height={5}  fill="#3a6bb5" />
        {/* Collar */}
        <rect x={14} y={18} width={8}  height={3}  fill="#3a6bb5" />

        {/* Arms */}
        <rect x={5}  y={19} width={4}  height={12} fill="#5b8dd9" />
        <rect x={27} y={19} width={4}  height={12} fill="#5b8dd9" />

        {/* Hands — holding a small mug */}
        <rect x={5}  y={30} width={4}  height={3}  fill="#f5c97a" />
        <rect x={27} y={30} width={4}  height={3}  fill="#f5c97a" />

        {/* Tiny coffee mug in hand */}
        <rect x={6}  y={27} width={4}  height={4}  fill="#e8d5b8" />
        <rect x={10} y={28} width={1}  height={2}  fill="#d4bc94" />
        {/* Steam */}
        <rect x={7}  y={25} width={1}  height={2}  fill="#f5ead8" opacity={0.5} />
        <rect x={9}  y={24} width={1}  height={3}  fill="#f5ead8" opacity={0.3} />

        {/* Nameplate bar at bottom of frame */}
        <rect x={0}  y={38} width={36} height={4}  fill="#5c3a1e" />
        <rect x={1}  y={39} width={34} height={2}  fill="#3d2410" />

        {/* Nameplate text placeholder — tiny pixel dots spelling initials */}
        <rect x={16} y={39} width={4}  height={1}  fill="#f5c97a" opacity={0.6} />
      </svg>

      {/* Nameplate below frame */}
      <div
        style={{
          background: 'var(--wood4)',
          border: '1px solid var(--wood2)',
          padding: '0.3rem 0.85rem',
          marginTop: -2,
        }}
      >
        <p
          className="font-pixel"
          style={{
            fontSize: '0.3rem',
            color: 'var(--amber2)',
            letterSpacing: 0,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          your name · cs '24
        </p>
      </div>
    </div>
  )
}