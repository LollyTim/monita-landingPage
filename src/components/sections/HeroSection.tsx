import React from "react";

const HeroSection = () => {
    return (
        <div className=" w-full h-dvh">
            <div className=" flex flex-row justify-between w-[90%] xl:max-w-7xl mx-auto ">
                <div className=" flex flex-col items-start justify-start mt-10">
                    <div className=" flex flex-row items-center justify-center gap-x-2 bg-[#0E0E0E] border border-[#4F4F4F] px-3 py-1 rounded-full">
                        <img src="./monitaLogo1.svg" alt="" />
                        <h4 className=" text-white text-[14px] ">
                            Pay Bills, Buy Data, Shop Online - All in One Place!{" "}
                        </h4>
                    </div>
                    <div className=" ">
                        <h1 className=" font-bold text-[80px] leading-[98px] text-start mt-6 ">
                            Pay Fast.
                            <br /> Live Simple.
                        </h1>
                        <p className=" text-white w-[480px] text-[24px] font-normal">
                            "Simplify your finances with Monita - secure, fast, and reliable."
                        </p>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default HeroSection;
