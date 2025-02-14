import DownloadMobileAppSection from "../components/sections/DownloadMobileAppSection"
import OneCardHero from "../components/sections/OneCardSections/OneCardHero"
import OneCardSection2 from "../components/sections/OneCardSections/OneCardSection2"

const OneCard = () => {
    return (
        <div className=" bg-[#000] w-full">
            <OneCardHero />
            <OneCardSection2 />
            <DownloadMobileAppSection />
        </div>
    )
}

export default OneCard
