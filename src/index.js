import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, actionChannel } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('GIPHY_SEARCH', getSearch);
    
}

function* getSearch(action){
    let response = yield axios.get(`/api/search?searchterm=${action.payload}`);
    yield put ({type: 'SET_GIPHY', payload: response.data})
    console.log('in getsearch', response.data.data);
    
}

const giphyReducer = (state = {}, action) => {
    if (action.type === 'SET_GIPHY'){
        
        return action.payload
    }
    return state
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
    giphyReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('react-root'));
