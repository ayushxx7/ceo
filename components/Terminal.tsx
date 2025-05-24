'use client'
import { useState, useEffect } from 'react'
import {
  FaBriefcase,
  FaClipboardList,
  FaMapMarkerAlt,
  FaRobot,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const LINES = [
  { prefix: '$', text: 'welcome.sh', typing: true },
  {
    icon: null,
    prefix: '$',
    text: "Hey, I'm ",
    highlight: { text: 'Ayush Mandowara' },
    typing: true,
  },
  {
    icon: <FaBriefcase className="inline text-green-300 mr-1" />,
    prefix: '$',
    text: 'CEO, ',
    highlight: {
      text: 'The Vibe Coder',
      href: 'https://the-vibe-coder-69.github.io/www/',
    },
    typing: true,
  },
  {
    icon: <FaBriefcase className="inline text-green-300 mr-1" />,
    prefix: '$',
    text: 'Machine Learning Engineer',
    typing: true,
  },
  {
    icon: <FaRobot className="inline text-green-300 mr-1" />,
    prefix: '$',
    text: 'GenAI | NLP | Data Science | Deep Learning',
    typing: true,
  },
  {
    icon: <FaClipboardList className="inline text-green-300 mr-1" />,
    prefix: '$',
    text: 'QA Automation | Product Management | JIRA',
    typing: true,
  },
  {
    icon: <FaMapMarkerAlt className="inline text-green-300 mr-1" />,
    prefix: '$',
    text: 'New Delhi, India',
    typing: true,
  },
  {
    icon: <MdEmail className="inline text-green-300 mr-1" />,
    prefix: '$',
    text: 'ayush.mandowara.97@gmail.com',
    typing: true,
  },
]

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [showGlow, setShowGlow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentLine >= LINES.length) return

    const line = LINES[currentLine]
    const fullText = line.text + (line.highlight?.text || '')
    let currentIndex = 0
    setIsTyping(true)

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(interval)
        setTimeout(() => {
          setDisplayText('')
          setCurrentLine(prev => prev + 1)
        }, 500)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [currentLine])

  useEffect(() => {
    if (currentLine === LINES.length && !isTyping) {
      setShowGlow(true)
      const timeout = setTimeout(() => setShowGlow(false), 1000)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, isTyping])

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

      {LINES.map((line, index) => {
        const fullText = line.text + (line.highlight?.text || '')

        const lineContent = (
          <>
            {line.icon}
            {displayText}
            {line.highlight && !isTyping && (
              line.highlight.href ? (
                <a
                  href={line.highlight.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white font-semibold hover:text-green-300"
                >
                  {line.highlight.text}
                </a>
              ) : (
                <span className="text-white font-semibold">
                  {line.highlight.text}
                </span>
              )
            )}
            {isTyping && showCursor && <span className="animate-pulse">▮</span>}
          </>
        )

        return index === currentLine ? (
          <p key={index} className="text-green-400 flex items-center gap-1 text-sm sm:text-base">
            {line.prefix}&nbsp;{lineContent}
          </p>
        ) : index < currentLine ? (
          <p key={index} className="text-green-400 flex items-center gap-1 text-sm sm:text-base">
            {line.prefix}&nbsp;
            {line.icon}
            {line.text}
            {line.highlight && (
              line.highlight.href ? (
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
              )
            )}
          </p>
        ) : null
      })}
    </div>
    
  )
}
