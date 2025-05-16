"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="w-full flex justify-center py-2 sm:py-4 md:py-6 z-10 px-2 sm:px-4 relative">
        <div className="hidden md:flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-0 font-mono text-green-400 text-xs sm:text-sm md:text-base bg-neutral-900/30 backdrop-blur-sm px-2 sm:px-4 md:px-8 py-1 sm:py-2 overflow-hidden rounded-full" data-menu="true">
          <Link href="/" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-300 transition-colors whitespace-nowrap">home</Link>
          <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
          <Link href="/about" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-300 transition-colors whitespace-nowrap">about</Link>
          <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
          <Link href="/experience" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-300 transition-colors whitespace-nowrap">experience</Link>
          <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
          <Link href="/accomplishments" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-300 transition-colors whitespace-nowrap">accomplishments</Link>
          <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
          <Link href="/projects" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-300 transition-colors whitespace-nowrap">projects</Link>
          <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
          <Link href="/blog" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-300 transition-colors whitespace-nowrap">blog</Link>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto text-green-400 focus:outline-none bg-neutral-900/30 backdrop-blur-sm rounded-full"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-green-400 mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-green-400 mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-green-400 rounded transition-all" />
        </button>
      </nav>
    );
  }

  return (
    <nav className="w-full flex justify-center py-2 sm:py-4 md:py-6 z-50 px-2 sm:px-4 relative">
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-0 font-mono text-green-400 text-xs sm:text-sm md:text-base bg-neutral-900/30 backdrop-blur-sm px-2 sm:px-4 md:px-8 py-1 sm:py-2 overflow-hidden rounded-full" data-menu="true">
        <Link href="/" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-200 transition-colors whitespace-nowrap">home</Link>
        <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
        <Link href="/about" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-200 transition-colors whitespace-nowrap">about</Link>
        <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
        <Link href="/experience" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-200 transition-colors whitespace-nowrap">experience</Link>
        <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
        <Link href="/accomplishments" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-200 transition-colors whitespace-nowrap">accomplishments</Link>
        <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
        <Link href="/projects" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-200 transition-colors whitespace-nowrap">projects</Link>
        <span className="text-neutral-700 select-none self-center hidden md:inline">|</span>
        <Link href="/shelf" className="px-2 sm:px-3 md:px-6 py-1 hover:text-green-200 transition-colors whitespace-nowrap">digital shelf</Link>
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto text-green-400 focus:outline-none bg-neutral-900/30 backdrop-blur-sm rounded-full"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span className="block w-6 h-0.5 bg-green-400 mb-1 rounded transition-all" />
        <span className="block w-6 h-0.5 bg-green-400 mb-1 rounded transition-all" />
        <span className="block w-6 h-0.5 bg-green-400 rounded transition-all" />
      </button>
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900/30 backdrop-blur-sm border-b border-green-400/20 shadow-lg z-[60] flex flex-col items-center py-4 md:hidden animate-fade-in">
          <Link href="/" className="py-2 px-4 w-full text-center text-green-400 font-mono hover:bg-neutral-900/50 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>home</Link>
          <Link href="/about" className="py-2 px-4 w-full text-center text-green-400 font-mono hover:bg-neutral-900/50 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>about</Link>
          <Link href="/experience" className="py-2 px-4 w-full text-center text-green-400 font-mono hover:bg-neutral-900/50 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>experience</Link>
          <Link href="/accomplishments" className="py-2 px-4 w-full text-center text-green-400 font-mono hover:bg-neutral-900/50 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>accomplishments</Link>
          <Link href="/projects" className="py-2 px-4 w-full text-center text-green-400 font-mono hover:bg-neutral-900/50 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>projects</Link>
          <Link href="/shelf" className="py-2 px-4 w-full text-center text-green-400 font-mono hover:bg-neutral-900/50 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>digital shelf</Link>
        </div>
      )}
    </nav>
  );
}

