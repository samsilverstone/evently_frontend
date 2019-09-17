import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import Loader from './loader';
import axios from 'axios';
import InfiniteLoader from 'react-infinite-loader'
import { persistor } from '../combinereducers'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
        this.affordable = this.affordable.bind(this)
        this.loadData = this.loadData.bind(this)
        this.resetStore = this.resetStore.bind(this)
    }

    resetStore(e) {
        console.log("Results-------->", e)
        persistor.purge()
        this.props.reset()
    }

    componentDidMount() {
        console.log("Results component Mounted")
    }

    componentWillUnmount() {
        window.onpopstate = this.resetStore
        console.log("Result component Unmounted")
    }

    loadData() {
        console.log(this.props.next_page_token)
        this.setState({ isLoading: true }, () => {
            if (this.props.next_page_token !== null) {
                axios.get(`http://127.0.0.1:8000/user/nextpagedetail/?next_page_token=${this.props.next_page_token}`)
                    .then((response) => {
                        this.props.loadData(response.data)
                        this.setState({ isLoading: false })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
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
            return <Loader />
        }
        return (
            <React.Fragment>
                <div className="result">
                    {this.props.nearbydata.length > 0 ? this.props.nearbydata.map((item, index) => <Result key={index} data={item} origin={this.props.origin} serial={index + 1} compute={this.affordable} />) : undefined}
                    <InfiniteLoader onVisited={() => this.loadData()} />
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state, ownprops) => {
    console.log(state)
    if (state.location.isLoading) {
        return {
            isLoading: state.location.isLoading
        }
    }
    return {
        nearbydata: state.location.nearbyData,
        isLoading: state.location.isLoading,
        next_page_token: state.location.next_page_token,
        origin: state.location.origin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (fetchedData) => dispatch({ type: 'NEXT_PAGE_DATA', data: fetchedData }),
        reset: () => dispatch({ type: 'RESET' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)