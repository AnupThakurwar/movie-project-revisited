import { CATEGORY, MOVIE_CATEGORY, POSTER_SIZE } from "@/constants/constants";
import { fetchAllMoviesThunk } from "@/features/fetch-all-movies/fetchAllMoviesThunk";
import type { Movie } from "@/interface/interface";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getImageWithResolution } from "@/utils/utils";
import { useEffect } from "react";
import MoviesListing from "../../components/custom-components/movie-listing/MoviesListing";
import MovieHero from "../../components/custom-components/movie-listing/MovieHero";
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
    movies: {
      popular: allPopularMovies,
      topRated: allTopRatedMovies,
      upcoming: allUpcomingmovies,
      nowPlaying: allNowPlayingMovies,
    },
    page,
    loading: moviesLoading,
    data,
  } = useAppSelector((state) => state.fetchAllMovies);

  //<-- Fetch all movies initially -->//
  useEffect(() => {
    const getAllMovies = async () => {
      await Promise.all([
        dispatch(
          fetchAllMoviesThunk({
            page: 1,
            category: CATEGORY.MOVIE,
            subCategory: MOVIE_CATEGORY.POPULAR,
          }),
        ),
        dispatch(
          fetchAllMoviesThunk({
            page: 1,
            category: CATEGORY.MOVIE,
            subCategory: MOVIE_CATEGORY.UPCOMING,
          }),
        ),
        dispatch(
          fetchAllMoviesThunk({
            page: 1,
            category: CATEGORY.MOVIE,
            subCategory: MOVIE_CATEGORY.TOP_RATED,
          }),
        ),
        dispatch(
          fetchAllMoviesThunk({
            page: 1,
            category: CATEGORY.MOVIE,
            subCategory: MOVIE_CATEGORY.NOW_PLAYING,
          }),
        ),
      ]);
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
          {allPopularMovies.slice(0, 1).map((movie: Movie) => {
            const originalPoster = getImageWithResolution(
              POSTER_SIZE.ORIGINAL,
              movie?.poster_path,
            );
            return (
              <MovieHero
                originalPoster={originalPoster}
                movie={movie}
                key={movie?.id}
              />
            );
          })}

          {/* Popular Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Popular Movies
          </Label>

          {/* The Popular Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allPopularMovies.slice(1).map((movie: Movie, index: number) => {
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

          {/* Popular Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Top Rated Movies
          </Label>

          {/* The Popular Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allTopRatedMovies.slice(1).map((movie: Movie, index: number) => {
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

          {/* Now playing Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Now Playing Movies
          </Label>

          {/* The Now playing Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allNowPlayingMovies
                .slice(1)
                .map((movie: Movie, index: number) => {
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

          {/* Upcoming Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Upcoming Movies
          </Label>

          {/* The Upcoming Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allUpcomingmovies.slice(1).map((movie: Movie, index: number) => {
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
