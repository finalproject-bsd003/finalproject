const baseUrl = "http://localhost:3000"

import { DRESS_FETCH_SUCCESS, DRESS_DETAIL_FETCH_SUCCESS, LOADING } from "./actionType"


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


export const deletedress = (id) => {
    return async (dispatch) => {
        try {

            console.log(id);
            const response = await fetch(`${baseUrl}/dresses/${id}`, {
                method: "DELETE",
            })

            console.log("berhasil delete");

            dispatch(dressesFetch())

        } catch (error) {
            console.log(error);
        }
    }
}

