import React from "react";
import TourCard from "./card";
import SnExTab from "../ToursNewPage/components/SnExTab";
import ExperienceCard from "./ExperinceCard";
import InternarionalDest from "./InternationalDest";
import BestSellingSection from "../../Components/BestSellingSection";
import UpdatedFooter from "../../Components/UpdatedFooter";

const ToursNewPageUpdate = () => {
  return (
    <>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <SnExTab />
      </div>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <ExperienceCard />
      </div>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <InternarionalDest />
      </div>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <BestSellingSection />
      </div>
      <UpdatedFooter />
    </>
  );
};

export default ToursNewPageUpdate;
