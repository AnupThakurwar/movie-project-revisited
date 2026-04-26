// Define as const objects to ensure values are read-only and literal
export const CATEGORY = {
  TV: "tv",
  MOVIE: "movie",
} as const;

export const MOVIE_CATEGORY = {
  POPULAR: "popular",
  NOW_PLAYING: "now_playing",
  TOP_RATED: "top_rated",
  UPCOMING: "upcoming",
  TRENDING: "trending",
} as const;

export const TV_CATEGORY = {
  POPULAR: "popular",
  AIRING_TODAY: "airing_today",
  ON_THE_AIR: "on_the_air",
  TOP_RATED: "top_rated",
} as const;

export const POSTER_SIZE = {
  TINY: "w92",
  SMALL: "w154",
  MEDIUM: "w185",
  LARGE: "w342",
  EXTRA_LARGE: "w500",
  HUGE: "w780",
  ORIGINAL: "original",
} as const;

export const BACKDROP_SIZE = {
  SMALL: "w300",
  MEDIUM: "w780",
  LARGE: "w1280",
  ORIGINAL: "original",
} as const;

export const PROFILE_SIZE = {
  SMALL: "w45",
  MEDIUM: "w185",
  LARGE: "h632",
  ORIGINAL: "original",
} as const;

export const LOGO_SIZE = {
  TINY: "w45",
  SMALL: "w92",
  MEDIUM: "w154",
  LARGE: "w185",
  XL: "w300",
  XXL: "w500",
  ORIGINAL: "original",
} as const;

// --- Helper Types (Optional but recommended for Props) ---
export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];
export type MovieCategory =
  (typeof MOVIE_CATEGORY)[keyof typeof MOVIE_CATEGORY];
export type PosterSize = (typeof POSTER_SIZE)[keyof typeof POSTER_SIZE];
