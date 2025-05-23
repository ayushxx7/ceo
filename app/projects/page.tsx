'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import ShellBox from '../../components/ShellBox';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
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
		title: 'Auto-File-Renamer',
		description:
			'A utility tool to batch rename files automatically based on custom rules.',
		githubUrl: 'https://github.com/ayushxx7/Auto-File-Renamer',
		stars: 2,
		commits: 11,
		forks: 2,
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
		title: 'ayushxx7.github.io',
		description:
			'My personal website and portfolio, built with Jekyll and GitHub Pages.',
		githubUrl: 'https://github.com/ayushxx7/ayushxx7.github.io',
		stars: 1,
		commits: 59,
		forks: 1,
		language: 'HTML',
	},
	{
		title: 'gesture-recognition',
		description:
			'Deep learning project for gesture recognition using computer vision and neural networks.',
		githubUrl: 'https://github.com/ayushxx7/gesture-recognition',
		stars: 1,
		commits: 24,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'blog',
		description: 'Another blog repository with posts and experiments.',
		githubUrl: 'https://github.com/ayushxx7/blog',
		stars: 1,
		commits: 4,
		forks: 1,
		language: 'Markdown',
	},
	{
		title: 'CabDriverReinforcementLearning',
		description: 'Reinforcement learning project for simulating cab driver environments.',
		githubUrl: 'https://github.com/ayushxx7/CabDriverReinforcementLearning',
		stars: 1,
		commits: 2,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'BackupCart',
		description: 'A backup utility for automating file backups.',
		githubUrl: 'https://github.com/ayushxx7/BackupCart',
		stars: 1,
		commits: 1,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'BikeSharing',
		description: 'Analysis and modeling for bike sharing datasets.',
		githubUrl: 'https://github.com/ayushxx7/BikeSharing',
		stars: 1,
		commits: 1,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'BlackFridaySalesPrediction',
		description: 'Machine learning project for predicting Black Friday sales.',
		githubUrl: 'https://github.com/ayushxx7/BlackFridaySalesPrediction',
		stars: 1,
		commits: 1,
		forks: 1,
		language: 'Python',
	},
	{
		title: 'ayushxx7',
		description: 'Profile README and GitHub profile customizations.',
		githubUrl: 'https://github.com/ayushxx7/ayushxx7',
		stars: 1,
		commits: 7,
		forks: 1,
		language: 'Markdown',
	},
	{
		title: 'Zipfs_Law',
		description: "A project exploring Zipf's Law in linguistics and data science.",
		githubUrl: 'https://github.com/ayushxx7/Zipfs_Law',
		stars: 4,
		commits: 0,
		forks: 4,
		language: 'Python',
	},
	{
		title: 'SentimentBasedProductRecommendationSystem',
		description: 'A sentiment-based product recommendation system using NLP.',
		githubUrl: 'https://github.com/ayushxx7/SentimentBasedProductRecommendationSystem',
		stars: 3,
		commits: 0,
		forks: 3,
		language: 'Python',
	},
	{
		title: 'Whatsapp_Web',
		description: 'Scripts and tools for WhatsApp Web automation.',
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
				<ShellBox>
					<div className="flex justify-between items-center">
						<p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">
							$ ls ~/projects/
						</p>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
						{currentProjects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>

					<div className="flex justify-center items-center gap-2 sm:gap-4 mt-6">
						<button
							onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
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
							onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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