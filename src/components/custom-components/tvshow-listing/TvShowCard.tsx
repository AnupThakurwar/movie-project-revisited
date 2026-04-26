import { Button } from "@/components/ui/button";
import type { TVShow } from "@/interface/interface";
import { Star } from "lucide-react";

interface ShowCardProps {
  posterUrl: string;
  show: TVShow;
  releaseYear: string | number;
}
const TvShowCard = ({ posterUrl, show, releaseYear }: ShowCardProps) => {
  return (
    <div className="group relative flex flex-col gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Image Card Container */}
      <div className="relative aspect-2/3 overflow-hidden rounded-lg bg-gray-900 shadow-lg">
        <img
          src={posterUrl}
          alt={show?.name}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          loading="lazy"
        />

        {/* Rating Badge Overlay */}
        <div className="absolute top-2 right-2 rounded bg-black/60 px-2 py-1 text-xs font-bold text-yellow-400 backdrop-blur-md">
          <Star /> {show?.vote_average?.toFixed(1)}
        </div>

        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant={"secondary"}
            className="mb-2 w-full rounded bg-white py-1.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Metadata Below Card */}
      <div className="px-1">
        <h3 className="truncate text-sm font-semibold text-white group-hover:text-red-500">
          {show?.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{releaseYear}</span>
          <span className="h-1 w-1 rounded-full bg-gray-600"></span>
          <span className="uppercase">{show?.original_language}</span>
        </div>
      </div>
    </div>
  );
};

export default TvShowCard;
