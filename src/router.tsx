// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import BaseLayout from "./layouts/baseLayout";
const MovieHome = lazy(() => import("@/pages/movieHome/MovieHome"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MovieHome /> },
      //   { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <div>404 - Not Found</div> },
    ],
  },
]);
