import React from 'react';
import Modal from 'react-modal';
import { withScriptjs } from "react-google-maps";
import Map from './map';

const customStyles = {
    content: {
        top: '10%',
        left: '40px',
        right: '40px',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        bottom: "auto",
        width: "85%",
        background: "black",
        height: "auto",
        margin: "0 auto"
    }
};

const MapViewModal = (props) => {
    const MapLoader = withScriptjs(Map);
    return (<Modal
        isOpen={props.isModalVisible.isOpen}
        onRequestClose={props.isModalClosed}
        contentLabel="Map View"
        style={customStyles}
    >
        <div className="row">
            <div className="col-sm-6">
                <MapLoader
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4mI-Wb-OWrtHlste2j8GbuFdD4CvzYbQ"
                    loadingElement={<div style={{ height: `100%` }} />}
                    origin={props.isModalVisible.origin}
                    destination={props.isModalVisible.destination}
                />
            </div>
            <div className="col-sm-6"><img src={props.isModalVisible.image} /></div>
            <div>Hello</div>
        </div>
    </Modal>
    )
}

export default MapViewModal