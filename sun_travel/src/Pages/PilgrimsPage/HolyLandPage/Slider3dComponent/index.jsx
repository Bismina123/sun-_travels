import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "../Slider3dComponent/sliderStyle.css"
import HotelIcon from '@mui/icons-material/Hotel';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import HailIcon from '@mui/icons-material/Hail';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Man3Icon from '@mui/icons-material/Man3';
import ContactUsPage from "../../../ContactusPage";
const ThreedCarousel= (props) => {

  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight}
          color="#fff"
          size="2x"
        />
      </div>
    </>
  );
};

const SliderContent = (props) => {
  const [modal, setModal] = useState(false);
  const buttonClicked=()=>{
    setModal(true)
    console.log("clickedddd")
  }
  return (
    <div className="sliderContent">
        <div className="imageWrapper">
            <img src={props.image} alt="" />
        </div>
        <label className="placeName">{props.title}</label>
      {/* {props.icon} */}
      {/* <h2>{props.title}</h2> */}
      <p>{props.desc}</p>
      <div className="iconsLabel">
        <div className="listedIcons">
            <HotelIcon/>
            <label >4-star accomadation</label>
        </div>
        <div className="listedIcons">
            <LocalDiningIcon/>
            <label >Breakfast,lunch and dinner</label>
        </div>
        <div className="listedIcons">
            <DirectionsBusFilledIcon/>
            <label >Laxuary ac coach for transportation</label>
        </div>
        <div className="listedIcons">
            <HailIcon/>
            <label >Pick-up & drop to & from airport </label>
        </div>
        <div className="listedIcons">
            <Diversity3Icon/>
            <label >Tour operator staff escort from tvm and back</label>
        </div>
        <div className="listedIcons">
            <Man3Icon/>
            <label >Accompained by an experienced guid</label>
        </div>
      </div>
      <div className="buttonNow"  onClick={buttonClicked} >
              <button className="btnbook">
                <span>Book Now</span>
              </button>
            </div>
            {modal? <ContactUsPage modal={modal}setModal={setModal}/>:""}

    </div>
  );
};
export default ThreedCarousel;