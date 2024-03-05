import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import LocationInput from "./LocationInput";
import bg from "./assets/luxury-sunset-poolside-relaxation-with-stunning-landscape-view-generated-by-ai.jpg";
import HotelCards from "./HotelCards";
import Startdate from "../PilgrimsPage/components/Startdate";
import UpdatedFooter from "../../Components/UpdatedFooter";
import dayjs from "dayjs";
import emailjs from "@emailjs/browser";

function HotelBooking() {
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "day"));
  const [address, setAddress] = useState("");
  // console.log(startDate, endDate, address, "addressaddress");
  const handleSearchClick = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vi7q9io",
        "template_6bhsgru",
        {
          from_name: "new user",
          to_email: "",
          message: `place: ${address}, Start Date: ${startDate}, End Date: ${endDate}, `,
        },
        "cYu6EiV1UyKWKu4q-"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          // setSubscribe(""); // Clear the email state after successful submission
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <Wrapper>
      <div className="mainWrapper" id="detailMainWrapper">
        <div className="bannerTop">
          <div className="firstHalf">
            <h1>
              Your Gateway <br />
              to comfort and convenience.
            </h1>
            <p>Book now and get the best prices</p>
          </div>

          <div className="secondHalf">
            <div className="">
              <img src={bg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="searchableDiv">
        <div className="fieldSet">
          <div className="location">
            <label>Place Hotel,</label>
            <LocationInput address={address} setAddress={setAddress} />
          </div>
          <div className="">
            <Startdate
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>

          <div className="buttons"  onClick={handleSearchClick}>
            <button>search</button>
          </div>
        </div>
      </div>
      {/* */}
      <HotelCards />
      <UpdatedFooter />
    </Wrapper>
  );
}

export default HotelBooking;
const Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background-image: linear-gradient(-20deg, #0c0c6d, #5c82e7);
  position: relative;
  .mainWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .bannerTop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 30px 100px;
    .firstHalf {
      h1 {
        font-size: 60px;
        font-weight: 900;
        line-height: 67px;
        color: #fff;
        text-transform: capitalize;
        letter-spacing: 1px;
        word-spacing: 8px;
        text-align: left;
      }
      p {
        font-size: 20px;
        margin-top: 8px;
        color: #c4c3c0;
        text-align: left;
      }
    }
    .secondHalf {
      width: 100%;
      height: 100%;
      text-align: -webkit-center;

      img {
        width: 500px;
        height: 500px;
        object-fit: cover;
        border-radius: 50%;
        border: 5px solid #fff;
      }
    }
  }
  .searchableDiv {
    background-color: #fff;
    position: absolute;
    /* top: 100px; */
    width: 87%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 82%;
    padding: 15px 20px;
    border-radius: 50px;
    .fieldSet {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  .location {
    text-align: left;
  }
  .buttons {
    padding: 10px 30px;
    background: #0c0c6d;
    border-radius: 30px;
    width: 15%;
    color: #fff;
    font-size: 21px;
  }
`;
