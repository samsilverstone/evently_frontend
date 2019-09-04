import React from 'react';
import Modal from 'react-modal';
import { withScriptjs } from "react-google-maps";
import Map from './map';


const MapViewModal = (props) => {
    const MapLoader = withScriptjs(Map);
    return (<Modal
        isOpen={props.isModalVisible.isOpen}
        onRequestClose={props.isModalClosed}
        contentLabel="Map View"
    >
        <MapLoader
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4mI-Wb-OWrtHlste2j8GbuFdD4CvzYbQ"
            loadingElement={<div style={{ height: `100%` }} />}
            origin={props.isModalVisible.origin}
            destination={props.isModalVisible.destination}
        />
    </Modal>
    )
}

export default MapViewModal