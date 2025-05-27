import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import CarouselBanner from "@/components/CaroselBanner"; 
import MovieContainer from "@/components/MovieContainer";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBanner />
      <div className="flex flex-col space-y-2">
        <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={topRatedMovies} title="Top Rated" />
        <MovieContainer movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
