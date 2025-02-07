import { images } from "../../constants/images";

const HeroSection = () => {
    return (
        <div className="w-full min-h-[105vh]" style={{
            backgroundImage: `url(${images.image.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className=" flex xl:flex-row  flex-col justify-between w-[90%] xl:max-w-7xl mx-auto xl:mt-12">
                <div className=" flex flex-col items-start justify-start mt-14">
                    <div className=" flex flex-row items-center justify-center gap-x-2 bg-[#0E0E0E] border border-[#4F4F4F] xl:px-3 px-2 py-1 rounded-full">
                        <img src={images.logo.primary} alt="Monita Logo" className="xl:w-[30px] w-[20px]" />
                        <h4 className=" text-white xl:text-[14px] lg:text-[12px] text-[10px] ">
                            Pay Bills, Buy Data, Shop Online - All in One Place!{" "}
                        </h4>
                    </div>
                    <div className=" ">
                        <h1
                            className="font-bold xl:text-[80px] font-MuseoModerno md:text-[60px] text-[40px] xl:leading-[98px] md:leading-[60px] leading-[40px] text-start mt-6"
                            style={{
                                background: 'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Pay Fast.
                            <br /> Live Simple.
                        </h1>
                        <p className=" text-white xl:w-[480px] w-[290px] xl:text-[24px] text-[16px] mt-6 font-normal">
                            "Simplify your finances with Monita - secure, fast, and reliable."
                        </p>
                        <div className=" w-full flex flex-row gap-5 justify-start items-center mt-7">

                            <div className=" flex flex-row bg-white py-3 lg:gap-x-2 lg:py-2 gap-x-2 lg:px-3 px-2 rounded-full justify-center items-center xl:w-[180px] w-[130px] xl:h-fit h-[50px] ">
                                <p className=" text-black xl:text-lg text-[11px] font-medium">Get Started</p>
                                <div className=" xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] bg-black rounded-full justify-center items-center flex flex-col">
                                    <img src={images.icon.arrowRight} alt="" className="w-[10px] h-[10px]" />
                                </div>

                            </div>
                            <div className=" flex flex-row bg-[#CEEF08] xl:py-5 py-2 xl:gap-x-2 gap-x-2 xl:px-6 px-2 rounded-full justify-center items-center xl:w-[250px] w-[180px] xl:h-fit h-[50px] ">
                                <img src={images.icon.appleandGplay} alt=" apple and google play icon" className=" lg:w-[40px] w-[30px] " />

                                <p className=" text-black xl:text-[18px] text-[11px] font-medium">Download the App</p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="xl:w-[50%] w-full flex flex-col justify-center items-center mt-10 ">
                    <img src={images.image.heroImage} className=" w-[500px]" alt="" />
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center mx-auto gap-y-4">
                <div className=" flex flex-row gap-x-5 xl:mt-20 mt-16 justify-center items-center">
                    <p className=" text-[15px] font-medium text-[#C4C4C4]">Fully liscened by</p>
                    <p className=" text-[12px] font-medium text-[#C4C4C4]">X</p>
                    <p className=" text-[15px] font-medium text-[#C4C4C4]">Backed by</p>
                </div>
                <div className=" flex flex-row gap-2.5">
                    <img src={images.logo.pcidssLogo} alt="pcidssLogo" className=" xl:w-[150px] w-[100px]" />
                    <img src={images.logo.ndpcLogo} alt="ndpcLogo" className=" xl:w-[150px] w-[100px]" />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
