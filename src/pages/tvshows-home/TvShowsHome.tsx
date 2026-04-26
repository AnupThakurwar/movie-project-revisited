import TvShowHero from "@/components/custom-components/tvshow-listing/TvShowHero";
import TvShowListing from "@/components/custom-components/tvshow-listing/TvShowListing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { CATEGORY, POSTER_SIZE, TV_CATEGORY } from "@/constants/constants";
import { fetchAllTvShowsThunk } from "@/features/fetch-all-tv-shows/fetchAllTvShowsThunk";
import type { TVShow } from "@/interface/interface";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getImageWithResolution } from "@/utils/utils";
import { useEffect } from "react";

const TvShowsHome = () => {
  const dispatch = useAppDispatch();
  const {
    tvShows: {
      popular: allPopularTvShows,
      topRated: allTopRatedTvShows,
      airingToday: allAiringTodayTvShows,
      onTheAir: allOnTheAirTvShows,
    },
    page,
    loading: tvShowsLoading,
    data,
  } = useAppSelector((state) => state.fetchAllTvShows);

  console.log(allTopRatedTvShows, "allTopRatedTvShows");

  //<-- Fetch all movies initially -->//
  useEffect(() => {
    const getAllTvShows = async () => {
      await Promise.all([
        dispatch(
          fetchAllTvShowsThunk({
            page: 1,
            category: CATEGORY.TV,
            subCategory: TV_CATEGORY.POPULAR,
          }),
        ),
        dispatch(
          fetchAllTvShowsThunk({
            page: 1,
            category: CATEGORY.TV,
            subCategory: TV_CATEGORY.AIRING_TODAY,
          }),
        ),
        dispatch(
          fetchAllTvShowsThunk({
            page: 1,
            category: CATEGORY.TV,
            subCategory: TV_CATEGORY.TOP_RATED,
          }),
        ),
        dispatch(
          fetchAllTvShowsThunk({
            page: 1,
            category: CATEGORY.TV,
            subCategory: TV_CATEGORY.ON_THE_AIR,
          }),
        ),
      ]);
    };
    getAllTvShows();
  }, []);
  return (
    <div>
      {tvShowsLoading ? (
        <div>loading</div>
      ) : (
        <div className="flex flex-col gap-6 w-full px-4 md:px-10">
          {/* Featured Hero (Single Item) */}
          {allPopularTvShows.slice(0, 1).map((shows: TVShow) => {
            const originalPoster = getImageWithResolution(
              POSTER_SIZE.ORIGINAL,
              shows?.poster_path,
            );
            return (
              <TvShowHero
                originalPoster={originalPoster}
                show={shows}
                key={shows?.id}
              />
            );
          })}

          {/* Popular Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Popular Tv Shows
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
              {allPopularTvShows
                .slice(1)
                .map((movie: TVShow, index: number) => {
                  return (
                    // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                    <CarouselItem
                      key={movie.id}
                      className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                    >
                      <TvShowListing
                        index={index}
                        show={movie}
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
            Top Rated Tv Shows
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
              {allTopRatedTvShows
                .slice(1)
                .map((shows: TVShow, index: number) => {
                  return (
                    // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                    <CarouselItem
                      key={shows.id}
                      className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                    >
                      <TvShowListing
                        index={index}
                        show={shows}
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

          {/* On the Air Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            On the Air Shows
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
              {allOnTheAirTvShows
                .slice(1)
                .map((shows: TVShow, index: number) => {
                  return (
                    // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                    <CarouselItem
                      key={shows.id}
                      className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                    >
                      <TvShowListing
                        index={index}
                        show={shows}
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

          {/* Airing Today Section Label */}
          <Label className="text-white font-bold text-2xl pt-4 capitalize tracking-wide">
            Airing Today Tv shows
          </Label>

          {/* The Airing Today Carousel Container */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allAiringTodayTvShows
                .slice(1)
                .map((shows: TVShow, index: number) => {
                  return (
                    // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                    <CarouselItem
                      key={shows.id}
                      className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                    >
                      <TvShowListing
                        index={index}
                        show={shows}
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

export default TvShowsHome;
