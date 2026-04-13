'use client';

import Terminal from '../components/Terminal'
import { useState } from 'react';

export default function HomePage() {
  const [terminalHovered, setTerminalHovered] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-[calc(100vh-12rem)] w-full items-center justify-center">
      <h1 className="sr-only">Ayush Mandowara — Senior GenAI Consultant & Builder</h1>
      <div className="w-full flex items-center justify-center relative z-10 px-4 flex-1">
        <div
          onMouseEnter={() => setTerminalHovered(true)}
          onMouseLeave={() => setTerminalHovered(false)}
          className={`w-full max-w-xl ${terminalHovered ? 'shadow-[0_0_32px_8px_rgba(34,213,238,0.4)] transition-all duration-300 rounded-xl' : 'transition-all duration-300 rounded-xl'}`}
        >
          <Terminal />
        </div>
      </div>
    </div>
  )
}
