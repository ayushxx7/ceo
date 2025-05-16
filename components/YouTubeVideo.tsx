import { motion } from "framer-motion";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  publishedAt: string;
}

const YouTubeVideo = ({ videoId, title, publishedAt }: YouTubeVideoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-neutral-800/50 rounded-lg overflow-hidden border border-neutral-700"
    >
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-mono text-lg mb-2 text-green-400">{title}</h3>
        <p className="text-neutral-400 text-sm">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
};

export default YouTubeVideo; 