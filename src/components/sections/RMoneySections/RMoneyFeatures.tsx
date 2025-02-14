import { images } from "../../../constants/images"

const RMoneyFeatures = () => {
    return (
        <div className=' w-full bg-[#000000] my-20'>
            <div className=' w-[90%] xl:max-w-7xl mx-auto justify-center items-center flex flex-col '>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:w-[86%] xl:w-[96%] lg:w-full w-full mt-20 mb-20 px-4 lg:px-0'>
                    {/* Bank transfer Card - Full height on left */}
                    <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] py-6 lg:py-12 px-4 lg:px-6 h-fit lg:h-fit lg:w-[520px] w-full'
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
                                <img src={images.icon.bankIcon} alt="bill icon" className='h-6 w-6 lg:h-8 lg:w-10 my-3' />
                                <div className='w-full lg:w-[380px] gap-3 lg:gap-[16px] flex flex-col'>
                                    <h3 className='text-[#FFFFFF] text-xl lg:text-3xl font-bold font-poppinsBold'>Bank transfer</h3>
                                    <p className='text-[#FFFFFF] text-xs lg:text-[19.83px] leading-relaxed font-poppinsRegular'>
                                        Monita ensures your funds move quickly and securely. Users can send money to any local bank in Nigeria.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full justify-center items-center flex flex-col mt-4 lg:mt-8'>
                                <img
                                    src={images.mockups.BTfMockup}
                                    alt="Bank transfer mockup"
                                    className='w-[85%] lg:w-[80%] mt-auto object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column with two cards */}
                    <div className='flex flex-col gap-6 justify-between items-end'>
                        {/* Monita - Monita (Monitag) Card */}
                        <div className='bg-[#0E0E0E] border border-[#282828] rounded-[20px] p-6 lg:p-8 lg:py-12 h-[240px] lg:h-fit w-full lg:w-[520px] justify-center flex flex-col'
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
                                <img src={images.icon.qrIcon} alt="esim icon" className='h-6 w-6 lg:h-8 lg:w-12 lg:mt-6 mt-2' />
                                <div className='space-y-2 lg:space-y-2'>
                                    <h3 className='text-white text-lg lg:text-[28px] font-bold font-poppinsBold'>Monita - Monita (Monitag)</h3>
                                    <p className='text-white text-[11px] lg:text-[16.32px] leading-relaxed w-[240px] lg:w-[410px] font-poppinsRegular'>
                                        Monita - Monita transfers let you send money instantly and securely to other Monita users using their unique Monitag ID. It’s fast, convenient, and eliminates the need for account numbers - making transactions simpler than ever.                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Debit/credit cards - Maintaining flex row */}
                        <div className='bg-[#0E0E0E] border border-[#282828] lg:py-12 rounded-[20px] p-6 lg:p-8 h-fit py-8 w-full lg:w-[520px]'
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
                                    <img src={images.icon.cardIcon} alt="card icon" className='h-6 w-6 lg:h-8 lg:w-12 lg:mt-8 mt-2' />
                                    <div className='space-y-2 lg:space-y-2 flex flex-col'>
                                        <h3 className='text-white text-lg lg:text-[28px] font-bold font-poppinsBold text-nowrap'>Debit/credit cards</h3>
                                        <p className='text-white text-[11px] lg:text-[15px] leading-relaxed font-poppinsRegular'>
                                            Fund your wallet easily with your debit or credit card. Simply link your card, enter an amount, and enjoy secure, seamless transactions.
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

export default RMoneyFeatures
