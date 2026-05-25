import PixelPortrait from '@/components/ui/PixelPortrait'

/* ── Template data ───────────────────────────────────────────────────────── */

const BIO_PARAGRAPHS = [
  `I'm a University of Toronto alumn and recent Computer Programming & Analysis graduate from Durham College. During my internship, I helped develop backend functionality for a production e-commerce application, working with databases, payment processing, automated emails, and third-party integrations. I enjoy building reliable systems and creating solutions that are both practical and maintainable.`,
]

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'C#'],
  },
  {
    category: 'frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'backend',
    items: ['Node.js + Express', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'tools',
    items: ['Git', 'Docker', 'AWS', 'Stripe', 'NocoDB'],
  },
]

const FUN_FACT =
  '"When I\'m not coding I\'m probably at the gym, playing games too hard for me, or making coffee I don\'t need."'

/* ── Component ───────────────────────────────────────────────────────────── */

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg2)',
      }}
    >
      <h2 className="section-heading">about me</h2>

      {/* Two-column grid: portrait left, content right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '1.5rem',
          alignItems: 'start',
        }}
      >
        {/* ── Left: pixel portrait ─────────────────────────── */}
        <div
          className="anim-fade-up anim-delay-1"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}
        >
          <PixelPortrait />

          {/* Small "currently" status badge under portrait */}
          <div
            style={{
              background: 'rgba(74, 124, 74, 0.12)',
              border: '1px solid var(--green)',
              padding: '0.35rem 0.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            {/* Green pulsing dot */}
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--green2)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span
              className="font-pixel"
              style={{ fontSize: '0.5rem', color: 'var(--green2)', letterSpacing: 0, lineHeight: 1 }}
            >
              open to work
            </span>
          </div>
        </div>

        {/* ── Right: bio + skills ───────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Bio paragraphs */}
          <div
            className="anim-fade-up anim-delay-2"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
          >
            {BIO_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text2)',
                  lineHeight: 1.85,
                  maxWidth: 560,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Fun fact / quote */}
          <blockquote
            className="fun-fact anim-fade-up anim-delay-3"
            style={{ maxWidth: 520 }}
          >
            {FUN_FACT}
          </blockquote>

          {/* ── Skill grid ───────────────────────────────────── */}
          <div className="anim-fade-up anim-delay-4">
            <p
              className="font-pixel"
              style={{
                fontSize: '0.57rem',
                color: 'var(--text3)',
                marginBottom: '0.85rem',
                letterSpacing: 0,
                lineHeight: 1,
              }}
            >
              {'// skills & tools'}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {SKILLS.map(({ category, items }) => (
                <SkillGroup key={category} category={category} items={items} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

function SkillGroup({ category, items }: { category: string; items: string[] }) {
  return (
    <div
      style={{
        background: 'var(--bg3)',
        border: 'var(--border-thin)',
        padding: '0.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
    >
      {/* Category label */}
      <p
        className="font-pixel"
        style={{
          fontSize: '0.57rem',
          color: 'var(--amber3)',
          letterSpacing: 0,
          lineHeight: 1,
          borderBottom: '1px solid var(--wood)',
          paddingBottom: '0.4rem',
        }}
      >
        {category}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}