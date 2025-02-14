import { images } from "../../../constants/images";

const OneCardSection2 = () => {
    return (
        <div className="w-full min-h-[80vh] flex justify-center items-center py-10">
            <div className="flex flex-col xl:flex-row lg:flex-row justify-center items-center w-[90%] lg:w-[90%] xl:max-w-7xl mx-auto ">
                {/* Image Section */}
                <div className="xl:w-[50%] w-full flex justify-center items-center mb-8 xl:mb-0">
                    <img
                        src={images.image.OCHeroImg}
                        alt="Hero Image"
                        className="w-full max-w-[500px] lg:w-[400px] xl:w-[500px]"
                        loading="eager"
                    />
                </div>

                {/* Text Section */}
                <div className="xl:w-[50%] w-full flex flex-col items-start xl:items-start justify-center">
                    <h1 className="font-bold xl:text-[40px] font-MuseoModerno md:text-[40px] text-[28px] xl:leading-[63px] md:leading-[40px] leading-[50px] text-white text-center xl:text-start">
                        One Card for Everything
                    </h1>
                    <div className="w-full max-w-[500px]">
                        <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                            Say hello to the One Card, your ultimate payment companion designed for convenience and versatility. This Naira card supports both local and international transactions, giving you the flexibility to handle all your card transactions effortlessly. Whether you prefer the convenience of a virtual card or the practicality of a physical one, the One Card has you covered.
                        </p>
                        <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                            From shopping online to making in-store purchases or managing payments while traveling abroad, the One Card ensures secure, fast, and seamless transactions. With the One Card, managing your payments has never been easier!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCardSection2;