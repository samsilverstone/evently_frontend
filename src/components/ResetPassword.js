import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { resetPassword } from '../actions/auth';

class ResetPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'oldpassword': "",
            'newpassword': "",
            'newpassword2': ""
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        const { 'oldpassword': Old_Password, 'newpassword': New_Password, 'newpassword2': New_Password2 } = this.state
        this.props.resetPassword(Old_Password, New_Password, New_Password2)
    }
    render() {
        return (
            <Form className="resetpass" onSubmit={this.onSubmit}>
                <h1 className="text-center font-weight-bold">Reset Password</h1>
                <FormGroup className="mt-5">
                    <Label>Old Password</Label>
                    <Input
                        type="password"
                        onChange={e => this.setState({ oldpassword: e.target.value })} />
                    {this.props.errors.length > 0 && (
                        <div>
                            {this.props.errors.map(errors => (
                                errors.field === 'old_password' ? <p key={errors.field} className="">{errors.message}</p> : ''))}
                        </div>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>New Password</Label>
                    <Input
                        type="password"
                        onChange={e => this.setState({ newpassword: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                        type="password"
                        onChange={e => this.setState({ newpassword2: e.target.value })} />
                    {this.props.errors.length > 0 && (
                        <div>
                            {this.props.errors.map(error => (
                                error.field === "non_field_errors" ? <p>{error.message}</p> : ''
                            ))}
                        </div>
                    )}
                </FormGroup>
                <Button className="btn btn-block btn-lg btn-success">Submit</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    let errors = []
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return { field, message: state.auth.errors[field] }
        })
    }
    console.log(errors)
    return {
        errors
    }
}

export default connect(mapStateToProps, { resetPassword })(ResetPassword)