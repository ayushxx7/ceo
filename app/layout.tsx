import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import ParticleBackground from '../components/ParticleBackground';
import NavBar from '../components/NavBar';

export const metadata: Metadata = {
  title: 'Ashwin Kulkarni',
  description: 'personal portfolio of Ashwin describing his work experience, projects, and blogs',
}

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 min-h-screen flex flex-col">
        <ParticleBackground />
        <NavBar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <footer className="w-full flex flex-col items-center pb-4 md:pb-6 relative z-20 px-4">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-8 font-mono text-green-400 text-xl md:text-2xl bg-neutral-900/80 rounded-full px-6 md:px-8 py-2 shadow-sm relative">
            <a href="mailto:ashwin.kulkarni128@gmail.com" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><MdEmail /></a>
            <a href="https://github.com/AshwinKul28" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaGithub /></a>
            <a href="https://linkedin.com/in/iashwin28" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaLinkedin /></a>
            <a href="https://twitter.com/AshwinKUlkarni4" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaXTwitter /></a>
            <a href="https://www.youtube.com/@ashwin.kulkarni" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaYoutube /></a>
          </div>

          {/* Made with love text */}
          <div className="text-green-400 text-xs font-mono mt-2 opacity-40">
            made with <span className="text-red-500">♥</span> by Ashwin
          </div>
        </footer>
      </body>
    </html>
  )
}