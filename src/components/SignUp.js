import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'username': "",
            'email': "",
            'password': "",
            'password2': ""
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        const { username, email, password, password2 } = this.state
        this.props.register(username, email, password, password2)
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <Form className="signuppage p-3 bg-grey" onSubmit={this.onSubmit}>
                <h1 className="text-center font-weight-bold">Sign Up</h1>
                <FormGroup>
                    <Input type="text"
                        placeholder="Username"
                        className="mt-4 form-control-lg"
                        onChange={e => this.setState({ username: e.target.value })} />
                    {this.props.errors.length > 0 && (
                        <div>
                            {this.props.errors.map(error => (
                                error.field == "username" ? <p className="mt-3">{error.message}</p> : ''
                            ))}
                        </div>
                    )}
                    <Input type="email"
                        placeholder="abc@example.com"
                        className="mt-4 form-control-lg"
                        onChange={e => this.setState({
                            email: e.target.value
                        })} />
                    {this.props.errors.length > 0 && (
                        <div>
                            {this.props.errors.map(error => (
                                error.field === 'email' ? <p className="mt-3">{error.message}</p> : ''
                            ))}
                        </div>
                    )}
                    <Input
                        type="password"
                        placeholder="Password"
                        className="mt-4 form-control-lg"
                        onChange={e => this.setState({ password: e.target.value })} />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        className="mt-4 form-control-lg"
                        onChange={e => this.setState({ password2: e.target.value })} />
                </FormGroup>
                <div className="down">
                    <div className="ml-3">
                        <input type="checkbox" />
                        <span className="remember">Remember Me</span>
                    </div>
                    <div className="forgotPass mr-3"><Link to="/passreset">Forgot Password?</Link></div>
                </div>
                <Button className="mt-3 btn-block b btn-lg" color="success">Register</Button>
            </Form >
        )
    }
}

const mapStateToProps = state => {
    let errors = []
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return { field, message: state.auth.errors[field] }
        })
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    }
}


export default connect(mapStateToProps, { register })(SignUp);