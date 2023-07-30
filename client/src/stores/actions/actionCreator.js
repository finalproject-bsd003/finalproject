const baseUrl = "http://localhost:3000"

import { DRESS_FETCH_SUCCESS, DRESS_DETAIL_FETCH_SUCCESS, LOADING, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_ERROR, REGISTER_SUCCESS, LOGOUT_SUCCESS, LOADING_STORE, STORE_FETCH_SUCCESS, STORE_DETAIL_FETCH_SUCCESS, ADD_DRESS_ERROR, CREATE_INVOICE_REQUEST, CREATE_INVOICE_SUCCESS, CREATE_INVOICE_FAILURE } from "./actionType"

import axios from 'axios';

// LOGIN --- REGISTER --- LOGOUT --- //

export const loginSuccess = ({ role, username }) => (
    {
        type: LOGIN_SUCCESS,
        payload: { role, username }
    }
)

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error: error,
});

export const login = (data) => {
    return async (dispatch) => {
        try {

            const response = await fetch(`${baseUrl}/login`,
                {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password
                    })
                },

            )
            const responseJson = await response.json()
            console.log(responseJson, "ini dari backend");

            const { access_token } = responseJson
            const { role, username } = responseJson

            console.log(access_token, role, username);

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(loginSuccess({ role, username }))
            localStorage.setItem("access_token", access_token)
            return Promise.resolve();

        } catch (error) {
            console.log(error, "dari action creator");
            dispatch(loginError(error.message))
            return Promise.reject(error);
        }
    }
}

export const registerError = (error) => ({
    type: REGISTER_ERROR,
    error: error,
});

export const registerSuccess = () => (
    {
        type: REGISTER_SUCCESS,
    }
)

export const register = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    access_token: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const responseJson = await response.json()
            console.log(responseJson, "ini dari backend");


            if (!response.ok) {
                throw new Error(responseJson)
            }

            dispatch(registerSuccess())

            return Promise.resolve();

        } catch (error) {
            console.log(error);
            dispatch(registerError(error.message))
            return Promise.reject(error);
        }
    }
}

export const logoutSuccess = () => (
    {
        type: LOGOUT_SUCCESS,
    }
)

export const logout = () => {
    return async (dispatch) => {
        try {

            localStorage.clear()
            dispatch(logoutSuccess())

        } catch (error) {
            console.log(error);
        }
    }
}



// ---- DRESS CRUD ----- //


export const loading = () => (
    {
        type: LOADING,
    }
)

export const dressesFetchSuccess = (dresses) => (
    {
        type: DRESS_FETCH_SUCCESS,
        payload: dresses
    }
)

export const dressesFetch = () => {
    return async (dispatch) => {
        try {

            dispatch(loading())

            const response = await fetch(`${baseUrl}/dress`)
            const responseJson = await response.json()

            console.log(responseJson, "ini response JSON");

            dispatch(dressesFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}

export const dressDetailFetchSuccess = (dress) => (
    {
        type: DRESS_DETAIL_FETCH_SUCCESS,
        payload: dress
    }
)

export const detailDressFetch = (id) => {
    return async (dispatch) => {
        try {

            dispatch(loading())

            const response = await fetch(`${baseUrl}/dress/${id}`)
            const responseJson = await response.json()

            console.log(responseJson, "ini response JSON");

            dispatch(dressDetailFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}


export const deleteDress = (id) => {
    return async (dispatch) => {
        try {

            console.log(id);
            const response = await fetch(`${baseUrl}/dress/${id}`, {
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
            })

            console.log("berhasil delete");

            dispatch(dressesFetch())

        } catch (error) {
            console.log(error);
        }
    }
}

export const addDressError = (error) => ({
    type: ADD_DRESS_ERROR,
    error: error,
});

export const addDress = (dress) => {
    return async (dispatch) => {
        try {
            console.log(dress, "dari action creator");

            const response = await fetch(`${baseUrl}/dress`, {
                method: "POST",
                headers: {
                    access_token: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify(dress)
            })

            const responseJson = await response.json()

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(dressesFetch())
            return Promise.resolve();

        } catch (error) {
            console.log(error, "from action creator");
            dispatch(addDressError(error.message))
            return Promise.reject(error);
        }
    }
}

export const editDress = (dress, id) => {
    return async (dispatch) => {
        try {
            console.log(dress, "dari action creator");

            const response = await fetch(`${baseUrl}/dress/${id}`, {
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify(dress)
            })

            const responseJson = await response.json()

            console.log("kelar edit")
            console.log(responseJson, "ini response");

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(dressesFetch())
            return Promise.resolve();

        } catch (error) {
            console.log(error, "dari action creator");
            dispatch(addDressError(error.message))
            return Promise.reject(error);
        }
    }
}

// ---- STORE CRUD ----- //


export const loadingStore = () => (
    {
        type: LOADING_STORE,
    }
)

export const storesFetchSuccess = (stores) => (
    {
        type: STORE_FETCH_SUCCESS,
        payload: stores
    }
)

export const storesFetch = () => {
    return async (dispatch) => {
        try {

            dispatch(loading())

            const response = await fetch(`${baseUrl}/store`)
            const responseJson = await response.json()

            console.log(responseJson, "ini response JSON");

            dispatch(storesFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}

export const storeDetailFetchSuccess = (store) => (
    {
        type: STORE_DETAIL_FETCH_SUCCESS,
        payload: store
    }
)

export const detailStoreFetch = (id) => {
    return async (dispatch) => {
        try {

            dispatch(loading())

            const response = await fetch(`${baseUrl}/store/${id}`)
            const responseJson = await response.json()

            console.log(responseJson, "ini response JSON");

            dispatch(storeDetailFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}


export const deleteStore = (id) => {
    return async (dispatch) => {
        try {

            console.log(id);
            const response = await fetch(`${baseUrl}/store/${id}`, {
                method: "DELETE",
            })

            console.log("berhasil delete");

            dispatch(storesFetch())

        } catch (error) {
            console.log(error);
        }
    }
}

export const createInvoiceRequest = () => ({
    type: CREATE_INVOICE_REQUEST
});

export const createInvoiceSuccess = (data) => ({
    type: CREATE_INVOICE_SUCCESS,
    payload: data
});

export const createInvoiceFailure = (error) => ({
    type: CREATE_INVOICE_FAILURE,
    payload: error
});

// Async Action Creator for creating invoice
export const paymentQris = (data) => async (dispatch, res) => {
    dispatch(createInvoiceRequest());
    try {
        console.log(data);
        const response = await axios.post(`${baseUrl}/dress/payment`, data);
        console.log(response, "dari action creator");
        const { Data } = response.data
        console.log(Data.Url, "ini action creator");
        // // dispatch(createInvoiceSuccess(Data.Url));
        return Data.Url

    } catch (error) {
        dispatch(createInvoiceFailure('Failed to create invoice'));
    }
};