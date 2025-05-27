import { Movie } from "../../type";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MovieContainer = ({ title, movies, isVertical }: Props) => {
  return (
    <div>
      <div className="mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        MovieContainer
      </div>
    </div>
  );
};

export default MovieContainer;
