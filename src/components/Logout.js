import React from 'react';
import { signout } from '../actions/auth';
import { connect } from "react-redux";

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout() {
        console.log("logout")
        this.props.signmeout()
    }
    render() {
        return (
            <button className="btn btn-success" onClick={this.logout}>Logout</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signmeout: () => dispatch(signout())
})

export default connect(undefined, mapDispatchToProps)(Logout)