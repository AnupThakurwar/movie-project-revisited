import { CATEGORY, MOVIE_CATEGORY, POSTER_SIZE } from "@/constants/constants";
import { fetchAllMoviesThunk } from "@/features/fetchAllMovies/fetchAllMoviesThunk";
import { fetchMoviesByIdThunk } from "@/features/fetchMoviesById/fetchMoviesByIdThunk";
import type { Movie } from "@/interface/interface";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getImageWithResolution, getTrailerKeyFromMovie } from "@/utils/utils";
import { useEffect } from "react";
import MoviesListing from "../movieListing/MoviesListing";
import MovieHero from "../movieListing/MovieHero";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MovieHome = () => {
  const dispatch = useAppDispatch();
  const {
    movies: allTrendingMovies,
    page,
    loading: moviesLoading,
    data,
  } = useAppSelector((state) => state.fetchAllMovies);

  console.log(allTrendingMovies, data, "o");

  //<-- Fetch all movies initially -->//
  useEffect(() => {
    const getAllMovies = async () => {
      await dispatch(
        fetchAllMoviesThunk({
          page: 1,
          category: CATEGORY.MOVIE,
          subCategory: MOVIE_CATEGORY.POPULAR,
        })
      );
    };
    getAllMovies();
  }, []);

  return (
    <div>
      {moviesLoading ? (
        <div>loading</div>
      ) : (
        <div className="flex flex-col gap-6 w-full px-4 md:px-10">
          {/* Featured Hero (Single Item) */}
          {allTrendingMovies.slice(0, 1).map((movie: Movie) => {
            const originalPoster = getImageWithResolution(
              POSTER_SIZE.ORIGINAL,
              movie?.poster_path
            );
            return (
              <MovieHero
                originalPoster={originalPoster}
                movie={movie}
                key={movie?.id}
              />
            );
          })}

          {/* Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Popular Movies
          </Label>

          {/* The Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allTrendingMovies.slice(1).map((movie: Movie, index: number) => {
                return (
                  // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                  <CarouselItem
                    key={movie.id}
                    className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    <MoviesListing
                      index={index}
                      movie={movie}
                      page={page}
                      data={data}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation - Hidden on small screens for better UX */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-6 bg-black/50 border-none text-white hover:bg-red-600" />
              <CarouselNext className="-right-6 bg-black/50 border-none text-white hover:bg-red-600" />
            </div>
          </Carousel>

          {/* Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Trending Movies
          </Label>

          {/* The Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allTrendingMovies.slice(1).map((movie: Movie, index: number) => {
                return (
                  // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                  <CarouselItem
                    key={movie.id}
                    className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    <MoviesListing
                      index={index}
                      movie={movie}
                      page={page}
                      data={data}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation - Hidden on small screens for better UX */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-6 bg-black/50 border-none text-white hover:bg-red-600" />
              <CarouselNext className="-right-6 bg-black/50 border-none text-white hover:bg-red-600" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default MovieHome;
