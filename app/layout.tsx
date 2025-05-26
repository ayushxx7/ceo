import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import ParticleBackground from '../components/ParticleBackground';
import NavBar from '../components/NavBar';

export const metadata: Metadata = {
  title: 'Ayush Mandowara',
  description: 'Personal portfolio of Ayush Mandowara: Machine Learning Engineer, GenAI, NLP, QA Automation, Product Management.',
}

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-Tbw1+0M9X9S0k4WhxHl6hFvHce7n+Ay0gYIo/ZUuNYvZYgrC84CnA1wFf1eROhB7cfPrWfQdwX7wOjjRFcGubw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta property="og:title" content="Ayush Mandowara" />
        <meta property="og:description" content="Portfolio of Ayush Mandowara. Machine Learning Engineer with expertise in Data Science, Deep Learning, Generative AI, NLP, QA Automation, and Product Management." />
        <meta property="og:url" content="https://ayushmandowara.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ayushmandowara.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Mandowara" />
        <meta name="twitter:description" content="Portfolio of Ayush Mandowara. Machine Learning Engineer with expertise in Data Science, Deep Learning, Generative AI, NLP, QA Automation, and Product Management." />
        <meta name="twitter:image" content="https://ayushmandowara.com/og-image.png" />
      </head>
      <body className="bg-neutral-950 min-h-screen flex flex-col">
        <ParticleBackground />
        <NavBar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <footer className="w-full flex flex-col items-center pb-4 md:pb-6 relative z-20 px-4">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-8 font-mono text-green-400 text-xl md:text-2xl bg-neutral-900/80 rounded-full px-6 md:px-8 py-2 shadow-sm relative">
            <a href="mailto:ayush.mandowara.97@gmail.com" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><MdEmail /></a>
            <a href="https://github.com/ayushxx7" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaGithub /></a>
            <a href="https://linkedin.com/in/ayushmandowara" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaLinkedin /></a>
            <a href="https://twitter.com/ayushxx7" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaXTwitter /></a>
            <a href="https://youtube.com/@thevibecoder69" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors cursor-pointer relative z-10"><FaYoutube /></a>
            {/* Add blog or other links as needed */}
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