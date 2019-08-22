import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from '../actions/auth';


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'username': "",
            'password': ""
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        const { username, password } = this.state
        this.props.login(username, password)
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <Form className="login" onSubmit={this.onSubmit}>
                <h1 className="text-center">
                    <span className="font-weight-bold ">Login</span>
                </h1>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="text"
                        placeholder="email or username"
                        onChange={e => this.setState({ username: e.target.value })} />

                    {this.props.errors.length > 0 && (
                        <div>
                            {this.props.errors.map(error => (
                                error.field == "user" ? <p className="mt-3">{error.message}</p> : ''
                            ))}
                        </div>
                    )}

                    <Label className="mt-3">Password</Label>

                    <Input type="password"
                        placeholder="Password"
                        onChange={e => this.setState({ password: e.target.value })} />

                    {
                        this.props.errors.length > 0 && (
                            <div>
                                {this.props.errors.map(error => (
                                    error.field == "password" ? <p className="mt-3">{error.message}</p> : ''
                                ))}
                            </div>
                        )
                    }

                </FormGroup>

                <Button color="success" block className="btn-lg mt-4" >Log In</Button>

                <p className="noaccount text-center mt-4">
                    Dont have an account? <Link to="/signup">Register</Link>
                </p>
                <div className="text-center mt-3 social">Or continue with your social account</div>
                <FacebookLoginButton className="mt-3 mb-3" />
                <div className="text-center signup">
                    <a href="/sign-up">Sign up</a>
                    <span className="p-2">|</span>
                    <a href="/sign-up">Forgot Password</a>
                </div>
            </Form>
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

export default connect(mapStateToProps, { login })(LoginPage)