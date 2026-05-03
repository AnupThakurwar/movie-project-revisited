import { Button } from "@/components/ui/button";
import type {
  Genre,
  MovieDetail,
  WatchProviderResponse,
} from "@/interface/interface";
import { Heart, Link, Play } from "lucide-react";
import MovieDetailsWatchProvider from "./MovieDetailsWatchProvider";
import { useState } from "react";
import PlayTrailer from "../../movie-play-trailer/PlayTrailer";

const MovieDetailsHero = ({
  movieDetails,
  watchProviders,
  originalPoster,
  originalBackDropPoster,
  getReleaseYear,
}: {
  movieDetails: MovieDetail | null;
  watchProviders: WatchProviderResponse | null;
  originalPoster: string;
  originalBackDropPoster: string;
  getReleaseYear: number;
}) => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="relative w-full min-h-140 md:h-136 overflow-hidden">
      <img
        src={originalBackDropPoster}
        alt="Backdrop"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 py-10 md:h-full">
        <div className="w-48 md:w-64 shrink-0 shadow-2xl rounded-lg overflow-hidden border border-slate-700">
          <img src={originalPoster} alt="Poster" className="w-full" />
          <MovieDetailsWatchProvider data={watchProviders} region="IN" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold flex flex-col md:flex-row gap-3 items-center md:items-baseline">
            <span className="text-white">{movieDetails?.title}</span>
            <span className="text-slate-400 font-light">
              ({getReleaseYear})
            </span>
            <Button
              onClick={() =>
                movieDetails?.homepage &&
                window.open(movieDetails.homepage, "_blank")
              }
              className="hover:cursor-pointer hover:scale-105 bg-slate-800"
              title="home page"
            >
              <Link strokeWidth={3} size={18} />
            </Button>
          </h1>

          <p className="text-slate-300 text-sm font-normal my-2 italic">
            {movieDetails?.tagline}
          </p>

          <section className="mt-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Overview
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-3xl text-sm md:text-base">
              {movieDetails?.overview}
            </p>
          </section>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-xs md:text-sm text-slate-300">
            <span className="px-2 py-0.5 border border-slate-500 rounded text-[10px]">
              {movieDetails?.releases?.countries?.[0]?.certification}
            </span>
            <span>{movieDetails?.release_date}</span>
            <div className="flex gap-2">
              {movieDetails?.genres.map((m: Genre) => (
                <span
                  key={m.id}
                  className="bg-slate-800 px-3 py-1 rounded-full text-[10px]"
                >
                  {m.name}
                </span>
              ))}
            </div>
            <span className="font-mono text-blue-400">
              {`${Math.round((movieDetails?.runtime ?? 0) / 60)}h ${Math.floor((movieDetails?.runtime ?? 0) % 60)}m`}
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                {Math.abs(movieDetails?.vote_average ?? 0).toFixed(2)}
              </span>
              <span className="text-[10px] uppercase text-slate-400">
                User Rating
              </span>
            </div>
            <div className="flex gap-3">
              <Button className="p-3 hover:cursor-pointer rounded-full bg-radial from-purple-500/40 via-pink-400/40 to-red-500/40 transition-colors hover:bg-blue-500">
                <Heart fill="pink" />
              </Button>
              <Button
                onClick={() => setShowTrailer(true)}
                className="flex items-center hover:cursor-pointer gap-2 px-6 py-3 bg-linear-to-tr from-purple-500/40 via-pink-500/40 to-red-500/40 rounded-full font-bold hover:bg-blue-500 transition-colors text-white"
              >
                <Play className="text-white" fill="white" />
                Play Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PlayTrailer
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
        movieDetails={movieDetails}
      />
    </div>
  );
};
export default MovieDetailsHero;
