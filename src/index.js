import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';




const favorites = (state = ['test'], action) => {
    if (action.type === 'SET_FAVORITES') {
        return action.payload;
    } 
    return state;
}

const sagaMiddleware = createSagaMiddleware();




// Provider allows us to use redux within our react app
// Import saga middleware


function* rootSaga() {
    yield takeEvery('GIPHY_SEARCH', getSearch);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('ADD_TO_FAVORITES', addToFavorites);
}

function* addToFavorites(action) {
    console.log('in addToFavorites')
    yield axios.post('/api/favorite', action.payload);
    yield put({type: 'FETCH_FAVORITES'});
}

function* fetchFavorites(){
    let response = yield axios.get('/api/favorite');
    yield put({type: 'SET_FAVORITES', payload: response.data})
}


function* getSearch(action){
    let response = yield axios.get(`/api/search?searchterm=${action.payload}`);
    yield put ({type: 'SET_GIPHY', payload: response.data.data})
    console.log('in getsearch', response.data.data);
    
}

const giphyReducer = (state = [], action) => {
    if (action.type === 'SET_GIPHY'){
        
        return action.payload
    }
    return state
}

const store = createStore(
    combineReducers({
        giphyReducer,
        favorites
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('react-root'));
