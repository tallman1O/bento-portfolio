import { useSpotify } from "@/app/hooks/useSpotify";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SpotifyNowPlayingProps {
  onLoad?: () => void;
}

export const SpotifyNowPlaying = ({ onLoad }: SpotifyNowPlayingProps) => {
  const { track, isLoading, error } = useSpotify();

  useEffect(() => {
    if (!isLoading && onLoad) {
      onLoad();
    }
  }, [isLoading, onLoad]);

  if (isLoading) {
    return (
      <div className="w-full h-24 bg-transparent rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !track) {
    return (
      <div className="w-full h-24 bg-transparent rounded-lg flex items-center justify-center">
        <p className="text-white/50">Featured track unavailable</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center gap-4 p-4"
    >
      <div className="relative w-48 h-48 group">
        <Image
          src={track.album.images[0]?.url || "/spotify-placeholder.png"}
          alt={track.name}
          fill
          className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Link
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform">
            <Play className="w-5 h-5 text-white" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center text-center">
        <Link
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline text-lg font-medium"
        >
          {track.name}
        </Link>
        <p className="text-white/50 text-sm">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </motion.div>
  );
};
