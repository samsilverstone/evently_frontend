import React from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router';

const PlaceDetails = (props) => {
    return (
        <React.Fragment>
            <div>
                <div>
                    <div className="individual_item"><span className="span_style">Address</span>{typeof (props.loadedData.formatted_address) === 'string' ? <div className="div_style">{props.loadedData.formatted_address}</div> : <div className="div_style">NA</div>}</div>
                    <div className="mt-3 individual_item"><span className="span_style">Phone-Number</span>{typeof (props.loadedData.formatted_phone_number) === 'string' ? <div className="div_style">{props.loadedData.formatted_phone_number}</div> : <div >NA</div>}</div>
                </div>
                <div className="individual_item">
                    <span className="span_style">Opening And Closing Hours</span>
                    <ul className="ul_item">
                        {props.loadedData.opening_hours !== null ?
                            props.loadedData.opening_hours.map((item, index) => (
                                <li key={index}>{item}</li>
                            )) : <li key={index}>No Info Available</li>
                        }
                    </ul>
                </div>

                <div className="individual_item"><span className="span_style">Website</span>{typeof (props.loadedData.website) === 'string' ? <div className="div_style">{props.loadedData.website}</div> : <div className="div_style">NA</div>}</div>
                <div className="individual_item">
                    <span className="span_style">Reviews</span>
                    {props.loadedData.reviews.length > 0 && (
                        <ul>
                            {props.loadedData.reviews.map((item, index) => (
                                <Card className="mb-4 d-flex flex-row" width="50px" height="50px" key={index}>
                                    <div className="review">
                                        <img src={item.profile_photo} alt="profile_pic" />
                                    </div>
                                    <div className="review">
                                        <h4 className="author">{item.Author}</h4>
                                        <p className="comment">{item.Comment}</p>
                                        <small className="small">{item.Posted}</small>
                                    </div>
                                </Card>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}


export default PlaceDetails