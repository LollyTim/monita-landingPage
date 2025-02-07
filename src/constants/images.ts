// Import all images
import monitaLogo1 from "../assets/icons/monitaLogo1.svg";
import monitaLogo from "../assets/icons/monita-logo.svg";
import bgImage from "../assets/images/Monita 1.png";
import arrowRight from "../assets/icons/arrowRight.png";
import appleandGplay from "../assets/icons/apple-play.png";
import heroImage from "../assets/images/heroImage1.png";
import pcidssLogo from "../assets/images/pcidssLogo.png";
import ndpcLogo from "../assets/images/ndpcLogo.png";
import tundIcon from "../assets/icons/lighting.png";
import featMockup from "../assets/images/featMockup.png";
import cardMockup from "../assets/images/cardmockup.png";
import billIcon from "../assets/icons/billIcon.svg";
import cardIcon from "../assets/icons/cardIcon.svg";
import eSimIcon from "../assets/icons/eSimIcon.svg";
import featBG from "../assets/images/featureBlurBG.png";

// Create an images object
export const images = {
  logo: {
    primary: monitaLogo1,
    secondary: monitaLogo,
    pcidssLogo,
    ndpcLogo,
  },
  mockups: {
    featMockup,
    cardMockup,
  },
  icon: {
    arrowRight,
    appleandGplay,
    tundIcon,
    eSimIcon,
    billIcon,
    cardIcon,
  },
  image: {
    featBG,
    bgImage: bgImage,
    heroImage,
  },
  // Add more categories as new assets become available
} as const;

// Type for type safety
export type ImageAssets = typeof images;
