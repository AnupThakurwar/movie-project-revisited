// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import BaseLayout from "./layouts/baseLayout";
import TvShowsHome from "./pages/tvshows-home/TvShowsHome";
const MovieHome = lazy(() => import("@/pages/movie-home/MovieHome"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MovieHome /> },
      { path: "tvshows", element: <TvShowsHome /> },
      //   { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <div>404 - Not Found</div> },
    ],
  },
]);
