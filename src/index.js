import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const wrapper = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
