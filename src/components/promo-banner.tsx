import './promo-banner.scss'
import {OfferInfoType} from '../types/offer-info';
import СloseButton from "./close-button";
import {PromoBannerStatusType} from '../types/promo-banner-status';

type PromoBannerProps = {
    offerInfo: OfferInfoType;
    setBannerIsClosed: (bannerIsClosed: boolean) => void;
}

const PromoBanner = ({offerInfo, setBannerIsClosed}: PromoBannerProps) => {
    const {title, promoCode, discount} = offerInfo;



    return (
        <div className="promo-banner">
            <div className="promo-banner__info-container">
                <h2  className="promo-banner__title">{title}</h2>
                <p className="promo-banner__discount">{discount}%OFF</p>
                <p className="promo-banner__promo">Use code <span>{promoCode}</span> at checkout</p>
                <button className="promo-banner__button">Shop now through Monday</button>
                <СloseButton blockName={'promo-banner'} setBannerIsClosed={setBannerIsClosed}/>
            </div>
        </div>
    );
};

export default PromoBanner;