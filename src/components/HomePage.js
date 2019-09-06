import React from 'react';
import Header from './Header';
import Logout from './Logout';
import { connect } from 'react-redux';
// import Geolocation from 'react-geolocation';
import Demo from './geolocation';

class HomePage extends React.Component {

    render() {
        console.log(this.props.coords)
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

export default connect(mapStateToProps)(HomePage)

