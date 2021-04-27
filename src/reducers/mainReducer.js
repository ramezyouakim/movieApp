import { combineReducers } from 'redux';
import movieReducer from './moviesReducer';

export default combineReducers({
    movie: movieReducer
});