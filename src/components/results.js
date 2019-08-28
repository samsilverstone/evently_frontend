import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import { Redirect } from 'react-redux';

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }
    render() {
        console.log("====>", this.props.isLoading)
        if (this.props.isLoading) {
            return <h1>Hello</h1>
        }
        return (
            <React.Fragment>
                <div className="container">
                    // {this.props.nearbyData.length > 0 ? <p>hello</p> : <p>bye</p>}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    console.log(state.location.isLoading)
    return {
        nearbydata: state.location.nearbyData,
        isLoading: state.location.isLoading
    }
}

export default connect(mapStateToProps)(Result)