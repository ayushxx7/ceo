'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

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
    text: 'Senior GenAI Consultant, ',
    emoji: '',
    typing: false,
    highlight: {
      text: 'Virtusa (UHG)',
      suffix: '',
      href: ''
    }
   },
  {
    prefix: '$ 👑',
    text: 'The Vibe Coder — CEO: ',
    emoji: '',
    typing: false,
    highlight: {
      text: 'Kritika Maheshwari',
      suffix: '',
      href: 'https://the-vibe-coder-69.github.io/www/'
    }
   },
  { prefix: '$ 📊', text: '7+ years experience', emoji: '', typing: false },
  { prefix: '$ 🤖', text: 'GenAI | LLMs | Agentic AI | RAG | NLP', emoji: '', typing: false },
  { prefix: '$ 🛠️', text: 'Python | AWS | GCP | Kubernetes | CrewAI', emoji: '', typing: false },
  { prefix: '$ 🌏', text: 'New Delhi, India', emoji: '', typing: false },
  { prefix: '$ ✉️', text: 'ayushxx7@gmail.com', emoji: '', typing: false },
]

// Easter egg responses
const EASTER_EGGS: Record<string, string> = {
  'help': '🔍 Try: about, experience, projects, accomplishments, shelf, skills, contact, hire, coffee, matrix, sudo, clear',
  'skills': '🛠️ Core Skills:\n  GenAI, LLMs, RAG, NLP\n  Python, AWS, GCP, Kubernetes, CrewAI',
  'about': '📄 Navigating to /about...',
  'experience': '💼 Navigating to /experience...',
  'projects': '🚀 Navigating to /projects...',
  'accomplishments': '🏆 Navigating to /accomplishments...',
  'shelf': '📚 Navigating to /shelf...',
  'contact': '📧 ayushxx7@gmail.com | GitHub: @ayushxx7 | LinkedIn: /in/ayush-mandowara',
  'hire': '🤝 I\'m available! Email ayushxx7@gmail.com for GenAI consulting.',
  'coffee': '☕ The Vibe Coder runs on coffee and GPUs. Both are currently depleted.',
  'matrix': '🟢 There is no spoon. There is only the terminal.',
  'sudo': '🔐 Nice try! You don\'t have root access here. 😎',
  'ls': '📁 about/  experience/  projects/  accomplishments/  shelf/\nNavigating to /projects...',
  'whoami': '👤 You\'re a curious visitor browsing Ayush Mandowara\'s portfolio!',
  'uname -a': '🖥️ PortfolioOS v7.0.0 (GenAI Kernel) arm64 MacBookPro',
  'date': `📅 ${new Date().toLocaleString()}`,
  'echo': '🔁 echo echo echo... (this is recursion, run!)',
  'exit': '🚪 There is no escape. The portfolio is eternal. (Or just close the tab.)',
  'rm -rf /': '⚠️ Nice try! This portfolio is immutable. Like my love for clean code.',
  'ping': '🏓 pong! Latency: 42ms (the answer to everything)',
  'neofetch': '🖥️ ayush@portfolio\n  OS: PortfolioOS 7.0\n  Shell: welcome.sh\n  Theme: Matrix Green\n  Terminal: Vibecoder v1.0',
  'cat': '📂 Usage: cat <file>\n  Try: cat about.txt → /about\n  Try: cat skills.json → skills section\n  Try: cat career.log → /experience',
  'vim': '📝 Welcome to VIM!\n  :q — to exit\n  :q! — to exit without saving\n  :wq — to save and exit\n  jk — just kidding, you can\'t exit vim either way. 🤣',
  'vi': '📝 vi is vim. You still can\'t exit. 🤣',
  'nano': '📝 Nano? Real terminal users use vim. (But you still can\'t exit.)',
  'npm install': '📦 Installing world domination... Done! (Just kidding, this is a static site)',
  'python': '🐍 import fame; import fortune; print("Still loading...")',
  'git status': '📊 On branch main. Your career could use a commit.',
  'git push': '🚀 Everything\'s already pushed. No force needed here.',
  'git commit': '💾 Commit message: "fixed everything, broke nothing"',
  'git log': '📜 commit a1b2c3d: "feat: built portfolio from scratch"',
  'hello': '👋 Hello there! General Kenobi! (Star Wars reference detected)',
  'hi': '👋 Hey! What can I help you with? Type "help" for commands.',
  'hey': '👋 Yo! Type "help" to see what this terminal can do.',
  '42': '🌌 The answer to life, the universe, and everything.',
  'pwd': '📍 /home/ayush/portfolio',
  'cd': '📂 Usage: cd <directory>\n  Available: about, experience, projects, accomplishments, shelf',
  'cd /': '📂 Usage: cd <directory>\n  Available: about, experience, projects, accomplishments, shelf',
  'man': '📖 Manual pages:\n  man ayush — about me\n  man skills — tech stack\n  man contact — get in touch\n  Or just type the command directly!',
  'grep': '🔍 grep: searching for talent...\n  Found in: /home/ayush/portfolio/\n  100% match!',
  'top': '⚡ top processes:\n  1. Coffee consumption — 99%\n  2. GPU utilization — 87%\n  3. LLM inference — 73%\n  4. Stack Overflow — 42%',
  'ps aux': '📋 processes:\n  ayush  vim     ... can\'t exit\n  ayush  coffee  ... critical\n  ayush  build   ... 100% CPU',
  'curl': '🌐 curl: (7) Failed to connect. This portfolio is SSR, not SSR(iously slow).',
  'wget': '📥 wget: downloading compliments... "You have great taste in portfolios!"',
  'ssh': '🔒 ssh: connection refused. But you\'re already inside! Welcome to the matrix.',
  'mkdir': '📁 mkdir: cannot create directory. This portfolio is read-only perfection.',
  'touch': '👆 touch: file touched. But not literally — we\'re digital here.',
  'chmod': '🔐 chmod: permissions are already optimal. 777 vibes only.',
  'history': '📜 Your command history is above this line. ↑ to scroll.',
  'tab': '🔲 tab: you pressed tab. In a terminal. That\'s not how this works.',
  'ctrl c': '⚡ SIGINT caught. But the portfolio keeps running. You can\'t stop the vibe.',
  'kill': '🔫 kill: you can\'t kill the vibe. It\'s immortal.',
  'reboot': '🔄 rebooting... just kidding, we\'re already running perfectly.',
  'shutdown': '💤 shutdown: nah, the portfolio stays up 24/7. Like a good website should.',
  'fortune': '🎲 Fortune cookie: "Your next deploy will have zero bugs." (Probably.)',
  'cowsay': '🐄  ________________________\n     < I love this portfolio! >\n      ------------------------\n             \\   ^__^\n              \\  (oo)\\_______\n                 (__)\\       )\\/\\\n                     ||----w |\n                     ||     ||',
  'sl': '🚂 Choo choo! You typed "sl" instead of "ls". But since you\'re here, enjoy the ride to /projects!',
}

// Navigation commands that route to pages
const NAV_ROUTES: Record<string, string> = {
  'about': '/about',
  'experience': '/experience',
  'projects': '/projects',
  'accomplishments': '/accomplishments',
  'shelf': '/shelf',
  'ls': '/projects',
  'sl': '/projects',
  'skills': '/about#skills',
};

// Sub-commands for cat and cd
const CAT_ROUTES: Record<string, string> = {
  'about.txt': '/about',
  'about': '/about',
  'skills.json': '/about#skills',
  'career.log': '/experience',
  'career': '/experience',
  'experience': '/experience',
  'projects': '/projects',
  'accomplishments': '/accomplishments',
  'shelf': '/shelf',
};

const CD_ROUTES: Record<string, string> = {
  'about': '/about',
  'experience': '/experience',
  'projects': '/projects',
  'accomplishments': '/accomplishments',
  'shelf': '/shelf',
  '/about': '/about',
  '/experience': '/experience',
  '/projects': '/projects',
  '/accomplishments': '/accomplishments',
  '/shelf': '/shelf',
  '~': '/',
  '/home': '/',
  '/': '/',
};

const COMMANDS = Object.keys(EASTER_EGGS);

interface CommandOutput {
  command: string;
  output: string;
}

export default function Terminal() {
  const router = useRouter()
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [showGlow, setShowGlow] = useState(false)
  const [interactiveMode, setInteractiveMode] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [commandHistory, setCommandHistory] = useState<CommandOutput[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

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

  // Enable interactive mode after typing completes
  useEffect(() => {
    if (currentLine >= LINES.length) {
      setInteractiveMode(true)
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

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, currentLine])

  // Process command and return response
  const processCommand = (cmd: string): string => {
    const lower = cmd.toLowerCase().trim()
    
    // Clear command is special
    if (lower === 'clear') {
      setCommandHistory([])
      return ''
    }
    
    // Handle 'cd' commands — navigate
    if (lower.startsWith('cd ')) {
      const target = lower.slice(3).trim()
      const route = CD_ROUTES[target]
      if (route) {
        router.push(route)
        return `📂 cd ${target} → ${route === '/' ? '/home' : route}`
      }
      return `📂 cd: no such directory: ${target}\n  Try: about, experience, projects, accomplishments, shelf`
    }
    
    // Handle 'cat' commands — navigate
    if (lower.startsWith('cat ')) {
      const target = lower.slice(4).trim()
      const route = CAT_ROUTES[target]
      if (route) {
        router.push(route)
        return `📄 cat ${target} → navigating to ${route}`
      }
      // Show the easter egg for bare 'cat'
      return EASTER_EGGS['cat']
    }

    // Handle multi-word command aliases
    const multiWordAliases: Record<string, string> = {
      'core skills': 'skills',
      'core-skills': 'skills',
      'core': 'skills',
      'stack': 'skills',
      'tech stack': 'skills',
      'techstack': 'skills',
    }
    if (multiWordAliases[lower]) {
      const target = multiWordAliases[lower]
      router.push(NAV_ROUTES[target])
      return EASTER_EGGS[target]
    }
    
    // Handle navigation commands
    if (NAV_ROUTES[lower]) {
      router.push(NAV_ROUTES[lower])
      return EASTER_EGGS[lower] || `🔗 Navigating to ${NAV_ROUTES[lower]}...`
    }
    
    // Check for exact match in easter eggs
    if (EASTER_EGGS[lower]) {
      return EASTER_EGGS[lower]
    }
    
    // Check for partial matches
    for (const command of COMMANDS) {
      if (lower.startsWith(command)) {
        return EASTER_EGGS[command]
      }
    }
    
    // Fallback: try to be helpful
    if (lower.startsWith('/')) {
      return `🔗 Try navigating to ${lower} — but use the nav bar instead!`
    }
    
    if (lower.startsWith('?')) {
      return `🤔 Type "help" for a list of available commands!`
    }
    
    return `❓ Command not found: '${cmd}'. Type 'help' for available commands.`
  }

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return
    
    const output = processCommand(cmd)
    setCommandHistory(prev => [...prev, { command: cmd, output }])
    setInputValue('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex].command)
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex].command)
      } else {
        setHistoryIndex(-1)
        setInputValue('')
      }
    }
  }

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
      className={`bg-black border border-green-500 rounded-lg w-full max-w-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_32px_8px_rgba(34,213,238,0.4)]`}
      style={dynamicShadow ? { boxShadow: dynamicShadow } : {}}
    >
      {/* macOS-style window chrome */}
      <div className="flex items-center px-3 py-2 bg-neutral-900 border-b border-green-500/30">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer" title="close" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors cursor-pointer" title="minimize" />
          <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-300 transition-colors cursor-pointer" title="maximize" />
        </div>
        <span className="ml-4 font-mono text-green-400/60 text-sm select-none">ayush@portfolio: ~/welcome.sh</span>
      </div>

      {/* Terminal content */}
      <div ref={terminalRef} className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto" onClick={() => inputRef.current?.focus()}>
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

      {/* Command history */}
      {commandHistory.map((entry, index) => (
        <div key={`cmd-${index}`}>
          <div className="h-2" />
          <p className="text-green-400 text-xs sm:text-base flex items-center gap-2">
            $ {entry.command}
          </p>
          {entry.output && (
            <p className="text-neutral-300 text-xs sm:text-sm mt-1 whitespace-pre-line">
              {entry.output}
            </p>
          )}
        </div>
      ))}

      {/* Interactive prompt */}
      {interactiveMode && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-400 text-xs sm:text-base shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 text-xs sm:text-base font-mono outline-none border-none focus:outline-none placeholder-green-400/30"
            placeholder="type 'help' for commands..."
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck={false}
          />
          {showCursor && <span className="animate-pulse text-green-400 text-xs sm:text-base">▮</span>}
        </div>
      )}
      </div>
    </div>
  )
}