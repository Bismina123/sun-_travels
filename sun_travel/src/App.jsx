import "./App.css";

import { Suspense } from "react";
import LandingPage from "./Pages/LandingPage";
import { Loader } from "./Pages/Loader";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <LandingPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
