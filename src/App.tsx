import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search-movie" element={<Search />} />
            </Route>
        </Routes>
    );
}

export default App;
