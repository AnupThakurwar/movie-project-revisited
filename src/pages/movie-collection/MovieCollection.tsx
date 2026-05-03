import MovieCollectionCast from "@/components/custom-components/movie-collection/movie-collection-hero/MovieCollectionCast";
import MovieCollectionHero from "@/components/custom-components/movie-collection/movie-collection-hero/MovieCollectionHero";
import { POSTER_SIZE } from "@/constants/constants";
import { fetchMovieCollection } from "@/features/fetch-movies-by-collection/FetchMoviesByCollectionThunk";
import { fetchMoviesByIdThunk } from "@/features/fetch-movies-by-id/fetchMoviesByIdThunk";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getImageWithResolution } from "@/utils/utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieCollectionSkeleton } from "./MovieCollectionSkeleton";

const MovieCollection = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { collection: collectionDetails, loading: collectionLoading } =
    useAppSelector((state) => state.fetchMovieByCollection);
  const { movie: movieDetails } = useAppSelector(
    (state) => state.fetchMoviesById,
  );

  const originalBackDrop = getImageWithResolution(
    POSTER_SIZE.ORIGINAL,
    collectionDetails?.backdrop_path ?? "",
  );
  const originalPoster = getImageWithResolution(
    POSTER_SIZE.ORIGINAL,
    collectionDetails?.poster_path ?? "",
  );
  console.log(
    collectionDetails,
    collectionLoading,
    params,
    movieDetails,
    "collection",
  );

  useEffect(() => {
    if (params) {
      const getCollection = async () => {
        await Promise.all([
          dispatch(
            fetchMovieCollection({
              collectionId: params?.collectionId?.toString() ?? "",
            }),
          ),
          dispatch(
            fetchMoviesByIdThunk({
              id: params?.movieId?.toString() ?? "",
            }),
          ),
        ]);
      };
      getCollection();
    }
  }, [dispatch, params]);

  const cast = movieDetails?.credits?.cast;
  const crew = movieDetails?.credits?.crew;

  return collectionLoading ? (
    <MovieCollectionSkeleton />
  ) : (
    <div className="min-h-screen bg-slate-900 font-sans antialiased">
      {/* Hero Section */}
      <MovieCollectionHero
        movieCollection={collectionDetails}
        originalPoster={originalPoster}
        originalBackDropPoster={originalBackDrop}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <MovieCollectionCast castORCrew={cast ?? []} label={"Featured Cast"} />
        <MovieCollectionCast castORCrew={crew ?? []} label={"Featured Crew"} />
        {/* <CrewSection /> */}
      </main>
    </div>
  );
};

export default MovieCollection;
