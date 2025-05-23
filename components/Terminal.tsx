'use client'
import { useState, useEffect } from 'react'

const LINES = [
  { prefix: '$', text: 'welcome.sh', emoji: '', typing: true },
  { prefix: '', text: '', emoji: '', typing: false },
  { 
    prefix: '$ 👋🏻', 
    text: "Hey, I'm ", 
    emoji: '', 
    typing: false,
    highlight: { text: 'Ayush Mandowara', suffix: '' }
  },
  { 
    prefix: '$ 💼', 
    text: 'CEO, ', 
    emoji: '', 
    typing: false,
    highlight: { 
      text: 'The Vibe Coder', 
      suffix: '', 
      href: 'https://the-vibe-coder-69.github.io/www/' 
    }
  },
  { prefix: '$ 💼', text: 'Machine Learning Engineer', emoji: '', typing: false },
  { prefix: '$ 🤖', text: 'GenAI | NLP | Data Science | Deep Learning', emoji: '', typing: false },
  { prefix: '$ 🛠️', text: 'QA Automation | Product Management | JIRA', emoji: '', typing: false },
  { prefix: '$ 🌏', text: 'New Delhi, India', emoji: '', typing: false },
  { prefix: '$ ✉️', text: 'ayush.mandowara.97@gmail.com', emoji: '', typing: false },
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

  // Typing effect and glow
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

  // Glow effect after last line
  useEffect(() => {
    if (currentLine === LINES.length - 1 && !isTyping) {
      setShowGlow(true)
      const timeout = setTimeout(() => {
        setShowGlow(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, isTyping])

  // Dynamic shadow for glow
  let dynamicShadow = ''
  if (showGlow) {
    dynamicShadow = '0 0 32px 8px rgba(34,213,238,0.4)'
  } else if (currentLine > 0 && currentLine < LINES.length) {
    const progress = currentLine / (LINES.length - 1)
    const blur = 16 + 16 * progress
    const spread = 2 + 6 * progress
    const alpha = 0.15 + 0.25 * progress
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
                  {line.highlight.href ? (
                    <a
                      href={line.highlight.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white font-semibold hover:text-green-300"
                    >
                      {line.highlight.text}
                    </a>
                  ) : (
                    <span className="text-white font-semibold">{line.highlight.text}</span>
                  )}
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
                  {line.highlight.href ? (
                    <a
                      href={line.highlight.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white font-semibold hover:text-green-300"
                    >
                      {line.highlight.text}
                    </a>
                  ) : (
                    <span className="text-white font-semibold">{line.highlight.text}</span>
                  )}
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