import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "Location": "",
            "Category": ""
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.Category)
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
                            <option value="Restaurant">Restaurant</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Bars and Pubs">Bars and Pubs</option>
                            <option value="Amusement Park">Amusement Park</option>
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