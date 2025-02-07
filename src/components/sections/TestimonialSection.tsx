import { images } from "../../constants/images"

const TestimonialSection = () => {
    return (
        <div className=' w-full bg-[#000000]' style={{
            backgroundImage: `url("${images.image.testimoBg}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <div className=' w-[90%] overflow-hidden xl:max-w-7xl mx-auto justify-center items-center flex flex-col '>
                <div className='flex flex-col justify-center items-center gap-4 lg:gap-6 px-4 lg:px-0'>
                    <div className='flex flex-row gap-2 justify-center items-center mx-auto mt-8 lg:mt-10'>
                        <img
                            src={images.icon.tundIcon}
                            alt="lightning icon"
                            className='h-3 w-3 lg:h-4 lg:w-4'
                        />
                        <p className='text-[10px] lg:text-[12px] text-[#CEEF08] uppercase font-bold tracking-wider'>
                            Testimonials
                        </p>
                    </div>

                    <h1 className='text-[32px] lg:text-[64px] leading-[1.15] lg:leading-[69px] text-center w-[360px] sm:w-[400px] lg:w-[680px] xl:w- font-MuseoModerno font-bold px-4'
                        style={{
                            background: 'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        Here’s what our clients have to say
                    </h1>
                </div>

                {/* testimonials cards here  */}
                <div className=" flex lg:flex-row flex-col gap-10 mt-14 mb-10">
                    <div className="p-10 bg-[#010101] rounded-3xl border border-[#282828]">
                        <div className=" flex flex-col gap-4 w-[280px]   ">
                            <img src={images.icon.quoteIcon} alt=" quote Icon " className=" w-10 h-10" />
                            <p className=" text-white font-normal xl:text-[18px] text-[16px] max-w-[250px] 2xl:max-w-[314px]"> I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>
                            <div className=" flex flex-row gap-2 items-center">
                                <div className=" w-16 h-16 rounded-full bg-gray-400"></div>
                                <div className=" flex flex-col gap-[1px]">
                                    <h3 className=" text-white">Mke Torello</h3>
                                    <p className=" text-xs text-white">CEO if Initech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 bg-[#010101] rounded-3xl border border-[#282828]">
                        <div className=" flex flex-col gap-4 w-[280px]   ">
                            <img src={images.icon.quoteIcon} alt=" quote Icon " className=" w-10 h-10" />
                            <p className=" text-white font-normal xl:text-[18px] text-[16px] max-w-[250px] 2xl:max-w-[314px]"> I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>
                            <div className=" flex flex-row gap-2 items-center">
                                <div className=" w-16 h-16 rounded-full bg-gray-400"></div>
                                <div className=" flex flex-col gap-[1px]">
                                    <h3 className=" text-white">Mke Torello</h3>
                                    <p className=" text-xs text-white">CEO if Initech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 bg-[#010101] rounded-3xl border border-[#282828]">
                        <div className=" flex flex-col gap-4 w-[280px]   ">
                            <img src={images.icon.quoteIcon} alt=" quote Icon " className=" w-10 h-10" />
                            <p className=" text-white font-normal xl:text-[18px] text-[16px] max-w-[250px] 2xl:max-w-[314px]"> I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>
                            <div className=" flex flex-row gap-2 items-center">
                                <div className=" w-16 h-16 rounded-full bg-gray-400"></div>
                                <div className=" flex flex-col gap-[1px]">
                                    <h3 className=" text-white">Mke Torello</h3>
                                    <p className=" text-xs text-white">CEO if Initech</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                {/* navigation toggle here  */}
                <div className=" w-[90%] justify-end items-end hidden lg:flex flex-row mb-14">
                    <div className=" flex flex-row gap-4 ">
                        <div className=" xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] bg-white rounded-full justify-center items-center flex flex-col">
                            <img src={images.icon.bLeftIcon} alt="" className="w-[24px] h-[24px]" />
                        </div>
                        <div className=" xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] bg-white rounded-full justify-center items-center flex flex-col">
                            <img src={images.icon.bRifhtIcon} alt="" className="w-[24px] h-[24px]" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TestimonialSection
