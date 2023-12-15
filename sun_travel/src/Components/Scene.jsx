import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import globalLogo from "./assets/globalLogo.svg";

import flightTicketlogo from "./assets/flightmap.svg";
import attestationLogo from "./assets/stamp.png";

import educationLogo from "./assets/educationLogo.png";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {

  useLayoutEffect(() => {
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
  }, []);

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
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <h1>Global Visa</h1>
          <div className="globalImage">
            <img src={globalLogo} alt={globalLogo} />
          </div>
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

          <button className="btn">
            <span>Get Visa!</span>
          </button>
        </div>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <h1>Flight Tickets</h1>
          <div className="globalImage">
            <img src={flightTicketlogo} alt={flightTicketlogo} />
          </div>
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

          <button className="btn">
            <span>Get Tickets!</span>
          </button>
        </div>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizontal-section">
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <h1>Attestation</h1>
          <div className="globalImage">
            <img src={attestationLogo} alt={attestationLogo} />
          </div>
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

          <button className="btns">
            <span>Get Attestation!</span>
          </button>
        </div>
      </section>
      {/* ---------- section 04 ---------- */}
      <section className="horizontal-section">
        <div className="boxShadow"></div>
        <div className="headingGlobalVisa">
          <h1>Oversease education</h1>
          <div className="globalImage">
            <img
              className="education"
              src={educationLogo}
              alt={educationLogo}
            />
          </div>
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

          <button className="btns">
            <span>Get Education!</span>
          </button>
        </div>
      </section>
      {/* //section4 */}
    </SectionWrapper>
  );
}
const SectionWrapper = styled.main`
  .horizontal-section:nth-child(1) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1701455827/sun-images/services_e7doyg.jpg"});
  }
  .horizontal-section:nth-child(2) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1701455838/sun-images/globalvisa_uocuh3.jpg"});
  }
  .boxShadow {
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
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1701454764/sun-images/flightTIcket_wva86x.jpg"});
  }
  .horizontal-section:nth-child(4) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1701456016/sun-images/attestation_ziq2kc.jpg"});
  }
  .horizontal-section:nth-child(5) {
    background-image: url(${"https://res.cloudinary.com/dubjhsibu/image/upload/v1701455700/sun-images/educationLogo_gutdpc.jpg"});
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
      font-family: "lato";
      font-size: 40px;
      font-weight: 900;
      color: #0b2f6a;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 1;
    }
    p {
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
      padding: 10px;
      .education {
        height: 90px;
        width: 90px;
      }
      img {
        height: 70px;
        width: 70px;
      }
    }
    .btn {
      border: none;
      display: block;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      outline: none;
      overflow: hidden;
      position: relative;
      color: #fff;
      font-weight: 700;
      font-size: 15px;
      background-color: goldenrod;
      padding: 12px 40px;
      margin: 0 auto;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }

    .btn span {
      position: relative;
      z-index: 1;
    }

    .btn:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 490%;
      width: 140%;
      background: #0b2f6a;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
      transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .btn:hover:after {
      -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
    .btns {
      border: none;
      display: block;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      outline: none;
      overflow: hidden;
      position: relative;
      color: #fff;
      font-weight: 700;
      font-size: 15px;
      background-color: goldenrod;
      padding: 12px 40px;
      margin: 0 auto;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }

    .btns span {
      position: relative;
      z-index: 1;
    }

    .btns:after {
      content: "";
      position: absolute;
      left: 0;
      top: -25%;
      height: 490%;
      width: 140%;
      background: #0b2f6a;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
      transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .btns:hover:after {
      -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
  }
`;
