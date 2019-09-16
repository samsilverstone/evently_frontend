import React from 'react';
import {
    Card, Button
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import PlaceDetails from './PlaceDetails';
import MapViewModal from './MapViewModal';
import { Link } from 'react-router-dom';
import Loader from './loader';
import {
    withRouter
} from 'react-router-dom'

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            isOpen: false,
            origin: null,
            destination: null,
            image: null
        }
        this.loadDetails = this.loadDetails.bind(this)
        this.modalOpen = this.modalOpen.bind(this)
        this.modalClose = this.modalClose.bind(this)
        console.log(this.props.data.destination)
    }

    loadDetails() {
        axios.get(`http://127.0.0.1:8000/user/individualplace?place_id=${this.props.data.place_id}`)
            .then((response) => {
                this.props.fetchDetails(response.data)
            })
    }


    modalOpen() {
        this.setState({ loader: true })
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&maxheight=300&photoreference=${this.props.data.photo}&key=AIzaSyA4mI-Wb-OWrtHlste2j8GbuFdD4CvzYbQ`)
            .then((response) => response.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                this.setState((prevSate) => {

                    return {
                        isOpen: true,
                        origin: this.props.origin,
                        destination: this.props.data.destination || prevSate.destination,
                        loader: false,
                        image
                    }
                })
            })
    }

    modalClose() {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Card className="mb-4 indivi_item">
                    <ul className="list-group list-group-flush list-unstyled">
                        <div><Link to={`/place/${this.props.data.name}/${this.props.data.photo}?org_lat=${this.props.origin.lat}&org_lng=${this.props.origin.lng}&dest_lat=${this.props.data.destination.lat}&dest_lng=${this.props.data.destination.lng}`} onClick={this.loadDetails}>{this.props.data.name}</Link></div>
                        {this.props.data.open_now ? <li className="list-group-item">{this.props.data.open_now.open_now ? <React.Fragment><span className="font-weight-bold w-25 d-inline-block">Open Now</span>Open</React.Fragment> : <React.Fragment><span className="font-weight-bold w-25">Open Now:</span>Closed</React.Fragment>}</li> : <React.Fragment><span className="font-weight-bold">Open Now:</span>No Information Available</React.Fragment>}
                        {this.props.data.price_level ? <li className="list-group-item"><span className="font-weight-bold w-25">Affordability:</span>{this.props.compute(this.props.data.price_level)}</li> : <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Affordability:</span>No Information Available</li>}
                        {this.props.data.rating ? <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>{this.props.data.rating}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>No Ratings Yet</li>}
                        {this.props.data.user_ratings_total ? <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>{this.props.data.user_ratings_total}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>No One Rated Yet</li>}
                    </ul>
                </Card>
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    if (state.locationDetails.isLoading) {
        return {
            isLoading: true
        }
    }
    // console.log(state.locationDetails.data.data)
    return {
        isLoading: state.locationDetails.isLoading,
        locationInfo: state.locationDetails.data.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (data) => dispatch({ type: 'INFO_LOADED', data })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result))