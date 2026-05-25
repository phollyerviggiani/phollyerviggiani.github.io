'use client'
/*
  Pixel-art cozy desk scene for the contact section right column.
  Includes: book stack, steaming mug, flickering candle, potted plant.
  All sitting on a wooden desk surface.
*/
export default function ContactDeskScene() {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <style>{`
        @keyframes contact-steam1 {
          0%,100% { transform: translateY(0) scaleX(1); opacity: 0.5; }
          50%      { transform: translateY(-6px) scaleX(1.3); opacity: 0.2; }
        }
        @keyframes contact-steam2 {
          0%,100% { transform: translateY(0) scaleX(1); opacity: 0.35; }
          50%      { transform: translateY(-8px) scaleX(0.8); opacity: 0.1; }
        }
        @keyframes contact-flame {
          0%,100% { transform: scaleX(1) scaleY(1); opacity: 1; }
          50%     { transform: scaleX(0.98) scaleY(1.02); opacity: 0.95; }
        }
        @keyframes contact-glow {
          0%,100% { opacity: 0.18; }
          50%     { opacity: 0.22; }
        }
        .cds-steam-a { animation: contact-steam1 2.2s ease-in-out infinite; transform-origin: center bottom; }
        .cds-steam-b { animation: contact-steam2 2.2s ease-in-out infinite 0.7s; transform-origin: center bottom; }
        .cds-flame   { animation: contact-flame 1.2s ease-in-out infinite alternate; transform-origin: center bottom; }
        .cds-glow    { animation: contact-glow 2s ease-in-out infinite; }
      `}</style>

      <svg
        width={200}
        height={180}
        viewBox="0 0 52 46"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Desk surface */}
        <rect x={0}  y={30} width={52} height={4}  fill="#6b3f1e" />
        <rect x={0}  y={30} width={52} height={1}  fill="#7c4f2a" />
        <rect x={0}  y={34} width={52} height={12} fill="#5c3a1e" />

        {/* Potted plant - behind books */}
        <rect x={2} y={23} width={12} height={10} fill="#8b4513" rx={1} />
        <rect x={2} y={23} width={12} height={2}  fill="#a0571a" />
        <rect x={1} y={32} width={14} height={2}  fill="#7c3f10" rx={1} />
        <rect x={3} y={25} width={10} height={3}  fill="#3d2410" />
        {/* Stem */}
        <rect x={7} y={14} width={2}  height={12} fill="#3a6b1a" />
        {/* Leaves */}
        <rect x={-1} y={20} width={8}  height={4}  fill="#4a8a20" rx={3} />
        <rect x={9} y={16} width={8}  height={4}  fill="#3a7a18" rx={3} />
        <rect x={0} y={12} width={7}  height={4}  fill="#5a9a28" rx={3} />
        <rect x={9} y={9}  width={7}  height={4}  fill="#4a8a20" rx={3} />
        <rect x={3} y={6}  width={6}  height={8}  fill="#5aaa2a" rx={3} />
        {/* Leaf veins */}
        <rect x={2} y={22} width={4}  height={1}  fill="#3a6b1a" opacity={0.5} />
        <rect x={10} y={18} width={4}  height={1}  fill="#2a5a10" opacity={0.5} />

        {/* Book stack */}
        <rect x={2}  y={18} width={14} height={4}  fill="#2980b9" />
        <rect x={2}  y={22} width={14} height={1}  fill="#1a5a8a" />
        <rect x={1}  y={23} width={15} height={5}  fill="#c0392b" />
        <rect x={1}  y={28} width={15} height={1}  fill="#8a1a1a" />
        <rect x={2}  y={24} width={6}  height={3}  fill="#d45a4a" opacity={0.4} />
        <rect x={0}  y={29} width={16} height={2}  fill="#8e44ad" />
        <rect x={0}  y={31} width={16} height={1}  fill="#5c2a7a" />

        {/* Mug — steam */}
        <rect className="cds-steam-a" x={22} y={6}  width={2} height={5} fill="#e8dcc8" rx={1} />
        <rect className="cds-steam-b" x={27} y={4}  width={2} height={7} fill="#e8dcc8" rx={1} />
        <rect className="cds-steam-a" x={32} y={6}  width={2} height={5} fill="#e8dcc8" rx={1} />
        {/* Mug body - repositioned to sit on desk (y=30 is desk top) */}
        <rect x={20} y={15} width={18} height={15} fill="#d4bc94" rx={2} />
        <rect x={22} y={17} width={14} height={5}  fill="#3d1f0a" />
        <rect x={23} y={17} width={4}  height={2}  fill="#6b3a18" opacity={0.6} />
        {/* Handle */}
        <rect x={38} y={19} width={3}  height={6}  fill="#b09070" rx={1} />
        <rect x={37} y={20} width={2}  height={4}  fill="#c8a880" />
        {/* Base + stripe */}
        <rect x={19} y={29} width={20} height={2}  fill="#b09070" rx={1} />
        <rect x={20} y={25} width={18} height={2}  fill="#c8a880" opacity={0.4} />

        {/* Candle — glow */}
        <ellipse className="cds-glow" cx={44} cy={8}  rx={5} ry={4} fill="#f5c97a" opacity={0.18} />
        {/* Flame - smoother movement */}
        <g className="cds-flame">
          <rect x={42} y={3}  width={4} height={7} fill="#e8a020" rx={2} />
          <rect x={43} y={2}  width={2} height={5} fill="#f5e060" rx={1} />
        </g>
        {/* Wick */}
        <rect x={43} y={9}  width={2} height={3}  fill="#4a3020" />
        {/* Wax drip */}
        <rect x={40} y={12} width={8} height={3}  fill="#f5ead8" rx={1} />
        <rect x={46} y={13} width={2} height={4}  fill="#f5ead8" rx={1} />
        {/* Candle body - repositioned to sit on desk */}
        <rect x={40} y={15} width={8} height={15} fill="#f5ead8" />
        <rect x={41} y={15} width={1} height={15} fill="rgba(0,0,0,0.05)" />
        <rect x={43} y={15} width={1} height={15} fill="rgba(0,0,0,0.04)" />
        <rect x={45} y={15} width={1} height={15} fill="rgba(0,0,0,0.03)" />
        {/* Holder */}
        <rect x={38} y={30} width={12} height={3}  fill="#7c4f2a" rx={1} />

        {/* Desk edge shadow */}
        <rect x={0}  y={34} width={52} height={2}  fill="rgba(0,0,0,0.2)" />
      </svg>
    </div>
  )
}