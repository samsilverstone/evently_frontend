import axios from "axios";

export const nearby = (location, category) => {
    console.log("nearby")
    return (dispatch, getState) => {
<<<<<<< HEAD
        dispatch({ type: 'DATA LOADING' })
        axios.get(`http://127.0.0.1:8000/user/placedetail/?location=${location}&category=${category}&radius=10000`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({ type: 'DATA LOADED', data: response.data })
                }
=======
        // let headers = {  }
        let key = 'AIzaSyA4mI-Wb-OWrtHlste2j8GbuFdDCvzYQ'
        let myHeaders = new Headers({
            'content-type': 'application/json'
        });
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let findPlaceAPI = proxyurl + `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=geometry&key=${key}`
        fetch(findPlaceAPI, myHeaders, { method: "GET" })
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                let latitude = data.candidates[0].geometry.location.lat
                let longitude = data.candidates[0].geometry.location.lng
                // console.log(latitude, longitude)
                console.log(category)
                let placeNearbyAPI = proxyurl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=50000&type=${category}&keyword=${category}&key=${key}`
                return fetch(placeNearbyAPI, myHeaders, { method: "GET" })
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        console.log(data.results)
                        const nearbyData = data.results.map(item => {
                            return {
                                "name": item.name,
                                "open_now": typeof (item.opening_hours) === 'object' ? item.opening_hours.open_now : null,
                                "photo_reference": typeof (item.photos) === 'object' ? item.photos[0].photo_reference : null,
                                "place_id": item.place_id,
                                "price_level": typeof (item.price_level) === 'int' ? item.price_level : null,
                                "rating": typeof (item.rating) === 'int' ? item.rating : null,
                                "types": typeof (item.types) === 'object' ? item.types : null,
                                "user_ratings_total": typeof (item.user_ratings_total) === 'int' ? item.user_ratings_total : null
                            }
                        })
                        
                    })
                    
>>>>>>> 5ac3d1b0e66b3bbf1d39a26ce0cebbb88c5aad37
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
