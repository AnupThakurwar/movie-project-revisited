import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { POSTER_SIZE } from "@/constants/constants";
import type { Cast, MovieDetail } from "@/interface/interface";
import { getImageWithResolution } from "@/utils/utils";

const MovieDetailsCrewListing = ({
  movieDetails,
}: {
  movieDetails: MovieDetail | null;
}) => {
  return (
    <section>
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold">Top Billed Cast</h2>
        <button className="text-sm text-blue-400 hover:underline">
          Full Cast & Crew
        </button>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4">
          {movieDetails?.credits.cast
            .slice(0, 11)
            .map((cast: Cast, index: number) => {
              const getCastImages = getImageWithResolution(
                POSTER_SIZE.ORIGINAL,
                cast.profile_path,
              );
              return (
                // basis-1/2 (mobile: 2 cards), basis-1/4 (tablet: 4), basis-1/6 (desktop: 6)
                <CarouselItem
                  key={cast.id}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div
                    key={cast.id}
                    className="min-w-37.5 h-60 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg"
                  >
                    {
                      <img
                        src={
                          cast.profile_path !== null
                            ? getCastImages
                            : import.meta.env.VITE_FALLBACK_IMAGE
                        }
                        alt="Cast"
                        className="w-full h-44 object-cover"
                      />
                    }

                    <div className="p-3">
                      <p
                        className="font-bold text-sm truncate"
                        title={cast.name}
                      >
                        {cast.name}
                      </p>
                      <p
                        className="text-xs text-slate-400 truncate"
                        title={cast.character}
                      >
                        {cast.character} ({cast.known_for_department})
                      </p>
                    </div>
                  </div>
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
    </section>
  );
};

export default MovieDetailsCrewListing;
