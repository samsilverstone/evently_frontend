import axios from "axios";

export const nearby = (location, category, feature) => {
    return (dispatch, getState) => {
        dispatch({ type: 'DATA LOADING' })
        if (feature === 'prominent') {
            console.log(feature)
            if (typeof (location) === 'object') {
                console.log("->", location.latitude)
                let lat = location.latitude
                let lng = location.longitude
                axios.get(`http://127.0.0.1:8000/user/geolocation/?latitude=${lat}&longitude=${lng}&category=${category}&radius=10000`)
                    .then((response) => {
                        if (response.status === 200) {
                            dispatch({ type: 'DATA LOADED', data: response.data })
                        }
                    })
            } else {
                console.log("-<", location)
                axios.get(`http://127.0.0.1:8000/user/placedetail/?location=${location}&category=${category}&radius=10000`)
                    .then((response) => {
                        if (response.status === 200) {
                            dispatch({ type: 'DATA LOADED', data: response.data })
                        }
                    })
            }

        } else {
            console.log(feature)
            if (typeof (location) === 'object') {
                let lat = location.latitude
                let lng = location.longitude
                axios.get(`http://127.0.0.1:8000/user/geolocation/?latitude=${lat}&longitude=${lng}&category=${category}&rankby=distance`)
                    .then((response) => {
                        if (response.status === 200) {
                            dispatch({ type: 'DATA LOADED', data: response.data })
                        }
                    })
            } else {
                axios.get(`http://127.0.0.1:8000/user/placedetail/?location=${location}&category=${category}&rankby=distance`)
                    .then((response) => {
                        if (response.status === 200) {
                            dispatch({ type: 'DATA LOADED', data: response.data })
                        }
                    })
            }

        }
    }
}
