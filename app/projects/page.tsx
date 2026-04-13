'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import ShellBox from '../../components/ShellBox';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
	{
		title: 'Music Chatbot App',
		description: 'RAG / LLM-based music chatbot app over scraped YouTube data using faiss, langchain, and gemini.',
		githubUrl: 'https://github.com/ayushxx7/music-chatbot',
		stars: 5,
		commits: 12,
		forks: 2,
		language: 'Python',
	},
	{
		title: 'Multi-lingual Product Search',
		description: 'LLM-based multi-lingual (English, Japanese) product search app over Mercari using neondb and gemini.',
		githubUrl: 'https://github.com/ayushxx7/product-search-app',
		stars: 8,
		commits: 24,
		forks: 3,
		language: 'TypeScript',
	},
	{
		title: 'Hierarchical Text Classification',
		description: "Master's thesis on Hierarchical Text Classification using Contrastive Learning, distilbert, and NLP.",
		githubUrl: 'https://github.com/ayushxx7/hierarchical-text-classification',
		stars: 12,
		commits: 45,
		forks: 4,
		language: 'Python',
	},
	{
		title: 'Video Gesture Recognition',
		description: 'Deep learning project for gesture recognition using MobileNet + Gated Recurrent Unit.',
		githubUrl: 'https://github.com/ayushxx7/gesture-recognition',
		stars: 1,
		commits: 24,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'Telecom Churn Case Study',
		description: 'Machine learning project for churn prediction using PCA, XGBoost, and Logistic Regression.',
		githubUrl: 'https://github.com/ayushxx7/telecom-churn-case-study',
		stars: 2,
		commits: 10,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'Automatic Ticket Classification',
		description: 'NLP system using Topic Modelling (spaCy) followed by Random Forest for ticket classification.',
		githubUrl: 'https://github.com/ayushxx7/ticket-classification',
		stars: 4,
		commits: 15,
		forks: 2,
		language: 'Python',
	},
	{
		title: 'Black Friday Sales Prediction',
		description: 'Hackathon project (Ranked in Top 15%) using Linear, Ridge, and Lasso Regression.',
		githubUrl: 'https://github.com/ayushxx7/BlackFridaySalesPrediction',
		stars: 1,
		commits: 1,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'Facebook-Auto-Liker',
		description: 'A popular tool for automating likes on Facebook posts.',
		githubUrl: 'https://github.com/ayushxx7/Facebook-Auto-Liker',
		stars: 39,
		commits: 3,
		forks: 0,
		language: 'Python',
	},
	{
		title: 'ayush-mandowara-blog',
		description:
			'Personal blog built with static site generators, featuring articles on machine learning, NLP, and software engineering.',
		githubUrl: 'https://github.com/ayushxx7/ayush-mandowara-blog',
		stars: 1,
		commits: 736,
		forks: 1,
		language: 'JavaScript',
	},
	{
		title: 'dotfiles',
		description:
			'Linux/macOS configuration files for vim, zsh, tmux, and more. Optimized for productivity and development.',
		githubUrl: 'https://github.com/ayushxx7/dotfiles',
		stars: 2,
		commits: 205,
		forks: 0,
		language: 'Shell',
	},
	{
		title: 'Whatsapp_Web',
		description: 'Scripts and tools for WhatsApp Web automation using PyAutoGUI and JS.',
		githubUrl: 'https://github.com/ayushxx7/Whatsapp_Web',
		stars: 13,
		commits: 0,
		forks: 13,
		language: 'JavaScript',
	},
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentProjects = projects.slice(startIndex, endIndex);

	return (
		<div className="flex justify-center relative">
			<div className="flex-1 max-w-2xl space-y-6 px-4 sm:px-6">
				{/* H1 for SEO */}
				<h1 className="sr-only">Projects — Ayush Mandowara&apos;s Portfolio</h1>

				<ShellBox>
					<div className="flex justify-between items-center">
						<p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">
							$ ls ~/projects/
						</p>
					</div>

					<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
						A curated selection of open-source projects and personal experiments spanning GenAI, machine learning, NLP, and automation tools. Each project represents real-world problem-solving with production-grade code. Explore the repositories to see implementation details, commit history, and community contributions.
					</p>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
						{currentProjects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>

					<div className="flex justify-center items-center gap-2 sm:gap-4 mt-6" role="navigation" aria-label="Pagination">
						<button
							onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
							disabled={currentPage === 1}
							aria-label="Previous page"
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
									aria-label={`Page ${page}`}
									aria-current={currentPage === page ? 'page' : undefined}
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
							onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
							disabled={currentPage === totalPages}
							aria-label="Next page"
							className={`p-1 sm:p-2 rounded-full ${
								currentPage === totalPages
									? 'text-neutral-700 cursor-not-allowed'
									: 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
							} transition-colors`}
						>
							<FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
						</button>
					</div>
				</ShellBox>

				<ShellBox>
					<Link
						href="/"
						className="text-green-400 text-sm sm:text-base md:text-lg font-mono"
					>
						$ cd /home
					</Link>
				</ShellBox>
			</div>
		</div>
	);
}