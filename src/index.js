import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

//Router
import createHistory from 'history/createBrowserHistory';

//Redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from './store';

//Components
import MyRoot from './components/MyRoot';

const theme = createMuiTheme();
const history = createHistory();

const wrapper = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
                <MyRoot></MyRoot>
            </MuiThemeProvider>
           </ConnectedRouter>
    </Provider>
);

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
