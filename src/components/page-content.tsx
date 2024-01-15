import './page-content.scss'
import PromoBanner from './promo-banner';
import {OfferInfoType} from '../types/offer-info';
import {useState} from "react";

type PageContentProps = {
    offerInfo: OfferInfoType;
    bannerIsVisible: boolean
}

const PageContent = ({offerInfo, bannerIsVisible}: PageContentProps) => {
    const [bannerIsClosed, setBannerIsClosed] = useState(false)
    return (
        <div className="page-content">
            { bannerIsVisible && offerInfo && !bannerIsClosed && <PromoBanner offerInfo={offerInfo} setBannerIsClosed={setBannerIsClosed}/>}
        </div>
    );
};

export default PageContent;