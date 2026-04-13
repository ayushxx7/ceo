import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import ParticleBackground from '../components/ParticleBackground';
import NavBar from '../components/NavBar';

export const metadata: Metadata = {
  title: 'Ayush Mandowara — Senior GenAI Consultant & Builder',
  description: 'Portfolio of Ayush Mandowara: Senior GenAI Consultant at Virtusa. Expert in LLMs, Agentic AI, RAG, NLP, MLOps, and full-stack AI/ML solutions. 7+ years of experience.',
  metadataBase: new URL('https://ceo-kappa.vercel.app'),
  openGraph: {
    title: 'Ayush Mandowara — Senior GenAI Consultant & Builder',
    description: 'Portfolio of Ayush Mandowara: Senior GenAI Consultant at Virtusa. Expert in LLMs, Agentic AI, RAG, NLP, MLOps, and full-stack AI/ML solutions.',
    url: 'https://ceo-kappa.vercel.app',
    type: 'website',
    siteName: 'Ayush Mandowara Portfolio',
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'Ayush Mandowara — Senior GenAI Consultant & Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Mandowara — Senior GenAI Consultant & Builder',
    description: 'Portfolio of Ayush Mandowara: Senior GenAI Consultant at Virtusa. Expert in LLMs, Agentic AI, RAG, NLP, MLOps.',
    images: ['/og-image'],
  },
}

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Ayush Mandowara — Senior GenAI Consultant & Builder" />
        <meta property="og:description" content="Portfolio of Ayush Mandowara: Senior GenAI Consultant at Virtusa. Expert in LLMs, Agentic AI, RAG, NLP, MLOps, and full-stack AI/ML solutions. 7+ years of experience." />
        <meta property="og:url" content="https://ceo-kappa.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ceo-kappa.vercel.app/og-image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Mandowara — Senior GenAI Consultant & Builder" />
        <meta name="twitter:description" content="Portfolio of Ayush Mandowara: Senior GenAI Consultant at Virtusa. Expert in LLMs, Agentic AI, RAG, NLP, MLOps, and full-stack AI/ML solutions." />
        <meta name="twitter:image" content="https://ceo-kappa.vercel.app/og-image" />
      </head>
      <body className="bg-neutral-950 min-h-screen flex flex-col">
        <ParticleBackground />
        <NavBar />
        <main className="flex-1 flex flex-col pt-4 md:pt-8">
          {children}
        </main>
        <footer className="w-full flex flex-col items-center pb-4 md:pb-6 relative z-20 px-4">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-8 font-mono text-green-400 text-xl md:text-2xl bg-neutral-900/80 rounded-full px-6 md:px-8 py-2 shadow-sm relative">
            <a href="mailto:ayushxx7@gmail.com" aria-label="Email" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><MdEmail /></a>
            <a href="https://github.com/ayushxx7" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaGithub /></a>
            <a href="https://linkedin.com/in/ayush-mandowara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaLinkedin /></a>
            <a href="https://twitter.com/ayushxx7" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaXTwitter /></a>
            <a href="https://youtube.com/@thevibecoder69" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaYoutube /></a>
          </div>

          {/* Made with love text */}
          <div className="text-green-400 text-xs font-mono mt-2 opacity-40">
            made with <span className="text-red-500">♥</span> by Ayush Mandowara
          </div>
        </footer>
      </body>
    </html>
  )
}