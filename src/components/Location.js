import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { nearby } from '../actions/maps';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import SelectSearch from 'react-select-search'


class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "Location": "",
            "Category": "restaurant",
            "Feature": "prominent"
        }
        this.options = [
            { name: 'Swedish', value: 'sv' },
            { name: 'English', value: 'en' },
            {
                type: 'group',
                name: 'Group name',
                items: [
                    { name: 'Spanish', value: 'es' },
                ]
            },
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

    }

    onSubmit(e) {
        e.preventDefault()
        this.props.nearby(this.state.Location, this.state.Category, this.state.Feature)
        this.props.history.push("/results")
    }
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit} className="PlaceSearch">
                    <FormGroup className="location_search p-3">
                        <div className="position-relative">
                            <input
                                placeholder="Where are you now?"
                                className="form-control form-control-lg"
                                onChange={e => (this.setState({
                                    "Location": e.target.value
                                }))}
                                required
                            />
                            <span className="icon_container"><i class="fa fa-map-marker" onClick={this.getLocation}></i></span>
                        </div>

                        <SelectSearch options={this.options} height="0" value="sv" name="language" placeholder="Choose your language" />

                        <Input
                            type="select"
                            name="selectFeature"
                            id="features"
                            className="mt-3 form-control-lg"
                            onChange={e => (this.setState({ "Feature": e.target.value }))}>
                            <option value="prominent">Prominent</option>
                            <option value="nearby">Nearby</option>
                        </Input>

                        <Button className="btn btn-lg mt-3 btn-success">
                            <span><i className="fa fa-search mr-1" aria-hidden="true" /></span>Search
                        </Button>

                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    nearby: (category, location, feature) => dispatch(nearby(category, location, feature))
})

export default withRouter(connect(null, mapDispatchToProps)(Location))