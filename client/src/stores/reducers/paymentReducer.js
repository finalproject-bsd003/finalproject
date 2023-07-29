import { CREATE_INVOICE_FAILURE, CREATE_INVOICE_REQUEST, CREATE_INVOICE_SUCCESS } from "../actions/actionType";


const initialState = {
    loading: false,
    qrisImage: null,
    error: null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_INVOICE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CREATE_INVOICE_SUCCESS:
            return {
                ...state,
                loading: false,
                qrisImage: action.payload
            };
        case CREATE_INVOICE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default paymentReducer;