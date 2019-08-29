import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-redux';
import Result from './Result';

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
        this.affordable = this.affordable.bind(this)
    }
    affordable(data) {
        if (data === 0 || data === 1) {
            return 'Cheap'
        } else if (data === 2 || data === 3) {
            return 'Affordable'
        } else {
            return 'Expensive'
        }
    }

    render() {
        if (this.props.isLoading) {
            return <h1>Hello</h1>
        }
        return (
            <React.Fragment>
                <div className="result">
                    {this.props.nearbydata.length > 0 ? this.props.nearbydata.map((item, index) => <Result key={index} data={item} serial={index + 1} compute={this.affordable} />) : undefined}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    if (state.location.isLoading) {
        return {
            isLoading: state.location.isLoading
        }
    }
    return {
        nearbydata: state.location.nearbyData,
        isLoading: state.location.isLoading
    }
}

export default connect(mapStateToProps)(Results)