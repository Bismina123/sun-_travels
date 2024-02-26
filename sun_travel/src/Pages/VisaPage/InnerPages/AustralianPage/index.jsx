import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import imag from "../assets/southafrica-visa-bg.png";
import { CombainedAustraliaInner } from "../../../VisaPage/SearchableDropDown/countrylistdata";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function AustralianPage() {
  const { optionName } = useParams();
  console.log(CombainedAustraliaInner, "CombainedAustraliaInner");
  console.log(optionName, "optionName");
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  const handlePageClick = (index) => {
    setActiveTab(index);
    const ref = contentRefs[index].ref;
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 340) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  console.log(window.scrollY, "triggered");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  const contentRefs = [
    { id: 1, name: "Types of visa", ref: "content1" },
    { id: 2, name: "Documents", ref: "content2" },
    { id: 3, name: "Process", ref: "content3" },
    { id: 4, name: "Why Choose Us", ref: "content4" },
    { id: 5, name: "Reviews", ref: "content5" },
  ];
  const innerContent = [
    { id: 1, name: "Description 1" },
    { id: 2, name: "Description 2" },
    { id: 3, name: "Description 3" },
    { id: 4, name: "Description 4" },
    { id: 5, name: "Description 5" },
  ];
  return (
    <Wrapper>
      {CombainedAustraliaInner.map((data, index) => {
        if (data.name === optionName) {
          return (
            <div key={index} className="bannerSection">
              <div className="indexBanner">
                <div className="sectionBar"></div>
              </div>
              <div className="countryPagerow">
                <div className="Heading">
                  <h1 className="blacktext">{data.name} Visa</h1>
                  <div className="starting">
                    <div className="first">
                      Processing time
                      <br />
                      <span>{data.processingTime}</span>
                    </div>
                    <div className="first">
                      Starting from
                      <br />
                      <span className="currency"><CurrencyRupeeIcon/>{data.startingFrom}/-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null; // or any other fallback content
        }
      })}

      <div></div>
      {/* Your other JSX */}
      <Tabs className={scrolling ? "navbar sticky" : "navbar"} id="navbar">
        {contentRefs.map((ref, index) => (
          <TabItem
            key={index}
            onClick={() => handlePageClick(index)}
            className={activeTab === index ? "active" : ""}
          >
            {ref.name}
          </TabItem>
        ))}
      </Tabs>

      {contentRefs.map((ref, index) => (
        <ContentWrapper key={ref.id}>
          <TabContent id={ref.ref} className={ref.ref}>
            {/* Display innerContent corresponding to the current tab */}
            {innerContent.map((inner, innerIndex) => {
              if (innerIndex === index) {
                return <p key={inner.id}>{inner.name}</p>;
              }
              return null;
            })}
          </TabContent>
        </ContentWrapper>
      ))}
    </Wrapper>
  );
}

export default AustralianPage;

// Other styled components remain the same

const Wrapper = styled.div`
  height: 100vh;
  background-color: yellow;
  margin-top: 60px;
  .currency{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    color: #0b2f6a;
    border-bottom: 1px solid #0b2f6a;
  }
  .sticky {
    position: fixed;
    top: 65px;
    width: 100%;
  }
  .bannerSection {
    margin-bottom: 0 !important;
    margin-left: auto;
    margin-right: auto;
    height: 335px;
    background-color: #fff;
  }
  .indexBanner {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 0.75rem;
    min-height: 1px;
    height: 325px;
    background: url(${imag}) no-repeat right;
    margin-top: 5px;
    position: relative;
    overflow: hidden;
  }
  .Heading {
    width: 100%;
    margin-left: auto;
    float: left;

    padding: 0 0.75rem;
    min-height: 1px;
  }
  .blacktext {
    font-size: 50px;
    font-weight: 400;
    font-family: "lato";
    margin: 20px 0;
    line-height: 110%;
    color: #000;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30%;
    left: 300px;
    padding-left: 25px;
    letter-spacing: 1px;
  }
  .starting {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    padding: 0px 70px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 45%;
    left: 310px;
  }
  .countryPagerow {
    margin-top: 80px;
    width: 100% !important;
  }
  .first {
    font-size: 15px;
    color: #7c7c7c;
    text-align: left;
    span {
      font-size: 25px;
      color: #000;
      font-weight: normal;
      /* width: 100%; */
      /* float: left; */
    }
  }
  .sectionBar {
    padding-bottom: 0;
    padding-top: 1rem;
  }
  .content1 {
    background-color: red;
  }
  .content2 {
    background-color: green;
  }
  .content3 {
    background-color: yellow;
  }
  .content4 {
    background-color: grey;
  }
  .content5 {
    background-color: blue;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  background: #e8ebf2;
  padding: 10px;
  height: 8vh !important;
`;

const ContentWrapper = styled.div``;

const TabContent = styled.div`
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;
const TabItem = styled.div`
  padding: 0px 50px;
  color: #000;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    color: #0b2f6a;
    border-bottom: 1px solid #0b2f6a;
  }
`;
