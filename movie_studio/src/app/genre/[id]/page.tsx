// src/app/genre/[id]/page.tsx

import MovieContainer from "@/components/MovieContainer";
import { getMoviesByGenre } from "@/lib/getMovies";

interface PageProps {
  params: { id: string }; // 👈 Match your folder name [id]
  searchParams: { genre?: string };
}

const GenrePage = async ({ params, searchParams }: PageProps) => {
  const movies = await getMoviesByGenre(params.id);

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mb-5">
        Results for {searchParams?.genre || "Unknown Genre"}
      </h2>
      <MovieContainer movies={movies} title="Genre" isVertical />
    </div>
  );
};

export default GenrePage;
