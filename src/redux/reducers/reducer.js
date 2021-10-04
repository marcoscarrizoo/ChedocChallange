import { GET_MOVIES, GET_SERIES, ORDER_MOVIES, ORDER_SERIES, GET_DETAIL } from '../actions/actions'

const initialState = {
    movies: [],
    series: [],
    detail: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload.filter(movie => movie.programType !== 'series')
            }
        case GET_SERIES:
            return {
                ...state,
                series: action.payload.filter(serie => serie.programType !== 'movie')
            }
        case ORDER_MOVIES:
            return {
                ...state,
                movies: action.payload.filter(movie => movie.programType !== 'series')
            }
        case ORDER_SERIES:
            return {
                ...state,
                series: action.payload.filter(serie => serie.programType !== 'movie')
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;