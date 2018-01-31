import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Router
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

//Redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from './store';

//Components
import App from './components/App';
import About from './components/About';

const history = createHistory();

const wrapper = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/about/:name" component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
