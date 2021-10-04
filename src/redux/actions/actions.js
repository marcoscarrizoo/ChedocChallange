export const GET_MOVIES = 'GET_MOVIES'
export const GET_SERIES = 'GET_SERIES'
export const ORDER_MOVIES = 'ORDER_MOVIES'
export const ORDER_SERIES = 'ORDER_SERIES'
export const GET_DETAIL = 'GET_DETAIL'

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
    const filtered = movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
    return {
        type: ORDER_MOVIES,
        payload: filtered
    }
}
export function OrderSeries(series) {
    const filtered = series.sort((a, b) => (a.title > b.title) ? 1 : -1)
    return {
        type: ORDER_SERIES,
        payload: filtered
    }
}

export function getDetail(title) {
    return {
        type: GET_DETAIL,
        payload: data.entries.filter(e => e.title === title)
    }
}

export function closeModal() {
    return {
        type: GET_DETAIL,
        payload: null
    }
}