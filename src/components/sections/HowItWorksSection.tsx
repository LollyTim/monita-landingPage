import { images } from "../../constants/images";

const HowItWorksSection = () => {
    return (
        <div className="w-full bg-[#000000]">
            <div className='flex flex-col justify-center items-center gap-4 lg:gap-6 px-4 lg:px-0'>
                <div className='flex flex-row gap-2 justify-center items-center mx-auto lg:mt-10'>
                    <img
                        src={images.icon.tundIcon}
                        alt="lightning icon"
                        className='h-3 w-3 lg:h-4 lg:w-4'
                    />
                    <p className='text-[10px] lg:text-[12px] text-[#CEEF08] uppercase font-bold tracking-wider font-poppinsBold'>
                        How it Works
                    </p>
                </div>

                <h1 className='text-[32px] lg:text-[64px] leading-[1.15] lg:leading-[69px] text-center w-[360px] sm:w-[400px] lg:w-[680px] xl:w- font-MuseoModerno font-bold px-4'
                    style={{
                        background: 'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                    Start using Monita in just 4 steps!
                </h1>

                <p className='text-xs font-poppinsMedium lg:text-sm text-white leading-[20px] lg:leading-[24px] text-center font-medium w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[485px] px-4'>
                    It's finally fast, secure and fully digital. Exactly how it should be.
                </p>
            </div>

            {/* Steps Container */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center mx-auto lg:mt-20 mt-10 px-4 lg:px-0">
                {/* Step 1 */}
                <div className="group flex flex-col gap-5 items-start bg-[#0E0E0E] p-6 lg:p-10 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full lg:w-auto">
                    {/* Inner glow div */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(to top, rgba(206, 239, 10, 0.06), rgba(206, 239, 10, 0.0007))',
                            pointerEvents: 'none'
                        }}
                    />

                    <h2 className="text-white text-[16px] font-medium relative z-10 font-poppinsMedium">Step 1</h2>
                    <h1 className="text-white text-[20px] lg:text-[24px] font-medium relative z-10 font-poppinsMedium">Enter your Information</h1>
                    <p className="text-white font-normal text-[14px] lg:text-[16px] w-full lg:w-[360px] relative z-10 h-[86px] font-poppinsRegular">
                        Provide your email and phone number, then verify your phone number with an OTP.
                    </p>
                    <div
                        className="w-full lg:w-[356px] h-[200px] lg:h-[300px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)]"
                        style={{
                            background: `
                                linear-gradient(0deg, #111111, #111111),
                                radial-gradient(106.88% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, #000000 40%, rgba(0, 0, 0, 0.8) 40%)
                            `,
                            backgroundBlendMode: 'normal, overlay'
                        }}
                    >
                        {/* Glow effect behind mockup */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

                        <div className="mx-auto relative z-10">
                            <img src={images.mockups.signupMockup} alt="" className="flex xl:mt-[230px] mt-[300px] w-[200px] lg:w-[230px]" />
                        </div>

                        {/* Grid overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px'
                            }}
                        />
                    </div>
                </div>

                {/* Connector Line */}
                <div className="hidden lg:block absolute xl:left-[750px] 2xl:left-[900px] lg:left-[750px] transform -translate-x-1/2  z-10 w-[27.6%] xl:w-[22.7%] max-w-[800px]">
                    <img src={images.icon.connectorLine1} alt="Connector Line" className="h-auto w-[76px]" />
                </div>
                <div className="hidden lg:block absolute xl:left-[780px] 2xl:left-[900px] lg:left-[750px] transform -translate-x-1/2 mt-[650px] z-10 w-[80%] max-w-[800px]">
                    <img src={images.icon.connsectorLine2} alt="Connector Line" className="w-[70%] h-auto" />
                </div>

                {/* Step 2 */}
                <div className="group flex flex-col gap-5 items-start bg-[#0E0E0E] p-6 lg:p-10 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full lg:w-auto lg:mt-0">
                    {/* Inner glow div */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(to top, rgba(206, 239, 10, 0.06), rgba(206, 239, 10, 0.0007))',
                            pointerEvents: 'none'
                        }}
                    />

                    <h2 className="text-white text-[16px] font-medium relative z-10 font-poppinsMedium">Step 2</h2>
                    <h1 className="text-white text-[20px] lg:text-[24px] font-medium relative z-10 font-poppinsMedium">Complete Verification</h1>
                    <p className="text-white font-normal text-[14px] lg:text-[16px] w-full lg:w-[360px] relative z-10 h-[86px] font-poppinsRegular">
                        Choose a username and password. Submit your BVN and KYC details, complete face and ID verification, and set up a PIN for account management.
                    </p>
                    <div
                        className="w-full lg:w-[356px] h-[200px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)]"
                        style={{
                            background: `
                                linear-gradient(0deg, #111111, #111111),
                                radial-gradient(106.88% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, #000000 40%, rgba(0, 0, 0, 0.8) 40%)
                            `,
                            backgroundBlendMode: 'normal, overlay'
                        }}
                    >
                        {/* Glow effect behind mockup */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

                        <div className="mx-auto relative z-10">
                            <img src={images.mockups.verifyScreenMockup} alt="" className="flex xl:mt-[230px] mt-[300px] w-[200px] lg:w-[230px]" />
                        </div>

                        {/* Grid overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center mx-auto lg:mt-20 mt-10 px-4 lg:px-0 pb-20">
                {/* Step 3 */}

                <div className="group flex flex-col gap-5 items-start bg-[#0E0E0E] p-6 lg:p-10 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full lg:w-auto">
                    {/* Inner glow div */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(to top, rgba(206, 239, 10, 0.06), rgba(206, 239, 10, 0.0007))',
                            pointerEvents: 'none'
                        }}
                    />

                    <h2 className="text-white text-[16px] font-medium relative z-10 font-poppinsMedium">Step 3</h2>
                    <h1 className="text-white text-[20px] lg:text-[24px] font-medium relative z-10 font-poppinsMedium">Fund Your Wallet</h1>
                    <p className="text-white font-normal text-[14px] lg:text-[16px] w-full lg:w-[360px] relative z-10 h-[86px] font-poppinsRegular">
                        Add funds to your account to start using Monita’s features.
                    </p>
                    <div
                        className="w-full lg:w-[356px] h-[200px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)]"
                        style={{
                            background: `
                                linear-gradient(0deg, #111111, #111111),
                                radial-gradient(106.88% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, #000000 40%, rgba(0, 0, 0, 0.8) 40%)
                            `,
                            backgroundBlendMode: 'normal, overlay'
                        }}
                    >
                        {/* Glow effect behind mockup */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

                        <div className="mx-auto relative z-10">
                            <img src={images.mockups.fundScreenMockup} alt="" className="flex xl:mt-[230px] mt-[300px] w-[200px] lg:w-[230px]" />
                        </div>

                        {/* Grid overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px'
                            }}
                        />
                    </div>
                </div>

                <div className="hidden lg:block absolute xl:left-[750px] 2xl:left-[900px] lg:left-[750px] transform -translate-x-1/2  z-10 w-[27.6%] xl:w-[22.7%] max-w-[800px]">
                    <img src={images.icon.connectorLine1} alt="Connector Line" className="h-auto w-[76px]" />
                </div>



                {/* Step 4 */}
                <div className="group flex flex-col gap-5 items-start bg-[#0E0E0E] p-6 lg:p-10 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full lg:w-auto lg:mt-0">
                    {/* Inner glow div */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(to top, rgba(206, 239, 10, 0.06), rgba(206, 239, 10, 0.0007))',
                            pointerEvents: 'none'
                        }}
                    />

                    <h2 className="text-white text-[16px] font-medium relative z-10 font-poppinsMedium">Step 4</h2>
                    <h1 className="text-white text-[20px] lg:text-[24px] font-medium relative z-10 font-poppinsMedium">Request Your One Card</h1>
                    <p className="text-white font-normal text-[14px] lg:text-[16px] w-full lg:w-[360px] relative z-10 h-[86px] font-poppinsRegular">
                        Access the dashboard, navigate to the Card menu, and apply for a One Card supporting both local and international payments with virtual and physical options.
                    </p>
                    <div
                        className="w-full lg:w-[356px] h-[200px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)]"
                        style={{
                            background: `
                                linear-gradient(0deg, #111111, #111111),
                                radial-gradient(106.88% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, #000000 40%, rgba(0, 0, 0, 0.8) 40%)
                            `,
                            backgroundBlendMode: 'normal, overlay'
                        }}
                    >
                        {/* Glow effect behind mockup */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

                        <div className="mx-auto relative z-10">
                            <img src={images.mockups.cardScreenMockup} alt="" className="flex xl:mt-[230px] mt-[300px] w-[200px] lg:w-[230px]" />
                        </div>

                        {/* Grid overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;