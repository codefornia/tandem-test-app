import './close-button.scss'
import {getStatus, setStatus} from '../services/promo-banner-status';
import {tr} from "@faker-js/faker";

type СloseButtonProps = {
    blockName: string;
    setBannerIsClosed: (bannerIsClosed: boolean) => void;
}

const СloseButton = ({blockName, setBannerIsClosed}: СloseButtonProps) => {
    function handleButtonClick(evt) {
        evt.preventDefault();
        setStatus();
        setBannerIsClosed(true);
    }
    return (
        <button className={`close-button close-button--${blockName}`} onClick={handleButtonClick}></button>
    );
};

export default СloseButton;