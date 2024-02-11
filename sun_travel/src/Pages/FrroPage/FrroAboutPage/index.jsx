import React from "react";
import styled from "styled-components";
import bg from "../assets/662.jpg";
import bg2 from "../assets/young-couple-smiling-with-globe.jpg";
function FrroAboutPage() {
  return (
    <Wrapper>
      <div className="flow">
        <div className="flowContent">
          <p>
            India happens to be a focussed and key market for many products and
            services by various MNCs, as a result they do send many expatriates
            of different nationalities to work in India to manage their India
            operations. This leads to a need of professional partner in India to
            take care of issues related to Foreigners Working in India, or
            complying with relevant rules and regulations on Immigration or
            Relocation and Indian Tax laws.
          </p>
          <div className="gridWrapper">
            <div className="firstGrid">
              <p className="pTag1">
                Prime Air Global Ltd offers various such services that ensure
                that while you as a client focus on your core activity, we will
                assist you to comply with all your requirements on Immigration,
                Relocation, Fleet Management, Manpower Management, Business
                Travel Services, Air Charters, Legalization service
                requirements. These services are offered Pan India either via
                our own offices or in association with a partner.
              </p>
              <p className="pTag1">
                We cover various aspects under Immigration Services that
                include, Foreigners Registration (FRRO) services, Visa
                Extension, Exit Permits, OCI applications, Police Clearance
                Certificate (PCC), Medical Visas for travel to India, PAN Card
                and Aadhaar Card registrations.
              </p>
              <p className="pTag1">
                Legalization Services include Apostille services, Attestation
                from Ministry of External Affairs (MEA) India, or Attestation
                from State Governments, Translation of various documents for
                different purposes.
              </p>
            </div>
            <div className="secondGrid">
              <img src={bg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default FrroAboutPage;
const Wrapper = styled.div`
  height: auto;
  background-color: #fff;
  background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: scroll;
  margin: 0;
  padding: 0;
  .flow {
    padding: 100px 20px 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flowContent {
    padding: 10px 20px;
    text-align: left;
    position: relative;
    flex: 1 1 auto;
    max-width: 1000px;
    font-family: "lato";

    p {
      font-size: 1rem;
      margin-bottom: 25px;
    }
  }
  .gridWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
    .secondGrid {
      height: 100%;
      width: 100%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
