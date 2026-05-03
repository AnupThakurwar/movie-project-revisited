import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { POSTER_SIZE } from "@/constants/constants";
import type { MovieCollection } from "@/interface/interface";
import { useAppSelector } from "@/store/hook";
import { getImageWithResolution } from "@/utils/utils";
import { useNavigate } from "react-router-dom";

const MovieDetailsCollection = ({
  collectionDetails,
}: {
  collectionDetails: MovieCollection | null;
}) => {
  const navigate = useNavigate();
  const originalBackdrop = getImageWithResolution(
    POSTER_SIZE.ORIGINAL,
    collectionDetails?.backdrop_path ?? "",
  );
  const { movie: movieDetails } = useAppSelector(
    (state) => state.fetchMoviesById,
  );

  return collectionDetails ? (
    <section className="my-8">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold">Collection</h2>
      </div>

      <div
        id="collection-container"
        className="relative min-h-[300px] md:h-64 w-full border-2 border-gray-400 rounded-md overflow-hidden bg-slate-900"
      >
        {/* Background Image */}
        <img
          src={originalBackdrop}
          alt="collection image"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-30 md:opacity-20"
        />

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full bg-linear-to-b md:bg-linear-30 from-slate-950 via-slate-900/80 to-transparent flex flex-col gap-4 justify-center p-6 md:p-10">
          <Label className="text-2xl md:text-3xl font-bold leading-tight">
            {`Part of ${collectionDetails?.name}`}
          </Label>

          <Label className="text-sm md:text-base font-normal opacity-90 max-w-2xl line-clamp-3 md:line-clamp-none">
            {collectionDetails?.overview}
          </Label>

          <Button
            variant={"secondary"}
            className="z-20 w-fit h-10 px-8 text-white bg-linear-to-tr from-purple-500/40 via-pink-500/40 to-red-500/40 rounded-full font-bold transition-colors hover:cursor-pointer hover:bg-blue-500 border-none mt-2"
            onClick={() =>
              navigate(
                `/collection/${movieDetails?.id}/${collectionDetails.id}`,
              )
            }
          >
            View Collection
          </Button>
        </div>
      </div>
    </section>
  ) : null;
};

export default MovieDetailsCollection;
