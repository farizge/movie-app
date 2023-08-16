import { FaStar } from "react-icons/fa";

function Movie({
    title,
    poster,
    star,
}: {
    title: string;
    poster: string;
    star: number;
}) {
    return (
        <div className="cursor-pointer p-2 h-full w-52 md:w-60 lg:w-64 flex flex-col gap-2 overflow-hidden  bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <img
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={title}
                className="object-cover rounded-md hover:scale-105 z-20 transition-all duration-300 ease-in-out"
            ></img>
            <h2 className="text-white h-full font-medium text-lg mx-2 mt-1 ">
                {title}
            </h2>
            <div className="flex justify-between mx-2">
                <p>2022</p>
                <p className="flex-none badge badge-grey-800 font-semibold border-2 text-warning z-50 ">
                    <span className="mr-1">
                        <FaStar />
                    </span>
                    {star}
                </p>
            </div>
        </div>
    );
}

export default Movie;
