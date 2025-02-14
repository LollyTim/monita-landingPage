import DownloadMobileAppSection from "../components/sections/DownloadMobileAppSection"
import RMoneyFeatures from "../components/sections/RMoneySections/RMoneyFeatures"
import RmoneyHero from "../components/sections/RMoneySections/RmoneyHero"

const ReceiveMoney = () => {
    return (
        <div className=" bg-[#000] w-full">
            <RmoneyHero />
            <RMoneyFeatures />
            <DownloadMobileAppSection />
        </div>
    )
}

export default ReceiveMoney
