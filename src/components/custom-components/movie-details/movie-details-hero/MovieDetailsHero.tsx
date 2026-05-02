import { Button } from "@/components/ui/button";
import type {
  Genre,
  MovieDetail,
  WatchProviderResponse,
} from "@/interface/interface";
import { Heart, Link, Play } from "lucide-react";
import MovieDetailsWatchProvider from "./MovieDetailsWatchProvider";

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
  return (
    <div className="relative w-full h-136">
      <img
        src={originalBackDropPoster}
        alt="Backdrop"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />

      <div className="absolute inset-0 container mx-auto px-6 flex flex-col md:flex-row items-center md:items-center gap-8 pb-10">
        {/* Poster */}
        <div className="w-48 md:w-64 shrink-0 shadow-2xl rounded-lg overflow-hidden border border-slate-700">
          <img src={originalPoster} alt="Poster" className="w-full" />
          <MovieDetailsWatchProvider data={watchProviders} region="IN" />
        </div>

        {/* Text Details */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold flex gap-3 items-baseline">
            {movieDetails?.title}
            <span className="text-slate-400 font-light">
              ({getReleaseYear})
            </span>
            <Button
              onClick={() =>
                movieDetails?.homepage &&
                window.open(movieDetails.homepage, "_blank")
              }
              className="hover:cursor-pointer"
              title="home page"
            >
              <Link strokeWidth={3} />
            </Button>
          </h1>

          <p className="text-sm md:text-sm font-normal my-2">
            {movieDetails?.tagline}
          </p>

          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-slate-300 leading-relaxed max-w-3xl">
              {movieDetails?.overview}
            </p>
          </section>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-sm">
            <span className="px-2 py-0.5 border border-slate-500 rounded text-xs">
              {movieDetails?.releases?.countries?.[0]?.certification}
            </span>
            <span>{movieDetails?.release_date}</span>
            <div className="flex gap-2">
              {movieDetails?.genres.map((m: Genre) => (
                <span
                  key={m.id}
                  className="bg-slate-800 px-3 py-1 rounded-full text-xs"
                >
                  {m.name}
                </span>
              ))}
            </div>
            <span className="font-mono text-blue-400">
              {`${Math.round((movieDetails?.runtime ?? 0) / 60)}h ${Math.floor((movieDetails?.runtime ?? 0) % 60)}m`}
            </span>
          </div>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">
                {Math.abs(movieDetails?.vote_average ?? 0).toFixed(2)}
              </span>
              <span className="text-xs uppercase text-slate-400">
                User Rating
              </span>
            </div>
            <div className="flex gap-3">
              <Button className="p-3 hover:cursor-pointer bg-slate-800 rounded-full bg-radial from-purple-500/40 via-pink-400/40 to-red-500/40 transition-colors hover:bg-blue-500">
                <Heart fill="pink" />
              </Button>
              <Button className="flex items-center hover:cursor-pointer gap-2 px-6 py-3 bg-linear-to-tr from-purple-500/40 via-pink-500/40 to-red-500/40 rounded-full font-bold hover:bg-blue-500 transition-colors">
                <Play className="text-white" fill="white" />
                Play Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
