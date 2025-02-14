import { images } from '../../../constants/images'

const GiftCardSect2 = () => {
    return (
        <div className="w-full min-h-[80vh] flex justify-center items-center py-10">
            <div className="flex flex-col xl:flex-row lg:flex-row justify-center items-center w-[90%] lg:w-[90%] xl:max-w-7xl mx-auto gap-6 ">
                {/* Image Section */}
                <div className="xl:w-[50%] w-full flex justify-center items-center">
                    <img
                        src={images.image.GCardSec2}
                        alt="Hero Image"
                        className="w-full max-w-[500px] lg:w-[400px] xl:w-[500px]"
                        loading="eager"
                    />
                </div>

                {/* Text Section */}
                <div className="xl:w-[50%] w-full flex flex-col items-start xl:items-start justify-center">
                    <h1 className="font-bold xl:text-[40px] font-MuseoModerno md:text-[40px] text-[28px] xl:leading-[63px] md:leading-[40px] leading-[28px] text-white text-center xl:text-start">
                        <span className='font-poppinsBold'>G</span>ift Cards Made Easy
                    </h1>
                    <div className="w-full max-w-[500px]">
                        <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                            Monita makes buying gift cards simple and hassle-free. Whether you're looking for popular options like Jumia, Filmone, Google Play, or others, our platform provides a secure and efficient way to manage your gift card needs.
                        </p>
                        <p className="font-poppinsRegular text-white xl:text-[14px] lg:text-[14px] text-[14px] mt-6 font-normal text-start xl:text-start">
                            Use gift cards to shop, enjoy entertainment or give the perfect gift. With Monita, you can seamlessly trade or purchase gift cards with confidence, knowing you're getting the best value and convenience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCardSect2
