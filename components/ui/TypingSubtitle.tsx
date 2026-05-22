'use client'

import { useEffect, useState } from 'react'

interface TypingSubtitleProps {
  /** The full string to type out */
  text: string
  /** Delay before typing starts (ms). Default 600 */
  startDelay?: number
  /** Time between each character (ms). Default 55 */
  speed?: number
}

export default function TypingSubtitle({
  text,
  startDelay = 600,
  speed = 55,
}: TypingSubtitleProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone]           = useState(false)

  useEffect(() => {
    let charIndex = 0
    let interval: ReturnType<typeof setInterval>

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        charIndex += 1
        setDisplayed(text.slice(0, charIndex))

        if (charIndex >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, startDelay, speed])

  return (
    <p
      className="font-pixel"
      style={{
        fontSize: '0.5rem',
        color: 'var(--blue3)',
        lineHeight: 2.2,
        letterSpacing: 0,
        /* Reserve full height so layout doesn't shift while typing */
        minHeight: '1.5rem',
      }}
      aria-label={text}
    >
      {displayed}
      {/* Blinking cursor — hides once typing is complete */}
      <span
        style={{
          display: 'inline-block',
          width: 8,
          height: '0.75em',
          background: 'var(--blue3)',
          marginLeft: 2,
          verticalAlign: 'middle',
          animation: done ? 'cursor-blink 1s step-end infinite' : 'none',
          opacity: done ? undefined : 1,
        }}
        aria-hidden="true"
      />
    </p>
  )
}