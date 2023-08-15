import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <main className="flex flex-col items-center gap-12">
            <h1 className="text-xl font-semibold">
                Find Movies, TV Series, and More
            </h1>
            <SearchBar />
            <MovieList />
        </main>
    );
}

export default Home;
