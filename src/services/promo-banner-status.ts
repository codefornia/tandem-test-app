import {PromoBannerStatusType} from '../types/promo-banner-status';

export const getStatus = (): PromoBannerStatusType => {
    const status = sessionStorage.getItem('promo-banner-status');
    return status ?? '';
};

export const setStatus = (): void => {
    sessionStorage.setItem('promo-banner-status', 'hidden');
};