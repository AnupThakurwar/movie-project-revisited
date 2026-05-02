import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <main>
        {/* Hero Section Skeleton */}
        <div className="relative w-full h-125 overflow-hidden bg-slate-950/50">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />

          <div className="absolute inset-0 container mx-auto px-4 flex flex-col md:flex-row items-center md:items-end gap-8 pb-10 z-20">
            {/* Poster Skeleton */}
            <Skeleton className="w-48 h-72 md:w-64 md:h-96 shrink-0 rounded-lg border border-slate-700 bg-slate-800" />

            {/* Text Details Skeleton */}
            <div className="flex-1 w-full space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <Skeleton className="h-10 md:h-12 w-3/4 mx-auto md:mx-0 bg-slate-800" />
                <Skeleton className="h-6 w-1/4 mx-auto md:mx-0 bg-slate-800/50" />
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
                <Skeleton className="h-6 w-10 bg-slate-800" />
                <Skeleton className="h-6 w-24 bg-slate-800" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full bg-slate-800" />
                  <Skeleton className="h-6 w-16 rounded-full bg-slate-800" />
                </div>
                <Skeleton className="h-6 w-12 bg-slate-800" />
              </div>

              <div className="mt-6 flex items-center justify-center md:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-12 bg-slate-800" />
                  <Skeleton className="h-4 w-20 bg-slate-800" />
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-12 w-12 rounded-full bg-slate-800" />
                  <Skeleton className="h-12 w-36 rounded-full bg-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections Skeleton */}
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-12">
            {/* Overview Skeleton */}
            <section>
              <Skeleton className="h-8 w-32 bg-slate-800 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full bg-slate-800/60" />
                <Skeleton className="h-4 w-full bg-slate-800/60" />
                <Skeleton className="h-4 w-4/5 bg-slate-800/60" />
              </div>
            </section>

            {/* Cast Horizontal Scroll Skeleton */}
            <section>
              <div className="flex justify-between items-end mb-6">
                <Skeleton className="h-8 w-48 bg-slate-800" />
                <Skeleton className="h-4 w-24 bg-slate-800/50" />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="min-w-37.5 bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700"
                  >
                    <Skeleton className="w-full h-44 rounded-none bg-slate-800" />
                    <div className="p-3 space-y-2">
                      <Skeleton className="h-4 w-20 bg-slate-800" />
                      <Skeleton className="h-3 w-16 bg-slate-800/50" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info Skeleton */}
          <aside className="space-y-8 bg-slate-800/30 p-6 rounded-2xl border border-slate-700 h-fit">
            <div className="grid grid-cols-1 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-24 bg-slate-800" />
                  <Skeleton className="h-4 w-32 bg-slate-800/50" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
