import React from 'react';
import Header from './Header';
import Logout from './Logout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
        console.log("homepage")
        return (
            <React.Fragment>
                <Header />
                {this.props.isAuthenticated && <Logout />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps)(HomePage))

