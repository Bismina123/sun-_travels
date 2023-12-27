import styled from "styled-components";
import { FaIndianRupeeSign } from "react-icons/fa6";
import bestSelling from "./assets/bestPrice.png";
import refund from "../assets/4947544-removebg-preview.png";
import safety from "../assets/images-removebg-preview.png";
import Slider from "react-slick";

export default function BestSellingSection() {
  const HotSellTourDetails = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789808/sun-images/maldives_u0mshm.jpg",
      place: "Maldives Paradise",
      days: "5 Days",
      price: 80000,
      offerType: "our best seller",
      description: "Relax in the stunning beaches of Maldives for 7 days.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789822/sun-images/thailand_e6wv30.jpg",
      place: "Thailand",
      days: "10 Days",
      price: 10000,
      offerType: "20%offer",
      description: "Explore the adventurous side of Thailand for 10 days.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789824/sun-images/bali_phyndo.jpg",
      place: "Bali Bliss",
      days: "5 Days",
      price: 12000,
      offerType: "50%offer",
      description: "Experience the blissful beauty of Bali for 5 days.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789822/sun-images/singappore_cs1hod.jpg",
      place: "Singapore Cityscape",
      days: "4 Days",
      price: 15000,
      offerType: "combooffer",
      description: "Discover the vibrant cityscape of Singapore for 4 days.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789820/sun-images/malaysia_tyancb.jpg",
      place: "Malaysian Marvels",
      days: "8 Days",
      price: 20000,
      offerType: "our best seller",
      description: "Marvel at the wonders of Malaysia for 8 days.",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789805/sun-images/last_jrxp6y.jpg",
      place: "Vietnam Discovery",
      days: " 12 Days",
      price: 2800,
      offerType: "20%offer",
      description: "Embark on a cultural discovery in Vietnam for 12 days.",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789825/sun-images/campodia_rsw0dm.jpg",
      place: "Cambodian Heritage",
      days: "6 Days",
      price: 18000,
      offerType: "50%offer",
      description: "Explore the rich heritage of Cambodia for 6 days.",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789809/sun-images/kashmir_k7ikoz.jpg",
      place: "Kashmir Valley Retreat",
      days: "7 Days",
      price: 22000,
      offerType: "combooffer",
      description: "Retreat to the scenic beauty of Kashmir for 7 days.",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789822/sun-images/kulu_nfnwm1.jpg",
      place: "Golden Triangle & Himachal",
      days: "9 Days",
      price: 19000,
      offerType: "our best seller",
      description: "Discover the Golden Triangle and Himachal for 9 days.",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789802/sun-images/kerala_qg0byu.jpg",
      place: "Kerala Backwaters",
      days: "6 Days",
      price: 16000,
      offerType: "20% offer",
      description: "Experience the serene backwaters of Kerala for 6 days.",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1702789823/sun-images/dubai_woxmwb.jpg",
      place: "Dubai Group Tour",
      days: "5 Days",
      price: 28000,
      offerType: "Combo offer",
      description: "Experience the serene backwaters of Dubai for 6 days",
    },
  ];
  const assuredData = [
    {
      id: 1,
      image: bestSelling,
      title: "Best price guarantee",
      description:
        "we offer the best deals.If you find a better offer, Contact us.",
    },
    {
      id: 2,
      image: refund,
      title: "Flexible refunds",
      description: "Get instant refund for cancelled flights with us.",
    },
    {
      id: 3,
      image: safety,
      title: "Travel safety",
      description: "Stay updated with travel restrictions due to COVID-19.",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 514,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <HotSellingSection>
        <div className="headingLabel">
          <span>Hot-Selling </span>Tour Bundles
        </div>
      </HotSellingSection>

      <CustomSlider {...settings}>
        {HotSellTourDetails?.map((item) => {
          return (
            <>
              <ContentWrapper className="other-ContentWrapper">
                <div className="cardWrapper">
                  <ImgStyle
                    className="image-style"
                    src={item.image}
                    alt={item.image}
                  />
                  <div className="boxShadow"></div>
                </div>
                <TagImage
                  className={
                    item.offerType === "our best seller" ? "greenTag" : "redTag"
                  }
                >
                  {item.offerType}
                </TagImage>
                <TextWrapper className="text-style">
                  <div style={{ textAlign: "left" }}>
                    <AnnouncemnetTitle className="announcemnetTitle">
                      {item.place}
                    </AnnouncemnetTitle>

                    <div className="hidingData">
                      <DateDiv>{item.description}</DateDiv>

                      <DayWrapper className="day">
                        <ion-icon name="today-outline"></ion-icon>
                        <div>{item.days}</div>
                        <MoneyWrapper>
                          <FaIndianRupeeSign style={{ color: "red" }} />
                          <div>{item.price}</div>
                        </MoneyWrapper>
                      </DayWrapper>
                    </div>
                  </div>
                </TextWrapper>
              </ContentWrapper>
            </>
          );
        })}
      </CustomSlider>

      <GauranteeDiv>
        <GridContainer>
          {assuredData.map((item, id) => {
            return (
              <>
                <GridItem key={id}>
                  <BestSelling>
                    <div className="imageContainer">
                      <img src={item.image} alt="" />
                    </div>
                    <span></span>
                    <label className="margin-l">{item.title}</label>
                    <p className="margin-l">{item.description}</p>
                  </BestSelling>
                </GridItem>
              </>
            );
          })}
        </GridContainer>
      </GauranteeDiv>
      {/* <CardView className="otherNews-CardView"></CardView> */}
    </Wrapper>
  );
}
const CustomSlider = styled(Slider)`
  .slick-track {
    display: flex;
  }
  .slick-list {
    padding-left: 25px;
  }
  /* .slick-slider { */
  .slick-prev {
    z-index: 10 !important;
    left: 33px !important;
  }
  .slick-next {
    right: 38px !important;
  }
  /* } */
`;

const DateDiv = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 3px;
  text-transform: capitalize;
  /* letter-spacing: 1px; */
  padding-left: 10px;
`;
const ContentWrapper = styled.div`
  cursor: pointer;
  &:hover {
    .text-style {
      color: green;
      transform: translateY(-100%);
    }
    .hidingData {
      opacity: 1;
      visibility: visible;
      transition: transform 0.3s ease;
    }
  }
  .hidingData {
    opacity: 0;
    visibility: hidden;
  }
  position: relative;
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
      rgb(197 191 191 / 9%) 60%,
      rgb(255 253 255 / 0%) 100%
    );
  }
  .cardWrapper {
    @media only screen and (min-width: 414px) and (max-width: 480px) {
      max-width: 88%;
    }
    @media only screen and (min-width: 514px) and (max-width: 600px) {
      max-width: 220px;
    }
    max-width: 250px;
    width: 100%;
    /* background: red; */
    height: 300px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 15px;
    position: relative;

    /* cursor: pointer; */
    &:hover .image-style {
      transform: scale(1.1);
    }
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }
  /* background-color: red; */
  /* width: 100%; */
  /* display: flex; */
  /* padding-bottom: 40px; */
  /* align-items: center; */
  position: relative;
  /* &:nth-last-child(1) {
    padding-bottom: 10px;
    b
  }  */
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;

  transition: transform 0.3s ease;
`;
const Wrapper = styled.div`
  /* height: calc(100vh + 150px); */
  /* bottom: 150px; */
  /* background-color: red; */
  height: auto;
  position: relative;
`;
const AnnouncemnetTitle = styled.div`
  text-transform: uppercase;
  font-family: 20px;
  color: #fff;
  font-family: "Lato";
  font-weight: 600;
  word-spacing: 3px;
  /* text-align: left; */
  padding-left: 10px;
`;
const HotSellingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 10px; */

  .headingLabel {
    @media only screen and (min-width: 300px) and (max-width: 414px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 414px) and (max-width: 514px) {
      font-size: 23px;
    }
    @media only screen and (min-width: 514px) and (max-width: 600px) {
      font-size: 25px;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
      font-size: 27px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1024px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1200px) {
      font-size: 35px;
    }

    @media screen and (max-width: 789px) {
      padding: 10px 20px;
    }

    font-family: "Lato";
    font-size: 40px;
    text-align: left;
    padding: 60px 90px 30px 90px;
    font-weight: 600;
    text-transform: uppercase;
    span {
      font-weight: 700;
      color: #001499;
    }
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  bottom: -33px;
  transition: transform 0.5s ease;
  /* padding-left: 10px; */
  width: 200px;
`;
const TagImage = styled.div`
  &.greenTag {
    background-color: #1ca749;
  }

  &.redTag {
    background-color: #ff0000;
  }
  text-transform: uppercase;
  border-radius: 3px;
  color: #fff;
  padding: 5px 15px;
  position: absolute;
  top: 20px;
  left: 0px;
  display: inline;
  font-size: 13px;
  font-family: "Lato";
  font-weight: 600;
  margin-left: 5px;
  letter-spacing: 1px;
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  margin-left: 10px;
  gap: 4px;
  margin-top: 10px;
`;
const MoneyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  /* gap: 4px; */
`;
const GauranteeDiv = styled.div`
  margin-top: 50px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196f3; */
  padding: 10px 20px 40px 48px;
  gap: 30px;
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
const GridItem = styled.div`
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  /* border-radius: 8px; */
  padding: 10px;
  /* font-size: 30px; */
  text-align: left;
  height: 150px;
  /* width: 350px; */
`;
const BestSelling = styled.div`
  position: relative;

  .imageContainer {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    /* padding-left: 32px; */
    background: #0b2f6a;
    width: 52px;
    transform: rotate(45deg);
  }
  span {
    position: absolute;
    width: 79px;
    height: 2px;
    left: 80px;
    top: 26px;
    background-color: #0b2f6a;
  }
  img {
    transform: rotate(-45deg);
    width: 53px;
    padding: 4px;
    filter: invert(1);
  }
  .margin-l {
    padding-left: 60px;
    @media only screen and (min-width: 768px) and (max-width: 900px) {
      padding-left: 41px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1024px) {
      padding-left: 56px;
  }
  }
  label {
    font-size: 20px;
    font-family: "Lato";
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    @media only screen and (min-width: 300px) and (max-width: 414px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1024px) {
      font-size: 15px;
  }
  }
  p {
    padding-top: 6px;
    font-size: 15px;
    font-family: "Lato";
    text-transform: capitalize;
    color: #474343d9;
  }
`;
