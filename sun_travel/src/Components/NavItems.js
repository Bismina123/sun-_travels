import dropDownArrow from "./assets/dropDown.png";
import more from "./assets/more.png";
import homeIcon from "./assets/home.svg";
import visaIcon from "./assets/visaIcon.svg";
import flightIcon from "./assets/passport (1).svg";
import attesttionIcon from "./assets/authentic.svg";
import certificateIcon from "./assets/certificate (1).svg";
import touricon from "./assets/holiday (1).svg";
import moreIcon from "./assets/application (2) (1).svg";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
    icon: homeIcon,
  },

  {
    id: 2,
    title: "Visa",
    path: "./Visa",
    cName: "nav-item",
    icon: visaIcon,
  },
  {
    id: 7,
    title: "Flight",
    path: "./",
    cName: "nav-item",
    icon: flightIcon,
  },
  {
    id: 3,
    title: "Tours",
    path: "./Tours",
    cName: "nav-item",
    icon: touricon,
  },
  

  {
    id: 4,
    title: "Atestation",
    path: "./Atestation",
    cName: "nav-item",
    icon: attesttionIcon,
  },
  {
    id: 5,
    title: "Certificate",
    path: "./Certificate",
    cName: "nav-item",
    icon: certificateIcon,
  },
  {
    id: 6,
    title: "More",
    path: "./",
    cName: "nav-item more-icon",
    icon: moreIcon,
  },
 
];
export const moreDropDown = [
  {
    id: 1,
    title: "Umra",
    path: "./Umra",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Cruise",
    path: "./Cruise",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Embassy",
    path: "./Embassy",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Flight",
    path: "./Flight",
    cName: "submenu-item",
  },
];
export const tourDropdown = [
  {
    id: 1,
    title: "International",
    path: "./tour",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Domestic",
    path: "./tour",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Indian Tour",
    path: "./tour",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Holidays",
    path: "./tour",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Group Tour",
    path: "./tour",
    cName: "submenu-item",
  },
];
export const atestationDropdown = [
  {
    id: 1,
    title: "Home Department",
    path: "./Atestation",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Notary",
    path: "./Atestation",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "MEA",
    path: "./Atestation",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Appostle",
    path: "./Atestation",
    cName: "submenu-item",
  },
];
export const certificateDropdown = [
  {
    id: 1,
    title: "Marriage",
    path: "./Certificate",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Birth Certificate",
    path: "./Certificate",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Death Certificate",
    path: "./Certificate",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Power of Attorney",
    path: "./Certificate",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "AD Educational Document ",
    path: "./Certificate",
    cName: "submenu-item",
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Aswin",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Afsal Siddique",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
