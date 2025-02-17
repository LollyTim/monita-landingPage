import monitaLogo1 from "../assets/icons/monitaLogo1.svg";
import monitaLogo from "../assets/icons/monita-logo.svg";
import bgImage from "../assets/images/Monita 1.png";
import arrowRight from "../assets/icons/arrowRight.png";
import appleandGplay from "../assets/icons/apple-play.png";
import heroImage from "../assets/images/mobileappMockup.png";
import pcidssLogo from "../assets/images/pcidssLogo.png";
import ndpcLogo from "../assets/images/ndpcLogo.png";
import tundIcon from "../assets/icons/lighting.png";
import featMockup from "../assets/images/featMockup.png";
import cardMockup from "../assets/images/cardmockup.png";
import billIcon from "../assets/icons/billIcon.svg";
import cardIcon from "../assets/icons/cardIcon.svg";
import eSimIcon from "../assets/icons/eSimIcon.svg";
import featBG from "../assets/images/featureBlurBG.png";
import quoteIcon from "../assets/icons/quoteIcon.svg";
import testimoBg from "../assets/images/TestimoBg.png";
import bRifhtIcon from "../assets/icons/arrow-small-right.svg";
import bLeftIcon from "../assets/icons/arrow-small-left.svg";
import signupMockup from "../assets/images/signupMockup.png";
import connectorLine1 from "../assets/icons/Connector line1.svg";
import connsectorLine2 from "../assets/icons/Connector line2.svg";
import cardScreenMockup from "../assets/images/cardScreenMockup.png";
import verifyScreenMockup from "../assets/images/verifyMockup.png";
import fundScreenMockup from "../assets/images/fundWalletMockup.png";
import greenBg from "../assets/images/greenBg.png";
import shildImage from "../assets/images/Shield.png";
import thundIconWhite from "../assets/icons/thundIconW.svg";
import mobileAppSecBg from "../assets/images/downlooadSectionBg.png";
import servicesImg from "../assets/images/services.png";
import monitaSuccess from "../assets/images/monitaSuccess.png";
import instagramIcon from "../assets/icons/instagramIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import facebookIcon from "../assets/icons/facebookIcon.svg";
import tiktockIcon from "../assets/icons/tiktockIcon.svg";
import xIcon from "../assets/icons/xIcon.svg";
import appleIcon from "../assets/icons/appleIcon.svg";
import playstoreIcon from "../assets/icons/playstoreIcon.svg";
import RMoneyHeroImg from "../assets/images/RMoneyHeroImg.png";
import BTfMockup from "../assets/images/BTfMockup.png";
import bankIcon from "../assets/icons/BANKiCON.svg";
import qrIcon from "../assets/icons/qrIcon.svg";
import OCHeroImg from "../assets/images/ocardheroImg.png";
import SMSection2Img from "../assets/images/SMSec2Img.png";
import SMHeroImg from "../assets/images/SMhwroImage.png";
import BPHeroImg from "../assets/images/billpayHeroImg.png";
import BPSect2Img from "../assets/images/billpaySec2Img.png";
import oneCardSec2 from "../assets/images/oneCardScet2.png";
import GCardHeroImg from "../assets/images/GCardHeroImg.png";
import GCardSec2 from "../assets/images/GCardSect2.png";
import bg4feat1 from "../assets/images/bgforfeat1.png";
import bg4featC2 from "../assets/images/bgimgforc22.png";
import featSideLogo from "../assets/images/featSideImgLOgo.png";
import rotContent from "../assets/images/shildnorotGroup.png";
import rotateImg from "../assets/images/rotate.png";
import twoMockups from "../assets/images/Two mockups.png";
import BgandNotif from "../assets/images/background and notification.png";

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
    signupMockup,
    cardScreenMockup,
    verifyScreenMockup,
    fundScreenMockup,
    BTfMockup,
  },
  icon: {
    thundIconWhite,
    connectorLine1,
    connsectorLine2,
    arrowRight,
    appleandGplay,
    tundIcon,
    eSimIcon,
    billIcon,
    cardIcon,
    quoteIcon,
    bLeftIcon,
    bRifhtIcon,
    instagramIcon,
    linkedinIcon,
    facebookIcon,
    tiktockIcon,
    xIcon,
    appleIcon,
    playstoreIcon,
    bankIcon,
    qrIcon,
  },
  image: {
    RMoneyHeroImg,
    monitaSuccess,
    servicesImg,
    bg4feat1,
    mobileAppSecBg,
    featBG,
    shildImage,
    bgImage: bgImage,
    bg4featC2,
    heroImage,
    greenBg,
    testimoBg,
    OCHeroImg,
    SMSection2Img,
    featSideLogo,
    SMHeroImg,
    BPSect2Img,
    BPHeroImg,
    oneCardSec2,
    GCardHeroImg,
    GCardSec2,
    rotateImg,
    rotContent,
    BgandNotif,
    twoMockups,
  },
} as const;

export type ImageAssets = typeof images;
