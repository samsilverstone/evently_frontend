import React from 'react';
import Modal from 'react-modal';
import { withScriptjs } from "react-google-maps";
import Map from './map';


const MapViewModal = (props) => {
    const MapLoader = withScriptjs(Map);
    return (
        <div className="row">
            <div className="col-sm-6">
                <MapLoader
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4mI-Wb-OWrtHlste2j8GbuFdD4CvzYbQ"
                    loadingElement={<div style={{ height: `100%` }} />}
                    origin_lat={props.org_lat}
                    origin_lng={props.org_lng}
                    dest_lat={props.dest_lat}
                    dest_lng={props.dest_lng}
                />
            </div>
        </div>
    )
}

export default MapViewModal