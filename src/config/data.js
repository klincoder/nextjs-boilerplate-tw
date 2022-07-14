// Import resources
import moment from "moment";

// Import custom files
import logo from "../assets/images/logo.svg";
import logoDefault from "../assets/logo.png";
import logoWhite from "../assets/images/logo-white.svg";
import avatar from "../assets/logo.png";
import hero from "../assets/images/illustration-intro.svg";
import testimonials1 from "../assets/images/avatar-anisha.png";
import testimonials2 from "../assets/images/avatar-richard.png";
import testimonials3 from "../assets/images/avatar-shanai.png";
import fb from "../assets/images/icon-facebook.svg";
import ig from "../assets/images/icon-instagram.svg";
import yt from "../assets/images/icon-youTube.svg";
import tw from "../assets/images/icon-twitter.svg";

// VARIABLES
// BASE URL
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASEURL_PROD
    : process.env.NEXT_PUBLIC_BASEURL_DEV;

// CURRENCY SYMBOL
export const currSymbol = { ngn: "₦", btc: "₿", usd: "$", gh: "GH₵" };

// INTL NUMBER FORMAT
export const intl = new Intl.NumberFormat();

// FILE EXTENSIONS
export const fileExtensions = ["jpg", "jpeg", "gif", "png"];

// APP COLORS
export const appColors = {
  primary: "#301003",
  secondary: "#F15412",
  danger: "#ff5252",
  success: "#198754",
  error: "#dc3545",
  info: "#0dcaf0",
  warning: "#FFC107",
  white: "#ffffff",
  black: "#000000",
  lightBlack: "#333333",
  grey: "#808080",
  lightGrey: "#f5f5f5",
};

// APP IMAGES
export const appImages = {
  logo,
  logoDefault,
  logoWhite,
  hero,
  avatar,
  general: "https://via.placeholder.com/640x400.png",
  testimonials1,
  testimonials2,
  testimonials3,
  fb,
  ig,
  yt,
  tw,
};

// APP REGEX
export const appRegex = {
  numDecimal: /^\d*(\.\d+)?$/,
  fiveDecimals: /^\d*(\.\d{1,5})?$/, ///(\.\d{1,5})?$/; ///^\d*(\.\d+{1,5})?$/
  digitsOnly: /^[0-9]+$/,
  cannotStartWithZero: /^(?:[1-9]\d*|0)$/,
  url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
};

// API ROUTES
export const apiRoutes = {
  adStatus: "mailjet-ad-status",
  adminTranx: "mailjet-admin-tranx",
  broadcast: "mailjet-broadcast",
  contactForm: "mailjet-contact-form",
  login: "mailjet-login",
  newUser: "mailjet-new-user",
  otp: "mailjet-otp",
  passChange: "mailjet-pass-change",
  profileChange: "mailjet-profile-change",
  proofStatus: "mailjet-proof-status",
  submitProof: "mailjet-submit-proof",
  userTranx: "mailjet-user-tranx",
  welcome: "mailjet-welcome",
};

// ALERT MSG
export const alertMsg = {
  general: "Internal error. Please contact support.",
};

// NAV LINKS
export const navLinks = [
  { id: "123", title: "Home", link: "/" },
  { id: "456", title: "About", link: "/about" },
  { id: "789", title: "Services", link: "/services" },
  { id: "1011", title: "Blog", link: "/blog" },
  { id: "1213", title: "Contact", link: "/contact" },
];

// FEATURES LIST
export const featuresList = [
  {
    id: "123",
    title: "Track company-wide progress",
    description:
      "Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum.",
  },
  {
    id: "456",
    title: "Advanced built-in reports",
    description:
      "Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum.",
  },
  {
    id: "789",
    title: "Everything in one place",
    description:
      "Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum.",
  },
];

// TESTIMONIALS LIST
export const testimnialsList = [
  {
    id: "123",
    name: "Anisha",
    image: appImages?.testimonials1,
    quote:
      "Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum.",
  },
  {
    id: "456",
    name: "Richard",
    image: appImages?.testimonials2,
    quote:
      "Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum.",
  },
  {
    id: "789",
    name: "Shanai",
    image: appImages?.testimonials3,
    quote:
      "Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum.",
  },
];

// SOCIAL LINKS
export const socialLinks = [
  { id: "123", title: "Facebook", image: appImages?.fb, slug: "facebook" },
  { id: "456", title: "Instagram", image: appImages?.ig, slug: "instagram" },
  { id: "789", title: "YouTube", image: appImages?.yt, slug: "youTube" },
  { id: "1011", title: "Twitter", image: appImages?.tw, slug: "twitter" },
];

// COMPANY LINKS
export const companyLinks = [
  { id: "123", title: "Home", link: "/" },
  { id: "456", title: "About", link: "/about" },
  { id: "789", title: "Services", link: "/services" },
  { id: "1011", title: "Blog", link: "/blog" },
  { id: "1213", title: "FAQs", link: "/faqs" },
  { id: "1415", title: "Contact", link: "/contact" },
  { id: "1617", title: "Privacy Policy", link: "/privacy" },
  { id: "1819", title: "Terms & Conditions", link: "/terms" },
];