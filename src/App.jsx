import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Darkmode from "./components/darkmode";

import "./App.css";

const Watchlist = lazy(() => import("./pages/watchlist"));
const Homepage = lazy(() => import("./pages/homepage"));
function App() {
  return (
    <>
      <Navbar />
      <Darkmode />
      <Suspense fallback={""}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watch-list" element={<Watchlist />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
