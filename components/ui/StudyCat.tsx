'use client'
/*
  Sleeping pixel cat — ginger/tan fur so it pops against dark brown backgrounds.
  Animated ZZZ and gently swaying tail. Rendered at 192×192.
*/
export default function StudyCat() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }} aria-label="Sleeping cat" role="img">
      <style>{`
        @keyframes zzz-float {
          0%   { transform: translateY(0px); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(-18px); opacity: 0; }
        }
        @keyframes tail-sway {
          0%, 100% { transform: rotate(-10deg); }
          50%       { transform: rotate(10deg); }
        }
        .cat-z1 { animation: zzz-float 2.4s ease-in-out infinite; animation-delay: 0s; }
        .cat-z2 { animation: zzz-float 2.4s ease-in-out infinite; animation-delay: 0.8s; }
        .cat-z3 { animation: zzz-float 2.4s ease-in-out infinite; animation-delay: 1.6s; }
        .cat-tail { transform-origin: 2px 4px; animation: tail-sway 3s ease-in-out infinite; }
      `}</style>

      <svg
        width={192}
        height={192}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ZZZ — staggered, floating upward */}
        <g className="cat-z1">
          <text x={22} y={7}  fontSize={3} fill="#ffffff" fontFamily="monospace" fontWeight="bold">z</text>
        </g>
        <g className="cat-z2">
          <text x={24.5} y={5} fontSize={4} fill="#ffffff" fontFamily="monospace" fontWeight="bold">z</text>
        </g>
        <g className="cat-z3">
          <text x={27} y={3}  fontSize={5} fill="#ffffff" fontFamily="monospace" fontWeight="bold">z</text>
        </g>

        {/* Body — ginger fur */}
        <rect x={4}  y={17} width={18} height={10} fill="#c97a3a" rx={5} />
        <rect x={18} y={20} width={6}  height={7}  fill="#c97a3a" rx={3} />
        {/* Belly — lighter patch */}
        <rect x={6}  y={19} width={10} height={6}  fill="#e8b87a" rx={3} />
        {/* Subtle tabby stripe markings */}
        <rect x={8}  y={20} width={6}  height={1}  fill="#a05e28" opacity={0.5} />
        <rect x={8}  y={22} width={5}  height={1}  fill="#a05e28" opacity={0.4} />

        {/* Head — resting sideways on body */}
        <rect x={3}  y={14} width={10} height={8}  fill="#c97a3a" rx={3} />

        {/* Ears — smaller and less pointy */}
        {/* Left ear */}
        <polygon points="3.7,15 5,11.5 6.3,15" fill="#c97a3a" />
        {/* Right ear */}
        <polygon points="9.7,15 11,11.5 12.3,15" fill="#c97a3a" />
        {/* Inner ears — pink */}
        <polygon points="4.5,15 5,12.5 5.5,15" fill="#e8937a" />
        <polygon points="10.5,15 11,12.5 11.5,15" fill="#e8937a" />

        {/* Eyes closed — sleepy lines */}
        <rect x={4.4}  y={17} width={3}  height={1}  fill="#5c3010" rx={0.5} />
        <rect x={8.4} y={17} width={3}  height={1}  fill="#5c3010" rx={0.5} />

        {/* Nose */}
        <rect x={7}  y={19} width={2}  height={1}  fill="#e8937a" />

        {/* Whiskers — light, visible against dark bg */}
        <rect x={1}  y={19} width={4}  height={1}  fill="#f5e8d0" opacity={0.8} />
        <rect x={1}  y={21} width={3}  height={1}  fill="#f5e8d0" opacity={0.6} />
        <rect x={11.5} y={19} width={4}  height={1}  fill="#f5e8d0" opacity={0.8} />
        <rect x={11.5} y={21} width={3}  height={1}  fill="#f5e8d0" opacity={0.6} />

        {/* Tail — swaying gently */}
        <g className="cat-tail">
          <rect x={20} y={22} width={8}  height={3}  fill="#c97a3a" rx={1.5} />
          <rect x={25} y={20} width={3}  height={5}  fill="#c97a3a" rx={1.5} />
          <rect x={22} y={24} width={6}  height={3}  fill="#c97a3a" rx={1.5} />
        </g>

        {/* Paws — lighter so they read clearly */}
        <rect x={5}  y={25} width={5}  height={3}  fill="#e8b87a" rx={1.5} />
        <rect x={11} y={25} width={5}  height={3}  fill="#e8b87a" rx={1.5} />
      </svg>
    </div>
  )
}