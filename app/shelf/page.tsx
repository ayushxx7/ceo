"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShellBox from "../../components/ShellBox";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import YouTubeVideo from "../../components/YouTubeVideo";

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

// Your YouTube channel ID - you can find this in your channel URL
const CHANNEL_ID = "UCq0-qpfVb24-28m9A5b1VIw"; // Replace with your actual channel ID from YouTube
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const staticBlogPosts: BlogPost[] = [
  {
    id: "rl-05",
    title: "Deep Reinforcement Learning",
    excerpt: "A deep dive into advanced reinforcement learning techniques, architectures, and the frontier of AI decision-making systems.",
    date: "2022-04-04",
    url: "https://ayush-blog.netlify.app/ReinforcementLearning/05-Deep-Reinforcement-Learning/"
  },
  {
    id: "rl-04",
    title: "Model-Free Methods in RL",
    excerpt: "Understanding model-free approaches — Monte Carlo, Temporal Difference, and Q-Learning — in reinforcement learning.",
    date: "2022-03-21",
    url: "https://ayush-blog.netlify.app/ReinforcementLearning/04-Model-Free-Methods/"
  },
  {
    id: "rl-01",
    title: "Classical Reinforcement Learning",
    excerpt: "Introduction to classical RL methods, Markov Decision Processes, and the foundations of intelligent agents.",
    date: "2022-03-03",
    url: "https://ayush-blog.netlify.app/ReinforcementLearning/01-Classical-Reinforcement-Learning/"
  },
  {
    id: "backprop",
    title: "Backpropagation",
    excerpt: "The algorithm behind training neural networks — computing gradients through the chain rule and updating weights via gradient descent.",
    date: "2021-12-25",
    url: "https://ayush-blog.netlify.app/DeepLearning/03-Backpropagation/"
  },
  {
    id: "cnn",
    title: "Convolutional Neural Networks (CNNs)",
    excerpt: "Introduction to CNNs, convolution operations, pooling layers, and their applications in image processing and computer vision.",
    date: "2021-12-23",
    url: "https://ayush-blog.netlify.app/DeepLearning/04-CNN/"
  },
  {
    id: "lstm-gru",
    title: "LSTM & GRU Networks",
    excerpt: "Exploring advanced recurrent neural network architectures — Long Short-Term Memory and Gated Recurrent Units for sequence modeling.",
    date: "2021-12-23",
    url: "https://ayush-blog.netlify.app/DeepLearning/07-LSTM-GRU/"
  },
  {
    id: "rnn",
    title: "Recurrent Neural Networks (RNNs)",
    excerpt: "Understanding sequential data processing, vanishing gradients, and how RNNs handle time-series and temporal dependencies.",
    date: "2021-12-13",
    url: "https://ayush-blog.netlify.app/DeepLearning/06-Recurrent-Neural-Networks/"
  },
  {
    id: "pca",
    title: "Principal Component Analysis",
    excerpt: "Dimensionality reduction using PCA — understanding variance, eigenvectors, and feature compression in ML pipelines.",
    date: "2021-10-18",
    url: "https://ayush-blog.netlify.app/PredictiveAnalysis/16-Pricipal-Component-Analysis/"
  },
  {
    id: "random-forest",
    title: "Random Forest",
    excerpt: "How Random Forests work — ensemble learning, bagging, and why they are so powerful for classification and regression tasks.",
    date: "2021-09-29",
    url: "https://ayush-blog.netlify.app/PredictiveAnalysis/13-Random-Forest/"
  },
  {
    id: "topic-modelling",
    title: "Topic Modelling in NLP",
    excerpt: "Techniques for extracting latent topics from text corpora using NLP methods like LDA and probabilistic modeling.",
    date: "2021-12-01",
    url: "https://ayush-blog.netlify.app/NLP/09-Topic-Modelling/"
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
        setError(`YouTube API key is not configured. Please check your .env.local file. Current value: ${API_KEY}`);
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching videos with API key:', API_KEY.substring(0, 5) + '...');
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&type=video`
        );
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`YouTube API error: ${errorData.error?.message || response.statusText}`);
        }
        
        const data = await response.json() as YouTubeResponse;
        
        if (!data.items || !Array.isArray(data.items)) {
          throw new Error('Invalid response format from YouTube API');
        }

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
        console.error("Error fetching YouTube videos:", error);
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
      {/* H1 for SEO */}
      <h1 className="sr-only">Digital Shelf — Ayush Mandowara&apos;s Blogs & Videos</h1>

      <div className="flex-1 max-w-2xl space-y-6 px-4 sm:px-6 py-20">
                {/* Blog Section */}
                <ShellBox id="blogs">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">cd ~/shelf/blogs</p>
          </div>
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
                      <h3 className="font-mono text-xl mb-3 text-green-400">{post.title}</h3>
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
                <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8">
                  <button
                    onClick={() => setCurrentBlogPage(p => Math.max(1, p - 1))}
                    disabled={currentBlogPage === 1}
                    className={`p-1 sm:p-2 rounded-full ${
                      currentBlogPage === 1 
                        ? 'text-neutral-700 cursor-not-allowed' 
                        : 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
                    } transition-colors`}
                  >
                    <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  
                  <div className="flex gap-1 sm:gap-2">
                    {Array.from({ length: totalBlogPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentBlogPage(page)}
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full font-mono text-xs sm:text-sm ${
                          currentBlogPage === page
                            ? 'bg-green-400 text-neutral-950'
                            : 'text-green-400 hover:bg-neutral-800'
                        } transition-colors`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentBlogPage(p => Math.min(totalBlogPages, p + 1))}
                    disabled={currentBlogPage === totalBlogPages}
                    className={`p-1 sm:p-2 rounded-full ${
                      currentBlogPage === totalBlogPages 
                        ? 'text-neutral-700 cursor-not-allowed' 
                        : 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
                    } transition-colors`}
                  >
                    <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        </ShellBox>
        
        {/* YouTube Section */}
        <ShellBox id="videos">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">cd ~/shelf/videos</p>
          </div>
          <div className="mt-8">
            {loading ? (
              <div className="text-green-400 text-center py-8">Loading videos...</div>
            ) : error ? (
                <div className="text-center py-8">
                    <p className="text-green-400 text-sm mb-3">YouTube API is not configured, but you can still watch my videos on YouTube.</p>
                    <a
                        href="https://www.youtube.com/@thevibecoder69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-mono text-sm px-4 py-2 rounded-full transition-colors"
                    >
                        Watch on YouTube →
                    </a>
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
                <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6">
                  <button
                    onClick={() => setCurrentVideoPage(p => Math.max(1, p - 1))}
                    disabled={currentVideoPage === 1}
                    className={`p-1 sm:p-2 rounded-full ${
                      currentVideoPage === 1 
                        ? 'text-neutral-700 cursor-not-allowed' 
                        : 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
                    } transition-colors`}
                  >
                    <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  
                  <div className="flex gap-1 sm:gap-2">
                    {Array.from({ length: totalVideoPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentVideoPage(page)}
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full font-mono text-xs sm:text-sm ${
                          currentVideoPage === page
                            ? 'bg-green-400 text-neutral-950'
                            : 'text-green-400 hover:bg-neutral-800'
                        } transition-colors`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentVideoPage(p => Math.min(totalVideoPages, p + 1))}
                    disabled={currentVideoPage === totalVideoPages}
                    className={`p-1 sm:p-2 rounded-full ${
                      currentVideoPage === totalVideoPages 
                        ? 'text-neutral-700 cursor-not-allowed' 
                        : 'text-green-400 hover:text-green-300 hover:bg-neutral-800'
                    } transition-colors`}
                  >
                    <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        </ShellBox>

        <ShellBox>
          <Link href="/" className="text-green-400 text-sm sm:text-base md:text-lg font-mono">
            $ cd /home
          </Link>
        </ShellBox>

        {/* Vertical Section Indicator - fixed to right center */}
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

export default DigitalShelf;