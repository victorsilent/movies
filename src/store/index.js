import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];
const reducers = combineReducers({
    example: todoReducer,
})

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;