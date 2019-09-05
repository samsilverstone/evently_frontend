import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { nearby } from '../actions/maps';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "Location": "",
            "Category": "restaurant",
            "Feature": "prominent"
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.nearby(this.state.Location, this.state.Category, this.state.Feature)
        this.props.history.push("/results")
    }
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="location_search p-3">
                        <input
                            placeholder="Where are you now?"
                            className="form-control form-control-lg"
                            onChange={e => (this.setState({
                                "Location": e.target.value
                            }))}
                            required
                        />

                        <Input
                            type="select"
                            name="selectMulti"
                            id="categories"
                            className="mt-3 form-control-lg"
                            onChange={e => (this.setState({ "Category": e.target.value }))}>
                            <option value="restaurant">Restaurant</option>
                            <option value="hospital">Hospital</option>
                            <option value="hotel">Hotel</option>
                            <option value="Bars and pubs">Bars and Pubs</option>
                            <option value="amusement park">Amusement Park</option>
                        </Input>

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