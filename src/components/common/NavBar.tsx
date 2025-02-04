import React from "react";

const NavBar = () => {
    return (
        <div className="w-full justify-center items-center py-6 bg-[#000000] ">
            <div className=" flex flex-row justify-between w-[90%] xl:max-w-7xl  mx-auto">
                <img
                    src="./monita-logo.svg"
                    alt="Monita Logo"
                    //   sizes="30"
                    className=" "
                    width={200}
                />
                <div className=" bg-[#0E0E0E] border border-[#1A1A1A] px-5 flex flex-row justify-between items-center w-[354px] rounded-full">
                    <a
                        href=""
                        className=" text-lg leading-[19px] font-medium text-white "
                    >
                        Features
                    </a>
                    <a
                        href=""
                        className=" text-lg leading-[19px] font-medium text-white "
                    >
                        About Us
                    </a>
                    <a
                        href=""
                        className=" text-lg leading-[19px] font-medium text-white "
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
