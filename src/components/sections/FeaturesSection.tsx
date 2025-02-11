import { images } from '../../constants/images'

const FeaturesSection = () => {
    return (
        <div className=' w-full bg-[#000000] my-10'>
            <div className=' w-[90%] xl:max-w-7xl mx-auto justify-center items-center flex flex-col '>
                <div className='flex flex-col justify-center items-center gap-4 lg:gap-6 px-4 lg:px-0'>
                    <div className='flex flex-row gap-2 justify-center items-center mx-auto mt-8 lg:mt-10'>

                        <img
                            src={images.icon.tundIcon}
                            alt="lightning icon"
                            className='h-3 w-3 lg:h-4 lg:w-4'
                        />
                        <p className='text-[10px] lg:text-[12px] text-[#CEEF08] uppercase font-bold font-poppinsBold tracking-wider'>
                            Features
                        </p>
                    </div>

                    <h1 className='text-[32px] lg:text-[64px] leading-[1.15] lg:leading-[69px] text-center w-[360px] sm:w-[400px] lg:w-[680px] font-MuseoModerno font-bold px-4'
                        style={{
                            background: 'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        Tailor-made to your spending taste
                    </h1>

                    <p className='text-xs lg:text-[14px] text-white leading-[20px] lg:leading-[24px] text-center font-medium font-poppinsMedium w-full max-w-[400px] sm:max-w-[400px] lg:max-w-[495px] px-4'>
                        It's finally fast, secure and fully digital. Exactly how it should be.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:w-[86%] xl:w-[96%] lg:w-full w-full mt-20 mb-20 px-4 lg:px-0'>
                    {/* Bill Payment Card - Full height on left */}
                    <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] py-6 lg:py-8 px-4 lg:px-6 h-[540px] lg:h-[780px] lg:w-[520px] w-full'
                        style={{
                            backgroundImage: `url(${images.image.featBG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundBlendMode: 'overlay',
                            backgroundColor: 'rgba(10, 10, 10, 5.5)'
                        }}>
                        <div className='flex flex-col gap-4 lg:gap-6'>
                            <div className='flex flex-col gap-3 lg:gap-4 px-4 lg:px-6'>
                                <span className='text-[#81C041] w-fit text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 lg:py-2 font-poppinsRegular rounded-full border border-[#81C041]'>Fast and easy!</span>
                                <img src={images.icon.billIcon} alt="bill icon" className='h-6 w-6 lg:h-8 lg:w-8' />
                                <div className='w-full lg:w-[380px] gap-3 lg:gap-[16px] flex flex-col'>
                                    <h3 className='text-white text-xl lg:text-3xl font-bold font-poppinsBold'>Bill Payment</h3>
                                    <p className='text-white text-xs lg:text-[19.83px] leading-relaxed font-poppinsRegular'>
                                        Buy airtime, data, cable tv, electricity all in one app at the comfort of your phone
                                    </p>
                                </div>
                            </div>
                            <div className='w-full justify-center items-center flex flex-col mt-4 lg:mt-8'>
                                <img
                                    src={images.mockups.featMockup}
                                    alt="bill payment mockup"
                                    className='w-[85%] lg:w-[80%] mt-auto object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column with two cards */}
                    <div className='flex flex-col gap-6 justify-between items-end'>
                        {/* eSim Card */}
                        <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] p-6 lg:p-8 h-[240px] lg:h-[355px] w-full lg:w-[520px] justify-center flex flex-col'
                            style={{
                                backgroundImage: `url(${images.image.featBG})`,
                                backgroundSize: '150%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundBlendMode: 'overlay',
                                backgroundColor: 'rgba(10, 10, 10, 5.5)'
                            }}>
                            <div className='flex flex-col gap-2 lg:gap-4'>
                                <div>
                                    <span className='text-[#81C041] text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-[#81C041] font-poppinsRegular'>Seamless Connectivity</span>
                                </div>
                                <img src={images.icon.eSimIcon} alt="esim icon" className='h-6 w-6 lg:h-6 lg:w-8 lg:mt-6 mt-2' />
                                <div className='space-y-2 lg:space-y-2'>
                                    <h3 className='text-white text-lg lg:text-[28px] font-bold font-poppinsBold'>eSim</h3>
                                    <p className='text-white text-[11px] lg:text-[16.32px] leading-relaxed w-[240px] lg:w-[380px] font-poppinsRegular'>
                                        Monita ensures seamless connectivity with our eSIM technology. Users can activate a digital SIM instantly, enjoy quick setup, and stay connected securely wherever they go.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* One Card - Maintaining flex row */}
                        <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] p-6 lg:p-8 h-[240px] lg:h-[355px] w-full lg:w-[520px]'
                            style={{
                                backgroundImage: `url(${images.image.featBG})`,
                                backgroundSize: '150%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundBlendMode: 'overlay',
                                backgroundColor: 'rgba(10, 10, 10, 5.5)'
                            }}>
                            <div className='flex flex-row items-center justify-between h-full'>
                                <div className='w-[55%] space-y-4 lg:space-y-4'>
                                    <span className='text-[#81C041] text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-[#81C041]'>Global Payments</span>
                                    <img src={images.icon.cardIcon} alt="card icon" className='h-6 w-6 lg:h-10 lg:w-10 lg:mt-6 mt-4' />
                                    <div className='space-y-2 lg:space-y-4'>
                                        <h3 className='text-white text-lg lg:text-3xl font-bold font-poppinsBold'>One Card</h3>
                                        <p className='text-white text-[11px] lg:text-base leading-relaxed font-poppinsRegular'>
                                            A Naira card supporting both local and international payments with virtual and physical options.
                                        </p>
                                    </div>
                                </div>
                                <div className='w-[40%] flex justify-center items-center'>
                                    <img
                                        src={images.mockups.cardMockup}
                                        alt="card mockup"
                                        className='w-full object-contain'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FeaturesSection
