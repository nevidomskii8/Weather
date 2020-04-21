import {FETCH_RESP, HIDE_LOADER, SHOW_LOADER, LANG_ENG, LANG_RU} from './types'

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

export function fetchWeather() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('http://localhost:5000/weather/getWeather')
            const json = await response.json()
            dispatch({ type: FETCH_RESP , payload: json })
            dispatch(hideLoader())
        } catch(e) {
            dispatch(hideLoader())
        }
    }
}   