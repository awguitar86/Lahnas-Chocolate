import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import ScrollToTop from './ScrollToTop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
    <ScrollToTop>
        <App />
    </ScrollToTop>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
