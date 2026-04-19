import { POSTER_SIZE } from "@/constants/constants";
import type { Movie } from "@/interface/interface";
import { getImageWithResolution } from "@/utils/utils";
import MovieCard from "./MovieCard";

const MoviesListing = ({
  movie,
  index,
  page,
  data,
}: {
  movie: Movie;
  index: number;
  page?: string | number;
  data?: any;
}) => {
  // Use a medium resolution for grid cards to optimize performance
  const posterUrl = getImageWithResolution(
    POSTER_SIZE.LARGE,
    movie?.poster_path
  );

  const releaseYear = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <>
      <MovieCard
        posterUrl={posterUrl}
        movie={movie}
        releaseYear={releaseYear}
      />
    </>
  );
};

export default MoviesListing;
