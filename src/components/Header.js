import React from 'react';
import Location from './Location';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header jarallax h-100 " data-jarallax-video="https://youtu.be/y1Alop4LhYI">
                <div className="container mainpage">
                    <h2 className="text-center heading">Find The Best Place In Your City</h2>
                    <Location />
                </div>
                <div className="mb-4">
                    <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    
                    </div>
                    </div>
                </div>  
            </div>
        )
    }
}