import styled, { keyframes } from "styled-components";
import UpdatedFooter from "../Components/UpdatedFooter";
import { tourPackages } from "./toursPackages";
import TourDetails from "./TourDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Tours() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedTour = tourPackages.find((data) => data.id == id);
  useEffect(() => {
    if (!selectedTour) {
      navigate("/");
    }
  }, [selectedTour, navigate]);
  return (
    <WrapperCard>
      <TourDetails item={selectedTour} />;
      <UpdatedFooter />
    </WrapperCard>
  );
}
const WrapperCard = styled.div`
  background-color: transparent;
  height: 100vh;
  margin-top: 137px;
`;
