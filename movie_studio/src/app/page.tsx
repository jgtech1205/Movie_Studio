import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies, 
} from "@/lib/getMovies";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <p>Movie studio for YouTube</p>
    </main>
  );
}
