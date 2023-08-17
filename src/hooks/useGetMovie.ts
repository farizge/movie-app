import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "6cd9178e895d7ed836f42e9744401070";

export type Category =
    | "popular"
    | "upcoming"
    | "now_playing"
    | "top_rated"
    | string; //this is for dynamic value of movie_id,

//it is a custom hook to fetch data from api, take "param" argument to add the specific URL, so it's reusable
export const useGetMovie = (param: Category) => {
    return useQuery({
        queryFn: async () => {
            //make get request
            const response = await axios.get(
                //API URL
                `${baseUrl}/movie/${param}?api_key=${apiKey}`
            );
            return response.data.results;
        },
        queryKey: ["moviesData", param],
    });
};
