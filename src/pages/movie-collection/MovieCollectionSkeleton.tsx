import { Skeleton } from "@/components/ui/skeleton";

export function MovieCollectionSkeleton() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans antialiased">
      {/* Hero Section Skeleton */}
      <div className="w-full bg-[#200b20]/10 border-b">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8">
          {/* Poster Skeleton */}
          <Skeleton className="shrink-0 mx-auto md:mx-0 w-75 h-112.5 rounded-lg" />

          {/* Info Details Skeleton */}
          <div className="flex flex-col justify-center flex-1 space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4" /> {/* Title */}
              <Skeleton className="h-4 w-1/2" /> {/* Genres/Facts */}
            </div>

            <div className="flex items-center gap-6">
              <Skeleton className="h-16 w-16 rounded-full" />{" "}
              {/* Score Circle */}
              <Skeleton className="h-10 w-32" /> {/* Play Trailer Button */}
            </div>

            <div className="space-y-3">
              <Skeleton className="h-6 w-24" /> {/* Overview Label */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="flex gap-8 pt-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {/* Cast/Crew Section 1 */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" /> {/* Section Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <CastCardSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* Cast/Crew Section 2 */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" /> {/* Section Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <CastCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-component for individual cast cards
function CastCardSkeleton() {
  return (
    <div className="flex border rounded-lg overflow-hidden p-0 h-16.5">
      <Skeleton className="w-16 h-16 rounded-none" />
      <div className="p-3 flex flex-col justify-center flex-1 space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
}
