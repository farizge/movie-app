import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "6cd9178e895d7ed836f42e9744401070";

function SearchPage() {
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const debounceSearch = useDebounce(search, 500);

    const { data, isLoading } = useQuery({
        queryKey: ["search", debounceSearch],
        queryFn: async () => {
            const response = await axios.get(
                `${baseUrl}/search/movie?query=${search}&api_key=${apiKey}`
            );
            return response.data.results;
        },
    });

    return (
        <main className="flex flex-col items-center gap-8 mx-4 my-10">
            <SearchBar handleSearch={handleSearch} terms={search} />
            {isLoading ? (
                <div className="mt-[10rem]">
                    <Loader />
                </div>
            ) : (
                <SearchList searchResult={data} />
            )}
        </main>
    );
}

export default SearchPage;
