// src/types/movie.ts

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  video: boolean;
  adult: boolean;
}

export interface MovieResponse {
  page?: number;
  results: Movie[];
  total_pages?: number;
  total_results?: number;
  subCategory?: string;
}

export interface TVShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  backdrop_path: string | null;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  softcore?: boolean;
}

export interface TVShowResponse {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
  subCategory: string;
}
