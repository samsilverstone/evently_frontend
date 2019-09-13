import React from 'react';
import { connect } from 'react-redux';
import Loading from './loader';
import { Card } from 'reactstrap';

class PlaceInfo extends React.Component {
    constructor(props) {
        super(props)
        this.resetStore = this.resetStore.bind(this)
    }
    resetStore(e) {
        console.log("placeInfo---->", e)
        this.props.dispatch({ type: 'INFO_RESET' })
    }
    componentDidMount() {
        console.log("PlaceInfo component mounted")
    }
    componentWillUnmount() {
        window.onpopstate = this.resetStore
        console.log("PlaceInfo component Umounted")
    }
    render() {
        if (this.props.isLoading) {
            return <Loading />
        }
        return (
            <React.Fragment>
                <div>
                    <div>
                        <div className="individual_item"><span className="span_style">Address</span>{typeof (this.props.loadedData.formatted_address) === 'string' ? <div className="div_style">{this.props.loadedData.formatted_address}</div> : <div className="div_style">NA</div>}</div>
                        <div className="mt-3 individual_item"><span className="span_style">Phone-Number</span>{typeof (this.props.loadedData.formatted_phone_number) === 'string' ? <div className="div_style">{this.props.loadedData.formatted_phone_number}</div> : <div >NA</div>}</div>
                    </div>
                    <div className="individual_item">
                        <span className="span_style">Opening And Closing Hours</span>
                        <ul className="ul_item">
                            {this.props.loadedData.opening_hours !== null ?
                                this.props.loadedData.opening_hours.map((item, index) => (
                                    <li key={index}>{item}</li>
                                )) : <li key={index}>No Info Available</li>
                            }
                        </ul>
                    </div>

                    <div className="individual_item"><span className="span_style">Website</span>{typeof (this.props.loadedData.website) === 'string' ? <div className="div_style">{this.props.loadedData.website}</div> : <div className="div_style">NA</div>}</div>
                    <div className="individual_item">
                        <span className="span_style">Reviews</span>
                        {this.props.loadedData.reviews.length > 0 && (
                            <ul>
                                {this.props.loadedData.reviews.map((item, index) => (
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
}

const mapStateToProps = (state) => {
    if (state.locationDetails.isLoading) {
        return {
            isLoading: state.locationDetails.isLoading
        }
    }
    return {
        isLoading: state.locationDetails.isLoading,
        loadedData: state.locationDetails.data.data
    }
}

export default connect(mapStateToProps)(PlaceInfo)