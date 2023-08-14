import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav>
            <h1 className="bg-primary">LOGO</h1>
            <ul>
                <li>New Release</li>
                <li>Trending</li>
                <li>Movies</li>
                <li>TV Series</li>
                <li>Discover</li>
            </ul>
            <SearchBar />
        </nav>
    );
}

export default Navbar;
