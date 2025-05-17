'use client'
import { useState, useEffect } from 'react'

const LINES = [
  { prefix: '$', text: 'welcome.sh', emoji: '', typing: true },
  { prefix: '', text: '', emoji: '', typing: false },
  { 
    prefix: '$ 👋🏻', 
    text: 'Hey, I\'m ', 
    emoji: '', 
    typing: false,
    highlight: { text: 'Ashwin Kulkarni', suffix: ' (^_^)' }
  },
  { prefix: '$ 💼', text: 'Software Engineer', emoji: '', typing: false },
  { prefix: '$ 💻', text: 'Open Source Contributor', emoji: '', typing: false },
  { prefix: '$ 🏎️', text: 'Full-Throttle F1 Fan', emoji: '', typing: false },
  { prefix: '$ 🎮', text: 'ETS2/ATS Player', emoji: '', typing: false },
  { prefix: '$ 🇮🇳', text: 'Bangalore, India', emoji: '', typing: false },
]

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [showGlow, setShowGlow] = useState(false)

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 500)
    return () => clearInterval(interval)
  }, [])

  // Trigger bright glow after the last line is displayed
  useEffect(() => {
    if (currentLine === LINES.length - 1 && !isTyping) {
      setShowGlow(true)
      const timeout = setTimeout(() => {
        setShowGlow(false)
      }, 1000) // Bright glow for 1 second
      return () => clearTimeout(timeout)
    }
  }, [currentLine, isTyping])

  // Typing effect
  useEffect(() => {
    if (currentLine >= LINES.length) return

    const line = LINES[currentLine]
    if (line.typing) {
      let currentIndex = 0
      setIsTyping(true)

      const interval = setInterval(() => {
        if (currentIndex <= line.text.length) {
          setDisplayText(line.text.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(interval)
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
          }, 500)
        }
      }, 50)

      return () => clearInterval(interval)
    } else {
      setDisplayText(line.text)
      setIsTyping(false)
      setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 100)
    }
  }, [currentLine])

  // Calculate dynamic shadow for gradual glow
  let dynamicShadow = ''
  if (showGlow) {
    dynamicShadow = '0 0 32px 8px rgba(34,213,238,0.4)'
  } else if (currentLine > 0 && currentLine < LINES.length) {
    // Progress from subtle to bright
    const progress = currentLine / (LINES.length - 1)
    // Interpolate shadow size and opacity
    const blur = 16 + 16 * progress // 16px to 32px
    const spread = 2 + 6 * progress // 2px to 8px
    const alpha = 0.15 + 0.25 * progress // 0.15 to 0.4
    dynamicShadow = `0 0 ${blur}px ${spread}px rgba(34,213,238,${alpha})`
  }

  return (
    <div
      className={`bg-black border border-green-500 p-4 sm:p-6 rounded-md w-full max-w-xl shadow-xl transition-all duration-500 hover:shadow-[0_0_32px_8px_rgba(34,213,238,0.4)]`}
      style={dynamicShadow ? { boxShadow: dynamicShadow } : {}}
    >
      {LINES.map((line, index) => (
        <div key={index}>
          {index === currentLine ? (
            <p className={`text-green-400 ${index === 2 ? 'text-sm sm:text-lg' : 'text-xs sm:text-base'} flex items-center gap-2`}>
              {line.prefix} {displayText}
              {line.highlight && (
                <>
                  <span className="text-white font-semibold">{line.highlight.text}</span>
                  {line.highlight.suffix}
                </>
              )}
              {isTyping && showCursor && <span className="animate-pulse">▮</span>}
            </p>
          ) : index < currentLine ? (
            <p className={`text-green-400 ${index === 2 ? 'text-sm sm:text-lg' : 'text-xs sm:text-base'} flex items-center gap-2`}>
              {line.prefix} {line.text}
              {line.highlight && (
                <>
                  <span className="text-white font-semibold">{line.highlight.text}</span>
                  {line.highlight.suffix}
                </>
              )}
            </p>
          ) : null}
          {index < LINES.length - 1 && index < currentLine && <div className="h-2" />}
        </div>
      ))}
    </div>
  )
}