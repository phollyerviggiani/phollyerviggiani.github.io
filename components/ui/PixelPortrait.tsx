/*
  A 24×28 pixel portrait rendered at 3× (72×84) inside a wooden frame.
  Updated: curly top + mullet, mustache, no glasses, cozy cabin study background
  (warm brown wall, bookshelves, fireplace glow, desk with mug).
  Designed to blend with a brown-toned UI.
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
        aria-label="Pixel art portrait in cozy cabin"
        role="img"
      >
        {/* Frame border */}
        <rect x={0}  y={0}  width={36} height={38} fill="#5c3a1e" />
        <rect x={1}  y={1}  width={34} height={36} fill="#7c4f2a" />
        <rect x={2}  y={2}  width={32} height={34} fill="#a0662e" />
        <rect x={3}  y={3}  width={30} height={32} fill="#3d2410" />

        {/* Background — cozy cabin study */}
        <rect x={3}  y={3}  width={30} height={32} fill="#3b2210" />
        {/* Wood plank lines on wall */}
        <rect x={3}  y={8}  width={30} height={1}  fill="#2a1808" opacity={0.5} />
        <rect x={3}  y={14} width={30} height={1}  fill="#2a1808" opacity={0.5} />

        {/* Bookshelf left */}
        <rect x={3}  y={14} width={6}  height={13} fill="#5c3a1e" />
        <rect x={3}  y={14} width={6}  height={1}  fill="#7c4f2a" />
        <rect x={3}  y={21} width={6}  height={1}  fill="#7c4f2a" />
        <rect x={3}  y={15} width={2}  height={5}  fill="#c0392b" opacity={0.85} />
        <rect x={5}  y={16} width={2}  height={4}  fill="#d4a820" opacity={0.85} />
        <rect x={7}  y={15} width={2}  height={5}  fill="#2980b9" opacity={0.85} />
        <rect x={3}  y={22} width={2}  height={4}  fill="#8e44ad" opacity={0.85} />
        <rect x={5}  y={22} width={2}  height={4}  fill="#c0392b" opacity={0.7} />
        <rect x={7}  y={22} width={2}  height={4}  fill="#27ae60" opacity={0.85} />

        {/* Bookshelf right */}
        <rect x={27} y={14} width={6}  height={13} fill="#5c3a1e" />
        <rect x={27} y={14} width={6}  height={1}  fill="#7c4f2a" />
        <rect x={27} y={21} width={6}  height={1}  fill="#7c4f2a" />
        <rect x={27} y={15} width={2}  height={5}  fill="#27ae60" opacity={0.85} />
        <rect x={29} y={15} width={2}  height={5}  fill="#c0392b" opacity={0.85} />
        <rect x={31} y={15} width={2}  height={5}  fill="#d4a820" opacity={0.8} />
        <rect x={27} y={22} width={2}  height={4}  fill="#2980b9" opacity={0.85} />
        <rect x={29} y={22} width={2}  height={4}  fill="#8e44ad" opacity={0.8} />
        <rect x={31} y={22} width={2}  height={4}  fill="#7c4f2a" opacity={0.85} />

        {/* Fireplace glow bottom center */}
        <rect x={11} y={27} width={14} height={8}  fill="#5c3a1e" />
        <rect x={11} y={27} width={14} height={1}  fill="#7c4f2a" />
        <rect x={12} y={28} width={12} height={7}  fill="#c0392b" opacity={0.2} />
        <rect x={13} y={29} width={10} height={5}  fill="#e67e22" opacity={0.25} />
        <rect x={15} y={30} width={6}  height={3}  fill="#f5c842" opacity={0.3} />
        {/* Flame shapes */}
        <rect x={15} y={29} width={2}  height={3}  fill="#e67e22" opacity={0.8} />
        <rect x={18} y={28} width={2}  height={4}  fill="#f5c842" opacity={0.9} />
        <rect x={21} y={29} width={2}  height={3}  fill="#e67e22" opacity={0.8} />

        {/* Desk surface */}
        <rect x={3}  y={31} width={30} height={4}  fill="#6b3f1e" />
        <rect x={3}  y={31} width={30} height={1}  fill="#7c4f2a" />

        {/* Mug on desk */}
        <rect x={22} y={28} width={3}  height={3}  fill="#d4bc94" />
        <rect x={25} y={28} width={1}  height={2}  fill="#b09070" />
        <rect x={23} y={27} width={1}  height={1}  fill="#e8dcc8" opacity={0.5} />

        {/* ── Character ── */}

        {/* Mullet — sides flowing down behind shoulders */}
        <rect x={8}  y={5}  width={2}  height={11} fill="#1a0f05" />
        <rect x={26} y={5}  width={2}  height={11} fill="#1a0f05" />
        <rect x={8}  y={14} width={3}  height={7}  fill="#1a0f05" />
        <rect x={25} y={14} width={3}  height={7}  fill="#1a0f05" />
        <rect x={9}  y={19} width={4}  height={5}  fill="#1a0f05" />
        <rect x={23} y={19} width={4}  height={5}  fill="#1a0f05" />
        {/* Mullet center curtain */}
        <rect x={12} y={21} width={12} height={4}  fill="#1a0f05" />
        {/* Mullet wavy tips */}
        <rect x={9}  y={23} width={2}  height={2}  fill="#2c1a08" />
        <rect x={25} y={23} width={2}  height={2}  fill="#2c1a08" />
        <rect x={13} y={24} width={3}  height={2}  fill="#2c1a08" />
        <rect x={20} y={24} width={3}  height={2}  fill="#2c1a08" />

        {/* Hair top — curly, voluminous */}
        <rect x={10} y={3}  width={16} height={2}  fill="#1a0f05" />
        <rect x={9}  y={4}  width={18} height={4}  fill="#1a0f05" />
        <rect x={10} y={6}  width={6}  height={3}  fill="#1a0f05" />
        <rect x={20} y={6}  width={6}  height={3}  fill="#1a0f05" />
        {/* Curly tufts */}
        <rect x={11} y={3}  width={2}  height={1}  fill="#3d2510" />
        <rect x={15} y={3}  width={2}  height={1}  fill="#3d2510" />
        <rect x={19} y={3}  width={2}  height={1}  fill="#3d2510" />
        <rect x={23} y={3}  width={2}  height={1}  fill="#3d2510" />

        {/* Face */}
        <rect x={10} y={7}  width={16} height={13} fill="#f5c97a" />
        <rect x={9}  y={8}  width={2}  height={9}  fill="#f5c97a" />
        <rect x={25} y={8}  width={2}  height={9}  fill="#f5c97a" />

        {/* Eyes */}
        <rect x={12} y={9}  width={4}  height={3}  fill="#2c1f14" />
        <rect x={20} y={9}  width={4}  height={3}  fill="#2c1f14" />
        <rect x={12} y={9}  width={1}  height={1}  fill="#ffffff" />
        <rect x={20} y={9}  width={1}  height={1}  fill="#ffffff" />
        <rect x={13} y={10} width={2}  height={2}  fill="#3d5a40" />
        <rect x={21} y={10} width={2}  height={2}  fill="#3d5a40" />

        {/* Nose */}
        <rect x={17} y={13} width={2}  height={1}  fill="#d4a060" />

        {/* Mustache */}
        <rect x={13} y={15} width={10} height={2}  fill="#1a0f05" />
        <rect x={12} y={15} width={2}  height={1}  fill="#1a0f05" />
        <rect x={22} y={15} width={2}  height={1}  fill="#1a0f05" />
        <rect x={13} y={16} width={2}  height={1}  fill="#2c1a08" />
        <rect x={21} y={16} width={2}  height={1}  fill="#2c1a08" />
        <rect x={15} y={17} width={6}  height={1}  fill="#c08040" />

        {/* Ears */}
        <rect x={8}  y={9}  width={2}  height={4}  fill="#f5c97a" />
        <rect x={26} y={9}  width={2}  height={4}  fill="#f5c97a" />

        {/* Neck */}
        <rect x={15} y={20} width={6}  height={3}  fill="#f5c97a" />

        {/* Dark jacket */}
        <rect x={9}  y={23} width={18} height={10} fill="#353535" />

        {/* Arms resting on desk */}
        <rect x={3}  y={23} width={6}  height={9}  fill="#353535" />
        <rect x={27} y={23} width={6}  height={9}  fill="#353535" />
        <rect x={3}  y={30} width={6}  height={3}  fill="#f5c97a" />
        <rect x={27} y={30} width={6}  height={3}  fill="#f5c97a" />

        {/* Nameplate bar */}
        <rect x={0}  y={38} width={36} height={4}  fill="#5c3a1e" />
        <rect x={1}  y={39} width={34} height={2}  fill="#3d2410" />
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
            fontSize: '0.5rem',
            color: 'var(--amber2)',
            letterSpacing: 0,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          Patrick
        </p>
      </div>
    </div>
  )
}