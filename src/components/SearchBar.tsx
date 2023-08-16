import { FiSearch } from "react-icons/fi";

function SearchBar() {
    return (
        <div className="relative max-w-xl w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 z-50 font-medium">
                <FiSearch />
            </span>
            <input
                type="text"
                placeholder="Search Movies, TV Series"
                className="indent-5 input-accent border-none input w-full input-md md:max-w-xl rounded-full bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
            />
        </div>
    );
}

export default SearchBar;
