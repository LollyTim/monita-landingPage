
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import ComplianceSection from "../components/sections/ComplianceSection";
import DownloadMobileAppSection from "../components/sections/DownloadMobileAppSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <TestimonialSection />
            <HowItWorksSection />
            <ComplianceSection />
            <DownloadMobileAppSection />
        </>
    );
};

export default Home;