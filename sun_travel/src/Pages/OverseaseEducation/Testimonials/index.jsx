import React from "react";
import styled from "styled-components";

function TestiMonials() {
  return (
    <Warpper>
      <div className="testimonial-wrapper">
        <h1>Testimonials</h1>
        <p>
          Please check the testimonials from our satisfied clients to confirm
          our credentials and ablities to serve you
        </p>
      </div>
      <main>
        <div className="slider">
          <div className="buttons">
            <div className="previous"></div>
            <div className="next"></div>
          </div>

          <div className="slide1">
            <div className="testimonial">
              <blockquote>
                “ I’ve been interested in coding for a while but never taken the
                jump, until now. I couldn’t recommend this course enough. I’m
                now in the job of my dreams and so excited about the future. ”
              </blockquote>
              <p className="author">
                Tanya Sinclair
                <span>UI/UX Developer</span>
              </p>
            </div>

            <div className="slider-img">
              <img
                src="https://alcs-slider.netlify.app/images/image-tanya.jpg"
                alt="Author Image"
              />
            </div>
          </div>

          {/* <div className="slide">
            <div className="testimonial">
              <blockquote>
                “ If you want to lay the best foundation possible I’d recommend
                taking this course. The depth the instructors go into is
                incredible. I now feel so confident about starting up as a
                professional developer. ”
              </blockquote>
              <p className="author">
                John Tarkpor
                <span>Junior Front-end Developer</span>
              </p>
            </div>

            <div className="slider-img">
              <img
                src="https://alcs-slider.netlify.app/images/image-john.jpg"
                alt="Author Image"
              />
            </div>
          </div> */}
        </div>
      </main>
    </Warpper>
  );
}

export default TestiMonials;
const DarkBlue = "hsl(240, 38%, 20%)";
const GrayishBlue = "hsl(240, 18%, 77%)";
const Background = "#FFFFFF";
const Font300 = 300;
const Font500 = 500;
const Font700 = 700;
const Warpper = styled.div`
  /* background-color: red; */
  /* width: 100%; */
  /* height: 80vh; */
  color: #212176;
  font-size: 32px;
  font-family: "Inter", sans-serif;
  background-color: #ffffff;
  .testimonial-wrapper {
    background: #eeecf3;
    position: absolute;
    width: 25%;
    text-align: left;
    font-size: 16px;
    color: #212176;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    left: 25%;
    top: 18%;
    padding: 15px 20px;
    h1 {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
    }
  }

  main {
    width: 100%;
    max-width: 1440px;
    padding: 16px;

    .slider {
      .slide1 {
        display: flex;
        /* margin: 0 auto; */
        text-align: center;
        align-items: center;

        justify-content: flex-start;
        width: 65%;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 63%;
        /* flex-direction: column-reverse; */

        .testimonial {
          padding: 32px 51px;
          background-size: 60px;
          background-position: top;
          background-repeat: no-repeat;
          background-image: url(https://alcs-slider.netlify.app/images/pattern-quotes.svg);

          blockquote {
            font-size: 18px;
            font-weight: 300;
            line-height: 24px;
            margin-bottom: 36px;
          }

          .author {
            font-size: 15px;
            font-weight: 700;

            span {
              display: block;
              color: hsl(240, 18%, 77%);
              font-weight: 500;
            }
          }
        }

        .slider-img {
          width: 100%;
          padding: 30px;
          display: flex;
          margin-bottom: 40px;
          align-items: center;
          justify-content: center;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(https://alcs-slider.netlify.app/images/pattern-bg.svg);

          img {
            width: 240px;
            display: block;
            border-radius: 10px;
            box-shadow: 0px 16px 40px 0px rgba(135, 105, 210, 0.4);
          }
        }

        .active {
          opacity: 1;
          transform: translateX(0) scale(1);
          transition-delay: 0.4s;
        }
      }
    }
  }
`;
