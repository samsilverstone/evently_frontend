import React from 'react';
import Modal from 'react-modal';
import { withScriptjs } from "react-google-maps";
import Map from './map';

const customStyles = {
    content: {
        top: '10%',
        left: '40px',
        right: '40px',
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
            <div className="col-sm-6"><img src={props.isModalVisible.image} />
                {props.data.name && <div><span>Name</span>{props.data.name}</div>}
                {props.data.open_now && <div><span>Open Now</span>{props.data.open_now.open_now ? 'True' : 'False'}</div>}
                {props.data.rating && <div><span>Rating</span>{props.data.rating}</div>}
                {props.data.user_ratings_total && <div><span>Total User Rating</span>{props.data.user_ratings_total}</div>}
            </div>
        </div>
    </Modal>
    )
}

export default MapViewModal