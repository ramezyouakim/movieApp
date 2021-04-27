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
} from '../actions/types';

const INIT_STATE = {
    movieSearchResultsList: [],
    errorTitle: '',
    errorMessage: '',
    loading: false,
    loadMore: false,
    currentPage: 2,
    searchQuery: "",
    movieGenresList: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case SEARCH_MOVIES_START:
            return { ...state, loading: true, errorTitle: null, errorMessage: null, movieSearchResultsList: [] }
        case SEARCH_MOVIES_FAILED:
            return { ...state, loading: false, errorTitle: action.errorTitle, errorMessage: action.errorMessage }
        case SEARCH_MOVIES_SUCESS:
            return { ...state, loading: false, errorTitle: null, errorMessage: null, movieSearchResultsList: action.movieSearchResultsList, searchQuery: action.searchQuery }

        case SEARCH_MORE_MOVIES_START:
            return { ...state, loading: false, loadMore: true, errorTitle: null, errorMessage: null }
        case SEARCH_MORE_MOVIES_FAILED:
            return { ...state, loading: false, loadMore: false, errorTitle: action.errorTitle, errorMessage: action.errorMessage }
        case SEARCH_MORE_MOVIES_SUCESS:
            return { ...state, loading: false, loadMore: false, errorTitle: null, errorMessage: null, movieSearchResultsList: action.movieSearchResultsList, currentPage: action.currentPage }

        case GET_MOVIES_Genres_START:
            return { ...state, loading: false, loadMore: false, errorTitle: null, errorMessage: null }
        case GET_MOVIES_Genres_FAILED:
            return { ...state, loading: false, loadMore: false, errorTitle: action.errorTitle, errorMessage: action.errorMessage }
        case GET_MOVIES_Genres_SUCESS:
            return { ...state, loading: false, loadMore: false, errorTitle: null, errorMessage: null, movieGenresList: action.movieGenresList }

        default:
            return state;
    }
}