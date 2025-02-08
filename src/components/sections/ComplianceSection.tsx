import { images } from "../../constants/images";

const ComplianceSection = () => {
    return (
        <div
            className="w-full py-12 md:py-20"
            style={{
                backgroundImage: `url("${images.image.greenBg}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="container mx-auto xl:w-[90%] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Shield Image */}
                <div className="w-full lg:w-[40%] xl:w-[32%] flex justify-center lg:justify-start">
                    <img
                        src={images.image.shildImage}
                        alt="shield image"
                        className=" w-[90%] sm:w-56 md:w-64 lg:w-auto xl:w-[80%]"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[60%]  xl:w-[60%] flex flex-col items-start gap-4 md:gap-6">
                    {/* Compliance Label */}
                    <div className="flex items-center gap-2">
                        <img
                            src={images.icon.thundIconWhite}
                            alt="lightning icon"
                            className="h-3 w-3 lg:h-4 lg:w-4"
                        />
                        <p className="text-xs lg:text-sm text-white uppercase font-bold tracking-wider">
                            Compliants
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white font-bold font-MuseoModerno leading-tight">
                        Ensuring Compliance and Building Trust with Monita
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg xl:w-lg text-white leading-relaxed">
                        At Monita, your safety is our priority. We comply with key regulations like NDPC and PCI DSS, partner with trusted, insured banks, and display our certifications to ensure secure, reliable, and transparent financial services you can trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComplianceSection;