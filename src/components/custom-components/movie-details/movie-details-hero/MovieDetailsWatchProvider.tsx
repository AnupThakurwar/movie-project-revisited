import { Label } from "@/components/ui/label";
import { POSTER_SIZE } from "@/constants/constants";
import type {
  RegionalProviders,
  WatchProviderResponse,
} from "@/interface/interface";
import { getImageWithResolution } from "@/utils/utils";

interface MovieProvidersProps {
  data: WatchProviderResponse | null;
  region: "US" | "IN" | "AD";
}

const MovieDetailsWatchProvider = ({ data, region }: MovieProvidersProps) => {
  const regionalData: RegionalProviders | undefined = data?.results[region];

  if (!regionalData?.flatrate) return null;

  return (
    <div className="flex flex-col gap-4 p-1 w-full">
      <div className="flex gap-3 justify-start items-center flex-wrap p-2">
        {regionalData.flatrate.slice(0, 1).map((provider) => {
          const logoImage = getImageWithResolution(
            POSTER_SIZE.ORIGINAL,
            provider.logo_path,
          );
          return (
            <div
              key={provider.provider_id}
              title={provider.provider_name}
              onClick={() =>
                window.open(regionalData?.link, "_blank", "noopener,noreferrer")
              }
            >
              <img
                src={logoImage}
                alt={provider.provider_name}
                className="w-10 h-10 rounded-md hover:scale-110 transition-transform cursor-pointer"
              />
            </div>
          );
        })}
        <div>
          <Label className="text-sm text-gray-400">Now Steaming</Label>
          <Label className="text-xs text-gray-500">Watch Now</Label>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsWatchProvider;
