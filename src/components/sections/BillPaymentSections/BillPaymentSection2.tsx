import { images } from "../../../constants/images"

const BillPaymentSection2 = () => {
    return (
        <div>
            <div className="w-full min-h-[80vh] flex justify-center items-center py-10">
                <div className="flex flex-col xl:flex-row lg:flex-row justify-center items-center w-[90%] lg:w-[90%] xl:max-w-7xl mx-auto ">
                    {/* Image Section */}
                    <div className="xl:w-[50%] w-full flex justify-center items-center mb-8 xl:mb-0">
                        <img
                            src={images.image.BPSect2Img}
                            alt="Hero Image"
                            className="w-full max-w-[500px] lg:w-[400px] xl:w-[500px]"
                            loading="eager"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="xl:w-[50%] w-full flex flex-col items-start xl:items-start justify-center">
                        <h1 className="font-bold xl:text-[40px] font-MuseoModerno md:text-[40px] text-[28px] xl:leading-[63px] md:leading-[40px] leading-[50px] text-white text-start xl:text-start">
                            Effortless Bills Payment
                        </h1>
                        <div className="w-full max-w-[500px]">
                            <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                                Managing bills has never been easier with Monita. Our platform simplifies your payment process, allowing you to handle all your transactions in one convenient place. From airtime and data to cable TV, electricity, internet, and education fees, Monita makes it seamless and easier to pay.                            </p>
                            <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                                No more juggling multiple platforms or worrying about late payments. With Monita, you can make quick and reliable transactions. Stay connected and in control with a platform designed to save you time and reduce stress.                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BillPaymentSection2
