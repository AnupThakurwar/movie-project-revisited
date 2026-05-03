import { POSTER_SIZE } from "@/constants/constants";
import type { Cast, Crew } from "@/interface/interface";
import { getImageWithResolution } from "@/utils/utils";

const MovieCollectionCast = ({
  castORCrew,
  label,
}: {
  castORCrew: Cast[] | Crew[];
  label: string;
}) => {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-white">{label}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {castORCrew?.slice(0, 15).map((person: Cast | Crew) => {
          const castImage = getImageWithResolution(
            POSTER_SIZE.SMALL,
            person.profile_path,
          );
          return (
            <div
              key={person.name}
              className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer bg-gray-600/60"
            >
              {person?.profile_path !== null ? (
                <img
                  className="w-16 h-16 object-cover bg-gray-100"
                  src={castImage}
                  alt={person.name}
                />
              ) : (
                <img
                  className="w-16 h-16 object-cover bg-gray-100"
                  src={import.meta.env.VITE_FALLBACK_IMAGE}
                  alt={person.name}
                />
              )}
              <div className="p-3 flex flex-col justify-center">
                <p className="font-bold text-sm leading-tight text-white">
                  {person.name}
                </p>
                <p className="text-xs text-gray-200">
                  {person.known_for_department}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MovieCollectionCast;
