import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/sidebar/Sidebar'

export const metadata: Metadata = {
  title: 'Patrick Hollyer-Viggiani · Software Engineer',
  description:
    'Portfolio of Patrick Hollyer-Viggiani — software engineer, builder of things.',
  openGraph: {
    title: 'Patrick Hollyer-Viggiani · Software Engineer',
    description: 'CPGA Grad, software engineer, builder of things.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/*
          Two-column layout:
            · Left  — fixed Sidebar (200px), never scrolls
            · Right — main content area, scrollable
        */}
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
          }}
        >
          <Sidebar />

          <main
            id="main-content"
            style={{
              flex: 1,
              minWidth: 0,           
              overflowX: 'hidden',
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}