// Create a new component: components/ui/StudyCat.tsx
export default function StudyCat() {
  return (
    <svg width={64} height={64} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x={6} y={12} width={12} height={8} fill="#2c1f14"/>
      {/* Head */}
      <rect x={8} y={6} width={8} height={6} fill="#2c1f14"/>
      {/* Ears */}
      <rect x={6} y={4} width={4} height={4} fill="#2c1f14"/>
      <rect x={14} y={4} width={4} height={4} fill="#2c1f14"/>
      {/* Inner ears */}
      <rect x={7} y={5} width={2} height={2} fill="#d4873a"/>
      <rect x={15} y={5} width={2} height={2} fill="#d4873a"/>
      {/* Eyes */}
      <rect x={10} y={8} width={2} height={2} fill="#f5c97a"/>
      <rect x={12} y={8} width={2} height={2} fill="#f5c97a"/>
      {/* Tail */}
      <rect x={18} y={14} width={4} height={2} fill="#2c1f14" transform="rotate(20, 18, 14)"/>
      {/* Whiskers */}
      <rect x={4} y={10} width={4} height={1} fill="#d4bc94"/>
      <rect x={16} y={10} width={4} height={1} fill="#d4bc94"/>
    </svg>
  )
}