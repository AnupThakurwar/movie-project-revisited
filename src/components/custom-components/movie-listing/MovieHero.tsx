import { Button } from "@/components/ui/button";
import type { Movie } from "@/interface/interface";
import { Hash, Info, Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MovieHeroProps {
  movie: Movie;
  originalPoster: string;
}

const MovieHero = ({ movie, originalPoster }: MovieHeroProps) => {
  const navigate = useNavigate();
  return (
    <div className="group relative col-span-6 aspect-2/3 w-full h-96 overflow-hidden">
      <section
        id="content-without-hover"
        className="absolute top-0 left-0 opacity-100 text-gray-200 grid grid-cols-2"
      >
        {/* Container: Added flex and justify-end to push text to bottom */}
        <div
          id="first:section"
          className="h-96 w-full bg-linear-to-br from-black/80 via-gray-900/40 to-transparent p-6 flex flex-col justify-start gap-4"
        >
          {/* Title Area */}
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight text-white drop-shadow-md">
              {movie.title}
            </h1>
            {/* Optional: Add the Separator or a line here if needed */}
            <div className="h-1 w-20 bg-red-600 rounded-full" />
          </div>
          <div>{movie?.overview}</div>
          <div className="flex gap-3">
            <Button
              variant={"secondary"}
              className="min-w-32 cursor-pointer z-20"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <Info />
              <span>More info</span>
            </Button>
            <Button
              variant={"secondary"}
              className="min-w-32 cursor-pointer z-20"
            >
              <Play />
              <span>Play</span>
            </Button>
          </div>
        </div>
        <div
          id="second:section"
          className="h-96 w-full bg-linear-to-bl from-black/40 via-gray-900/40 to-trasparent p-6 flex flex-col justify-start items-end gap-4"
        >
          <div className="flex gap-3">
            {/* Top 10 Badge: Fixed alignment and sizing */}
            <div className="flex flex-col items-center justify-center rounded-sm bg-red-600 w-10 py-1 shadow-lg">
              <span className="flex items-center gap-0.5 font-bold text-[10px] uppercase leading-none">
                <Hash size={10} strokeWidth={3} />
                Top
              </span>
              <span className="font-bold text-xl leading-none">10</span>
            </div>
            {/* Rating star */}
            <div className="rounded w-fit bg-black/60 px-2 py-1 text-xs font-bold text-yellow-400 backdrop-blur-md">
              <Star /> {movie?.vote_average?.toFixed(1)}
            </div>
          </div>
        </div>
      </section>
      <img
        src={originalPoster}
        alt={movie?.title}
        className="h-full w-full object-cover transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  );
};

export default MovieHero;
