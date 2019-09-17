import React, { Component } from "react";
import {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directions: null
        };
    }

    componentDidMount() {
        const directionsService = new google.maps.DirectionsService();
        let lat = parseFloat(this.props.origin_lat)
        let lng = parseFloat(this.props.origin_lng)
        const origin = { lat, lng }
        const destination = { lat: parseFloat(this.props.dest_lat), lng: parseFloat(this.props.dest_lng) };

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    componentWillUnmount() {
        this.setState({
            directions: null
        })
    }

    render() {

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));

        return (
            <GoogleMapExample
                containerElement={<div style={{ height: `400px`, width: "100%" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default Map;
