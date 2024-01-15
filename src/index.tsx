import './index.scss'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/app';

const root = createRoot(
    document.getElementById('root')
);

root.render(

        <App />
 
);