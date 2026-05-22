// Create a new component: components/ui/StudyWindow.tsx
export default function StudyWindow() {
  return (
    <svg width={80} height={100} viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      {/* Window frame */}
      <rect x={2} y={2} width={28} height={36} fill="#1a3a5c" stroke="#7c4f2a" strokeWidth={2}/>
      {/* Window cross */}
      <rect x={15} y={2} width={2} height={36} fill="#7c4f2a"/>
      <rect x={2} y={19} width={28} height={2} fill="#7c4f2a"/>
      {/* Curtains */}
      <rect x={4} y={4} width={6} height={15} fill="#8e44ad" opacity={0.6}/>
      <rect x={22} y={4} width={6} height={15} fill="#8e44ad" opacity={0.6}/>
      {/* Moon */}
      <circle cx={24} cy={10} r={3} fill="#f5c97a"/>
      {/* Stars */}
      <circle cx={10} cy={8} r={0.5} fill="#ffffff"/>
      <circle cx={14} cy={12} r={0.5} fill="#ffffff"/>
      {/* Window sill */}
      <rect x={0} y={38} width={32} height={2} fill="#a0662e"/>
    </svg>
  )
}