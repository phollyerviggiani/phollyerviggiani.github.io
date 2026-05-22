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
    title:       'ReadShelf',
    spine:       'ReadShelf',
    color:       '#c0392b',
    spineLight:  '#e05040',
    year:        '2024',
    description:
      'A full-stack web app for tracking your reading list. Built during my internship as a side project. Includes OAuth login, shelf management, and reading stats.',
    tags:        ['React', 'Node.js', 'PostgreSQL', 'Auth0'],
    github:      'https://github.com/phollyerviggiani/readshelf',
    demo:        'https://readshelf.example.com',
    highlights: [
      'OAuth 2.0 login via Auth0 with session persistence',
      'Reading stats dashboard with monthly progress charts',
      'Deployed on Railway with a managed Postgres instance',
    ],
  },
  {
    id:          'beta',
    title:       'Scaffold CLI',
    spine:       'Scaffold',
    color:       '#2980b9',
    spineLight:  '#3a90c9',
    year:        '2024',
    description:
      'A lightweight CLI tool for scaffolding Next.js projects with opinionated defaults. Generates pages, components, and API routes from a config file.',
    tags:        ['TypeScript', 'Node.js', 'CLI'],
    github:      'https://github.com/phollyerviggiani/scaffold-cli',
    demo:        null,
    highlights: [
      'Interactive prompt-based setup with sensible defaults',
      'Supports custom templates via a local .scaffoldrc file',
      'Published on npm — 200+ downloads in first month',
    ],
  },
  {
    id:          'gamma',
    title:       'Summarise',
    spine:       'Summarise',
    color:       '#8e44ad',
    spineLight:  '#9e54bd',
    year:        '2023',
    description:
      'Browser extension that summarises long web articles using a local LLM. No data leaves your machine. Built with Manifest V3 and WebAssembly.',
    tags:        ['JavaScript', 'WebAssembly', 'Chrome API'],
    github:      'https://github.com/phollyerviggiani/summarise',
    demo:        null,
    highlights: [
      '100% local inference — zero network calls to external APIs',
      'WebAssembly WASM build of a quantised LLM (~40 MB)',
      'Manifest V3 compliant, listed on Chrome Web Store',
    ],
  },
  {
    id:          'delta',
    title:       'Dotfiles',
    spine:       'Dotfiles',
    color:       '#27ae60',
    spineLight:  '#37be70',
    year:        '2023',
    description:
      'A dead-simple dotfile manager written in Python. Symlinks configs across machines and tracks changes with git. My most-used personal tool.',
    tags:        ['Python', 'Bash', 'Git'],
    github:      'https://github.com/phollyerviggiani/dotfiles',
    demo:        null,
    highlights: [
      'Single-command bootstrap on a fresh machine',
      'Profile system for work vs personal config sets',
      'Hooks for pre/post-sync scripts (e.g. reload tmux)',
    ],
  },
  {
    id:          'epsilon',
    title:       'Whiteboard',
    spine:       'Whiteboard',
    color:       '#e67e22',
    spineLight:  '#f68e32',
    year:        '2023',
    description:
      'Real-time collaborative whiteboard built for a university course project. WebSocket backend, canvas drawing, and shared cursor positions.',
    tags:        ['WebSockets', 'Canvas API', 'Express', 'React'],
    github:      'https://github.com/phollyerviggiani/whiteboard',
    demo:        'https://whiteboard.example.com',
    highlights: [
      'Sub-100ms latency on shared canvas events via Socket.io',
      'Cursor presence indicators for all connected users',
      'Course project — graded 94/100',
    ],
  },
  {
    id:          'zeta',
    title:       'Tinygen',
    spine:       'Tinygen',
    color:       '#16a085',
    spineLight:  '#26b095',
    year:        '2022',
    description:
      'A tiny static site generator I built to learn Rust. Parses markdown, applies Jinja-style templates, and spits out HTML. Faster than you\'d expect.',
    tags:        ['Rust', 'Markdown', 'CLI'],
    github:      'https://github.com/phollyerviggiani/tinygen',
    demo:        null,
    highlights: [
      'Builds 500 pages in under 80ms on a mid-range laptop',
      'Custom Jinja-style template engine, ~600 lines of Rust',
      'First Rust project — learned ownership the hard way',
    ],
  },
]