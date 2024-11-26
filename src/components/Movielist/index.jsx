import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setPage } from "../../redux/paginationSlice";
import categorySlice from "../../redux/categorySlice";

const movielist = {
    1: "Trending",
    2: "Top Rated",
    3: "In Cinema",
    4: "Upcoming"
};

const actions = categorySlice.actions;


const Movielist = ({ 
}) => {
    
    const {curr} = useSelector((state) => state.categoryState);

    const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center gap-4 my-4">
            <img
                onClick={() => {
                    dispatch(setPage());
                    dispatch(actions.prevCategory())
                }}
                className="h-10  hover: transition-transform transform hover:-translate-x-1 cursor-pointer"
                src="/backArrow.png"
                alt="Previous Category"
            />
            <p className="text-center text-6xl font-bold">{movielist[curr]}</p>
            <img
                onClick={() => {
                    dispatch(setPage());
                    dispatch(actions.nextCategory())
                }}
                className="h-10  hover: transition-transform transform hover:translate-x-1 cursor-pointer"
                src="/frontArrow.png"
                alt="Next Category"
            />
        </div>
    );
};

export default Movielist;