import Logo from "../assets/Logo-01 (3).svg";

import styled from "styled-components";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import {
  atestationDropdown,
  certificateDropdown,
  moreDropDown,
  navItems,
  tourDropdown,
} from "./NavItems";

import expandIcon from "./assets/down-arrow (1).svg";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar, "navbar");
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY, "ttttttttt");
      if (window.scrollY >= 400) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainWrapper>
      <Wrapper>
        <HeaderWrapper className={navbar ? "navbar active" : "navbar"}>
          <HeaderLogo>
            <Link to="/" className="navbar-logo">
              <img src={Logo} alt="logo" />
            </Link>
          </HeaderLogo>

          <NavItems>
            <ul className="navbar-links">
              {navItems.map((item) => {
                if (item.title === "Tours") {
                  return (
                    <li className="navbar-dropdown" key={item.id}>
                      <Link to={item.path} className="link-main">
                        <WrapperLabelIcon className="iconHover">
                          <img src={item.icon} alt={item.icon} />
                          {item.title}
                          <img
                            className="dropdownArrowIcon"
                            src={expandIcon}
                            alt={expandIcon}
                          />
                        </WrapperLabelIcon>
                      </Link>
                      <div className="dropdown">
                        {tourDropdown.map((subTours, index) => {
                          return (
                            <Link
                              to={subTours.path}
                              key={index}
                              className="dropdown-submenu-hover"
                            >
                              {subTours.title}
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  );
                }
                if (item.title === "Atestation") {
                  return (
                    <li className="navbar-dropdown" key={item.id}>
                      <Link to={item.path} className="link-main">
                        <WrapperLabelIcon className="iconHover">
                          <img src={item.icon} alt={item.icon} />

                          {item.title}
                          <img
                            className="dropdownArrowIcon"
                            src={expandIcon}
                            alt={expandIcon}
                          />
                        </WrapperLabelIcon>
                      </Link>
                      <div className="dropdown">
                        {atestationDropdown.map((subTours, index) => {
                          return (
                            <Link
                              to={subTours.path}
                              key={index}
                              className="dropdown-submenu-hover"
                            >
                              {subTours.title}
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  );
                }

                if (item.title === "Certificate") {
                  return (
                    <li className="navbar-dropdown" key={item.id}>
                      <Link to={item.path} className="link-main">
                        <WrapperLabelIcon className="iconHover">
                          <img src={item.icon} alt={item.icon} />

                          {item.title}
                          <img
                            className="dropdownArrowIcon"
                            src={expandIcon}
                            alt={expandIcon}
                          />
                        </WrapperLabelIcon>
                      </Link>
                      <div className="dropdown">
                        {certificateDropdown.map((subTours, index) => {
                          return (
                            <Link
                              to={subTours.path}
                              key={index}
                              className="dropdown-submenu-hover"
                            >
                              {subTours.title}
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  );
                }
                if (item.title === "More") {
                  return (
                    <li className="navbar-dropdown" key={item.id}>
                      <Link to={item.path} className="link-main">
                        <WrapperLabelIcon className="iconHover">
                          <img src={item.icon} alt={item.icon} />
                          {item.title}
                          <img
                            className="dropdownArrowIcon"
                            src={expandIcon}
                            alt={expandIcon}
                          />{" "}
                        </WrapperLabelIcon>
                      </Link>
                      <div className="dropdown">
                        {moreDropDown.map((subTours, index) => {
                          return (
                            <Link
                              to={subTours.path}
                              key={index}
                              className="dropdown-submenu-hover"
                            >
                              {subTours.title}
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path} className="link-main">
                      <WrapperLabelIcon className="iconHover">
                        <img src={item.icon} alt={item.icon} />
                        {item.title}
                      </WrapperLabelIcon>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </NavItems>

          <HeaderMenu>
            <HeaderUl>
              <HeaderLi>
                <img src={img1} alt="" />
              </HeaderLi>
              <HeaderLi>
                <img src={img2} alt="" />
              </HeaderLi>
              <HeaderLi>
                <img src={img3} alt="" />
              </HeaderLi>
              <HeaderLi>
                <img src={img4} alt="" />
              </HeaderLi>
              <HeaderLi>
                <img src={img5} alt="" />
              </HeaderLi>
              <HeaderLi>
                <img src={img6} alt="" />
              </HeaderLi>
            </HeaderUl>
            <p className="approved-p">
              (Approved by Govt. of India, Ministry of Tourism)
            </p>
          </HeaderMenu>
        </HeaderWrapper>
      </Wrapper>
    </MainWrapper>
  );
}
const WrapperLabelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  border-radius: 5px;
  /* transition: ease-in 0.5s; */

  img {
    width: 21px;
    height: 21px;
  }
  .dropdownArrowIcon {
    /* img { */
    width: 15px;
    height: 15px;
    margin-left: -4px;
    /* } */
  }
  &:hover {
    color: #ffc40d;
    padding: 5px;
    background: #0b2f6a;
    border-radius: 5px;
    transition: ease-in 0.5s;
    img {
      filter: invert(62%) sepia(100%) saturate(7380%) hue-rotate(26deg)
        brightness(302%) contrast(109%) !important;
      fill: #ffc40d !important;
    }
  }
  .iconHover {
  }
`;
const NavItems = styled.div`
  .navbar-links {
    list-style-type: none;
    display: flex;
  }

  .navbar-links li a {
    display: block;
    text-decoration: none;
    color: #0b2f6a;
    padding: 20px 15px;
    font-weight: 700;
    transition: 0.4s all;
    text-transform: capitalize;
    font-family: "lato" !important;
    letter-spacing: 1px;
    font-size: 17px;
  }
  .navbar-dropdown {
    display: flex;
    align-items: center;
    height: 10vh;
  }
  .navbar-links li.navbar-dropdown {
    position: relative;
  }

  .navbar-links li.navbar-dropdown:hover .dropdown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }

  .navbar-links li.navbar-dropdown .dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: 20px 0;
    top: 100%;
    transform: translateY(50px);
    left: 0;
    min-width: 250px;
    width: auto;
    background-color: #fff;
    box-shadow: 0px 10px 10px 3px rgba(0, 0, 0, 0.3);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    z-index: 111;
    transition: 0.4s all;
    text-align: left;
  }
  .navbar-links li.navbar-dropdown .dropdown a {
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 400;
    text-transform: capitalize;
    font-family: "lato" !important;
  }
  .navbar-dropdown .dropdown a:hover {
    padding-left: 30px;
  }
  /* .navbar-links li a:hover {
    color: #ffc40d;
  } */
  .dropdown-submenu-hover:hover {
    color: #ffc40d;
  }
  .link-main {
    position: relative;
  }
  .iconHover:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 10px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #0b2f6a;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .iconHover:hover:after {
    width: 100%;
    left: 0;
  }
  .dropdown {
    padding: 20px !important;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: fixed;
  &.fixed {
    padding: 0;
    & > div {
      & > div {
        border-radius: 0 0 15px 15px;
        background: #001499;
        & > div {
          width: 100%;
        }
      }
    }
  }
  & > div {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
const HeaderWrapper = styled.div``;
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    max-height: 53px;
    min-width: 136px;
  }
`;
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 0 0 0 !important;
  padding: 0 0 0 0 !important;
  justify-content: center;
`;
const HeaderMenu = styled.div`
  p {
    font-family: "Lato";

    font-size: 12px;
    color: #001499;
    border-radius: 5px;
    font-weight: 500;
  }
`;
const HeaderLi = styled.li`
  font-family: "Rubik";
  padding: 0 3px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  font-size: 13px;
  margin-left: 5px;
  border-radius: 5px;
  box-shadow: #463b3bde;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-7px);
  }
  img {
    max-width: 35px;
  }
 
`;
