export const getImageWithResolution = (
  imageResoltion: string | number,
  imageCategory: string,
) => `https://image.tmdb.org/t/p/${imageResoltion}${imageCategory}`;

export const getTrailerKeyFromMovie = (movieObject: any) => {
  const trailerVideo = movieObject?.videos?.results?.find(
    (vid: any) => vid.site === "YouTube" && vid.type === "Trailer",
  );
  const videoKey = trailerVideo?.key || movieObject?.videos?.results?.[0]?.key;
  return videoKey;
};
