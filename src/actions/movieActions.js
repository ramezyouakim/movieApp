import {
    SEARCH_MOVIES_START,
    SEARCH_MOVIES_FAILED,
    SEARCH_MOVIES_SUCESS,

    SEARCH_MORE_MOVIES_START,
    SEARCH_MORE_MOVIES_FAILED,
    SEARCH_MORE_MOVIES_SUCESS,

    GET_MOVIES_Genres_START,
    GET_MOVIES_Genres_FAILED,
    GET_MOVIES_Genres_SUCESS
} from './types';
import caller from '../api/caller';
import config from '../config';
import store from '../store';

const { movieSearchBaseUrl, themoviedbAPIKey, movieGenreBaseUrl } = config;

export function fetchMoviesBySearch(query) {
    return async (dispatch) => {
        dispatch({
            type: SEARCH_MOVIES_START
        })
        let response = await caller(`${movieSearchBaseUrl}?${themoviedbAPIKey}&query=${query}&page=1`, "GET"),
            responseJson
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                case 201:
                    /* Handling Success */
                    responseJson = await response.json()
                    if (responseJson.results < 1) {
                        dispatch(handleFetchMoviesBySearchFailed());
                    }
                    else {
                        dispatch(handleFetchMoviesBySearchSuccess(responseJson, query));
                    }
                    break;
                case 400:
                case 401:
                case 403:
                case 404:
                case 500:
                    /* Handling internal error */
                    dispatch(handleFetchMoviesBySearchFailed())
                    break;
                default:
                    dispatch(handleFetchMoviesBySearchFailed())
                    break;
            }
        } else {
            dispatch(handleFetchMoviesBySearchFailed())
        }
    }
}

handleFetchMoviesBySearchSuccess = (response, searchQuery) => {
    return {
        type: SEARCH_MOVIES_SUCESS,
        movieSearchResultsList: response?.results,
        searchQuery: searchQuery
    }
}

handleFetchMoviesBySearchFailed = () => {
    return {
        type: SEARCH_MOVIES_FAILED,
        errorTitle: 'Somthing Went Wrong!',
        errorMessage: 'Somthing Went Wrong! Please try again',
    }
}

export function fetchMoreMoviesBySearch() {
    return async (dispatch) => {
        dispatch({
            type: SEARCH_MORE_MOVIES_START
        })

        let currentPage = store.getState().movie.currentPage;
        let searchQuery = store.getState().movie.searchQuery;

        let response = await caller(`${movieSearchBaseUrl}?${themoviedbAPIKey}&query=${searchQuery}&page=${currentPage}`, "GET"),
            responseJson
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                case 201:
                    /* Handling Success */
                    responseJson = await response.json()
                    if (responseJson.results < 1) {
                        dispatch(handleFetchMoreMoviesBySearchFailed());
                    }
                    else {
                        dispatch(handleFetchMoreMoviesBySearchSuccess(responseJson));
                    }
                    break;
                case 400:
                case 401:
                case 403:
                case 404:
                case 500:
                    /* Handling internal error */
                    dispatch(handleFetchMoreMoviesBySearchFailed())
                    break;
                default:
                    dispatch(handleFetchMoreMoviesBySearchFailed())
                    break;
            }
        } else {
            dispatch(handleFetchMoreMoviesBySearchFailed())
        }
    }
}

handleFetchMoreMoviesBySearchSuccess = (response) => {
    let oldLIst = store.getState().movie.movieSearchResultsList;
    return {
        type: SEARCH_MORE_MOVIES_SUCESS,
        movieSearchResultsList: oldLIst.concat(response.results),
        currentPage: response?.page + 1
    }
}

handleFetchMoreMoviesBySearchFailed = () => {
    return {
        type: SEARCH_MORE_MOVIES_FAILED,
        errorTitle: 'Somthing Went Wrong!',
        errorMessage: 'Somthing Went Wrong! Please try again',
    }
}

export function fetchMoviesGenres() {
    return async (dispatch) => {
        dispatch({
            type: GET_MOVIES_Genres_START
        })
        let response = await caller(`${movieGenreBaseUrl}?${themoviedbAPIKey}`, "GET"),
            responseJson
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                case 201:
                    /* Handling Success */
                    responseJson = await response.json()
                    if (responseJson.results < 1) {
                        dispatch(handleFetchMoviesGenresFailed());
                    }
                    else {
                        dispatch(handleFetchMoviesGenresSuccess(responseJson));
                    }
                    break;
                case 400:
                case 401:
                case 403:
                case 404:
                case 500:
                    /* Handling internal error */
                    dispatch(handleFetchMoviesGenresFailed())
                    break;
                default:
                    dispatch(handleFetchMoviesGenresFailed())
                    break;
            }
        } else {
            dispatch(handleFetchMoviesGenresFailed())
        }
    }
}

handleFetchMoviesGenresSuccess = (response) => {
    return {
        type: GET_MOVIES_Genres_SUCESS,
        movieGenresList: response?.genres
    }
}

handleFetchMoviesGenresFailed = () => {
    return {
        type: GET_MOVIES_Genres_FAILED,
        errorTitle: 'Somthing Went Wrong!',
        errorMessage: 'Somthing Went Wrong! Please try again',
    }
}