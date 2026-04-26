import { POSTER_SIZE } from "@/constants/constants";
import type { TVShow } from "@/interface/interface";
import { getImageWithResolution } from "@/utils/utils";
import TvShowCard from "./TvShowCard";

const TvShowListing = ({
  show,
  index,
  page,
  data,
}: {
  show: TVShow;
  index: number;
  page?: string | number;
  data?: any;
}) => {
  // Use a medium resolution for grid cards to optimize performance
  const posterUrl = getImageWithResolution(
    POSTER_SIZE.LARGE,
    show?.poster_path,
  );

  const releaseYear = show?.first_air_date
    ? new Date(show.first_air_date).getFullYear()
    : "N/A";

  return (
    <>
      <TvShowCard posterUrl={posterUrl} show={show} releaseYear={releaseYear} />
    </>
  );
};

export default TvShowListing;
