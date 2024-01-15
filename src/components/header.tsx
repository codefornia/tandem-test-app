import './header.scss'
import {OfferInfoType} from '../types/offer-info';
import СloseButton from './close-button';
import {useInView} from "react-intersection-observer";

type HeaderProps = {
    offerInfo: OfferInfoType;
    setHeaderIsVisible: (headerIsVisible: boolean) => void;
}

const Header = ({offerInfo, setHeaderIsVisible}:  HeaderProps) => {
    const {title, date, promoCode, discount} = offerInfo;
    const { ref, inView, entry } = useInView({
        threshold: 0,
        onChange: (inView) => setHeaderIsVisible(inView)
    });

    return (
        <div className="header" ref={ref}>
            <div className="header__info-container">
                <p className="header__title">{title}<span className="header__title--hidden">,&nbsp;</span><span className="header__title--date">{date}</span></p>
                <p className="header__discount">{discount}%OFF</p>
                <p className="header__promo">Use code <span className="header__promo--style">{promoCode}</span> <span className="header__promo--hidden">at checkout</span></p>
            </div>
            <div className="header__button-container">
                <button className="header__button">Shop now</button>
                <СloseButton blockName={'header'}/>
                <button className="header__menu"></button>
            </div>
        </div>
    );
};

export default Header;