import "./App.css";

import { Suspense, useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import { Loader } from "./Pages/Loader";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Tours from "./Pages/Tours";
import AllTours from "./Pages/AllTours";
import Visapage from "./Pages/VisaPage";
import FlightPage from "./Pages/FlightPage/FlightPage";
import Attestation from "./Pages/AttestationPage/Attestation";
import PilgrimsPage from "./Pages/PilgrimsPage";
import OverseaceEducation from "./Pages/OverseaseEducation";
import HotelBooking from "./Pages/HotelBookingPage";
import FrroPage from "./Pages/FrroPage";
import AustralianPage from "./Pages/VisaPage/InnerPages/AustralianPage";

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
          <Route
            path="/tours-inner/:id"
            element={
              <Suspense fallback={loading ? <Loader /> : null}>
                <Tours />
              </Suspense>
            }
          />
          <Route
            path="/tours/:number"
            element={
              <Suspense fallback={loading ? <Loader /> : null}>
                <AllTours />
              </Suspense>
            }
          />
          <Route
           path="/Visa/*"
            element={
              <Visapage/>
            }
          />
           <Route
           path="/Visa/australianVisa/:optionName"
            element={
              <AustralianPage/>
            }
          />
          <Route
           path="/pilgrims/*"
            element={
              <PilgrimsPage/>
            }
          />
         <Route path="/Flight/:where" element={<FlightPage />} />
          <Route path="/Atestation" element={<Attestation />} />
          <Route
           path="/education"
            element={
              <OverseaceEducation/>
            }
          />
           <Route
           path="/hotel"
            element={
              <HotelBooking/>
            }
          />
           <Route
           path="/frro"
            element={
              <FrroPage/>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
