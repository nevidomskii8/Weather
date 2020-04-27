import { HIDE_LOADER, SHOW_LOADER, FETCH_RESP, LANG_ENG, LANG_RU, DAY_ID} from "./types"
import { combineReducers } from "redux"

const initialState = {
    loading: false,
    stateReducer: [],
    dayId: 0
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: 
        return {...state, loading: true}
        case HIDE_LOADER : 
        return {...state, loading: false}
        case FETCH_RESP:
            return {...state, stateReducer: action.payload}
        case DAY_ID:
            return {...state, dayId: action.payload}
        default: return state
        }
    }
    
function toggleReducer(state = 0, action) {
    switch (action.type) {
        case LANG_ENG:
            return 1
        case LANG_RU:
            return 0
        default: return state
        }
}

export const rootReducer = combineReducers({
    toggleLang: toggleReducer,
    appDate: appReducer

})