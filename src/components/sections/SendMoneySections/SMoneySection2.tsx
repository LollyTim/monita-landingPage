import { images } from "../../../constants/images"

const SMoneySection2 = () => {
    return (
        <div className="w-full min-h-[80vh] flex justify-center items-center py-10">
            <div className="flex flex-col xl:flex-row lg:flex-row justify-center items-center w-[90%] lg:w-[90%] xl:max-w-7xl mx-auto gap-6 ">
                {/* Image Section */}
                <div className="xl:w-[50%] w-full flex justify-center items-center">
                    <img
                        src={images.image.SMSection2Img}
                        alt="Hero Image"
                        className="w-full max-w-[500px] lg:w-[400px] xl:w-[500px]"
                        loading="eager"
                    />
                </div>

                {/* Text Section */}
                <div className="xl:w-[50%] w-full flex flex-col items-start xl:items-start justify-center">
                    <h1 className="font-bold xl:text-[40px] font-MuseoModerno md:text-[40px] text-[28px] xl:leading-[63px] md:leading-[40px] leading-[28px] text-white text-center xl:text-start">
                        Send Money with Ease
                    </h1>
                    <div className="w-full max-w-[500px]">
                        <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                            Monita makes sending money to any local bank in Nigeria simple and stress-free. Whether you’re supporting loved ones, paying for services, or handling business transactions, our platform ensures that your funds are transferred quickly and securely.                        </p>
                        <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                            With an intuitive interface and robust security measures, you can complete your transactions in just a few clicks. Trust Monita to deliver a seamless and reliable money transfer experience every time.                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SMoneySection2
