import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search-movie" element={<SearchPage />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
            <div className="magicpattern fixed left-0 top-48 -z-50 opacity-70 blur-3xl"></div>
            <div className="magicpattern2 fixed -right-40 top-0 -z-50 opacity-20 blur-3xl"></div>
        </>
    );
}

export default App;
