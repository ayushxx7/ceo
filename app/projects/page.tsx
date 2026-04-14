'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import ShellBox from '../../components/ShellBox';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
	{
		title: 'Mercari Japan AI Shopper',
		description: 'LLM-powered AI agent for Mercari Japan — scrapes products, stores in PostgreSQL, auto-tags with SEO metadata, and serves via Streamlit UI with hybrid English/Japanese query support. Uses OpenAI/OpenRouter with automatic fallback.',
		githubUrl: 'https://github.com/ayushxx7/mercari-search-ai-agent',
		stars: 1,
		commits: 6,
		forks: 0,
		language: 'Python',
	},
	{
		title: 'Sarah\'s AI Recruiter',
		description: 'AI-powered recruiting tool built with Vite, React, TypeScript, and shadcn-ui. A modern full-stack application for intelligent talent acquisition.',
		githubUrl: 'https://github.com/ayushxx7/sarah-s-ai-recruiter',
		stars: 0,
		commits: 8,
		forks: 0,
		language: 'TypeScript',
	},
	{
		title: 'YouTube Companion',
		description: 'Upload assistant and file viewer for YouTube channel @thevibecoder69. Built with Python and Streamlit to manage and organize channel content.',
		githubUrl: 'https://github.com/ayushxx7/youtube-companion',
		stars: 0,
		commits: 3,
		forks: 0,
		language: 'Python',
	},
	{
		title: 'YouTube Downloader',
		description: 'Streamlit app to download YouTube videos in 4K (or max resolution). Supports audio-only downloads using yt-dlp and ffmpeg with real-time progress tracking.',
		githubUrl: 'https://github.com/ayushxx7/youtube-downloader',
		stars: 0,
		commits: 5,
		forks: 0,
		language: 'Python',
	},
	{
		title: 'Scan2Contact',
		description: 'SmartScan Contacts — a Next.js web app that extracts contact details from images using OCR.space API and converts them into structured digital contacts with Firebase backend.',
		githubUrl: 'https://github.com/the-vibe-coder-69/scan2contact',
		stars: 1,
		commits: 7,
		forks: 2,
		language: 'TypeScript',
	},
	{
		title: 'Video Gesture Recognition',
		description: 'Deep learning project: CNN + RNN (MobileNet + GRU) to recognize 5 hand gestures for smart TV control (thumbs up/down, swipe, pause). Achieved 92% validation accuracy with a ~40MB model optimized for embedded hardware.',
		githubUrl: 'https://github.com/ayushxx7/gesture-recognition',
		stars: 1,
		commits: 24,
		forks: 0,
		language: 'Jupyter Notebook',
	},
	{
		title: 'Black Friday Sales Prediction',
		description: 'Hackathon project (Ranked Top 15%) — predicting customer purchase behavior on Analytics Vidhya using Linear, Ridge, and Lasso Regression on real retail dataset.',
		githubUrl: 'https://github.com/ayushxx7/BlackFridaySalesPrediction',
		stars: 1,
		commits: 1,
		forks: 0,
		language: 'Jupyter Notebook',
	},
	{
		title: 'Facebook-Auto-Liker',
		description: 'A popular PyAutoGUI-based automation script that automatically likes Facebook posts. 45+ stars and 33 forks — one of the most starred repos on the profile.',
		githubUrl: 'https://github.com/ayushxx7/Facebook-Auto-Liker',
		stars: 45,
		commits: 4,
		forks: 33,
		language: 'Python',
	},
	{
		title: 'WhatsApp Web',
		description: 'Cool WhatsApp Web projects using PyAutoGUI — custom message sending (human-like Diwali greetings), auto-download images, and online-status checker (autodot).',
		githubUrl: 'https://github.com/ayushxx7/Whatsapp_Web',
		stars: 13,
		commits: 7,
		forks: 2,
		language: 'Python',
	},
	{
		title: 'ayush-mandowara-blog',
		description: 'Personal tech blog built with Gatsby, React, and Markdown. 20+ articles on ML, NLP, Deep Learning, and RL. Deployed on Netlify with 942 commits and 8 forks.',
		githubUrl: 'https://github.com/ayushxx7/ayush-mandowara-blog',
		stars: 1,
		commits: 942,
		forks: 8,
		language: 'JavaScript',
	},
	{
		title: 'dotfiles',
		description: 'Linux/macOS/Windows configuration files for vim, zsh, tmux, and more. Features automated installer, Chocolatey integration, LSP support (coc-python), and 209+ commits of iterative refinement.',
		githubUrl: 'https://github.com/ayushxx7/dotfiles',
		stars: 2,
		commits: 209,
		forks: 1,
		language: 'Vim Script',
	},
	{
		title: 'Zipf\'s Law Verification',
		description: 'Data analysis project verifying Zipf\'s Law using Python and matplotlib. Explores word frequency distribution in text corpora with statistical visualization.',
		githubUrl: 'https://github.com/ayushxx7/zipfs_law',
		stars: 4,
		commits: 3,
		forks: 0,
		language: 'Python',
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
						<a href="#" className="text-green-400 text-sm sm:text-base md:text-lg font-mono hover:text-green-300 hover:underline underline-offset-4 cursor-pointer transition-colors">
							$ ls ~/projects/
						</a>
					</div>

					<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
						A curated selection of open-source projects and personal experiments spanning GenAI agents, full-stack apps, machine learning, NLP, automation tools, and developer infrastructure. Each project represents real-world problem-solving with production-grade code. Several repos (like Facebook-Auto-Liker and WhatsApp Web) have gained community traction with 45+ and 13+ stars respectively. Explore the repositories to see implementation details, commit history, and community contributions.
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