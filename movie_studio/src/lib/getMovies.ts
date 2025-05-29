import { SearchResults } from "../../type";

// Shared fetcher function
const fetcher = async (url: URL, cacheTime?: number) => {
  // Set common query params
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24, // Default 24 hours
    },
  };

  const response = await fetch(url.toString(), options);

  if (!response.ok) {
    console.error(`TMDB fetch error: ${response.statusText}`);
    throw new Error(`Failed to fetch from TMDB: ${url}`);
  }

  const data = (await response.json()) as SearchResults;
  return data;
};

// Now Playing
export const getNowPlayingMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/now_playing");
  const data = await fetcher(url);
  return data.results;
};

// Upcoming
export const getUpcomingMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetcher(url);
  return data.results;
};

// Top Rated
export const getTopRatedMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetcher(url);
  return data.results;
};

// Popular
export const getPopularMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetcher(url);
  return data.results;
};

// Discover (by genre ID or keyword)
export const getDiscoverMovies = async (id?: string, keywords?: string) => {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  if (id) url.searchParams.set("with_genres", id);
  if (keywords) url.searchParams.set("with_keywords", keywords);
  const data = await fetcher(url);
  return data.results;
};

// Get Movies by Genre
export const getMoviesByGenre = async (genreId: string) => {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("with_genres", genreId);
  const data = await fetcher(url);
  return data.results; // Return the list of movies for the specified genre
};

// Search
export const getSearchedMovies = async (term: string) => {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  const data = await fetcher(url);
  return data.results;
};

// Movie Videos
export const getMovieVideos = async (id?: string) => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos`);
  const data = await fetcher(url);
  return data.results;
};

// Movie Details
export const getMovieDetails = async (id?: string) => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
  const data = await fetcher(url);
  return data;
};
