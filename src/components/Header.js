import React from 'react';
import Location from './Location';

export default class Header extends React.Component {
    render() {
        return (
            <div className="jarallax h-100 " data-jarallax-video="https://youtu.be/y1Alop4LhYI">
                <div className="mainpage d-flex flex-wrap align-content-center w-100 h-100 justify-content-center">
                    <h2 className="text-center heading">Find The Best Place In Your City</h2>
                    <Location />
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div className="list-items mb-30 btn-anim">
                            <div className="icon-box">
                                <i />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}