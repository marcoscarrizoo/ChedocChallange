import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers/reducer'
import thunk from 'redux-thunk'

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    componseEnhancer(applyMiddleware(thunk))
)

export default store;