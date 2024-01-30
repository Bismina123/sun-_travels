import React from 'react'
import styled from 'styled-components';
import Slider3dPage from './Slider3dComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faDragon,
  faFootballBall,
  faGlassCheers,
  faHelicopter
} from "@fortawesome/free-solid-svg-icons";
import Slider3dComponent from './Slider3dComponent';
import petraImage from '../assets/front-al-khazneh-treasury-temple-carved-stone-wall-main-attraction-lost-city-petra.jpg'
import palestine from '../assets/dome-rock-al-aqsa-mosque-old-city-jerusalem-palestine.jpg'
import jordan from '../assets/2150754853.jpg'
import israel from '../assets/348.jpg'
import egypt from '../assets/3834.jpg'
import UpdatedFooter from '../../../Components/UpdatedFooter';
import HolyLandAbout from './Slider3dComponent/HolyLandAboutPage';

function HolyLandPage() {
  const caroselData=[
  
      {
        id: 1,
        bgColor: "#fff",
        icon: <FontAwesomeIcon icon={faCameraRetro} size="3x" />,
        title: "Jordan",
        image:jordan,
        desc:"Jordan, in the Middle East, features the iconic city of Petra and diverse landscapes, including the Dead Sea and Wadi Rum desert."

      },
      {
        id: 2,
        bgColor: "#fff",
        icon: <FontAwesomeIcon icon={faGlassCheers} size="3x" />,
        title: "Palestine",
        image:palestine,
        desc:"Palestine, in the Eastern Mediterranean, grapples with the Israel-Palestine conflict, embodying a rich cultural history."
      },
      {
        id: 3,
        bgColor: "#fff",
        icon: <FontAwesomeIcon icon={faDragon} size="3x" />,
        title: "Petra",
        image:petraImage,
        desc:
        "Petra is a UNESCO-listed ancient city in Jordan famous for its stunning rock-cut architecture."
      },
      {
        id: 4,
        bgColor: "#fff",
        icon: <FontAwesomeIcon icon={faFootballBall} size="3x" />,
        title: "Israel",
        image:israel,
        desc:"Israel, in the Middle East, holds cultural and religious significance with a rich history."      },
      {
        id: 5,
        bgColor: "#fff",
        icon: <FontAwesomeIcon icon={faHelicopter} size="3x" />,
        title: "Egypt",
        image:egypt,
        desc:"Egypt, in North Africa, is famed for its ancient pyramids and cultural heritage."
      }
      
    ];
    
  
  return (
    <Warpper>
      <div className="center">
      <Slider3dComponent data={caroselData} activeSlide={2} />
      
    </div>
    <HolyLandAbout/>
    <UpdatedFooter/>
    </Warpper>
  )
}

export default HolyLandPage
const Warpper=styled.div`
height: 100vh;
background-color: #000;
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
`;