import { fetchMovieCollection } from "@/features/fetch-movies-by-collection/FetchMoviesByCollectionThunk";
import {
  fetchMoviesByIdThunk,
  fetchMoviesByIdWatchProviderThunk,
} from "@/features/fetch-movies-by-id/fetchMoviesByIdThunk";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsSkeleton from "./MovieSkeleton";
import { getImageWithResolution } from "@/utils/utils";
import { POSTER_SIZE } from "@/constants/constants";
import MovieDetailsHero from "@/components/custom-components/movie-details/movie-details-hero/MovieDetailsHero";
import MovieDetailsCrewListing from "@/components/custom-components/movie-details/movie-details-crewlisting/MovieDetailsCrewListing";
import MovieDetailsSidebar from "@/components/custom-components/movie-details/movie-details-sidebar/MovieDetailsSidebar";
import MovieDetailsCollection from "@/components/custom-components/movie-details/movie-details-collection/MovieDetailsCollection";
import { resetCollection } from "@/features/fetch-movies-by-collection/FetchMoviesByCollectionSlice";

const MovieDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { movieId } = params;
  const {
    movie: movieDetails,
    loading: movieDetailsLoading,
    watchProviders,
  } = useAppSelector((state) => state.fetchMoviesById);
  const { collection } = useAppSelector(
    (state) => state.fetchMovieByCollection,
  );
  const originalBackDropPoster = getImageWithResolution(
    POSTER_SIZE.ORIGINAL,
    movieDetails?.backdrop_path ?? "",
  );
  const originalPoster = getImageWithResolution(
    POSTER_SIZE.ORIGINAL,
    movieDetails?.poster_path ?? "",
  );

  useEffect(() => {
    const getAllMoviesById = async () => {
      dispatch(resetCollection());
      if (movieId) {
        try {
          // <-- get movie by Id -->
          const response = await dispatch(
            fetchMoviesByIdThunk({ id: movieId }),
          ).unwrap();
          if (response && response.id) {
            dispatch(fetchMoviesByIdWatchProviderThunk({ id: response.id }));
          }
          if (response && response?.belongs_to_collection) {
            const hasCollectionId = response.belongs_to_collection;
            if (hasCollectionId !== null) {
              // <-- get movie by collection Id -->
              dispatch(
                fetchMovieCollection({ collectionId: hasCollectionId.id }),
              );
            }
          }
        } catch (error) {}
      }
    };
    getAllMoviesById();
  }, [dispatch, movieId]);

  const getReleaseYear = new Date(
    movieDetails?.release_date ?? "",
  ).getFullYear();

  return movieDetailsLoading ? (
    <MovieDetailsSkeleton />
  ) : (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-2">
      <main>
        {/* Hero Section / Details */}
        <MovieDetailsHero
          movieDetails={movieDetails}
          watchProviders={watchProviders}
          originalPoster={originalPoster}
          originalBackDropPoster={originalBackDropPoster}
          getReleaseYear={getReleaseYear}
        />

        {/* Content Sections */}
        <div className="container mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-12">
            {/* Cast - Horizontal Scroll */}
            <MovieDetailsCrewListing movieDetails={movieDetails} />
            <MovieDetailsCollection collectionDetails={collection} />
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-8 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 h-fit">
            <MovieDetailsSidebar movieDetails={movieDetails} />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
