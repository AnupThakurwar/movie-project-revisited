import type { MovieDetail } from "@/interface/interface";
import { getTrailerKeyFromMovie } from "@/utils/utils";
import { X } from "lucide-react";
import type { SetStateAction } from "react";

const PlayTrailer = ({
  movieDetails,
  showTrailer,
  setShowTrailer,
}: {
  movieDetails: MovieDetail | null;
  showTrailer: boolean;
  setShowTrailer: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const youTubeKey = getTrailerKeyFromMovie(movieDetails);
  if (!youTubeKey) return null;
  return showTrailer ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
        <button
          onClick={() => setShowTrailer(false)}
          className="absolute top-10 right-4 z-50 p-2 bg-radial from-purple-500/40 via-pink-400/40 to-red-500/40 hover:bg-blue-500 text-white rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <iframe
          title="Movie Trailer"
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youTubeKey}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ) : null;
};

export default PlayTrailer;
