import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import globalLogo from "./assets/globalLogo.svg";

import flightTicketlogo from "./assets/flightmap.svg";
import attestationLogo from "./assets/stamp.png";

import educationLogo from "./assets/educationLogo.png";
import MHButton from "./MHButton";
import ContactUsPage from "../Pages/ContactusPage";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  useLayoutEffect(() => {
    const shouldRunEffect = window.innerWidth > 1200;

    if (shouldRunEffect) {
      const ctx = gsap.context(() => {
        const horizontalSections = gsap.utils.toArray(".horizontal-section");

        // ---------- applying horizontal scroll animation
        gsap.to(horizontalSections, {
          xPercent: -100 * (horizontalSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#container",
            pin: true,
            scrub: 1,
            snap: 1 / (horizontalSections.length - 1),
            //   markers: true,
            end: () => "+=" + document.querySelector("#container").offsetWidth,
          },
        });
      });

      return () => ctx.revert();
    }
  }, []);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const buttonClicked1=()=>{
    setModal1(true)
    console.log("clickedddd")
  }
  const buttonClicked2=()=>{
    setModal2(true)
    console.log("clickedddd")
  }
  const buttonClicked3=()=>{
    setModal3(true)
    console.log("clickedddd")
  }
  const buttonClicked4=()=>{
    setModal4(true)
    console.log("clickedddd")
  }
  return (
    <SectionWrapper id="container">
            
          
      {/* ---------- section 01 ---------- */}

      <section className="horizontal-section">
        <div className="boxShadow"></div>
        <Fade direction="left">
          <h1 className="heading1">Our Services</h1>
        </Fade>
      </section>

      {/* ---------- section 01 ---------- */}
      <section className="horizontal-section">
      {modal1? <ContactUsPage modal={modal1}setModal={setModal1}/>:""}
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <div className="globalImage">
            <img src={globalLogo} alt={globalLogo} />
          </div>
          <h1>Global Visa</h1>

          <p>
            Empower your wanderlust with our Global Visa services, simplifying
            international travel. Our seasoned professionals guide you through
            the visa application maze, ensuring a hassle-free experience.
            Whether it's for business, leisure, or adventure, we streamline the
            process, turning visa concerns into distant worries. With{" "}
            <span>Sun Tours and Travels</span>, your global journey begins with
            the confidence of expert visa assistance. Explore the world with
            ease, as we handle the paperwork, leaving you free to embrace the
            excitement of new destinations. Let us be your passport to a
            seamless and unforgettable travel experience.
          </p>
          <StyledMhButton buttonName="Get Visa!" className="visa" onClick={buttonClicked1}/>
        </div>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
      {modal2? <ContactUsPage modal={modal2}setModal={setModal2}/>:""}
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <div className="globalImage">
            <img src={flightTicketlogo} alt={flightTicketlogo} />
          </div>
          <h1>Flight Tickets</h1>
          <p>
            Fly with ease using our premier flight ticket services. At{" "}
            <span>Sun Tours and Travels</span>, we redefine travel by offering
            seamless booking experiences. Choose from an extensive range of
            destinations and airlines, tailored to suit your preferences and
            budget. Our dedicated team ensures competitive prices and efficient
            itineraries, making your journey not just a flight but an
            experience. Book with confidence, knowing that every detail is taken
            care of, from departure to arrival. Elevate your travel with{" "}
            <span>Sun Tours and Travels</span> - where your journey begins with
            a ticket and unfolds into an adventure
          </p>
          <StyledMhButton buttonName="Get Tickets!" className="tickets" onClick={buttonClicked2}/>
        </div>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizontal-section">
      {modal3? <ContactUsPage modal={modal3}setModal={setModal3}/>:""}
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <div className="globalImage">
            <img src={attestationLogo} alt={attestationLogo} />
          </div>
          <h1>Attestation</h1>
          <p>
            Experience hassle-free document attestation with{" "}
            <span>Sun Tours and Travels</span> . Our attestation services
            streamline the often complex process of authenticating your
            important documents for international use. From educational
            certificates to legal documents, we ensure precision and efficiency
            in obtaining the necessary approvals. Our expert team navigates the
            requirements of various authorities, making your attestation journey
            smooth and reliable. Trust us to handle the paperwork, so you can
            focus on your global aspirations. At{" "}
            <span>Sun Tours and Travels</span> , we bridge the gap between your
            documents and global acceptance, ensuring they stand validated
            wherever your ambitions take you
          </p>
          <StyledMhButton
            buttonName="Get Attestation!"
            className="attestation"
            onClick={buttonClicked3}
          />
        </div>
      </section>
      {/* ---------- section 04 ---------- */}
      <section className="horizontal-section">
      {modal4? <ContactUsPage modal={modal4}setModal={setModal4}/>:""}
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <div className="globalImage">
            <img
              className="education"
              src={educationLogo}
              alt={educationLogo}
            />
          </div>
          <h1>Oversease education</h1>
          <p>
            Unlock a world of academic opportunities with our Overseas Education
            services. At <span>Sun Tours and Travels</span>, we pave the way for
            your global academic journey. Our dedicated team guides you through
            every step, from selecting the right institution to securing
            admissions and navigating visa processes. We collaborate with
            renowned educational institutions worldwide, offering a diverse
            range of courses. With personalized assistance, we make studying
            abroad a seamless experience, ensuring you receive the best
            education while embracing new cultures. Let{" "}
            <span>Sun Tours and Travels</span>be your companion in realizing
            your academic dreams beyond borders.
          </p>
          <StyledMhButton buttonName="Get Education!" className="oversease" onClick={buttonClicked4}/>
        </div>
      </section>
      {/* //section4 */}
    </SectionWrapper>
  );
}
const StyledMhButton = styled(MHButton)`
  &.visa {
    .btn:after {
      left: -4px;
      top: -3px;
    }
  }
  &.tickets {
    .btn:after {
      left: 10px;
      top: -11px;
    }
  }
  &.attestation {
    .btn:after {
      left: 27px;
      top: -28px;
    }
  }
  &.oversease {
    .btn:after {
      left: 27px;
      top: -22px;
    }
  }
`;
const SectionWrapper = styled.main`
  .horizontal-section:nth-child(1) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1702737514/sun-images/servicesUpdated_wbnvoa.jpg"});
  }
  .horizontal-section:nth-child(2) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1702736932/sun-images/globalvisa_wd1v39.jpg"});
  }
  .boxShadow {
    @media screen and (max-width: 1200px) {
      display: none;
    }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 97%) 0,
      rgb(6 6 6 / 36%) 54%,
      rgb(255 253 255 / 0%) 100%
    );
  }
  .horizontal-section:nth-child(3) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1702737292/sun-images/flightTIcketUpdtated_jf1udv.jpg"});
  }
  .horizontal-section:nth-child(4) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1702660217/sun-images/attestationupdated_vidrqk.jpg"});
  }
  .horizontal-section:nth-child(5) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1702737273/sun-images/oversease_iwfypd.jpg"});
    backdrop-filter: blur(5px);
  }

  .heading1 {
    font-family: "Oswald", sans-serif;
    font-size: 8vw;
    font-weight: 900;
    color: #0b2f6a;
    letter-spacing: 1vw;
    text-transform: uppercase;
    text-align: center;
    margin-top: 350px;
    -webkit-text-stroke: 1px #fff;
  }
  .headingGlobalVisa {
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    text-align: center;
    /* -webkit-text-stroke: 1px #fff; */
    z-index: 1;
    background: white;
    /* height: 300px; */
    width: 700px;
    /* opacity: 0.7; */
    border-radius: 10px;
    padding: 23px;
    h1 {
      @media screen and (max-width: 1200px) {
        font-size: 30px;
    }
      font-family: "lato";
      font-size: 40px;
      font-weight: 900;
      color: #0b2f6a;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 1;
      margin: 10px 0px;
    }
    p {
      @media screen and (max-width: 1200px) {
        font-size: 14px;
    }
      text-align: left;
      font-family: "Lato";
      font-size: 16px;
      color: #000;
      margin-bottom: 20px;
    }
    .globalImage {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding: 10px; */
      .education {
        height: 90px;
        width: 90px;
      }
      img {
        height: 70px;
        width: 70px;
      }
    }
  }
`;
