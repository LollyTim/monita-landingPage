import { images } from "../../constants/images";

const Footer = () => {
    return (
        <div
            className="w-full bg-[#000] flex flex-col pt-10 relative overflow-hidden"
            style={{
                background: "linear-gradient(225deg, rgba(187, 213, 35, 0.15) 0%, #000000 35%)"
            }}
        >


            <div className="flex flex-col md:flex-row justify-between items-start w-[90%] lg:w-[80%] mx-auto space-y-8 md:space-y-0 relative z-10">
                {/* Logo and Description */}
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <img src={images.logo.secondary} className="w-[150px] md:w-[200px]" alt="Logo" />
                    <p className="text-[16px] md:text-[18px] font-normal leading-[23px] text-white w-[280px] md:w-[350px]">
                        Empowering seamless, secure, and reliable financial transactions. Your trusted partner for managing payments, transfers, and cards with ease and confidence.
                    </p>
                    <div className="flex flex-row gap-3.5 mt-6">
                        <img src={images.icon.facebookIcon} alt="Facebook" />
                        <img src={images.icon.linkedinIcon} alt="LinkedIn" />
                        <img src={images.icon.instagramIcon} alt="Instagram" />
                        <img src={images.icon.tiktockIcon} alt="TikTok" />
                        <img src={images.icon.xIcon} alt="X" />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3.5 w-full md:w-auto">
                    <p className="text-[16px] font-semibold text-white">Home</p>
                    <p className="text-[16px] font-semibold text-white">About Us</p>
                    <p className="text-[16px] font-semibold text-white">Contact Us</p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3.5 w-full md:w-auto">
                    <p className="text-[16px] font-bold text-white">Features</p>
                    <p className="text-[16px] font-semibold text-white">Send Money</p>
                    <p className="text-[16px] font-semibold text-white">Receive Money</p>
                    <p className="text-[16px] font-semibold text-white">One Card</p>
                    <p className="text-[16px] font-semibold text-white">Bill Payment</p>
                    <p className="text-[16px] font-semibold text-white">Gift Card</p>
                    <p className="text-[16px] font-semibold text-white">Cashback</p>
                </div>

                {/* Legal & Privacy */}
                <div className="flex flex-col gap-3.5 w-full md:w-auto">
                    <p className="text-[16px] font-bold text-white">Legal & Privacy</p>
                    <p className="text-[16px] font-semibold text-white">Privacy Notice</p>
                    <p className="text-[16px] font-semibold text-white">Cookies Policy</p>
                    <p className="text-[16px] font-semibold text-white">Terms and Conditions</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full justify-center items-center flex py-8 md:py-16 relative z-10">
                <p className="text-white text-[14px] font-normal text-center">
                    © 2025 Monita. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;