import React from 'react';
import Location from './Location';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header_wrap">
                <div className="mainpage w-100 h-100">
                    <div className="d-flex flex-wrap align-content-around w-100 h-100 justify-content-center">
                        <h2 className="text-center heading">Find The Best Place In Your City</h2>
                        <Location />
                    </div>
                </div>
            </div>
        )
    }
}