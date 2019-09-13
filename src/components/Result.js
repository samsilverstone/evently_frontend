import React from 'react';
import {
    Card, Button
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import PlaceDetails from './PlaceDetails';
import MapViewModal from './MapViewModal';
import { Link } from 'react-router';
import Loader from './loader';
import {
    withRouter
} from 'react-router-dom'

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.loadDetails = this.loadDetails.bind(this)
        this.state = {
            loader: false,
            isOpen: false,
            origin: null,
            destination: null,
            image: null
        }
        this.modalOpen = this.modalOpen.bind(this)
        this.modalClose = this.modalClose.bind(this)
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
                    {this.props.data.name ? <div className="bg-success p-3 mb-3"><h2><Link to={`/users/${this.props.data.name}`}>{this.props.data.name}</Link></h2></div> : undefined}
                    <ul className="list-group list-group-flush list-unstyled">
                        {this.props.data.open_now ? <li className="list-group-item">{this.props.data.open_now.open_now ? <React.Fragment><span className="font-weight-bold w-25 d-inline-block">Open Now</span>Open</React.Fragment> : <React.Fragment><span className="font-weight-bold w-25">Open Now:</span>Closed</React.Fragment>}</li> : <React.Fragment><span className="font-weight-bold">Open Now:</span>No Information Available</React.Fragment>}
                        {this.props.data.price_level ? <li className="list-group-item"><span className="font-weight-bold w-25">Affordability:</span>{this.props.compute(this.props.data.price_level)}</li> : <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Affordability:</span>No Information Available</li>}
                        {this.props.data.rating ? <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>{this.props.data.rating}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>No Ratings Yet</li>}
                        {this.props.data.user_ratings_total ? <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>{this.props.data.user_ratings_total}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>No One Rated Yet</li>}
                    </ul>
                    <Button onClick={this.modalOpen}>Map View</Button>
                    {this.state.loader && <Loader />}
                    {this.state.isOpen && <MapViewModal
                        isModalVisible={this.state}
                        isModalClosed={this.modalClose}
                        data={this.props.data}
                    />}
                    {this.props.isLoading || !(this.props.locationInfo.place_id === this.props.data.place_id) ? <Button onClick={this.loadDetails}>Show More</Button> : <PlaceDetails loadedData={this.props.locationInfo} />}
                </Card>
            </React.Fragment>
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