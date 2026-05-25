'use client'
/*
  Awake pixel cat — ginger/tan fur so it pops against dark brown backgrounds.
  Animated "meow!" and gently swaying tail with natural blinking. Rendered at 192×192.
*/
export default function AwakeCat() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }} aria-label="Awake cat" role="img">
      <style>{`
        @keyframes meow-float {
          0%   { transform: translateY(0px); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(-18px); opacity: 0; }
        }
        @keyframes tail-sway {
          0%, 100% { transform: rotate(-10deg); }
          50%       { transform: rotate(10deg); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); opacity: 1; }
          95% { transform: scaleY(0.1); opacity: 0.3; }
        }
        @keyframes mouth-open {
          0%, 100% { transform: scaleY(0); opacity: 0; }
          5%, 15% { transform: scaleY(1); opacity: 1; }
        }
        .cat-meow { 
          animation: meow-float 10s ease-in-out infinite; 
          animation-delay: 0s;
        }
        .cat-tail { 
          transform-origin: 2px 4px; 
          animation: tail-sway 3s ease-in-out infinite; 
        }
        .cat-eye-left {
          animation: blink 7s ease-in-out infinite;
          transform-origin: 6.5px 17.5px;
        }
        .cat-eye-right {
          animation: blink 7s ease-in-out infinite;
          transform-origin: 10.5px 17.5px;
        }
        .cat-mouth {
          animation: mouth-open 10s ease-in-out infinite;
          transform-origin: 8px 20px;
        }
      `}</style>

      <svg
        width={192}
        height={192}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* MEOW — animated floating text */}
        <g className="cat-meow">
          <text x={18} y={8} fontSize={4} fill="#ffffff" fontFamily="monospace" fontWeight="bold">meow!</text>
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

        {/* Eyes open — blinking naturally */}
        <g className="cat-eye-left">
          <rect x={5} y={16.8} width={1.5} height={1.5} fill="#5c3010" rx={0.3} />
        </g>
        <g className="cat-eye-right">
          <rect x={9} y={16.8} width={1.5} height={1.5} fill="#5c3010" rx={0.3} />
        </g>

        {/* Nose */}
        <rect x={7}  y={19} width={2}  height={1}  fill="#e8937a" />

        {/* Mouth — opens when meowing */}
        <g className="cat-mouth">
          <path d="M 7 20.5 Q 8 21.5 9 20.5" stroke="#5c3010" strokeWidth={0.5} fill="none" />
        </g>

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