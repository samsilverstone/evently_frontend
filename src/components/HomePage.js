import React from 'react';
import Header from './Header';
import Logout from './Logout';
import Location from './Location';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Location />
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

export default connect(mapStateToProps)(HomePage)

