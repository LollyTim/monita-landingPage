import DownloadMobileAppSection from "../components/sections/DownloadMobileAppSection"
import SMoneyHero from "../components/sections/SendMoneySections/SMoneyHero"
import SMoneySection2 from "../components/sections/SendMoneySections/SMoneySection2"

const SendMoney = () => {
    return (
        <div className=" w-full bg-[#000]">
            <SMoneyHero />
            <SMoneySection2 />
            <DownloadMobileAppSection />
        </div>
    )
}

export default SendMoney
