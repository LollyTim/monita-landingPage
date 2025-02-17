import { images } from "../../constants/images";
import AnimatedSVG from "../common/AnimatedSVG";
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <div
            className="w-full min-h-[105vh] lg:min-h-[90vh]"
            style={{
                backgroundImage: `url(${images.image.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex xl:flex-row lg:flex-row flex-col justify-between w-[90%] lg:w-[90%] xl:max-w-7xl mx-auto lg:pt-14 xl:pt-12">
                <div className="flex flex-col items-start justify-start mt-14">
                    <div className="flex flex-row items-center justify-center gap-x-2 bg-[#0E0E0E] border border-[#4F4F4F] xl:px-3 px-2 py-1 rounded-full">
                        <img
                            src={images.logo.primary}
                            alt="Monita Logo"
                            className="xl:w-[30px] w-[20px]"
                            loading="lazy" // Lazy load non-critical logo
                        />
                        <h4 className="text-white xl:text-[14px] lg:text-[14px] text-[10px] font-poppinsMedium">
                            Pay Bills, Buy Data, Shop Online - All in One Place!{" "}
                        </h4>
                    </div>
                    <div>
                        <h1
                            className="font-bold xl:text-[80px] font-MuseoModerno md:text-[64px] text-[40px] xl:leading-[98px] md:leading-[80px] leading-[40px] text-start mt-6"
                            style={{
                                background: 'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Pay Fast.
                            <br /> Live Simple.
                        </h1>
                        <div className="xl:w-[530px] w-[290px] lg:w-[530px] relative">
                            <p className="font-poppinsRegular text-white xl:text-[24px] lg:text-[22px] text-[16px] mt-6 font-normal">
                                "Simplify your finances with Monita - secure, fast, and reliable."
                            </p>
                            <div className="absolute lg:left-[230px] left-[220px] top-[21px] lg:top-[40px] mb-10 z-40">
                                <AnimatedSVG />
                            </div>
                        </div>
                        <div className="w-full flex flex-row gap-5 justify-start items-center md:mt-14 mt-10">
                            <div className="flex flex-row bg-white py-3 lg:gap-x-6 lg:py-2 gap-x-2 lg:px-3 px-2 rounded-full justify-center items-center lg:w-[235px] w-[130px] lg:h-fit h-[50px]">
                                <p className="text-black lg:text-[22px] text-[11px] font-medium font-poppinsMedium text-nowrap">Get Started</p>
                                <div className="lg:w-[50px] lg:h-[50px] w-[34px] h-[34px] bg-black rounded-full justify-center items-center flex flex-col">
                                    <img
                                        src={images.icon.arrowRight}
                                        alt="Arrow Icon"
                                        className="w-[10px] h-[10px]"
                                        loading="lazy" // Lazy load non-critical icon
                                    />
                                </div>
                            </div>
                            <button className="cursor-pointer flex flex-row bg-[#CEEF08] lg:py-5 py-2 lg:gap-x-2 gap-x-2 lg:px-6 px-2 rounded-full justify-center items-center lg:w-[300px] text-nowrap w-[180px] lg:h-fit h-[50px]">
                                <img
                                    src={images.icon.appleandGplay}
                                    alt="Apple and Google Play Icon"
                                    className="lg:w-[50px] w-[30px]"
                                    loading="lazy" // Lazy load non-critical icon
                                />
                                <p className="text-black lg:text-[22px] text-[11px] font-medium font-poppinsMedium">Download the App</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[50%] lg:w-[45%] w-full flex flex-col justify-end items-end mt-15 relative">
                    <img
                        src={images.image.BgandNotif}
                        alt="Hero Image"
                        className="xl:w-[550px] lg:size-[460px] xl:size-[570px] lg:-mt-7 xl:-mt-14 z-0"
                        loading="eager" // Prioritize loading the hero image
                    />
                    <motion.img
                        animate={{
                            y: [1, -18, 0],
                        }}
                        transition={{
                            duration: 1.99,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        src={images.image.twoMockups}
                        alt="Hero Image"
                        width={500}
                        height={800}

                        className="xl:w-[500px] lg:w-[400px] lg:size-[480px] xl:size-[570px] w-[300px] size-[340px] justify-center items-center mx-auto absolute z-10 lg:-top-12 xl:-top-14 right-5 object-contain"
                        loading="eager" // Prioritize loading the hero image
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto gap-y-4">
                <div className="flex flex-row gap-x-5 xl:mt-20 mt-16 justify-center items-center">
                    <p className="text-[15px] font-medium text-[#C4C4C4] font-poppinsRegular">Fully licensed by</p>
                    <p className="text-[12px] font-medium text-[#C4C4C4] font-poppinsRegular">X</p>
                    <p className="text-[15px] font-medium text-[#C4C4C4] font-poppinsRegular">Backed by</p>
                </div>
                <div className="flex flex-row gap-4">
                    <img
                        src={images.logo.pcidssLogo}
                        alt="PCI DSS Logo"
                        className="xl:w-[200px] w-[100px]"
                        loading="lazy" // Lazy load non-critical logo
                    />
                    <img
                        src={images.logo.ndpcLogo}
                        alt="NDPC Logo"
                        className="xl:w-[200px] w-[100px]"
                        loading="lazy" // Lazy load non-critical logo
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;