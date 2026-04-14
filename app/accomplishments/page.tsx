'use client';

import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ShellBox from "@/components/ShellBox";
import Link from 'next/link';

interface Accomplishment {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  badge?: string;
}

// Category to color mapping
const categoryColors: { [key: string]: string } = {
  'certification': 'text-blue-400 border-blue-400',
  'award': 'text-yellow-400 border-yellow-400',
  'outreach': 'text-indigo-400 border-indigo-400',
  'hackathon': 'text-pink-500 border-pink-500',
  'recognition': 'text-yellow-300 border-yellow-300',
  'open source': 'text-orange-300 border-orange-300',
  'patent': 'text-red-400 border-red-400',
  'default': 'text-green-400 border-green-400',
};

const accomplishments: Accomplishment[] = [
    {
        id: 1,
        title: "Advanced Certification in Generative AI",
        description: "Completed a comprehensive 7-month certification from upGrad and Microsoft, mastering RAG solutions, LLM fine-tuning, and agentic workflows.",
        date: "2024",
        category: "certification",
    },
    {
        id: 2,
        title: "Black Friday Sales Prediction Hackathon - Top 15%",
        description: "Ranked in the top 15% globally in a competitive hackathon focused on predicting sales using advanced regression techniques (Linear, Ridge, Lasso).",
        date: "2023",
        category: "hackathon",
    },
    {
        id: 3,
        title: "Master's Thesis: Hierarchical Text Classification",
        description: "Published research on Hierarchical Text Classification using Contrastive Learning, DistilBERT, and R&D focused NLP techniques.",
        date: "2022",
        category: "recognition",
    },
    {
        id: 4,
        title: "30+ Technical Knowledge Transfer Sessions",
        description: "Conducted over 30 KT sessions across multiple technical teams, fostering a culture of continuous learning and sharing expertise in AI/ML.",
        date: "2023-2024",
        category: "outreach",
    },
    {
        id: 5,
        title: "Product Management & Agentic AI Certification",
        description: "Intensive 6-month program from IIT Patna x Masai, focusing on building full product roadmaps and agentic AI solutions.",
        date: "2025",
        category: "certification",
    },
    {
        id: 6,
        title: "Video Gesture Recognition Research",
        description: "Researched and implemented gesture recognition systems using Deep Learning (MobileNet + GRU) achieving 92% validation accuracy during academic projects.",
        date: "2022",
        category: "recognition",
    }
    ];

const ITEMS_PER_PAGE = 6; // 3 rows × 2 columns

// Get unique categories
const categories = ['*', ...new Set(accomplishments.map(acc => acc.category))];

export default function Accomplishments() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('*');
  
  // Filter accomplishments based on selected category
  const filteredAccomplishments = selectedCategory === '*' 
    ? accomplishments 
    : accomplishments.filter(acc => acc.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredAccomplishments.length / ITEMS_PER_PAGE);
  
  const currentAccomplishments = filteredAccomplishments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading state
  }

  return (
    <div className="flex justify-center relative">
      {/* H1 for SEO */}
      <h1 className="sr-only">Accomplishments — Ayush Mandowara&apos;s Certifications & Awards</h1>

      <div className="flex-1 max-w-2xl space-y-4 sm:space-y-6 px-3 sm:px-6">
        <ShellBox>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-2">
                <a href="#" className="text-green-400 text-xs sm:text-sm md:text-base font-mono hover:text-green-300 hover:underline underline-offset-4 cursor-pointer transition-colors">
                $ ls -t ~/accomplishments/
                </a>
                <span className="relative group inline-flex items-center">
                {/* Tooltip ABOVE */}
                <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-neutral-900 text-green-400 rounded py-1 px-2 shadow-lg opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity z-50 border border-green-400/30 text-center"
                    style={{ fontSize: '0.70rem' }}
                >
                    Click to filter by category
                </span>

                {/* Dropdown */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Filter accomplishments by category"
                    className="appearance-none bg-transparent pr-5 py-0 text-green-400 text-xs sm:text-sm font-mono focus:outline-none cursor-pointer h-5 sm:h-6 min-w-[1.5rem]"
                    style={{
                    minWidth: '1.0rem',
                    width: 'auto',
                    lineHeight: '1.25rem',
                    }}
                >
                    {categories.map((category) => (
                    <option
                        key={category}
                        value={category}
                        className={`bg-neutral-800/80 border  text-cyan-400 rounded px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-xs sm:text-sm`}
                        
                    >
                        {category}
                    </option>
                    ))}
                </select>
                </span>
            </div>
            </div>
          
          {/* Grid Layout */}
          <div className="mt-3 sm:mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {currentAccomplishments.map((accomplishment) => (
              <div 
                key={accomplishment.id}
                className="bg-neutral-900/50 p-4 sm:p-5 rounded-lg border border-neutral-800 hover:border-green-400/50 transition-colors flex flex-col justify-between min-h-[180px]"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-green-400 font-mono font-bold text-base sm:text-lg">{accomplishment.title}</h3>
                  <span className="text-xs text-green-400 font-mono font-semibold">{accomplishment.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 mb-4">{accomplishment.description}</p>
                <div className="flex items-end justify-between mt-auto">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral-800/80 border font-mono text-xs sm:text-sm rounded-md ${categoryColors[accomplishment.category.toLowerCase()] || categoryColors.default}`}>
                    {accomplishment.category}
                  </span>
                  {accomplishment.badge && (
                    <a
                      href={accomplishment.badge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors font-mono"
                    >
                      [badge]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`p-1 sm:p-2 rounded-full ${
                  currentPage === 1 
                    ? 'text-neutral-700 cursor-not-allowed' 
                    : 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
                } transition-colors`}
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <div className="flex gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full font-mono text-xs sm:text-sm ${
                      currentPage === page
                        ? 'bg-green-400 text-neutral-950'
                        : 'text-green-400 hover:bg-neutral-800'
                    } transition-colors`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`p-1 sm:p-2 rounded-full ${
                  currentPage === totalPages 
                    ? 'text-neutral-700 cursor-not-allowed' 
                    : 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
                } transition-colors`}
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </ShellBox>


        {/* Home Link */}
        <ShellBox>
        <Link href="/" className="text-green-400 text-sm sm:text-base md:text-lg font-mono">
                $ cd /home
            </Link>
        </ShellBox>
      </div>
    </div>
  );
} 