import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { nearby } from '../actions/maps';
import { connect } from 'react-redux';

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "Location": "",
            "Category": "restaurant",
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.nearby(this.state.Location, this.state.Category)
    }
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="location_search p-3">
                        <Input
                            placeholder="What are you looking for?"
                            className="form-control"
                            onChange={e => (this.setState({
                                "Location": e.target.value
                            }))} />
                        <Input
                            type="select"
                            name="selectMulti"
                            id="categories"
                            placeholder="Categories"
                            className="mt-3" onChange={e => (this.setState({ "Category": e.target.value }))}>
                            <option value="restaurant">Restaurant</option>
                            <option value="hospital">Hospital</option>
                            <option value="hotel">Hotel</option>
                            <option value="Bars and pubs">Bars and Pubs</option>
                            <option value="amusement park">Amusement Park</option>
                        </Input>
                        <Button className="btn btn-md mt-3 btn-success">
                            <span><i className="fa fa-search mr-1" aria-hidden="true" /></span>Search
                        </Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    nearby: (category, location) => dispatch(nearby(category, location))
})

export default connect(null, mapDispatchToProps)(Location)