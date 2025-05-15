'use client'
import { useState, useEffect } from 'react'

export default function Terminal() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black border border-green-500 p-6 rounded-md w-full max-w-xl shadow-xl">
      <p className="text-green-400">
        $ welcome.sh {showCursor && <span className="animate-pulse">▮</span>}
      </p>
      <div className="h-4" />
      <p className="text-green-400 text-lg flex items-center gap-2">
        $ 👋🏻 Hey, I'm <span className="text-white">Ashwin Kulkarni (^_^)</span>
      </p>
      <div className="h-2" />
      <p className="text-green-400">$ 💼 Software Engineer | Open Source Contributor </p>
      <p className="text-green-400">$ 🏎️ Full-Throttle F1 Fan | 🎮 ETS2/ATS Player </p>
      <p className="text-green-400">$ 📍 Bangalore, India </p>
    </div>
  )
}