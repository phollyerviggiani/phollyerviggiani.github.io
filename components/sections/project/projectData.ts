export interface Project {
  id:          string
  title:       string
  spine:       string        /* short label shown on the book spine */
  color:       string        /* book cover colour (hex) */
  spineLight:  string        /* lighter shade for spine top highlight */
  year:        string
  description: string
  tags:        string[]
  github:      string | null /* null = private */
  demo:        string | null /* null = no live demo */
  highlights:  string[]      /* 2–3 bullet points shown in expanded panel */
}

export const PROJECTS: Project[] = [
  {
    id:          'alpha',
    title:       'Nowen',
    spine:       'Nowen',
    color:       '#A7BDFF',
    spineLight:  '#9198f3',
    year:        '2026',
    description:
      'A full-stack web app for ordering custom t-shirts. Built during my internship. Includes Stripe integration, tech-pack generation, and automatic email notification via Mailgun.',
    tags:        ['Next.js', 'React', 'Supabase', 'Typescript'],
    github:      null, 
    demo:        null,
    highlights: [
      'Multiple fabric and thread option update in real-time with the page',
      'Heavy emphasis on UI/UX, seamless transitions and aethetic visuals',
      'Deployed on DigitalOcean App Platform',
    ],
  },
  {
    id:          'beta',
    title:       'Bakery Operations Management System',
    spine:       'Aunt Rosie',
    color:       '#EBB44D',
    spineLight:  '#DE9E36',
    year:        '2026',
    description:
      'A web app for managing inventory, orders, and deliveries at a bakery. Built to replace a legacy system. Features real-time inventory tracking, analytics dashboard, and admin pannel for managing products and orders.',
    tags:        ['JavaScript', 'Next.js', 'Supabase'],
    github:      'https://github.com/phollyerviggiani/AuntRosieBakery',
    demo:        null,
    highlights: [
      'Real-time inventory tracking',
      'Analytics dashboard for performance insights',
      'Admin panel for managing products and orders',
    ],
  },
  {
    id:          'gamma',
    title:       'AthleteGuard',
    spine:       'AthleteGuard',
    color:       '#985cb3',
    spineLight:  '#7f4e94',
    year:        '2026',
    description:
      'A web app for monitoring and preventing athlete injuries. Uses ACWR (Acute:Chronic Workload Ratio) to track training load and provide insights on injury risk. Features a dashboard for coaches and athletes to monitor workload and receive recommendations.',
    tags:        ['Java', 'Spring Boot', 'PostgreSQL'],
    github:      'https://github.com/phollyerviggiani/AthleteGuard',
    demo:        null,
    highlights: [
      'ACWR-based injury risk monitoring',
      'Dashboard for coaches and athletes to monitor workload',
      'Recommendations for injury prevention based on workload data',
    ],
  }
]