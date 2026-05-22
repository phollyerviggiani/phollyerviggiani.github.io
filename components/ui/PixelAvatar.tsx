/*
  Pure SVG pixel-art avatar — no image file needed.
  Each <rect> is one "pixel" on a 16×16 grid scaled up to 72×72.
  Swap out the colours or rects to customise your character.
*/
export default function PixelAvatar() {
  const px = 4.5 // each pixel unit = 4.5px → 16 × 4.5 = 72px total

  return (
    <svg
      className="pixel"
      width={72}
      height={72}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pixel art avatar"
      role="img"
      style={{ flexShrink: 0 }}
    >
      {/* Hair */}
      <rect x={3}  y={0}  width={10} height={2}  fill="#3d2b14" />
      <rect x={4}  y={1}  width={8}  height={3}  fill="#3d2b14" />
      <rect x={3}  y={2}  width={1}  height={2}  fill="#3d2b14" />
      <rect x={12} y={2}  width={1}  height={2}  fill="#3d2b14" />

      {/* Face */}
      <rect x={4}  y={2}  width={8}  height={6}  fill="#f5c97a" />
      <rect x={3}  y={3}  width={1}  height={4}  fill="#f5c97a" />
      <rect x={12} y={3}  width={1}  height={4}  fill="#f5c97a" />

      {/* Eyes */}
      <rect x={5}  y={4}  width={2}  height={2}  fill="#2c1f14" />
      <rect x={9}  y={4}  width={2}  height={2}  fill="#2c1f14" />
      {/* Eye shine */}
      <rect x={5}  y={4}  width={1}  height={1}  fill="#ffffff" />
      <rect x={9}  y={4}  width={1}  height={1}  fill="#ffffff" />

      {/* Mouth (small smile) */}
      <rect x={6}  y={6}  width={4}  height={1}  fill="#c08040" />
      <rect x={5}  y={7}  width={1}  height={1}  fill="#c08040" />
      <rect x={10} y={7}  width={1}  height={1}  fill="#c08040" />

      {/* Body / shirt — blue like the mockup character */}
      <rect x={3}  y={8}  width={10} height={5}  fill="#5b8dd9" />
      {/* Collar detail */}
      <rect x={6}  y={8}  width={4}  height={1}  fill="#3a6bb5" />

      {/* Arms */}
      <rect x={1}  y={8}  width={2}  height={5}  fill="#5b8dd9" />
      <rect x={13} y={8}  width={2}  height={5}  fill="#5b8dd9" />

      {/* Hands */}
      <rect x={1}  y={12} width={2}  height={2}  fill="#f5c97a" />
      <rect x={13} y={12} width={2}  height={2}  fill="#f5c97a" />

      {/* Legs */}
      <rect x={4}  y={13} width={3}  height={3}  fill="#2c1f14" />
      <rect x={9}  y={13} width={3}  height={3}  fill="#2c1f14" />
    </svg>
  )
}