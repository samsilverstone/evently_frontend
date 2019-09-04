import React from 'react';
import { connect } from 'react-redux';

const PlaceDetails = (props) => {
    return (
        <React.Fragment>
            <ul>
                <li><span>Address</span>{typeof (props.loadedData.formatted_address) === 'string' ? props.loadedData.formatted_address : "No Info Available"}</li>
                <li><span>Phone-Number</span>{typeof (props.loadedData.formatted_phone_number) === 'string' ? props.loadedData.formatted_phone_number : "No Info Available"}</li>
                <ul>
                    <span>Opening And Closing Hours</span>
                    {props.loadedData.opening_hours !== null ?
                        props.loadedData.opening_hours.map((item, index) => (
                            <li key={index}>{item}</li>
                        )) : <li>No Info Available</li>
                    }
                </ul>
            </ul>
        </React.Fragment>
    )
}


export default PlaceDetails