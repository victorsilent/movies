import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import thunk from 'redux-thunk';
import uiReducer from './reducers/uiReducer';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const middlewareRouter = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, middlewareRouter];
const reducers = combineReducers({
    ui: uiReducer,
    router: routerReducer,
    form: formReducer,
})

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;