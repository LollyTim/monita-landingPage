import { images } from "../../../constants/images"
import AnimatedSVG from "../../common/AnimatedSVG"

const BillPaymentHero = () => {
    return (
        <div
            className="w-full lg:h-[85vh] h-[80vh] justify-start items-start flex "
            style={{
                backgroundImage: `url(${images.image.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex xl:flex-row lg:flex-row flex-col justify-between w-[90%] h-[85%] lg:w-[90%] xl:max-w-7xl mx-auto mt-1 lg:mt-14 xl:mt-12">
                <div className="flex flex-col items-start justify-start mt-14">
                    <div className="flex flex-row items-center justify-center gap-x-2 bg-[#0E0E0E] border border-[#4F4F4F] xl:px-3 px-2 py-1 rounded-full">
                        <img
                            src={images.logo.primary}
                            alt="Monita Logo"
                            className="xl:w-[30px] w-[20px]"
                            loading="lazy"
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
                            Bill Payment
                        </h1>
                        <div className="xl:w-[530px] w-[100%] lg:w-[560px] relative">
                            <p className="font-poppinsRegular text-white xl:text-[20.3px] lg:text-[22px] text-[16px] mt-6 font-normal">
                                "Simplify your finances with Monita - secure, fast, and reliable."
                            </p>
                            <div className="absolute lg:left-[145px] left-[160px] top-[25px] lg:top-[35px] mb-10 z-40">
                                <AnimatedSVG />
                            </div>
                        </div>
                        <div className="flex flex-row justify-start items-start mt-9 gap-4.5">
                            <div className="flex flex-row bg-[#CEEF0A] py-2 md:py-3 lg:py-4 gap-x-2 px-4 md:px-4 rounded-full justify-center items-center w-[130px] md:w-[200px] lg:w-[200px] ">
                                <img src={images.icon.appleIcon} alt="apple and google play icon" className="w-[16px] md:w-[20px]" />
                                <p className="text-black text-[11px] md:text-[14px] lg:text-[18px] font-medium font-poppinsMedium">Apple Store</p>
                            </div>
                            <div className="flex flex-row bg-[#CEEF0A] py-2 md:py-3 lg:py-4 gap-x-2 px-4 md:px-6 rounded-full justify-center items-center w-[130px] md:w-[200px] lg:w-[200px]">
                                <img src={images.icon.playstoreIcon} alt="apple and google play icon" className="w-[16px] md:w-[20px]" />
                                <p className="text-black text-[11px] md:text-[14px] lg:text-[18px] font-medium font-poppinsMedium">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[50%] w-full flex flex-col justify-center items-end ">
                    <img
                        src={images.image.BPHeroImg}
                        alt="Hero Image"
                        className="xl:w-[500px] lg:w-[400px] lg:-mt-7 xl:-mt-14"
                        loading="eager"
                    />
                </div>
            </div>

        </div>
    )
}

export default BillPaymentHero
