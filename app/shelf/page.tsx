"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShellBox from "../../components/ShellBox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import YouTubeVideo from "../../components/YouTubeVideo";
import CommandBar from "@/components/TerminalCommandBar";

interface Video {
  id: string;
  title: string;
  publishedAt: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

interface YouTubeResponse {
  items: Array<{
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      title: string;
      publishedAt: string;
    };
  }>;
}

const CHANNEL_ID = "UCq0-qpfVb24-28m9A5b1VIw";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const staticBlogPosts: BlogPost[] = [
  {
    id: "rl-05",
    title: "Deep Reinforcement Learning",
    excerpt: "A deep dive into advanced reinforcement learning techniques and architectures.",
    date: "2023-11-01",
    url: "http://ayush-blog.netlify.app//ReinforcementLearning/05-Deep-Reinforcement-Learning/"
  },
  {
    id: "ml-main",
    title: "Machine Learning Overview",
    excerpt: "Comprehensive guide to machine learning concepts, algorithms, and applications.",
    date: "2023-10-15",
    url: "http://ayush-blog.netlify.app//machine-learning"
  },
  {
    id: "rl-04",
    title: "Model-Free Methods in RL",
    excerpt: "Understanding model-free approaches in reinforcement learning.",
    date: "2023-09-20",
    url: "http://ayush-blog.netlify.app//ReinforcementLearning/04-Model-Free-Methods/"
  },
  {
    id: "pca",
    title: "Principal Component Analysis",
    excerpt: "Dimensionality reduction using PCA in machine learning pipelines.",
    date: "2023-08-10",
    url: "http://ayush-blog.netlify.app//PredictiveAnalysis/16-Pricipal-Component-Analysis/"
  },
  {
    id: "rf",
    title: "Random Forest",
    excerpt: "How Random Forests work and why they are so powerful for classification tasks.",
    date: "2023-07-05",
    url: "http://ayush-blog.netlify.app//PredictiveAnalysis/13-Random-Forest/"
  },
  {
    id: "cnn",
    title: "Convolutional Neural Networks (CNN)",
    excerpt: "Introduction to CNNs and their applications in image processing.",
    date: "2023-06-15",
    url: "http://ayush-blog.netlify.app//DeepLearning/04-CNN/"
  },
  {
    id: "lstm-gru",
    title: "LSTM & GRU Networks",
    excerpt: "Exploring advanced recurrent neural network architectures: LSTM and GRU.",
    date: "2023-05-10",
    url: "http://ayush-blog.netlify.app//DeepLearning/07-LSTM-GRU/"
  },
  {
    id: "topic-modelling",
    title: "Topic Modelling in NLP",
    excerpt: "Techniques for extracting topics from text using NLP.",
    date: "2023-04-01",
    url: "http://ayush-blog.netlify.app//NLP/09-Topic-Modelling/"
  }
];

const DigitalShelf = () => {
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const [videos, setVideos] = useState<Video[]>([]);
  const [blogPosts] = useState<BlogPost[]>(staticBlogPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videosPerPage = 6;
  const blogsPerPage = 4;

  useEffect(() => {
    const fetchVideos = async () => {
      if (!API_KEY) {
        setError(`YouTube API key is not configured.`);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&type=video`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`YouTube API error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json() as YouTubeResponse;

        const formattedVideos = data.items
          .filter((item) => item.id?.kind === "youtube#video" && item.id?.videoId)
          .map((item) => ({
            id: item.id.videoId,
            title: item.snippet?.title || 'Untitled Video',
            publishedAt: item.snippet?.publishedAt || new Date().toISOString(),
          }));

        setVideos(formattedVideos);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const totalVideoPages = Math.ceil(videos.length / videosPerPage);
  const totalBlogPages = Math.ceil(blogPosts.length / blogsPerPage);

  const paginatedVideos = videos.slice(
    (currentVideoPage - 1) * videosPerPage,
    currentVideoPage * videosPerPage
  );

  const paginatedBlogs = blogPosts.slice(
    (currentBlogPage - 1) * blogsPerPage,
    currentBlogPage * blogsPerPage
  );

  const sections = [
    { id: 'blogs', label: 'blogs' },
    { id: 'videos', label: 'videos' },
  ];

  return (
    <div className="flex justify-center relative min-h-screen overflow-x-hidden">
      <div className="flex-1 max-w-2xl space-y-6 px-4 sm:px-6 py-20">
        <CommandBar />

        {/* Blogs Section */}
        <ShellBox id="blogs">
          <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">cd ~/shelf/blogs</p>
          <div className="mt-8">
            {blogPosts.length === 0 ? (
              <div className="text-green-400 text-center py-8">No blog posts found</div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {paginatedBlogs.map((post) => (
                    <motion.article
                      key={post.id}
                      whileHover={{ scale: 1.01 }}
                      className="bg-neutral-800/50 rounded-lg p-4 sm:p-6 border border-neutral-700"
                    >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="font-mono text-xl mb-3 text-green-400 hover:underline">
                        {post.title}
                      </h3>
                    </a>       
                    <p className="text-neutral-400 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-neutral-500">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors font-mono"
                        >
                          Read →
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Blog Pagination */}
                <Pagination
                  currentPage={currentBlogPage}
                  totalPages={totalBlogPages}
                  setPage={setCurrentBlogPage}
                />
              </>
            )}
          </div>
        </ShellBox>

        {/* Videos Section */}
        <ShellBox id="videos">
          <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">cd ~/shelf/videos</p>
          <div className="mt-8">
            {loading ? (
              <div className="text-green-400 text-center py-8">Loading videos...</div>
            ) : error ? (
              <div className="text-red-400 text-center py-8">
                🐢 Hmm... that took a wrong turn
                <p className="text-sm mt-2 text-neutral-400">
                  Let&apos;s try that again. Maybe the internet turtles are tired 🐢💤
                </p>
              </div>
            ) : videos.length === 0 ? (
              <div className="text-green-400 text-center py-8">No videos found</div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {paginatedVideos.map((video) => (
                    <YouTubeVideo
                      key={video.id}
                      videoId={video.id}
                      title={video.title}
                      publishedAt={video.publishedAt}
                    />
                  ))}
                </div>

                {/* Video Pagination */}
                <Pagination
                  currentPage={currentVideoPage}
                  totalPages={totalVideoPages}
                  setPage={setCurrentVideoPage}
                />
              </>
            )}
          </div>
        </ShellBox>

        {/* Section Links */}
        <div className="hidden lg:flex flex-col items-end gap-4 fixed right-0 top-1/2 -translate-y-1/2 z-10 pr-2">
          {sections.map((section) => (
            <div key={section.id} className="flex items-center gap-2 group">
              <a
                href={`#${section.id}`}
                className="text-green-400/40 group-hover:text-green-400 font-mono text-base transition-colors"
              >
                {section.label}
              </a>
              <div className="w-0.5 h-8 bg-green-400/40 group-hover:bg-green-400 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  setPage,
}: {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}) => (
  <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8">
    <button
      onClick={() => setPage(Math.max(1, currentPage - 1))}
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
          onClick={() => setPage(page)}
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
      onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
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
);

export default DigitalShelf;
