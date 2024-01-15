import './app.scss'
import Header from './header';
import PageContent from './page-content';
import offerInfo from '../mocks/mock.js'
import {useState} from 'react';
import {getStatus} from '../services/promo-banner-status';

const App = () => {
    const [headerIsVisible, setHeaderIsVisible] = useState(true);
    const status = getStatus();
    const bannerIsVisible = !headerIsVisible && status !== 'hidden';
    return (
        <div className="app">
            <Header offerInfo={offerInfo} setHeaderIsVisible={setHeaderIsVisible} />
            <PageContent offerInfo={offerInfo} bannerIsVisible={bannerIsVisible}/>
        </div>
    );
};

export default App;