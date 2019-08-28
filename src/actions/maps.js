import axios from "axios";

export const nearby = (location, category) => {
    console.log("nearby")
    return (dispatch, getState) => {
        dispatch({ type: 'DATA LOADING' })
        axios.get(`http://127.0.0.1:8000/user/placedetail/?location=${location}&category=${category}&radius=10000`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({ type: 'DATA LOADED', data: response.data })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}