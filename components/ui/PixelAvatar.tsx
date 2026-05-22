/*
  Pure SVG pixel-art avatar — no image file needed.
  Updated: curly dark hair on top, mullet flowing down the back, mustache, dark jacket.
*/
export default function PixelAvatar() {
  return (
    <svg
      className="pixel"
      width={72}
      height={76}
      viewBox="0 0 32 34"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pixel art avatar"
      role="img"
      style={{ flexShrink: 0 }}
    >
      {/* Curly hair top */}
      <rect x={9}  y={0}  width={14} height={2}  fill="#1a0f05" />
      <rect x={7}  y={1}  width={18} height={3}  fill="#1a0f05" />
      <rect x={5}  y={2}  width={4}  height={3}  fill="#1a0f05" />
      <rect x={23} y={2}  width={4}  height={3}  fill="#1a0f05" />
      <rect x={6}  y={3}  width={3}  height={2}  fill="#2c1a08" />
      <rect x={23} y={3}  width={3}  height={2}  fill="#2c1a08" />
      {/* Curly tufts */}
      <rect x={9}  y={0}  width={2}  height={1}  fill="#3d2510" />
      <rect x={14} y={0}  width={2}  height={1}  fill="#3d2510" />
      <rect x={19} y={0}  width={2}  height={1}  fill="#3d2510" />

      {/* Mullet — sides and back flowing past shoulders */}
      <rect x={4}  y={5}  width={3}  height={20} fill="#1a0f05" />
      <rect x={25} y={5}  width={3}  height={20} fill="#1a0f05" />

      {/* Face */}
      <rect x={7}  y={4}  width={18} height={13} fill="#f5c97a" />
      <rect x={6}  y={5}  width={2}  height={9}  fill="#f5c97a" />
      <rect x={24} y={5}  width={2}  height={9}  fill="#f5c97a" />

      {/* Eyes — no glasses */}
      <rect x={9}  y={6}  width={4}  height={3}  fill="#2c1f14" />
      <rect x={19} y={6}  width={4}  height={3}  fill="#2c1f14" />
      <rect x={9}  y={6}  width={1}  height={1}  fill="#ffffff" />
      <rect x={19} y={6}  width={1}  height={1}  fill="#ffffff" />

      {/* Nose */}
      <rect x={15} y={11} width={2}  height={1}  fill="#d4a060" />

      {/* Mustache */}
      <rect x={12} y={13} width={8}  height={2}  fill="#1a0f05" />
      <rect x={11} y={13} width={2}  height={1}  fill="#1a0f05" />
      <rect x={19} y={13} width={2}  height={1}  fill="#1a0f05" />
      <rect x={14} y={15} width={4}  height={1}  fill="#c08040" />

      {/* Ears */}
      <rect x={4}  y={6}  width={2}  height={4}  fill="#f5c97a" />
      <rect x={26} y={6}  width={2}  height={4}  fill="#f5c97a" />

      {/* Dark jacket */}
      <rect x={5}  y={17} width={22} height={11} fill="#353535" />

      {/* Arms */}
      <rect x={1}  y={17} width={4}  height={9}  fill="#353535" />
      <rect x={27} y={17} width={4}  height={9}  fill="#353535" />

      {/* Hands */}
      <rect x={1}  y={25} width={4}  height={3}  fill="#f5c97a" />
      <rect x={27} y={25} width={4}  height={3}  fill="#f5c97a" />

      {/* Legs */}
      <rect x={8}  y={28} width={6}  height={6}  fill="#2c2c3e" />
      <rect x={18} y={28} width={6}  height={6}  fill="#2c2c3e" />
    </svg>
  )
}