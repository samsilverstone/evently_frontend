import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ForgotPass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'username': ""
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()

    }
    render() {
        return (
            <Form className="passreset p-3" onSubmit={this.onSubmit}>
                <FormGroup>
                    <h2>Find Your Account</h2>
                    <p>Please enter your email address or username to search for your account</p>
                    <Input
                        type="text"
                        className="form-control"
                        placeholder="Username or email"
                        onChange={e => (this.setState({ username: e.target.value }))} />
                </FormGroup>

                <Button className="btn-lg btn-block mt-3" color="success">Submit</Button>
            </Form>
        )
    }
}