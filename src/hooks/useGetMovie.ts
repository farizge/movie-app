import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "6cd9178e895d7ed836f42e9744401070";

type Category = "popular" | "upcoming" | "now_playing" | "top_rated";

export const useGetMovie = (param: Category) => {
    return useQuery({
        queryFn: async () => {
            const response = await axios.get(
                `${baseUrl}/movie/${param}?api_key=${apiKey}`
            );
            return response.data.results;
        },
        queryKey: ["moviesData"],
    });
};

// export const useFetchProducts = ({ onError }) => {
//     return useQuery({
//       queryFn: async () => {
//         const productsResponse = await axiosInstance.get("/products");

//         return productsResponse;
//       },
//       queryKey: ["fetch.products"],
//       onError,
//     });
//   };
