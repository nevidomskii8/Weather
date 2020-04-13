import { HIDE_LOADER, SHOW_LOADER, FETCH_RESP } from "./types"

const initialState = {
    loading: false,
    stateReducer: []
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: 
            return {...state, loading: true}
        case HIDE_LOADER : 
            return {...state, loading: false}
        case FETCH_RESP:
            return {...state, stateReducer: action.payload}
        default: return state
    }
}