const MovieCollectionHero = ({
  movieCollection,
  originalBackDropPoster,
  originalPoster,
}: {
  movieCollection: any | null;
  originalBackDropPoster: string;
  originalPoster: string;
}) => {
  return (
    <div className="relative w-full border-b border-black overflow-hidden">
      <img
        src={originalBackDropPoster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="relative z-10 w-full h-full bg-black/70 md:bg-gradient-to-r md:from-black md:via-black/90 md:to-black/20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
          <div className="shrink-0 shadow-2xl rounded-lg overflow-hidden border border-white/10 w-44 md:w-75 bg-gray-900">
            <img
              src={originalPoster}
              alt={movieCollection?.name || "Poster"}
              className="w-full h-auto block"
            />
          </div>

          <div className="flex flex-col justify-center text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {movieCollection?.name}
            </h1>

            <div className="space-y-4">
              <section>
                <h3 className="text-lg md:text-xl font-semibold italic opacity-90 mb-1">
                  Overview
                </h3>
                <p className="max-w-3xl text-sm md:text-base leading-relaxed opacity-80">
                  {movieCollection?.overview}
                </p>
              </section>

              <div className="flex items-center justify-center md:justify-start gap-8 pt-6 border-t border-white/10 max-w-sm mx-auto md:mx-0">
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                    Movies
                  </p>
                  <p className="text-xl font-semibold">
                    {movieCollection?.parts.length}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-1">
                    Language
                  </p>
                  <span className="text-xs border border-white/40 px-2 py-0.5 rounded uppercase font-mono">
                    {movieCollection?.original_language}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCollectionHero;
