import SearchBar from "./SearchBar";

function Header() {
    return (
        <header className="w-full flex flex-col gap-4 lg:items-center">
            <h1 className="text-xl font-bold ">
                Find Movies, TV Series, and More
            </h1>
            <SearchBar />
        </header>
    );
}

export default Header;
