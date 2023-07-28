import { DRESS_FETCH_SUCCESS, DRESS_DETAIL_FETCH_SUCCESS } from "../actions/actionType";

const initialState = {
    dresses: [],
    detaildress: [],
    error: []
}

const dressReducer = (state = initialState, action) => {
    if (action.type === DRESS_FETCH_SUCCESS) {
        return {
            ...state,
            dresses: action.payload,
            error: []
        }
    } else if (action.type === DRESS_DETAIL_FETCH_SUCCESS) {
        return {
            ...state,
            detaildress: action.payload,
            error: []
        }
    }

    return state
}

export default dressReducer