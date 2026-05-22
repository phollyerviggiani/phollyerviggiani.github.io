// Create a new component: components/ui/HangingPlant.tsx
export default function HangingPlant() {
  return (
    <svg width={40} height={80} viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
      {/* Hanging string */}
      <line x1={8} y1={0} x2={8} y2={8} stroke="#7c4f2a" strokeWidth={1}/>
      {/* Pot */}
      <rect x={4} y={8} width={8} height={6} fill="#c08040"/>
      <rect x={3} y={7} width={10} height={2} fill="#a06030"/>
      {/* Drooping leaves */}
      <rect x={6} y={13} width={3} height={8} fill="#4a7c4a" transform="rotate(-15, 6, 13)"/>
      <rect x={8} y={13} width={3} height={10} fill="#3a6a3a" transform="rotate(10, 8, 13)"/>
      <rect x={5} y={18} width={2} height={6} fill="#5a9c5a" transform="rotate(-25, 5, 18)"/>
      <rect x={10} y={18} width={2} height={6} fill="#4a7c4a" transform="rotate(20, 10, 18)"/>
    </svg>
  )
}