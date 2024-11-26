import { useState } from "react";

import { useDispatch } from "react-redux";
import watchlistSlice from "../../redux/movie/watchlistSlice";

const actions = watchlistSlice.actions;
const Moviecard = ({
  movie,
  fav,
  title,
  imgURL,
  rating,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();


  const handleClick = (movie) => {
    setSelectedItem(movie);
  };
  const handleMouseLeave = () => {
    setSelectedItem(null);
  };
  return (
  <div 
  className="relative hover:scale-110 duration-300 cursor-pointer ml-8 mr-8 m-4 rounded-[1rem] z-10 overflow-visible"
  onClick={() => handleClick(movie)}
  onMouseLeave = {handleMouseLeave}
  
>
  {selectedItem && (
    <div 
      className={`absolute bg-gray-200 rounded-lg shadow-lg z-[100] overflow-visible transform -translate-x-1/2`}
      style={{
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        minWidth: '250px',
        maxWidth: '300px',
        width: '80vw',
        minHeight: '200px',
        maxHeight: '220px', 
        height:'60vh'
      }}
    >
      <div className="relative h-full w-full p-4 flex flex-col">
      <img 
        src={`https://image.tmdb.org/t/p/original${imgURL}`} 
        alt="" 
        className="rounded-lg w-full h-full opacity-50 object-cover absolute top-0 left-0"
      />
      <div className="relative z-10 font-bold text-lg mb-2">
        {movie.title}
      </div>
      <div className="relative z-10 text-xs">
        {movie.overview}
      </div>
      <div className="absolute z-20 top-[-15px] left-4 rounded-full bg-slate-900 p-2 text-sm border-4 border-rose-900">
          {Math.round(rating * 10) / 10}
        </div>
    </div>
    </div>
  )}
      <img
        className="h-[18rem] w-[13rem] object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/original${imgURL}`}
        alt={title}
      />
      <div className="absolute left-0 bottom-0 w-full bg-slate-900 opacity-70 rounded-b-lg">
        <p className="text-center text-white text-lg p-2 whitespace-normal">
          {title}
        </p>
        <div className="w-10 border-4 border-rose-900 absolute top-[-35px] left-4 rounded-[100%] p-2 text-sm bg-slate-900 text-center">
          {Math.round(rating * 10) / 10}
        </div>
      </div>
      <div class=" absolute top-2 right-2">
        {fav ? (
          <img
            onClick={(e) =>{
              e.stopPropagation()
             dispatch(actions. removeFromWatchlist(movie))
            } }
            className="h-9 "
            src="/v.png"
            alt="  Loading..."
          />
        ) : (
          <img
            onClick={(e) => {
              e.stopPropagation()
              dispatch(actions.addToWatchlist(movie))
            } }
            className="h-8 "
            src="/cb.png"
            alt="Loading..."
          />
        )}
      </div>
    </div>
  );
};

export default Moviecard;
