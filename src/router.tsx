// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import BaseLayout from "./layouts/baseLayout";
import TvShowsHome from "./pages/tvshows-home/TvShowsHome";
import MovieDetails from "./pages/movie-details/MovieDetails";
import TvShowsDetails from "./pages/tv-shows-details/TvShowsDetails";
import MovieCollection from "./pages/movie-collection/MovieCollection";
const MovieHome = lazy(() => import("@/pages/movie-home/MovieHome"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MovieHome /> },
      { path: "movies/:movieId", element: <MovieDetails /> },
      { path: "tvshows", element: <TvShowsHome /> },
      { path: "tvshows/:showId", element: <TvShowsDetails /> },
      {
        path: "collection/:movieId/:collectionId",
        element: <MovieCollection />,
      },
      //   { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <div>404 - Not Found</div> },
    ],
  },
]);
