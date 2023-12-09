import "./App.css";

import { Suspense, useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import { Loader } from "./Pages/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fakeDataFetch = () => {
  //     setTimeout(() => {
  //       // setIsLoading(false);
  //     }, 4000);
  //   };

  //   fakeDataFetch();
  // }, []);

  return (
    // <BrowserRouter>
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

          {/* <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} /> */}
        </Routes>
      </div>
    </>

    // </BrowserRouter>
  );
}

export default App;
