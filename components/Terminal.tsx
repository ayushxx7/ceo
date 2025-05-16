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
  { prefix: '$ 💼', text: 'Software Engineer | 💻 Open Source Contributor', emoji: '', typing: false },
  { prefix: '$ 🏎️', text: 'Full-Throttle F1 Fan | 🎮 ETS2/ATS Player', emoji: '', typing: false },
  { prefix: '$ 🇮🇳', text: 'Bangalore, India', emoji: '', typing: false },
]

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 500)
    return () => clearInterval(interval)
  }, [])

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
          // Wait a bit before moving to next line
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
          }, 500)
        }
      }, 50)

      return () => clearInterval(interval)
    } else {
      // For non-typing lines, show them immediately
      setDisplayText(line.text)
      setIsTyping(false)
      setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 100)
    }
  }, [currentLine])

  return (
    <div className="bg-black border border-green-500 p-4 sm:p-6 rounded-md w-full max-w-xl shadow-xl">
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