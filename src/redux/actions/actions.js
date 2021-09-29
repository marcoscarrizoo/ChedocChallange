export const GET_MOVIES ='GET_MOVIES' 
export const GET_SERIES = 'GET_SERIES'

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