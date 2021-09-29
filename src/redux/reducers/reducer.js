import {GET_MOVIES, GET_SERIES} from '../actions/actions'

const initialState = {
    movies: [],
    series: []
}

function rootReducer(state= initialState, action) {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state, 
                movies: action.payload.filter(e => e.programType !== 'series')
            }
        case GET_SERIES: 
        return {
            ...state,
            series: action.payload.filter(e => e.programType !== 'movie')
        }
        default:
            return state
    }
}

export default rootReducer;