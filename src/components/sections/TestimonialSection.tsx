import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { images } from '../../constants/images';

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    position: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
        name: 'Mike Torello',
        position: 'CEO of Initech',
        avatar: images.icon.quoteIcon,
    },
    {
        id: 2,
        quote: "I like getting the SMS & knowing the job's done.I often refer to it, “hope you get a ping today!” because my product",
        name: 'John Doe',
        position: 'CTO of TechCorp',
        avatar: images.icon.quoteIcon,
    },
    {
        id: 3,
        quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
        name: 'Jane Smith',
        position: 'Marketing Director at Innovate',
        avatar: images.icon.quoteIcon,
    },
    {
        id: 4,
        quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
        name: 'Alice Johnson',
        position: 'Product Manager at Innovate',
        avatar: images.icon.quoteIcon,
    },
    {
        id: 4,
        quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
        name: 'LOlly Tech',
        position: 'CEO of Innovate',
        avatar: images.icon.quoteIcon,
    },
    // Add more testimonials as needed
];

const TestimonialSection = () => {
    const swiperRef = useRef<any>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const updateNavigationState = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.swiper.isBeginning);
            setIsEnd(swiperRef.current.swiper.isEnd);
        }
    };

    return (
        <div
            className="w-full bg-[#000000] my-9"
            style={{
                backgroundImage: `url("${images.image.testimoBg}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            {/* Custom Pagination Styles */}
            <style>
                {`
          .swiper-pagination {
            position: absolute;
            bottom: 1px !important; /* Move pagination dots further down */
          }

          .swiper-pagination-bullet {
            background-color: #C4C4C4; /* Light gray for non-active bullets */
            opacity: 1; /* Fully opaque */
            width: 10px; /* Bullet width */
            height: 10px; /* Bullet height */
            margin: 0 5px !important; /* Spacing between bullets */
            transition: background-color 0.3s ease; /* Smooth transition */
          }

          .swiper-pagination-bullet-active {
            background-color: #CEEF08; /* Yellow for active bullet */
            width: 12px; /* Slightly larger active bullet */
            height: 12px;
          }
        `}
            </style>

            <div className="w-[90%] overflow-hidden xl:max-w-7xl mx-auto justify-center items-center flex flex-col">
                <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 px-4 lg:px-0">
                    <div className="flex flex-row gap-2 justify-center items-center mx-auto mt-8 lg:mt-10">
                        <img
                            src={images.icon.tundIcon}
                            alt="lightning icon"
                            className="h-3 w-3 lg:h-4 lg:w-4"
                        />
                        <p className="text-[10px] lg:text-[12px] text-[#CEEF08] uppercase font-bold font-poppinsBold tracking-wider">
                            Testimonials
                        </p>
                    </div>

                    <h1
                        className="text-[32px] lg:text-[64px] leading-[1.15] lg:leading-[69px] text-center w-[360px] sm:w-[400px] lg:w-[680px] xl:w- font-MuseoModerno font-bold px-4"
                        style={{
                            background:
                                'linear-gradient(97.46deg, #FFFFFF 4.79%, #FFF5D5 25.87%, #ECFFB9 47.72%, #CEEF0A 74.55%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Here’s what our clients have to say
                    </h1>
                </div>

                {/* Swiper Container */}
                <div className="w-full mt-14 mb-10 relative z-0"> {/* Add relative positioning */}
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        onSlideChange={updateNavigationState}
                        onSwiper={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                centeredSlides: true,
                                pagination: {
                                    enabled: true,
                                },
                            },
                            768: {
                                slidesPerView: 2,
                                centeredSlides: false,
                                pagination: {
                                    enabled: false,
                                },
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: false,
                                pagination: {
                                    enabled: false,
                                },
                            },
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className='py-10'>
                                <div className="p-6 lg:p-8 bg-[#010101] rounded-3xl border border-[#282828] h-full flex flex-col">
                                    <div className="flex flex-col gap-4 flex-grow">
                                        <img src={testimonial.avatar} alt="quote Icon" className="w-10 h-10" />
                                        <p className="text-white font-normal xl:text-[18px] text-[14px] max-w-[250px] xl:max-w-[230px] 2xl:max-w-[314px] font-poppinsRegular flex-grow">
                                            {testimonial.quote}
                                        </p>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-gray-400"></div>
                                            <div className="flex flex-col gap-[1px]">
                                                <h3 className="text-white font-medium font-poppinsMedium text-[18px]">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-xs text-[#C4C4C4] font-poppinsRegular">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation Buttons */}
                <div className="w-[90%] justify-end items-end hidden lg:flex flex-row mb-14">
                    <div className="flex flex-row gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={isBeginning}
                            className={`xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] rounded-full justify-center items-center flex flex-col cursor-pointer ${isBeginning ? 'bg-gray-300' : 'bg-white'
                                }`}
                        >
                            <img
                                src={images.icon.bLeftIcon}
                                alt="Previous"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={isEnd}
                            className={`xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] rounded-full justify-center items-center flex flex-col cursor-pointer ${isEnd ? 'bg-gray-300' : 'bg-white'
                                }`}
                        >
                            <img
                                src={images.icon.bRifhtIcon}
                                alt="Next"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;