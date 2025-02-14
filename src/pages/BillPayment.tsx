import BillPaymentHero from "../components/sections/BillPaymentSections/BillPaymentHero"
import BillPaymentSection2 from "../components/sections/BillPaymentSections/BillPaymentSection2"
import DownloadMobileAppSection from "../components/sections/DownloadMobileAppSection"

const BillPayment = () => {
    return (
        <div className=" w-full ">
            <BillPaymentHero />
            <BillPaymentSection2 />
            <DownloadMobileAppSection />
        </div>
    )
}

export default BillPayment
