import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import imag from "../assets/southafrica-visa-bg.png";
import { AllVisaPageData } from "../../../VisaPage/SearchableDropDown/countrylistdata";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import tik from "../assets/check-mark (1).svg";
import fullSTar from "../assets/star.svg";
import outlineStar from "../assets/star (1).svg";
import ProcessOnVisa from "../../ProcessOnVisa";
import WhyChooseusVisa from "../../WhyChooseusVisa";
import UpdatedFooter from "../../../../Components/UpdatedFooter";
import ContactUsPage from "../../../ContactusPage";
import whtsap from "../assets/whatsapp.svg";
import emailjs from "@emailjs/browser";

// import ContactUsPage from "../../../Pages/ContactusPage";
function AllCountryVisaPAge() {
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  console.log(AllVisaPageData, "AllVisaPageData");
  const { optionName } = useParams();
  console.log(AllVisaPageData, "CombainedAustraliaInner");
  console.log(optionName, "optionName");
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  const handlePageClick = (index) => {
    setActiveTab(index);
    const ref = contentRefs[index].ref;
    const element = document.getElementById(ref);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top;
      const offset = window.scrollY + offsetTop - 100; // Adjusted by 100 pixels
      window.scrollTo({ top: offset, behavior: "smooth" });
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
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (submitted) {
      setErrors(validateField(name, value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      const message = `New inquiry from ${formData.firstName}. User email: ${formData.email}. User PhoneNumber:${formData.phoneNumber}`;
      emailjs
        .send(
          "service_vi7q9io",
          "template_6bhsgru",
          {
            from_name: formData.firstName,
            to_email: formData.email,
            message: message,
          },
          "cYu6EiV1UyKWKu4q-"
        )
        .then(
          () => {
            alert("Thank you. I will get back to you as soon as possible.");

            setFormData({
              firstName: "",
              email: "",
              phoneNumber: "",
            }); // Clear the email state after successful submission
          },
          (error) => {
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
      console.log(formData, "Form");
      setSubmitted(true); // Set submitted state to true after successful submission
    } else {
      setErrors(validationErrors);
      setSubmitted(true);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    Object.keys(data).forEach((field) => {
      const fieldValue = data[field].trim();
      if (!fieldValue) {
        errors[field] = `${field} is required`;
      } else if (field === "email" && !/\S+@\S+\.\S+/.test(fieldValue)) {
        errors[field] = "Email is not valid";
      } else if (field === "phoneNumber" && !/^\d{10}$/.test(fieldValue)) {
        errors[field] = "Phone number must be 10 digits";
      }
    });
    return errors;
  };

  const validateField = (name, value) => {
    const fieldErrors = {};
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      fieldErrors[name] = `${name} is required`;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(trimmedValue)) {
      fieldErrors[name] = "Email is not valid";
    } else if (name === "phoneNumber" && !/^\d{10}$/.test(trimmedValue)) {
      fieldErrors[name] = "Phone number must be 10 digits";
    }
    return fieldErrors;
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <Wrapper id="detailMainWrapper">
      {AllVisaPageData.map((data, index) => {
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
                      <span className="currency">
                        <CurrencyRupeeIcon />
                        {data.startingFrom}/-
                      </span>
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

      {AllVisaPageData.map((data, index) => {
        if (data.name === optionName) {
          return (
            <div key={index}>
              <Tabs
                className={scrolling ? "navbar sticky" : "navbar"}
                id="navbar"
              >
                {contentRefs.map((ref, index) => {
                  console.log(contentRefs[index].ref, "bismina");
                  return (
                    <TabItem
                      key={index}
                      onClick={() => handlePageClick(index)}
                      className={
                        activeTab === index ? "active dashStyle" : "dashStyle"
                      }
                    >
                      {ref.name}
                    </TabItem>
                  );
                })}
              </Tabs>
              <SplittingWrapper className="splittingScreen">
                <div>
                  {contentRefs.map((ref, index) => {
                    if (ref.ref === "content1") {
                      return (
                        <ContentWrapper key={ref.id}>
                          <TabContent id={ref.ref} className={ref.ref}>
                            {AllVisaPageData.map((data, index) => {
                              if (data.name === optionName) {
                                return (
                                  <>
                                    <div className="content1inner">
                                      <h2 className="visa-type-head">
                                        Type of {data.name} Visas
                                      </h2>
                                      <div className="carsInnerSplitting">
                                        {data.typesOfVisa.map((typesVisa) => {
                                          return (
                                            <>
                                              <div className="cardsinner">
                                                <div className="cardTop">
                                                  {typesVisa.name}
                                                </div>
                                                <div className="cardBottom">
                                                  <ul>
                                                    <li>
                                                      Processing time:
                                                      <span>
                                                        {
                                                          typesVisa.processingTime
                                                        }
                                                      </span>
                                                    </li>

                                                    <li>
                                                      Validity:
                                                      <span>
                                                        {typesVisa.validity}
                                                      </span>
                                                    </li>
                                                    <li>
                                                      Entry:
                                                      <span>
                                                        {typesVisa.entry}
                                                      </span>
                                                    </li>
                                                    <li>
                                                      Fees:
                                                      <span>
                                                        INR {typesVisa.fees} /-
                                                      </span>
                                                    </li>
                                                    <li className="ideal">
                                                      Ideal:
                                                      <span>
                                                        {typesVisa.idealFor}
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </>
                                );
                              } else {
                                return null; // or any other fallback content
                              }
                            })}
                          </TabContent>
                        </ContentWrapper>
                      );
                    } else if (ref.ref === "content2") {
                      return (
                        <ContentWrapper key={ref.id}>
                          <TabContent id={ref.ref} className={ref.ref}>
                            {AllVisaPageData.map((data, index) => {
                              if (data.name === optionName) {
                                return (
                                  <>
                                    <div>
                                      <h2 className="documentLabel">
                                        Documents required for {data.name} Visa:
                                      </h2>
                                      <div className="documentCard">
                                        <div className="labelWrapper">
                                          <label>
                                            Must have Documents for {data.name}{" "}
                                            Visa :
                                          </label>
                                        </div>
                                        <ul>
                                          {data.documentsRequiredFor.map(
                                            (documents) => {
                                              return (
                                                <>
                                                  <ol
                                                    className="olStyle"
                                                    key={documents.id}
                                                  >
                                                    <img src={tik} alt="" />
                                                    {documents.document};
                                                  </ol>
                                                </>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </>
                                );
                              }
                            })}
                          </TabContent>
                        </ContentWrapper>
                      );
                    } else if (ref.ref === "content3") {
                      return (
                        <ContentWrapper key={ref.id}>
                          <TabContent id={ref.ref} className={ref.ref}>
                            {AllVisaPageData.map((data, index) => {
                              if (data.name === optionName) {
                                return (
                                  <>
                                    <h2 className="documentLabel">
                                      Applying for {data.name} Visa through us
                                      is this simple
                                    </h2>
                                    <ProcessOnVisa />
                                  </>
                                );
                              }
                            })}
                          </TabContent>
                        </ContentWrapper>
                      );
                    } else if (ref.ref === "content4") {
                      return (
                        <ContentWrapper key={ref.id}>
                          <TabContent id={ref.ref} className={ref.ref}>
                            {AllVisaPageData.map((data, index) => {
                              if (data.name === optionName) {
                                return (
                                  <>
                                    <h2 className="documentLabel">
                                      Why choose us? Because we are Awesome!
                                    </h2>
                                    <WhyChooseusVisa />
                                  </>
                                );
                              }
                            })}
                          </TabContent>
                        </ContentWrapper>
                      );
                    } else if (ref.ref === "content5") {
                      return (
                        <ContentWrapper key={ref.id}>
                          <TabContent id={ref.ref} className={ref.ref}>
                            <h2 className="documentLabel">
                              Sun international tours and travels - Reviews
                            </h2>
                            <section id="testimonials">
                              <div className="testimonial-box-container">
                                <div className="testimonial-box">
                                  <div className="box-top">
                                    <div className="profile">
                                      <div className="profile-img">
                                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                                      </div>
                                      <div className="name-user">
                                        <strong>Liam mendes</strong>
                                        <span>@liammendes</span>
                                      </div>
                                    </div>
                                    <div className="reviews">
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={outlineStar}
                                        alt=""
                                        width={"20px"}
                                      />
                                    </div>
                                  </div>
                                  <div className="client-comment">
                                    <p>
                                      Best Schengen visa service i have never
                                      experienced before.Very happy with the
                                      service, I will definitely recommend your
                                      service to my friends and colleagues.
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonial-box">
                                  <div className="box-top">
                                    <div className="profile">
                                      <div className="profile-img">
                                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                                      </div>
                                      <div className="name-user">
                                        <strong>Noah Wood</strong>
                                        <span>@noahwood</span>
                                      </div>
                                    </div>
                                    <div className="reviews">
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={outlineStar}
                                        alt=""
                                        width={"20px"}
                                      />
                                    </div>
                                  </div>
                                  <div className="client-comment">
                                    <p>
                                      Thank you for the smooth and hassle free
                                      visa application for Singapore. Very happy
                                      with the service, I will definitely
                                      recommend your service to my friends and
                                      colleagues.
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonial-box">
                                  <div className="box-top">
                                    <div className="profile">
                                      <div className="profile-img">
                                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                                      </div>
                                      <div className="name-user">
                                        <strong>Oliver Queen</strong>
                                        <span>@oliverqueen</span>
                                      </div>
                                    </div>
                                    <div className="reviews">
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                    </div>
                                  </div>
                                  <div className="client-comment">
                                    <p>
                                      Got my Thailand visa within 5 days. It was
                                      much before than I expected. Thanks a lot
                                      for your prompt service. We appreciate
                                      your efforts and the personal attention.
                                      Wish you good luck.
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonial-box">
                                  <div className="box-top">
                                    <div className="profile">
                                      <div className="profile-img">
                                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                                      </div>
                                      <div className="name-user">
                                        <strong>Barry Allen</strong>
                                        <span>@barryallen</span>
                                      </div>
                                    </div>
                                    <div className="reviews">
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={fullSTar}
                                        alt=""
                                        width={"20px"}
                                      />
                                      <img
                                        src={outlineStar}
                                        alt=""
                                        width={"20px"}
                                      />
                                    </div>
                                  </div>
                                  <div className="client-comment">
                                    <p>
                                      I have processed visas thrice through
                                      Akbar travels. Acknowledge the efficient
                                      and prompt service by the customer support
                                      team. Got the Dubai visas way before the
                                      expected time.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </TabContent>
                        </ContentWrapper>
                      );
                    }
                    return null; // Make sure to return null for other cases
                  })}
                </div>
                <div
                  id="rightSide"
                  className={
                    scrolling
                      ? "rightSide rightSideStick"
                      : "rightSideForContactUs"
                  }
                >
                  <div className="boxWrapper">
                    <div className="formWrapper">
                      <h2>Let us Call you</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="form-groups">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Name"
                          />
                          {errors.firstName && (
                            <p className="error">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="form-groups">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-groups">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                          />
                          {errors.phoneNumber && (
                            <p className="error">{errors.phoneNumber}</p>
                          )}
                        </div>
                        <button type="submit" className="submitBtn">
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="informationDiv">
                      <div className="icon">
                        <img src={whtsap} alt="" width={"30px"} />
                      </div>
                      <div className="labelDiv">
                        <h6>Visa on whatsapp</h6>
                        <h5>+91 9995823040</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SplittingWrapper>
            </div>
          );
        } else {
          return <></>;
        }
      })}
      <UpdatedFooter />
    </Wrapper>
  );
}

export default AllCountryVisaPAge;
const SplittingWrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  position: relative;
  .rightSideForContactUs {
    background-color: #fff;
    height: 100vh;

    position: absolute;
    right: 0;
    width: 35%;
    top: 0px;
    transition: 0.5s all ease;
    padding: 30px 40px;
  }
  .rightSideStick {
    background-color: #fff;
    height: 100vh;

    position: fixed;
    right: 0;
    width: 35%;
    top: 120px;
    padding: 30px 40px;
  }
  .boxWrapper {
    background-color: #0b2f6a;
    padding: 20px 35px;
    height: auto;
  }
  .formWrapper {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    h2 {
      padding: 10px;
      font-size: 25px;
      border-bottom: 1px solid #808080a8;
    }
    .form-groups {
      text-align: left;
      padding: 10px;
      font-size: 17px;

      label {
        display: block;
      }
      input {
        width: 100% !important;
        border-bottom: 2px solid #0b2f6a !important;
        padding: 7px 0px;
      }
      input:focus-visible {
        outline: none !important;
      }
    }
    .error {
      color: red;
    }
    .submitBtn {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 15px;
      border-radius: 25px;
      background: linear-gradient(225.06deg, #3d7bd8 0%, #0b2f6a 100%);
      box-shadow: 0 2px 4px 0 #c4d5f6;
      height: auto !important;
      padding: 6px 30px !important;
      line-height: 39px !important;
      transition: 0.5s all;
      &:hover {
        background: linear-gradient(225.06deg, #0b2f6a 0%, #3d7bd8 100%);
      }
    }
  }
  .informationDiv {
    background: #587ec0;
    padding: 10px 5% !important;
    margin-top: 12px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    .labelDiv {
      color: #fff;
      padding: 0px 10px;
      text-align: left;
      h6 {
        font-size: 13px;
      }
      h5 {
        font-size: 20px;
      }
    }
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  /* background-color: yellow; */
  margin-top: 60px;
  .dashStyle:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -5px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #0b2f6a;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .dashStyle:hover:after {
    width: 100%;
    left: 0;
  }
  .currency {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active:after {
    width: 100%;
    left: 0;
  }
  .sticky {
    position: fixed;
    top: 65px;
    width: 100%;
    z-index: 5;
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
    background-color: #fff;
    height: auto !important;
  }
  .content2 {
    background: #e8ebf2;
    height: auto !important;
    padding-left: 20px;
    padding-right: 20px;
    .documentLabel {
      font-size: 25px;
      color: #000;
      font-weight: 500;
      margin-top: 5px;
      margin-bottom: 25px;
    }
    .documentCard {
      background-color: #ffff;
      text-align: left;
      padding: 20px 20px;
      .labelWrapper {
        padding: 10px;
        border-bottom: 1px solid #a4a1a1;
        label {
          font-size: 17px;
          /* text-align: -webkit-left; */
          font-weight: 600;
        }
      }
      .olStyle {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 30px;
        }
      }
    }
  }
  .content3 {
    background-color: #bcddf2fa;
    height: auto !important;
    margin-left: 20px;
    .documentLabel {
      font-size: 25px;
      color: #000;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 25px;
      text-align: left;
      margin-left: 20px;
    }
  }
  .content4 {
    height: auto !important;
    background-color: #fff;
    padding: 0px !important;
    .documentLabel {
      font-size: 25px;
      color: #000;
      font-weight: 500;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
  .content5 {
    background-color: #e8ebf2;
    margin: 20px;
    height: auto !important;
    .documentLabel {
      font-size: 25px;
      color: #000;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 25px;
    }
    #testimonials {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
    .testimonial-heading {
      letter-spacing: 1px;
      margin: 30px 0px;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .testimonial-heading span {
      font-size: 1.3rem;
      color: #252525;
      margin-bottom: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .testimonial-box-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
    }
    .testimonial-box {
      width: 500px;
      box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      padding: 20px;
      margin: 15px;
      cursor: pointer;
    }
    .profile-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
    .profile-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .profile {
      display: flex;
      align-items: center;
    }
    .name-user {
      display: flex;
      flex-direction: column;
    }
    .name-user strong {
      color: #3d3d3d;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
    }
    .name-user span {
      color: #979797;
      font-size: 0.8rem;
    }
    .reviews {
      color: #f9d71c;
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .box-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .client-comment p {
      font-size: 0.9rem;
      color: #4b4b4b;
    }
    .testimonial-box:hover {
      transform: translateY(-10px);
      transition: all ease 0.3s;
    }

    @media (max-width: 1060px) {
      .testimonial-box {
        width: 45%;
        padding: 10px;
      }
    }
    @media (max-width: 790px) {
      .testimonial-box {
        width: 100%;
      }
      .testimonial-heading h1 {
        font-size: 1.4rem;
      }
    }
    @media (max-width: 340px) {
      .box-top {
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      .reviews {
        margin-top: 10px;
      }
    }
    ::selection {
      color: #ffffff;
      background-color: #252525;
    }
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
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: black;
  .visa-type-head {
    font-size: 25px;
    color: #000;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 25px;
  }
  .carsInnerSplitting {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  .cardTop {
    width: 100%;
    /* float: left; */
    background: #e8ebf2;
    color: #000;
    padding: 10px 13px;
    color: #000;
    font-size: 17px;
    font-weight: 600;
    min-height: 75px;
    text-align: left;
  }
  .cardsinner {
    background-color: #ffff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .cardBottom {
    text-align: left;
    /* padding: 40px 40px; */
    li {
      padding: 10px 40px;
      float: left;
      width: 100%;

      span {
        margin-left: 10px;
        float: right;
      }
    }
  }
  .ideal span {
    margin-left: 0px !important;
  }
`;
const TabItem = styled.div`
  padding: 0px 50px;
  color: #000;
  cursor: pointer;
  transition: 0.3s all;
  position: relative;
  /* &:hover {
    color: #0b2f6a;
    border-bottom: 1px solid #0b2f6a;
  } */
`;
