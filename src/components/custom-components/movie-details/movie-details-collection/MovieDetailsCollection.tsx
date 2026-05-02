import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { POSTER_SIZE } from "@/constants/constants";
import type { MovieCollection } from "@/interface/interface";
import { getImageWithResolution } from "@/utils/utils";

const MovieDetailsCollection = ({
  collectionDetails,
}: {
  collectionDetails: MovieCollection | null;
}) => {
  const originalBackdrop = getImageWithResolution(
    POSTER_SIZE.ORIGINAL,
    collectionDetails?.backdrop_path ?? "",
  );
  return collectionDetails ? (
    <section>
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold">Collection</h2>
      </div>
      <div
        id="collection-container"
        className="container relative h-56 w-full border border-gray-400 rounded-md"
      >
        <div className="absolute w-full h-full bg-linear-30 from-slate-900 via-slate-800 to-transparent flex flex-col gap-3 justify-center p-2">
          <Label className="text-3xl">{`Part of ${collectionDetails?.name}`}</Label>
          <Label className="text-base">{collectionDetails?.overview}</Label>
          <Button
            variant={"secondary"}
            className="text-black/80 z-20 w-fit h-10 font-semibold bg-linear-0 from-purple-500/40 via-pink-500/40 to-red-500/40 hover:cursor-pointer hover:bg-blue-500"
            onClick={() => alert("hi")}
          >
            View Collection
          </Button>
        </div>
        <img
          src={originalBackdrop}
          alt="collection image"
          className="h-full w-full object-cover object-top opacity-20"
        />
      </div>
    </section>
  ) : null;
};

export default MovieDetailsCollection;
