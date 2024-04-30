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
import AmericanPage from "./Pages/VisaPage/InnerPages/AmericanPage";
import EuropianPage from "./Pages/VisaPage/InnerPages/EuropianPage";
import AsianPage from "./Pages/VisaPage/InnerPages/AsianPage";
import AfricanPage from "./Pages/VisaPage/InnerPages/AfricanPage";
import AllCountryVisaPAge from "./Pages/VisaPage/InnerPages/AllContryVisa";
import { ToursNewComponent } from "./Pages/ToursNewPage";
import ToursNewPageUpdate from "./Pages/ToursNewPageUpdate";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
                  <ToursNewPageUpdate />
                </Suspense>
              }
            />
            <Route path="/Visa/*" element={<Visapage />} />
            <Route
              path="/Visa/all/:optionName"
              element={<AllCountryVisaPAge />}
            />
            <Route
              path="/Visa/europeanVisa/:optionName"
              element={<EuropianPage />}
            />
            <Route
              path="/Visa/americanVisa/:optionName"
              element={<AmericanPage />}
            />
            <Route path="/Visa/asianVisa/:optionName" element={<AsianPage />} />
            <Route
              path="/Visa/australianVisa/:optionName"
              element={<AustralianPage />}
            />
            <Route
              path="/Visa/africanVisa/:optionName"
              element={<AfricanPage />}
            />
            <Route path="/pilgrims/*" element={<PilgrimsPage />} />
            <Route path="/Flight/:where" element={<FlightPage />} />
            <Route path="/Atestation" element={<Attestation />} />
            <Route path="/education" element={<OverseaceEducation />} />
            <Route path="/hotel" element={<HotelBooking />} />
            <Route path="/frro" element={<FrroPage />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
