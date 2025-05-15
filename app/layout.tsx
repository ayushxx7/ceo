import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import HomeOnlyEffects from '../components/HomeOnlyEffects';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MacOS Dev Portfolio',
  description: 'Geeky portfolio inspired by MacOS'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 min-h-screen flex flex-col">
        <HomeOnlyEffects />
        <nav className="w-full flex justify-center py-6 z-10">
          <div className="flex gap-0 font-mono text-green-400 text-lg bg-neutral-900/80 rounded-full px-8 py-2 shadow-sm overflow-hidden" data-menu="true">
            <Link href="/" className="px-6 py-1 hover:text-green-300 transition-colors">home</Link>
            <span className="text-neutral-700 select-none self-center">|</span>
            <Link href="/about" className="px-6 py-1 hover:text-green-300 transition-colors">about</Link>
            <span className="text-neutral-700 select-none self-center">|</span>
            <Link href="/experience" className="px-6 py-1 hover:text-green-300 transition-colors">experience</Link>
            <span className="text-neutral-700 select-none self-center">|</span>
            <Link href="/projects" className="px-6 py-1 hover:text-green-300 transition-colors">projects</Link>
            <span className="text-neutral-700 select-none self-center">|</span>
            <Link href="/blog" className="px-6 py-1 hover:text-green-300 transition-colors">blog</Link>
          </div>
        </nav>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <footer className="w-full flex justify-center mt-auto pb-6 relative z-20">
          <div className="flex gap-8 font-mono text-green-400 text-2xl bg-neutral-900/80 rounded-full px-8 py-2 shadow-sm relative">
            <a href="https://github.com/AshwinKul28" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors cursor-pointer relative z-10"><FaGithub /></a>
            <a href="https://linkedin.com/in/iashwin28" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors cursor-pointer relative z-10"><FaLinkedin /></a>
            <a href="https://twitter.com/AshwinKUlkarni4" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors cursor-pointer relative z-10"><FaTwitter /></a>
            <a href="mailto:ashwin.kulkarni128@gmail.com" className="hover:text-green-300 transition-colors cursor-pointer relative z-10"><MdEmail /></a>
          </div>
        </footer>
      </body>
    </html>
  )
}