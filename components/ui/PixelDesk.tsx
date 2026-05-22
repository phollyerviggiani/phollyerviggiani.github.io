/*
  A hand-crafted SVG pixel-art desk scene.
  Drawn on a 64×48 pixel grid, rendered at 2× (128×96).
  Colours pull from the CSS variable palette via hardcoded hex
  equivalents — SVG can't read CSS vars in fill attributes.

  Palette reference:
    --bg3    #2e1f12   (desk surface shadow)
    --wood2  #7c4f2a   (desk surface)
    --wood3  #a0662e   (desk edge)
    --amber  #f5c97a   (monitor glow, lamp)
    --blue   #5b8dd9   (monitor body)
    --bg4    #160e06   (monitor screen dark)
    --cream2 #e8d5b8   (mug, paper)
    --green  #4a7c4a   (plant)
*/

export default function PixelDesk() {
  return (
    <svg
      className="pixel"
      width={256}
      height={192}
      viewBox="0 0 64 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pixel art desk with monitor, books, coffee mug and plant"
      role="img"
    >
      {/* ── Desk surface ─────────────────────────────────────── */}
      <rect x={0}  y={34} width={64} height={2}  fill="#a0662e" />
      <rect x={0}  y={36} width={64} height={10} fill="#7c4f2a" />
      <rect x={0}  y={46} width={64} height={2}  fill="#5c3a1e" />

      {/* Desk surface highlight */}
      <rect x={0}  y={34} width={64} height={1}  fill="#b87838" opacity={0.5} />

      {/* ── Monitor ──────────────────────────────────────────── */}
      {/* Stand */}
      <rect x={26} y={30} width={4}  height={4}  fill="#4a6fa5" />
      {/* Base */}
      <rect x={23} y={33} width={10} height={2}  fill="#3a5a8a" />

      {/* Monitor body */}
      <rect x={14} y={10} width={28} height={22} fill="#3a6bb5" />
      {/* Bezel inset */}
      <rect x={15} y={11} width={26} height={20} fill="#2a5090" />

      {/* Screen */}
      <rect x={16} y={12} width={24} height={17} fill="#0a1a2a" />

      {/* Screen glow — code lines */}
      <rect x={17} y={14} width={14} height={1}  fill="#39d353" opacity={0.9} />
      <rect x={17} y={16} width={10} height={1}  fill="#39d353" opacity={0.7} />
      <rect x={19} y={18} width={16} height={1}  fill="#5b8dd9" opacity={0.8} />
      <rect x={19} y={20} width={12} height={1}  fill="#5b8dd9" opacity={0.6} />
      <rect x={17} y={22} width={8}  height={1}  fill="#39d353" opacity={0.9} />
      <rect x={17} y={24} width={6}  height={1}  fill="#f5c97a" opacity={0.7} />
      {/* Cursor block */}
      <rect x={23} y={24} width={2}  height={1}  fill="#f5c97a" opacity={0.9}>
        <animate
          attributeName="opacity"
          values="0.9;0;0.9"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Monitor logo dot */}
      <rect x={26} y={30} width={4}  height={1}  fill="#5b8dd9" opacity={0.4} />

      {/* ── Desk lamp ─────────────────────────────────────────── */}
      {/* Base */}
      <rect x={50} y={33} width={8}  height={1}  fill="#5c3a1e" />
      {/* Pole */}
      <rect x={53} y={24} width={2}  height={10} fill="#888070" />
      {/* Arm */}
      <rect x={46} y={22} width={8}  height={2}  fill="#888070" />
      {/* Shade */}
      <rect x={43} y={18} width={10} height={5}  fill="#c8a040" />
      <rect x={42} y={22} width={12} height={1}  fill="#a07828" />
      {/* Light cone */}
      <rect x={44} y={23} width={9}  height={1}  fill="#f5c97a" opacity={0.15} />
      <rect x={43} y={24} width={11} height={1}  fill="#f5c97a" opacity={0.10} />

      {/* ── Books (left stack) ────────────────────────────────── */}
      {/* Book 1 — tall red */}
      <rect x={2}  y={22} width={6}  height={12} fill="#c0392b" />
      <rect x={2}  y={22} width={6}  height={1}  fill="#e05040" />
      <rect x={3}  y={24} width={4}  height={1}  fill="#ffffff" opacity={0.15} />

      {/* Book 2 — medium blue */}
      <rect x={8}  y={25} width={5}  height={9}  fill="#2980b9" />
      <rect x={8}  y={25} width={5}  height={1}  fill="#3a90c9" />

      {/* Book 3 — short purple */}
      <rect x={13} y={27} width={4}  height={7}  fill="#8e44ad" />
      <rect x={13} y={27} width={4}  height={1}  fill="#9e54bd" />

      {/* ── Coffee mug ────────────────────────────────────────── */}
      {/* Body */}
      <rect x={44} y={28} width={7}  height={6}  fill="#e8d5b8" />
      <rect x={44} y={28} width={7}  height={1}  fill="#d4bc94" />
      {/* Handle */}
      <rect x={51} y={29} width={2}  height={4}  fill="none"   stroke="#d4bc94" strokeWidth={1} />
      {/* Steam */}
      <rect x={46} y={26} width={1}  height={2}  fill="#f5ead8" opacity={0.3}>
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x={48} y={25} width={1}  height={3}  fill="#f5ead8" opacity={0.2}>
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.4s" repeatCount="indefinite" />
      </rect>
      {/* Coffee label detail */}
      <rect x={45} y={30} width={5}  height={2}  fill="#c08040" opacity={0.3} />

      {/* ── Plant (small succulent) ───────────────────────────── */}
      {/* Pot */}
      <rect x={56} y={30} width={7}  height={4}  fill="#c08040" />
      <rect x={55} y={29} width={9}  height={2}  fill="#a06030" />
      {/* Soil */}
      <rect x={56} y={29} width={7}  height={1}  fill="#3d2b18" />
      {/* Leaves */}
      <rect x={57} y={24} width={3}  height={6}  fill="#4a7c4a" />
      <rect x={56} y={26} width={2}  height={4}  fill="#3a6a3a" />
      <rect x={60} y={26} width={2}  height={4}  fill="#3a6a3a" />
      <rect x={58} y={23} width={2}  height={2}  fill="#5a9c5a" />

      {/* ── Notepad (on desk) ─────────────────────────────────── */}
      <rect x={36} y={33} width={8}  height={1}  fill="#f5f0e4" />
      <rect x={36} y={33} width={8}  height={1}  fill="#e0d8c0" />
      {/* Lines on notepad */}
      <rect x={37} y={33} width={6}  height={1}  fill="#c8b898" opacity={0.4} />

      {/* ── Keyboard ──────────────────────────────────────────── */}
      <rect x={18} y={35} width={20} height={1}  fill="#4a3828" />
      <rect x={19} y={35} width={18} height={1}  fill="#5c4a38" opacity={0.7} />

      {/* ── Mouse ─────────────────────────────────────────────── */}
      <rect x={39} y={35} width={4}  height={1}  fill="#5c4a38" />
    </svg>
  )
}