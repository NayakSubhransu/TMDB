import { useEffect, useState } from "react";

import { movieAPIInstance } from "../../API";
import Shimmer from "../../components/Shimmer";

const Banner = () => {
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        movieAPIInstance
            .get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`)
            .then((res) => {
                const randomIndex = Math.floor(Math.random() * res.data.results.length);
                setRandomMovie(res.data.results[randomIndex]);
            })
            .catch((error) => console.error("Error fetching movie data:", error));
    }, []);

    if (!randomMovie) return <Shimmer type="banner"/>; 

    return (
        <div className="relative">
            <img
                className="h-[32.6rem] w-full object-cover"
                src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
                alt={randomMovie.title || "Popular Movie"}
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-4xl">
                {randomMovie.title || "Popular Movie"}
            </p>
            
            {/* <input className="absolute bottom-[150px] left-1/2 transform -translate-x-1/2 w-[80%] p-3 outline-none rounded-3xl bg-black pl-6 " type="text"  placeholder=" Search for a movie"/> */}
        </div>
    );
};

export default Banner;
