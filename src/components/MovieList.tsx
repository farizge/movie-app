import { useGetMovie, Category } from "../hooks/useGetMovie";
import Loader from "./Loader";
import Movie from "./Movie";

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};

function MovieList({
    category,
    titleCategory,
}: {
    category: Category;
    titleCategory: string;
}) {
    const { data, isLoading } = useGetMovie(category);
    return isLoading ? (
        <Loader />
    ) : (
        <section className="h-full w-full mb-4">
            <h1 className="text-2xl font-[600] mb-4 text-gray-400">
                {titleCategory}
            </h1>

            <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-scroll no-scrollbar">
                {data?.map((movie: Movie) => {
                    const { id, title, poster_path, vote_average } = movie;
                    return (
                        <Movie
                            key={id}
                            movie_id={id}
                            title={title}
                            poster={poster_path}
                            star={vote_average}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default MovieList;
