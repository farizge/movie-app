import Header from "../components/Header";
import MovieList from "../components/MovieList";

function Home() {
    return (
        <main className="flex flex-col items-center gap-8 mx-4 my-10">
            <Header />
            <MovieList category="popular" />
            <MovieList category="upcoming" />
            <MovieList category="now_playing" />
            <MovieList category="top_rated" />
        </main>
    );
}

export default Home;
