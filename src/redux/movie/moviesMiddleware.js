import { movieAPIInstance } from "../../API";
import movieSlice from "./movieSlice";

const actions = movieSlice.actions;

export default function moviesMiddleware(page, category) {
  return async function(dispatch) {
    try {
      dispatch(actions.setLoading());
      const response = await movieAPIInstance.get(
        `/${category}?language=en-US&page=${page}`
      );
      // console.log(response.data.results);
      dispatch(actions.setMovies(response.data.results));
    } catch {
      dispatch(actions.setErrors());
    }
  };
}

//   try {
//     const category = myMap[curr];
//     const response = await movieAPIInstance.get(
//       `/${category}?language=en-US&page=${page}`
//     );
//     setMovies(response.data.results);
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// };

// fetchMovies();
