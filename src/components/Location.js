import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { nearby } from '../actions/maps';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import SelectSearch from 'react-select-search';
import axios from 'axios';

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "Location": "",
            "Category": "restaurant",
            "Feature": "prominent"
        }
        this.options = [
            { name: 'Restaurant', value: 'restaurant' },
            { name: 'Hospital', value: 'hospital' },
            { name: 'Accounting', value: 'accounting' },
            { name: 'Airport', value: 'airport' },
            { name: 'Amusement Park', value: 'amusement_park' },
            { name: 'Aquarium', value: 'aquarium' },
            { name: 'Art Gallery', value: 'art_gallery' },
            { name: 'ATM', value: 'atm' },
            { name: 'Bakery', value: 'bakery' },
            { name: 'Bank', value: 'bank' },
            { name: 'Bar', value: 'bar' },
            { name: 'Beauty Salon', value: 'beauty_salon' },
            { name: 'Bicycle Store', value: 'bicycle_store' },
            { name: 'Book Store', value: 'book_store' },
            { name: 'Bowling Alley', value: 'bowling_alley' },
            { name: 'Bus Station', value: 'bus_station' },
            { name: 'Cafe', value: 'cafe' },
            { name: 'Campground', value: 'campground' },
            { name: 'Car Dealer', value: 'car_dealer' },
            { name: 'Car Rental', value: 'car_rental' },
            { name: 'Car Repair', value: 'car_reaper' },
            { name: 'Car Wash', value: 'car_wash' },
            { name: 'Casino', value: 'casino' },
            { name: 'Cemetry', value: 'cemetry' },
            { name: 'Church', value: 'church' },
            { name: 'City Hall', value: 'city_hall' },
            { name: 'Clothing Store', value: 'clothing_store' },
            { name: 'Convenience Store', value: 'convenience_store' },
            { name: 'Courthouse', value: 'courthouse' },
            { name: 'Dentist', value: 'dentist' },
            { name: 'Department Store', value: 'department_store' },
            { name: 'Doctor', value: 'doctor' },
            { name: 'Electrician', value: 'electrician' },
            { name: 'Electronics Store', value: 'electronics_store' },
            { name: 'Embassy', value: 'embassy' },
            { name: 'Fire Station', value: 'fire_station' },
            { name: 'Florist', value: 'florist' },
            { name: 'Funeral Home', value: 'funeral_home' },
            { name: 'Furniture Store', value: 'furniture_store' },
            { name: 'Gas Station', value: 'gas_station' },
            { name: 'Gym', value: 'gym' },
            { name: 'Hair Care', value: 'hair_care' },
            { name: 'Hardware Store', value: 'hardware store' },
            { name: 'Hindu Temple', value: 'hindu_temple' },
            { name: 'Home Goods Store', value: 'home_goods_store' },
            { name: 'Hotel', value: 'hotel' },
            { name: 'Insurance Agency', value: 'insurance_agency' },
            { name: 'Jewelry Store', value: 'jewelry_store' },
            { name: 'Laundry', value: 'laundry' },
            { name: 'Lawyer', value: 'lawyer' },
            { name: 'Library', value: 'library' },
            { name: 'Liquor Store', value: 'liquor_store' },
            { name: 'Local Government Office', value: 'local_government_office' },
            { name: 'Locksmith', value: 'locksmith' },
            { name: 'Lodging', value: 'lodging' },
            { name: 'Meal Delivery', value: 'meal_delivery' },
            { name: 'Meal Takeaway', value: 'meal_takeaway' },
            { name: 'Mosque', value: 'mosque' },
            { name: 'Movie Rental', value: 'movie_rental' },
            { name: 'Movie Theater', value: 'movie_theater' },
            { name: 'Moving Company', value: 'moving_company' },
            { name: 'Museum', value: 'museum' },
            { name: 'Night Club', value: 'night_club' },
            { name: 'Painter', value: 'painter' },
            { name: 'Park', value: 'park' },
            { name: 'Parking', value: 'parking' },
            { name: 'Pet Store', value: 'pet_store' },
            { name: 'Pharmacy', value: 'pharmacy' },
            { name: 'Physiotherapist', value: 'physiotherapist' },
            { name: 'Plumber', value: 'plumber' },
            { name: 'Police', value: 'police' },
            { name: 'Post Office', value: 'post_office' },
            { name: 'Real Estate Agency', value: 'real_estate_agency' },
            { name: 'Roofing Contractor', value: 'roofing_contractor' },
            { name: 'Rv Park', value: 'rv_park' },
            { name: 'School', value: 'school' },
            { name: 'Shoe Store', value: 'shoe_store' },
            { name: 'Shopping Mall', value: 'shopping_mall' },
            { name: 'Spa', value: 'spa' },
            { name: 'Stadium', value: 'stadium' },
            { name: 'Storage', value: 'storage' },
            { name: 'Store', value: 'store' },
            { name: 'Subway Station', value: 'subway_station' },
            { name: 'Supermarket', value: 'supermarket' },
            { name: 'Synagogue', value: 'synagogue' },
            { name: 'Taxi Stand', value: 'taxi_stand' },
            { name: 'Train Station', value: 'train_station' },
            { name: 'Transit Station', value: 'transit_station' },
            { name: 'Travel Agency', value: 'travel_agency' },
            { name: 'Veterinary Care', value: 'veterinary_care' },
            { name: 'Zoo', value: 'zoo' },
        ];
        this.onSubmit = this.onSubmit.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.showPosition = this.showPosition.bind(this)

    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition)
        }
    }
    showPosition(position) {
        Location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        this.props.nearby(Location, this.state.Category, this.state.Feature)
        this.props.history.push("/results")
    }

    onSubmit(e) {
        e.preventDefault()
        console.log("running")
        this.props.nearby(this.state.Location, this.state.Category, this.state.Feature)
        // this.props.history.push("/results")
        return <Redirect to="/results"/>
    }
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit} className="PlaceSearch">
                    <FormGroup className="location_search p-3">
                        <div className="row m-0 p-0">
                            <div className="col-sm-4 mb-3 m-0 p-0 pr-3">
                                <div className="position-relative">
                                    <input
                                        placeholder="Enter Location"
                                        className="form-control form-control-lg locate"
                                        onChange={e => (this.setState({
                                            "Location": e.target.value
                                        }))}
                                        required
                                    />
                                    <span className="icon_container"><i className="fa fa-map-marker" onClick={this.getLocation}></i></span>
                                </div>
                            </div>

                            <div className="col-sm-3 mb-3 m-0 p-0 pr-3">
                                <SelectSearch
                                    options={this.options}
                                    className='select-search-box'
                                    height="100"
                                    value={this.state.Category}
                                    name="language"
                                    placeholder="Category"
                                    onChange={(value, state, props) => {
                                        console.log(value.value)
                                        this.setState({ Category: value.value })
                                    }}
                                />
                            </div>

                            <div className="col-sm-3 mb-3 m-0 p-0 pr-3">
                                <Input
                                    type="select"
                                    name="selectFeature"
                                    id="features"
                                    className="form-control-lg types"
                                    onChange={e => (this.setState({ "Feature": e.target.value }))}>
                                    <option value="prominent">Prominent</option>
                                    <option value="nearby">Nearby</option>
                                </Input>
                            </div>

                            <div className="col-sm-2 m-0 p-0">
                                <button className="button">
                                    <span><i className="fa fa-search mr-3" aria-hidden="true" /></span>Search
                            </button>
                            </div>
                        </div>
                    </FormGroup>
                </Form>
                <div className="d-flex align-content-stretch flex-wrap justify-content-center titles">
                    <div>
                        <div className="list-items m-3">
                            <div className="icon-box">
                                <i className="fa fa-building icon" aria-hidden="true"></i>
                            </div>
                            <h5>Hotels</h5>
                        </div>
                    </div>

                    <div>
                        <div className="list-items m-3">
                            <div className="icon-box">
                                <i className="fas fa-spa icon"></i>
                            </div>
                            <h5>Beauty & Spa</h5>
                        </div>
                    </div>

                    <div>
                        <div className="list-items m-3"><div className="icon-box">
                            <i className="fas fa-glass-cheers icon"></i>
                        </div>
                            <h5>Nightlife</h5></div>
                    </div>

                    <div >
                        <div className="list-items m-3"><div className="icon-box">
                            <i className="fas fa-utensils icon"></i>
                        </div>
                            <h5>Restaurant</h5></div>
                    </div>

                    <div>
                        <div className="list-items m-3"><div className="icon-box">
                            <i className="fas fa-shopping-bag icon"></i>
                        </div>
                            <h5>Shopping</h5>
                        </div>
                    </div>

                    <div>
                        <div className="list-items m-3">
                            <div className="icon-box">
                                <i className="fas fa-tshirt icon"></i>
                            </div>
                            <h5>Clothing Store</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    nearby: (category, location, feature) => dispatch(nearby(category, location, feature))
})

export default withRouter(connect(null, mapDispatchToProps)(Location))