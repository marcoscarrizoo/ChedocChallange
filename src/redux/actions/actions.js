export const GET_MOVIES ='GET_MOVIES' 
export const GET_SERIES = 'GET_SERIES'
export const ORDER_MOVIES = 'ORDER_MOVIES'
export const ORDER_SERIES = 'ORDER_SERIES'

const data = require('../../data/sample.json')

export function getMovies() {
    return {
            type: GET_MOVIES,
            payload: data.entries
        }
}

export function getSeries() {

    return {
        type: GET_SERIES,
        payload: data.entries
    }
}

export function OrderMovies(movies) {
    const filtered = movies.sort((a,b) => (a.title > b.title) ? 1 : -1)
    return {
        type: ORDER_MOVIES,
        payload: filtered
    }
}
export function OrderSeries(series) {
    const filtered = series.sort((a,b) => (a.title > b.title) ? 1 : -1)
    return {
        type: ORDER_SERIES,
        payload: filtered
    }
}