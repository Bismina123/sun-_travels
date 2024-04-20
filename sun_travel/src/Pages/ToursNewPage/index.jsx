import React from "react";
import styled from "styled-components";
// import { PasswordHideIcon } from "../../assets/img/icon/index";
import { useParams } from "react-router-dom";
import ExclusiveDeals from "./components/exclusiveDeals";
import { PopularDestinations } from "./components/popularDestinations";

export const ToursNewComponent = () => {
  let { pathRoute } = useParams();
  console.log(pathRoute, "pathRoute");
  return (
    <Wrapper>
      <ExclusiveDeals />
      <PopularDestinations />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  padding: 15px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
