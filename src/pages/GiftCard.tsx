import DownloadMobileAppSection from '../components/sections/DownloadMobileAppSection'
import GiftcardHero from '../components/sections/Giftcard/GiftcardHero'
import GiftCardSect2 from '../components/sections/Giftcard/GiftCardSect2'

const GiftCard = () => {
    return (
        <div className=' w-full'>
            <GiftcardHero />
            <GiftCardSect2 />
            <DownloadMobileAppSection />
        </div>
    )
}

export default GiftCard
