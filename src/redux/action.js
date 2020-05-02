import {FETCH_RESP, HIDE_LOADER, SHOW_LOADER, LANG_ENG, LANG_RU, DAY_ID, CITY} from './types'
const axios = require('axios')


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function toggleEng() {
    return {
        type: LANG_ENG
    }
}

export function toggleRu() {
    return {
        type: LANG_RU
    }
}

export function toggleDay(id) {
    return {
        type: DAY_ID,
        payload: id
    }
}

export function toggleCity(coordinates) {
    return {
        type: CITY,
        payload: coordinates
    }
}

export function fetchWeather(coordinates) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.post('http://localhost:5000/weather/getWeather', {coordinates})
            dispatch({ type: FETCH_RESP , payload: response.data })
            dispatch(hideLoader())
        } catch(e) {
            dispatch(hideLoader())
        }
    }
}   