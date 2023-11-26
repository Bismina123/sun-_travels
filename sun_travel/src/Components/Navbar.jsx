import Logo from "../assets/Logo-01 (3).svg";

import styled from "styled-components";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink, Element } from "react-scroll";
import { Link, Link as LinkRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { useEffect, useState } from "react";
import NavbarStyle from "./NavbarStyle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  atestationDropdown,
  certificateDropdown,
  moreDropDown,
  navItems,
  tourDropdown,
} from "./NavItems";
import Dropdown from "./TourDropDown";
export default function Navbar() {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];

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
  const [tourDropdownShow, setourDropdownShow] = useState(false);
  const [attestationDropdownShow, setAttestationDropdownShow] = useState(false);
  const [certificateDropdownShow, setCertificateDropdownShow] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <MainWrapper>
      {/* <Slide top> */}
      <Wrapper>
        <HeaderWrapper className={navbar ? "navbar active" : "navbar"}>
          <HeaderLogo>
            <Link to="/" className="navbar-logo">
              <img src={Logo} />
            </Link>
          </HeaderLogo>
          <NavPagesWrapper>
            <ul className="nav-items">
              {navItems.map((item) => {
                if (item.title === "Tours") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setourDropdownShow(true)}
                      onMouseLeave={() => setourDropdownShow(false)}
                    >
                      <Link to={item.path}>
                        {item.title}
                        <ExpandMoreIcon />
                      </Link>
                      {tourDropdownShow && <Dropdown data={tourDropdown} />}
                    </li>
                  );
                }
                if (item.title === "Atestation") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setAttestationDropdownShow(true)}
                      onMouseLeave={() => setAttestationDropdownShow(false)}
                    >
                      <Link to={item.path}>
                        {item.title} <ExpandMoreIcon />
                      </Link>
                      {attestationDropdownShow && (
                        <Dropdown data={atestationDropdown} />
                      )}
                    </li>
                  );
                }
                if (item.title === "Certificate") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setCertificateDropdownShow(true)}
                      onMouseLeave={() => setCertificateDropdownShow(false)}
                    >
                      <Link to={item.path}>
                        {item.title} <ExpandMoreIcon />
                      </Link>
                      {certificateDropdownShow && (
                        <Dropdown data={certificateDropdown} />
                      )}
                    </li>
                  );
                }
                if (item.title === "More") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setShowMore(true)}
                      onMouseLeave={() => setShowMore(false)}
                    >
                      <Link to={item.path}>
                        {item.title} <MoreVertIcon />
                      </Link>
                      {showMore && <Dropdown data={moreDropDown} />}
                    </li>
                  );
                }
                return (
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </NavPagesWrapper>
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
            <p>(Approved by Govt. of India, Ministry of Tourism)</p>
          </HeaderMenu>
        </HeaderWrapper>
      </Wrapper>
    </MainWrapper>
  );
}
const NavPagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 0 0 80px;
  .pageName {
    padding-top: 6px;
    display: flex;
    align-items: center;
  }
`;
const MenuBlock = styled.div`
  margin-left: 20px;
`;

const MainWrapper = styled.div`
  /* padding: 20px 0; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* border-bottom: 1px solid #001499; */
  /* background: rgb(255 255 255 / 20%); */
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
    max-height: 45px;
    min-width: 120px;
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
  /* text-align: center; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: flex-end; */
  p {
    font-family: "Lato";
    /* margin: 5px 0 0 0; */
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
  /* .rotate {
    transition: all 1s ease-in-out;
  }
  .rotate:hover {
    transform: translateY(-10px);
    /* background: #65b5da8f; */
  /* border-radius: 50%; */
  /* }  */
`;
