import "./App.css";

import { Suspense, useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import { Loader } from "./Pages/Loader";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={loading ? <Loader /> : null}>
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
