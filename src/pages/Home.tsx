import MovieList from "../components/MovieList";

function Home() {
    return (
        <>
            <MovieList category="popular" />
            <MovieList category="upcoming" />
            <MovieList category="now_playing" />
            <MovieList category="top_rated" />
        </>
    );
}

export default Home;
