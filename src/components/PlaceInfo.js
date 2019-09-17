import React from 'react';
import { connect } from 'react-redux';
import Loading from './loader';
import { Card, Button } from 'reactstrap';
import Loader from './loader';
import MapViewModal from './MapViewModal';
const queryString = require('query-string');

class PlaceInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            isOpen: false,
            origin: null,
            destination: null,
            image: null
        }
        this.resetStore = this.resetStore.bind(this)
        this.data = queryString.parse(location.search)
        // console.log("PlaceInfo", this.data.org_lat)
        // console.log("PlaceInfo", this.data.org_lng)
        console.log(this.data)
    }
    resetStore(e) {
        console.log("placeInfo---->", e)
        this.props.dispatch({ type: 'INFO_RESET' })
    }
    componentDidMount() {
        console.log("PlaceInfo component mounted")
        console.log()
        this.setState({ loader: true })
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&maxheight=300&photoreference=${this.props.match.params.id}&key=AIzaSyA4mI-Wb-OWrtHlste2j8GbuFdD4CvzYbQ`)
            .then((response) => response.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                this.setState((prevSate) => {

                    return {
                        isOpen: true,
                        origin: this.props.origin,
                        // destination: this.props.data.destination || prevSate.destination,
                        loader: false,
                        image
                    }
                })
            })
    }
    componentWillUnmount() {
        window.onpopstate = this.resetStore
        console.log("PlaceInfo component Umounted")
    }
    modalClose() {
        this.setState({
            isOpen: false
        })
    }


    render() {
        if (this.props.isLoading) {
            return <Loading />
        }
        return (
            <React.Fragment>
                <div>
                    <div>
                        <img src={this.state.image} />
                    </div>
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
                                )) : <li>No Info Available</li>
                            }
                        </ul>
                    </div>

                    <div className="individual_item"><span className="span_style">Website</span>{typeof (this.props.loadedData.website) === 'string' ? <div className="div_style">{this.props.loadedData.website}</div> : <div className="div_style">NA</div>}</div>
                    <div className="individual_item">
                        <span className="span_style">Reviews</span>
                        {this.props.loadedData.reviews && this.props.loadedData.reviews.length > 0 && (
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
                    <MapViewModal
                        org_lat={this.data.org_lat}
                        org_lng={this.data.org_lng}
                        dest_lat={this.data.dest_lat}
                        dest_lng={this.data.dest_lng}
                    />
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
    console.log(state.locationDetails)
    return {
        isLoading: state.locationDetails.isLoading,
        loadedData: state.locationDetails.data.data
    }
}

export default connect(mapStateToProps)(PlaceInfo)