// components/ui/StudyWindow.tsx
'use client'

export default function StudyWindow() {
  return (
    <div style={{ position: 'relative' }}>
      <style>{`
        @keyframes window-snow {
          0% { transform: translateY(-30px) translateX(0px); opacity: 0.7; }
          25% { transform: translateY(30px) translateX(2px); opacity: 0.6; }
          50% { transform: translateY(60px) translateX(-1px); opacity: 0.5; }
          75% { transform: translateY(90px) translateX(1px); opacity: 0.4; }
          100% { transform: translateY(140px) translateX(0px); opacity: 0; }
        }
        @keyframes window-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes window-glow-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .window-snowflake {
          position: absolute;
          animation: window-snow linear infinite;
        }
        .window-star-twinkle {
          animation: window-twinkle 2.5s ease-in-out infinite;
        }
        .window-star-twinkle:nth-child(2n) { animation-duration: 3.2s; animation-delay: 0.8s; }
        .window-star-twinkle:nth-child(3n) { animation-duration: 1.8s; animation-delay: 1.5s; }
        .window-lamp-glow {
          animation: window-glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <svg
        width={320}
        height={280}
        viewBox="0 0 128 112"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Night sky background - cooler for winter */}
        <rect x={0} y={0} width={128} height={112} fill="#0f1a2e" />
        
        {/* Gradient night sky overlay - wintery */}
        <rect x={0} y={0} width={128} height={112} fill="url(#nightGradient)" />
        <defs>
          <linearGradient id="nightGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1428" />
            <stop offset="60%" stopColor="#1a2a4a" />
            <stop offset="100%" stopColor="#1e3048" />
          </linearGradient>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d0e0f5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d0e0f5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lampSpill" cx="80%" cy="85%" r="50%">
            <stop offset="0%" stopColor="#f5c97a" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#f5c97a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f5c97a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Moon glow - cooler winter moon */}
        <circle cx={96} cy={24} r={20} fill="url(#moonGlow)" className="window-lamp-glow" />
        
        {/* Moon - cooler tone */}
        <circle cx={96} cy={24} r={7} fill="#dce8f5" />
        <circle cx={99} cy={22} r={6} fill="#0f1a2e" opacity={0.85} /> {/* Crescent cutout */}
        
       
        {/* Warm lamp spill overlay (from desk lamp direction) */}
        <rect x={0} y={0} width={128} height={112} fill="url(#lampSpill)" />

        {/* Continuous Snowflakes - evenly distributed across the window */}
        <circle cx={8} cy={20} r={1.2} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.2s', animationDelay: '0s' }} />
        <circle cx={18} cy={45} r={1} fill="#d0e0f0" opacity={0.6} className="window-snowflake" style={{ animationDuration: '4.0s', animationDelay: '0.8s' }} />
        <circle cx={28} cy={15} r={1.3} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <circle cx={38} cy={60} r={0.9} fill="#d8e8f8" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }} />
        <circle cx={48} cy={30} r={1.1} fill="#c8d8e8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '3.0s', animationDelay: '2.1s' }} />
        <circle cx={58} cy={70} r={1.2} fill="#d0e0f0" opacity={0.7} className="window-snowflake" style={{ animationDuration: '4.2s', animationDelay: '0.5s' }} />
        <circle cx={68} cy={25} r={1} fill="#c8d8e8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '3.8s', animationDelay: '1.2s' }} />
        <circle cx={78} cy={55} r={1.3} fill="#d8e8f8" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.8s', animationDelay: '0.1s' }} />
        <circle cx={88} cy={35} r={0.9} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.3s', animationDelay: '1.8s' }} />
        <circle cx={98} cy={65} r={1.1} fill="#d0e0f0" opacity={0.6} className="window-snowflake" style={{ animationDuration: '4.1s', animationDelay: '0.7s' }} />
        <circle cx={108} cy={40} r={1.2} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.6s', animationDelay: '2.4s' }} />
        <circle cx={118} cy={80} r={1} fill="#d8e8f8" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.3s', animationDelay: '0.9s' }} />
        
        <circle cx={12} cy={90} r={1.3} fill="#c8d8e8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '3.9s', animationDelay: '1.1s' }} />
        <circle cx={22} cy={10} r={0.9} fill="#d0e0f0" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.6s', animationDelay: '2.7s' }} />
        <circle cx={32} cy={75} r={1.1} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.1s', animationDelay: '0.4s' }} />
        <circle cx={42} cy={85} r={1.2} fill="#d8e8f8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '4.4s', animationDelay: '1.6s' }} />
        <circle cx={52} cy={20} r={1} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.7s', animationDelay: '2.2s' }} />
        <circle cx={62} cy={95} r={1.3} fill="#d0e0f0" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.7s', animationDelay: '0.2s' }} />
        <circle cx={72} cy={15} r={0.9} fill="#c8d8e8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '3.4s', animationDelay: '1.3s' }} />
        <circle cx={82} cy={100} r={1.1} fill="#d8e8f8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '4.0s', animationDelay: '2.5s' }} />
        <circle cx={92} cy={45} r={1.2} fill="#c8d8e8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '3.2s', animationDelay: '0.6s' }} />
        <circle cx={102} cy={90} r={1} fill="#d0e0f0" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.5s', animationDelay: '1.9s' }} />
        <circle cx={112} cy={50} r={1.3} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.8s', animationDelay: '2.8s' }} />
        <circle cx={25} cy={55} r={1.1} fill="#d8e8f8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '4.2s', animationDelay: '0.8s' }} />
        <circle cx={55} cy={10} r={1.2} fill="#c8d8e8" opacity={0.7} className="window-snowflake" style={{ animationDuration: '3.5s', animationDelay: '1.4s' }} />
        <circle cx={85} cy={75} r={0.9} fill="#d0e0f0" opacity={0.5} className="window-snowflake" style={{ animationDuration: '4.8s', animationDelay: '2.0s' }} />
        <circle cx={105} cy={30} r={1} fill="#c8d8e8" opacity={0.6} className="window-snowflake" style={{ animationDuration: '3.0s', animationDelay: '0.3s' }} />

        {/* Window frame - wooden */}
        <rect x={0} y={0} width={128} height={112} fill="none" stroke="#7c4f2a" strokeWidth={4} rx={2} />
        
        {/* Window cross bars */}
        <rect x={63} y={4} width={3} height={104} fill="#7c4f2a" />
        <rect x={4} y={55} width={120} height={3} fill="#7c4f2a" />
        
        {/* Inner frame shadows for depth */}
        <rect x={0} y={0} width={128} height={2} fill="#a0662e" opacity={0.5} />
        <rect x={0} y={0} width={2} height={112} fill="#a0662e" opacity={0.5} />
        
        {/* Snow dusting on window sill */}
        <rect x={-2} y={106} width={132} height={3} fill="#c8d8e8" opacity={0.6} />
        
        {/* Window sill */}
        <rect x={-2} y={108} width={132} height={6} fill="#a0662e" />
        <rect x={-2} y={108} width={132} height={2} fill="#c08040" />
        <rect x={-2} y={112} width={132} height={2} fill="#5c3a1e" />
      </svg>
    </div>
  )
}