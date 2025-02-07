import { images } from '../../constants/images'

const FeaturesSection = () => {
    return (
        <div className=' w-full bg-[#000000]'>
            <div className=' w-[90%] xl:max-w-7xl mx-auto justify-center items-center flex flex-col '>
                <div className='flex flex-col justify-center items-center gap-4 lg:gap-6 px-4 lg:px-0'>
                    <div className='flex flex-row gap-2 justify-center items-center mx-auto mt-8 lg:mt-10'>
                        <img
                            src={images.icon.tundIcon}
                            alt="lightning icon"
                            className='h-3 w-3 lg:h-4 lg:w-4'
                        />
                        <p className='text-[10px] lg:text-[12px] text-[#CEEF08] uppercase font-bold tracking-wider'>
                            Features
                        </p>
                    </div>

                    <h1 className='text-[32px] lg:text-[64px] leading-[1.15] lg:leading-[69px] text-center w-full max-w-[330px] sm:max-w-[400px] lg:max-w-[680px] font-MuseoModerno font-bold px-4'
                        style={{
                            background: 'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        Tailor-made to your spending taste
                    </h1>

                    <p className='text-xs lg:text-sm text-white leading-[20px] lg:leading-[24px] text-center font-medium w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[485px] px-4'>
                        It's finally fast, secure and fully digital. Exactly how it should be.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-20 mb-20 px-4 lg:px-0'>
                    {/* Bill Payment Card - Full height on left */}
                    <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] py-6 lg:py-8 px-4 lg:px-6 h-[600px] lg:h-[900px] lg:w-[620px] w-full'
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
                                <span className='text-[#CEEF08] w-fit text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-[#CEEF08]'>Fast and easy!</span>
                                <img src={images.icon.billIcon} alt="bill icon" className='h-6 w-6 lg:h-8 lg:w-8' />
                                <div className='w-full lg:w-[380px] gap-3 lg:gap-[16px] flex flex-col'>
                                    <h3 className='text-white text-xl lg:text-3xl font-bold'>Bill Payment</h3>
                                    <p className='text-white text-xs lg:text-base leading-relaxed'>
                                        Buy airtime, data, cable tv, electricity all in one app at the comfort of your phone
                                    </p>
                                </div>
                            </div>
                            <div className='w-full justify-center items-center flex flex-col mt-4 lg:mt-8'>
                                <img
                                    src={images.mockups.featMockup}
                                    alt="bill payment mockup"
                                    className='w-[85%] lg:w-[86%] mt-auto object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column with two cards */}
                    <div className='flex flex-col gap-6 justify-between items-end'>
                        {/* eSim Card */}
                        <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] p-6 lg:p-8 h-[240px] lg:h-[420px] w-full lg:w-[620px] justify-center flex flex-col'
                            style={{
                                backgroundImage: `url(${images.image.featBG})`,
                                backgroundSize: '150%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundBlendMode: 'overlay',
                                backgroundColor: 'rgba(10, 10, 10, 5.5)'
                            }}>
                            <div className='flex flex-col gap-4 lg:gap-6'>
                                <div>
                                    <span className='text-[#CEEF08] text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-[#CEEF08]'>Seamless Connectivity</span>
                                </div>
                                <img src={images.icon.eSimIcon} alt="esim icon" className='h-6 w-6 lg:h-8 lg:w-8 lg:mt-6 mt-2' />
                                <div className='space-y-3 lg:space-y-4'>
                                    <h3 className='text-white text-xl lg:text-3xl font-bold'>eSim</h3>
                                    <p className='text-white text-xs lg:text-base leading-relaxed w-full lg:w-[480px]'>
                                        Monita ensures seamless connectivity with our eSIM technology. Users can activate a digital SIM instantly, enjoy quick setup, and stay connected securely wherever they go.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* One Card - Maintaining flex row */}
                        <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] p-6 lg:p-8 h-[240px] lg:h-[420px] w-full lg:w-[620px]'
                            style={{
                                backgroundImage: `url(${images.image.featBG})`,
                                backgroundSize: '150%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundBlendMode: 'overlay',
                                backgroundColor: 'rgba(10, 10, 10, 5.5)'
                            }}>
                            <div className='flex flex-row items-center justify-between h-full'>
                                <div className='w-[55%] space-y-4 lg:space-y-6'>
                                    <span className='text-[#CEEF08] text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-[#CEEF08]'>Global Payments</span>
                                    <img src={images.icon.cardIcon} alt="card icon" className='h-6 w-6 lg:h-8 lg:w-8 lg:mt-6 mt-2' />
                                    <div className='space-y-3 lg:space-y-4'>
                                        <h3 className='text-white text-xl lg:text-3xl font-bold'>One Card</h3>
                                        <p className='text-white text-xs lg:text-base leading-relaxed'>
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
