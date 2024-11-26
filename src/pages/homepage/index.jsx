import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { lazy, Suspense } from "react";

// Components
const Banner = lazy(() => import("../../components/banner"));
const Moviecard = lazy(() => import("../../components/moviecard"));
const Pagination = lazy(() => import("../../components/pagination"));
const Movielist = lazy(() => import("../../components/Movielist"));

import moviesMiddleware from "../../redux/movie/moviesMiddleware";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary";
import Shimmer from "../../components/Shimmer";

// Map to trigger different API
const myMap = {
  1: "popular",
  2: "top_rated",
  3: "now_playing",
  4: "upcoming",
};

const Homepage = () => {
  const targetRef = useRef(null);

  const { page } = useSelector((store) => store.paginationState);
  const { curr } = useSelector((store) => store.categoryState);
  const { movies, error } = useSelector((store) => store.movieState);
  const dispatch = useDispatch();

  const watchlist = useSelector((state) => state.watchlistState);
  const [loading, setLoading] = useState(true);

  // Fetch movies whenever page or category changes
  useEffect(() => {
    const category = myMap[curr];
    dispatch(moviesMiddleware(page, category));
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // Simulate loading delay
  }, [page, curr, dispatch]);

  // Scroll up when page changes
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  if (error) {
    return (
      <h1 className="text-center font-bold text-4xl h-[33.5rem]">
        Oops...Something went wrong!
      </h1>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      {/* Shimmer effect for Banner while loading */}
      <Suspense fallback={<Shimmer type="bannerImage" />}>
        {loading ? (
          <div className="relative">
            <Shimmer type="bannerImage" />
            <Shimmer type="bannerTitle" />
          </div>
        ) : (
          <Banner />
        )}
      </Suspense>

      {/* Shimmer effect for Movielist (showing movie cards) */}
      <Suspense
        fallback={
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="skeleton movieCard">
                <Shimmer type="movieCardPoster" />
                <Shimmer type="movieCardTitle" />
                <Shimmer type="movieCardDetails" />
              </div>
            ))}
          </div>
        }
      >
        <Movielist />
      </Suspense>

      <div
        ref={targetRef}
        className="flex flex-wrap justify-around mr-6 ml-6 gap-2"
      >
        {movies.map((movie) => (
          <Suspense key={movie.id} fallback={<Shimmer type="movieCard" />}>
            <div className="movieCardContainer">
              <Shimmer type="movieCardPoster" />
              <Shimmer type="movieCardTitle" />
              <Shimmer type="movieCardDetails" />
            </div>
            <Moviecard
              movie={movie}
              fav={watchlist.some((item) => item.id === movie.id)}
              title={movie.title}
              imgURL={movie.backdrop_path}
              rating={movie.vote_average}
            />
          </Suspense>
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </ErrorBoundary>
  );
};

export default Homepage;
