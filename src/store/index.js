import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const middlewareRouter = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, middlewareRouter];
const reducers = combineReducers({
    example: todoReducer,
    router: routerReducer,
})

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;