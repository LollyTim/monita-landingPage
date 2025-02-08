import { images } from "../../constants/images";


const NavBar = () => {
    return (
        <div className="w-full justify-center items-center pt-12 bg-[#000000] ">
            <div className=" flex flex-row justify-between w-[90%] lg:w-[80%] xl:max-w-7xl  mx-auto">
                <img
                    src={images.logo.secondary}
                    alt="Monita Logo"
                    className=" xl:w-[200px] w-[140px]"
                // width={200}

                />
                <div className=" bg-[#0E0E0E] border border-[#1A1A1A] px-5 xl:flex lg:flex lg:flex-row xl:flex-row hidden justify-between items-center w-[354px] rounded-full">
                    <a
                        href=""
                        className=" text-[15px] leading-[19px] font-medium text-white "
                    >
                        Features
                    </a>
                    <a
                        href=""
                        className=" text-[15px] leading-[19px] font-medium text-white "
                    >
                        About Us
                    </a>
                    <a
                        href=""
                        className=" text-[15px] leading-[19px] font-medium text-white "
                    >
                        Contact Us
                    </a>
                </div>
                <div className="bg-[#CEEF08] text-black justify-center items-center rounded-full px-4 lg:hidden xl:hidden flex py-2"
                >

                    <a
                        href=""
                        className=" text-[15px] leading-[19px] font-medium text-black  "
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
