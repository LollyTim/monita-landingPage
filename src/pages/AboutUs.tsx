import AboutUsHero from "../components/sections/AboutUsSections/AboutUsHero"
import AboutUsSection2 from "../components/sections/AboutUsSections/AboutUsSection2"
import DownloadMobileAppSection from "../components/sections/DownloadMobileAppSection"

const AboutUs = () => {
    return (
        <div className=" bg-black w-full">
            <AboutUsHero />
            <AboutUsSection2 />
            <DownloadMobileAppSection />
        </div>
    )
}

export default AboutUs
