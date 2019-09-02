import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import PlaceDetails from './PlaceDetails';

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.loadDetails = this.loadDetails.bind(this)
    }
    loadDetails() {
        axios.get(`http://127.0.0.1:8000/user/individualplace?place_id=${this.props.data.place_id}`)
            .then((response) => {
                this.props.fetchDetails(response.data)
            })
    }
    render() {
        return (
            <React.Fragment>
                <Card className="mb-4">
                    {this.props.data.name ? <div className="bg-success p-3 mb-3"><h2>{this.props.data.name}</h2></div> : undefined}
                    <ul className="list-group list-group-flush list-unstyled">
                        {this.props.data.open_now ? <li className="list-group-item">{this.props.data.open_now.open_now ? <React.Fragment><span className="font-weight-bold w-25 d-inline-block">Open Now</span>Open</React.Fragment> : <React.Fragment><span className="font-weight-bold w-25">Open Now:</span>Closed</React.Fragment>}</li> : <React.Fragment><span className="font-weight-bold">Open Now:</span>No Information Available</React.Fragment>}
                        {this.props.data.price_level ? <li className="list-group-item"><span className="font-weight-bold w-25">Affordability:</span>{this.props.compute(this.props.data.price_level)}</li> : <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Affordability:</span>No Information Available</li>}
                        {this.props.data.rating ? <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>{this.props.data.rating}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>No Ratings Yet</li>}
                        {this.props.data.user_ratings_total ? <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>{this.props.data.user_ratings_total}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>No One Rated Yet</li>}
                    </ul>
                    {this.props.isLoading ? <Button onClick={this.loadDetails}>Show More</Button> : <PlaceDetails />}
                </Card>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.locationDetails)
    if (state.locationDetails.isLoading) {
        return {
            isLoading: true
        }
    }
    return {
        isLoading: false,
        data: state.locationDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (data) => dispatch({ type: 'INFO_LOADED', data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)