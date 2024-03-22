import homeIcon from "./assets/home.svg";
import visaIcon from "./assets/visaIcon.svg";
import flightIcon from "./assets/passport (1).svg";
import attesttionIcon from "./assets/authentic.svg";
import certificateIcon from "./assets/religion.svg";
import touricon from "./assets/holiday (1).svg";
import moreIcon from "./assets/application (2) (1).svg";

export const navItems = [
  {
    id: 1,
    title: "",
    path: "/",
    cName: "nav-item",
    icon: homeIcon,
  },

  {
    id: 7,
    title: "Flight",
    path: "/Flight",
    cName: "nav-item",
    icon: flightIcon,
  },
  {
    id: 2,
    title: "Visa",
    path: "/Visa",
    cName: "nav-item",
    icon: visaIcon,
  },
  {
    id: 3,
    title: "Tours",
    path: "/tours",
    cName: "nav-item",
    icon: touricon,
  },

  {
    id: 4,
    title: "Atestation",
    path: "/Atestation",
    cName: "nav-item",
    icon: attesttionIcon,
  },
  {
    id: 5,
    title: "pilgrim",
    path: "/pilgrims",
    cName: "nav-item",
    icon: certificateIcon,
  },
  {
    id: 6,
    title: "More",
    path: "",
    cName: "nav-item more-icon",
    icon: moreIcon,
  },
];
export const moreDropDown = [
  {
    id: 1,
    title: "Overseas education",
    path: "/education",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "FRRO",
    path: "/frro",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Hotel booking",
    path: "/hotel",
    cName: "submenu-item",
  },
];
export const tourDropdown = [
  {
    id: 2,
    title: "International",
    path: "./tours",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Domestic",
    path: "./tours",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Honey Moon",
    path: "./tours",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Cruise",
    path: "./tours",
    cName: "submenu-item",
  },
  {
    id: 6,
    title: "MICE",
    path: "./tours",
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
    title: "Umra",
    path: "/umra",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Hajj",
    path: "/hajj",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Holi land",
    path: "/holiland",
    cName: "submenu-item",
  },
];
export const flightDropdown = [
  {
    id: 1,
    title: "Domestic",
    path: "./flight",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "International",
    path: "./flight",
    cName: "submenu-item",
  },
];

// Visa Types
export const visaDropDown = [
  {
    id: 1,
    title: "European Visa",
    pathname: "/europeanVisa",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "American Visa",
    pathname: "/americanVisa",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Asian Visa",
    pathname: "/asianVisa",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Australian Visa",
    pathname: "/australianVisa",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "African Visa",
    pathname: "/africanVisa",
    cName: "submenu-item",
  },
];

export const testimonials = [
  {
    testimonial:
      "Just talk to brother Rahim, he will make sure you are heard. May Allah protect this business and use it for the benefit of the obedient.",
    name: "Firoz Rasheed",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVXRhRiRSZqouK0NjcLx9iMzeQtq_SZ8LUlA1-9vHF9bLY=s40-c-rp-mo-ba4-br100",
  },
  {
    testimonial: "Best Schengen visa service i have never experienced before",
    name: "Kripa K.V",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXRPaYkdx0jJ-rlY9gYLgxDueVAj7_4on9f-5kBL67e79I=s40-c-rp-mo-br100",
  },
  {
    testimonial:
      "Travel with ease. Enjoy their service for long time. Keep up the good work.",
    name: "Jacob Alexander",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXmGv-G15zVaqWFMSMAuuzdw_nCGPWWRHYWQVw1Y3fgKZu9=s40-c-rp-mo-ba4-br100",
  },
  {
    testimonial: "Good service reasonable price good staff",
    name: "Syam Jasmine",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXSRsCmyvdo8Cp9jSVuWdriYxEy-Ax9EyB5lCoOKa5xU6Yu=s40-c-rp-mo-br100",
  },
  {
    testimonial: "Good service  with responsiblity",
    name: "Fathihu Nabeel k Kadakkal",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVk1rSP-pKhhQOqYWaM1KY08aGthgiyahUI6MuU097ZRM=s40-c-rp-mo-ba6-br100",
  },
  {
    testimonial: "Excellent service ..... Our thanks to sudheesh sir",
    name: "sanal kumar",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocKC8wXZUnWCj-Q0Nb5ExArO_bpbpt02PcH5YyNsr3rLHw=s40-c-rp-mo-br100",
  },
];
