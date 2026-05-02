import { Skeleton } from "@/components/ui/skeleton";

const TvShowsHomeSkeleton = () => {
  const TvShowCarouselSkeleton = () => (
    <div className="space-y-4">
      {/* Section Label Skeleton */}
      <Skeleton className="h-8 w-48 bg-slate-800" />

      <div className="flex gap-4 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 shrink-0 space-y-3"
          >
            {/* Aspect ratio matching a standard movie poster (2:3) */}
            <Skeleton className="aspect-2/3 w-full rounded-xl bg-slate-800" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4 bg-slate-800" />
              <Skeleton className="h-3 w-1/2 bg-slate-800/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 w-full px-4 md:px-10 py-6 bg-slate-950">
      {/* Featured Hero Skeleton */}
      <section className="w-full">
        <Skeleton className="w-full h-100 md:h-150 rounded-3xl bg-slate-800 relative overflow-hidden">
          {/* Mocking the text content inside the hero */}
          <div className="absolute bottom-10 left-10 space-y-4 w-full max-w-lg">
            <Skeleton className="h-12 w-3/4 bg-slate-700/50" />
            <Skeleton className="h-4 w-full bg-slate-700/50" />
            <Skeleton className="h-4 w-2/3 bg-slate-700/50" />
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-12 w-32 rounded-full bg-slate-700" />
              <Skeleton className="h-12 w-12 rounded-full bg-slate-700" />
            </div>
          </div>
        </Skeleton>
      </section>

      {/* Popular Movies Carousel */}
      <TvShowCarouselSkeleton />

      {/* Top Rated Movies Carousel */}
      <TvShowCarouselSkeleton />

      {/* Now Playing Movies Carousel */}
      <TvShowCarouselSkeleton />

      {/* Upcoming Movies Carousel */}
      <TvShowCarouselSkeleton />
    </div>
  );
};

export default TvShowsHomeSkeleton;
