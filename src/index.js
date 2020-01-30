import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';




const favoritesReducer = (state = [test], action) => {
    return state;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        favoritesReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
