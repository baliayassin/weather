import {createStore, combineReducers } from 'redux'
import weather from '../store/reducer'


const favoriteReducer = combineReducers({
    favorites:weather
});

const store = createStore(favoriteReducer)

export default store;
