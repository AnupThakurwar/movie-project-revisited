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

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection;
  budget: number;
  credits: { cast: Cast[]; crew: Crew[] };
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  softcore: boolean;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  releases: Releases;
  images: Images;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface Images {
  backdrops: MediaAssets[];
  logos: MediaAssets[];
  posters: MediaAssets[];
}

export interface MediaAssets {
  aspect_ratio: number;
  height: number;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
  iso_3166_1: string | null;
  iso_639_1: string | null;
}

export interface Logos {}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Releases {
  countries: Countries[];
}

export interface Countries {
  certification: string;
  descriptors: string[];
  iso_3166_1: string;
  primary: boolean;
  release_date: string;
}

export interface ProductionCountry {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

// Support interfaces
export interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ImageAsset {
  aspect_ratio: number;
  height: number;
  iso_3166_1: string | null;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MoviePart {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieCollection {
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: MoviePart[];
  images: {
    backdrops: ImageAsset[];
    posters: ImageAsset[];
  };
}

export interface WatchProvider {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface RegionalProviders {
  link: string;
  flatrate?: WatchProvider[];
  rent?: WatchProvider[];
  buy?: WatchProvider[];
}

export interface WatchProviderResponse {
  id: number;
  results: {
    [countryCode: string]: RegionalProviders;
  };
}
