export const nearby = (location, category) => {
    return (dispatch, getState) => {
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
                    
            })


        myHeaders = new Headers({
            'content-type': 'image/jpeg'
        })
        let photoAPI = proxyurl + `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=${key}`
        fetch(photoAPI, myHeaders, { method: 'GET' })
            .then(res => {
                return res.blob().then(data => {
                    var objectURL = URL.createObjectURL(data)
                    console.log(objectURL)
                    return { status: res.status, }
                })
            })
    }
}
